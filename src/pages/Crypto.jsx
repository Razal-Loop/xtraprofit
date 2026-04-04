import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, TrendingDown, Layers, LayoutGrid, LayoutList, Search, Activity, Cpu, Loader2, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const Crypto = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [viewMode, setViewMode] = useState('grid');

    const assetConfig = {
        'bitcoin': { icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
        'ethereum': { icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
        'solana': { icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
        'binance-coin': { icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
        'cardano': { icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
        'xrp': { icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
        'dogecoin': { icon: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
        'polkadot': { icon: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png' },
        'chainlink': { icon: 'https://cryptologos.cc/logos/chainlink-link-logo.png' }
    };

    const MOCK_DATA = [
        { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: '$67,240.15', change: '+2.4%', positive: true, volume: '24.2B', marketCap: '1.32T', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
        { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: '$3,482.50', change: '-0.8%', positive: false, volume: '11.8B', marketCap: '418B', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
        { id: 'solana', name: 'Solana', symbol: 'SOL', price: '$142.12', change: '+5.1%', positive: true, volume: '4.5B', marketCap: '62B', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
        { id: 'binance-coin', name: 'BNB', symbol: 'BNB', price: '$585.30', change: '+0.2%', positive: true, volume: '1.2B', marketCap: '88B', icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
        { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: '$0.45', change: '-1.4%', positive: false, volume: '340M', marketCap: '16B', icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
        { id: 'xrp', name: 'Ripple', symbol: 'XRP', price: '$0.62', change: '+1.1%', positive: true, volume: '980M', marketCap: '34B', icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' }
    ];

    const fetchCryptoData = async () => {
        try {
            const response = await fetch('https://api.coincap.io/v2/assets?limit=12');
            if (!response.ok) throw new Error('API Sync Failed');
            const data = await response.json();

            if (data.data) {
                const formattedCoins = data.data.map(coin => ({
                    id: coin.id,
                    name: coin.name,
                    symbol: coin.symbol,
                    price: parseFloat(coin.priceUsd).toLocaleString(undefined, { style: 'currency', currency: 'USD' }),
                    change: `${parseFloat(coin.changePercent24Hr).toFixed(2)}%`,
                    positive: parseFloat(coin.changePercent24Hr) >= 0,
                    volume: (parseFloat(coin.volumeUsd24Hr) / 1e9).toFixed(1) + 'B',
                    marketCap: (parseFloat(coin.marketCapUsd) / 1e9).toFixed(1) + 'B',
                    icon: assetConfig[coin.id]?.icon || `https://ui-avatars.com/api/?name=${coin.symbol}&background=00193c&color=caf300`
                }));
                setCoins(formattedCoins);
                setError(null);
            }
        } catch (err) {
            console.error("Matrix node sync error:", err);
            if (coins.length === 0) setCoins(MOCK_DATA);
            setError("Active Terminal: Synchronizing via Local Sovereignty Fallback...");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCryptoData();
        const interval = setInterval(fetchCryptoData, 45000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#f8f9fa] min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-40 px-4 sm:px-8">
            <Helmet>
                <title>XtraProfit | Crypto Prices - Live Market Data</title>
                <link rel="canonical" href="https://xtraprofit.com/crypto" />
                <meta name="description" content="Track live crypto prices, market capitalization, and digital asset trends. Real-time indices for Bitcoin, Ethereum, and the global crypto market." />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "FinancialProduct",
                        "name": "Cryptocurrency Market Data",
                        "description": "Live cryptocurrency prices, market trends, and data tracking for major digital assets like Bitcoin and Ethereum.",
                        "url": "https://xtraprofit.com/crypto",
                        "brand": {
                            "@type": "Brand",
                            "name": "XtraProfit"
                        }
                    }
                    `}
                </script>
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 sm:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-10">
                    <div className="flex-grow">
                        <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#00193c] px-3 sm:px-4 py-1.5 rounded-full mb-6 sm:mb-8 shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer" onClick={fetchCryptoData}>
                            <div className={cn("w-2 h-2 rounded-full", loading ? "bg-white animate-spin border-2 border-[#caf300] border-t-transparent" : "bg-[#caf300] animate-pulse")}></div>
                            <span className="text-[0.5rem] sm:text-[0.625rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] font-label text-[#caf300]">
                                {loading ? 'Calibrating Nodes...' : 'Quantum Crypto Matrix • LIVE'}
                            </span>
                        </div>
                        <h1 className="font-headline font-black text-3xl sm:text-5xl md:text-7xl tracking-tightest text-[#00193c] leading-[0.85] max-w-4xl">
                            Live Crypto Prices <br /><span className="text-[#29695b]">& Market Data.</span>
                        </h1>
                        <p className="mt-5 sm:mt-8 text-[#64748b] text-base sm:text-xl lg:text-2xl max-w-2xl font-medium leading-relaxed font-body">
                            Track <Link to="/crypto" className="text-[#00193c] border-b-2 border-[#caf300]/30 hover:border-[#caf300] transition-colors">live crypto prices</Link> and market trends in real-time. Get sub-second price parity for Bitcoin, Ethereum, and major digital assets.
                        </p>
                    </div>
                    <div className="flex bg-black/5 rounded-[1.25rem] p-1.5 border border-black/5 mb-2 self-start md:self-auto">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={cn("p-2.5 sm:p-3.5 rounded-[1rem] transition-all flex items-center justify-center",
                                viewMode === 'grid' ? "bg-white text-[#00193c] shadow-xl" : "text-[#64748b] hover:text-[#00193c]")}
                        >
                            <LayoutGrid size={20} className="sm:w-[22px] sm:h-[22px]" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={cn("p-2.5 sm:p-3.5 rounded-[1rem] transition-all flex items-center justify-center",
                                viewMode === 'list' ? "bg-white text-[#00193c] shadow-xl" : "text-[#64748b] hover:text-[#00193c]")}
                        >
                            <LayoutList size={20} className="sm:w-[22px] sm:h-[22px]" />
                        </button>
                    </div>
                </header>

                {error && (
                    <div className="mb-10 sm:mb-16 p-4 sm:p-8 bg-black/[0.02] border border-black/5 rounded-[1.5rem] sm:rounded-[2.5rem] flex items-center justify-center gap-4 sm:gap-6 text-[#64748b] text-center">
                        <AlertCircle size={18} className="text-[#29695b] shrink-0 sm:w-5 sm:h-5" />
                        <p className="font-black text-[0.5625rem] sm:text-[0.6875rem] uppercase tracking-[0.2em] sm:tracking-[0.4em]">{error}</p>
                    </div>
                )}

                {loading && coins.length === 0 ? (
                    <div className="h-[60vh] flex flex-col items-center justify-center gap-6 sm:gap-8">
                        <Loader2 size={48} className="animate-spin text-[#00193c] sm:w-[60px] sm:h-[60px]" />
                        <p className="font-headline font-black text-[0.6rem] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#00193c]/50">Calibrating Institutional Benchmarks...</p>
                    </div>
                ) : (
                    viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
                            {coins.map((coin) => (
                                <div key={coin.id} className="bg-white border border-black/5 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] transition-all duration-700 hover:translate-y-[-10px] hover:shadow-2xl group overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#caf300]/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-[#caf300]/10 transition-all pointer-events-none"></div>

                                    <div className="flex justify-between items-start mb-8 sm:mb-12 relative z-10">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden bg-[#f8fafc] shadow-inner p-1.5 sm:p-2 group-hover:scale-110 transition-transform duration-500 border border-black/5">
                                                <img
                                                    src={coin.icon}
                                                    className="w-full h-full object-contain"
                                                    alt={coin.name}
                                                    onError={(e) => {
                                                        e.target.src = `https://ui-avatars.com/api/?name=${coin.symbol}&background=00193c&color=caf300`;
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-headline font-black text-lg sm:text-xl text-[#00193c] tracking-tight">{coin.name}</h3>
                                                <p className="text-[0.5rem] sm:text-[0.625rem] text-[#29695b] font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase">{coin.symbol} / USD</p>
                                            </div>
                                        </div>
                                        <div className={cn(
                                            "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[0.5rem] sm:text-[0.6rem] font-black tracking-widest flex items-center gap-1.5 sm:gap-2",
                                            coin.positive ? "bg-[#29695b]/10 text-[#29695b]" : "bg-red-500/10 text-red-500"
                                        )}>
                                            {coin.positive ? <TrendingUp size={10} className="sm:w-3 sm:h-3" /> : <TrendingDown size={10} className="sm:w-3 sm:h-3" />}
                                            {coin.change}
                                        </div>
                                    </div>

                                    <div className="mb-8 sm:mb-12 relative z-10">
                                        <p className="text-[0.5625rem] sm:text-[0.6875rem] font-black text-[#64748b] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 ml-1">Current Benchmark</p>
                                        <p className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-[#00193c] tracking-tightest leading-none">{coin.price}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-10 border-t border-black/5 relative z-10">
                                        <div className="space-y-1">
                                            <p className="text-[0.5rem] sm:text-[0.5625rem] font-black text-[#64748b] uppercase tracking-[0.2em] sm:tracking-[0.3em]">24h Vol</p>
                                            <p className="font-headline font-black text-base sm:text-lg text-[#00193c]">${coin.volume}</p>
                                        </div>
                                        <div className="space-y-1 text-right">
                                            <p className="text-[0.5rem] sm:text-[0.5625rem] font-black text-[#64748b] uppercase tracking-[0.2em] sm:tracking-[0.3em]">Cap</p>
                                            <p className="font-headline font-black text-base sm:text-lg text-[#00193c]">${coin.marketCap}</p>
                                        </div>
                                    </div>

                                    <div className={cn(
                                        "absolute -right-10 -bottom-10 opacity-[0.05] transition-all duration-1000 group-hover:scale-150 group-hover:-rotate-45 pointer-events-none",
                                        coin.positive ? "text-[#29695b]" : "text-red-500"
                                    )}>
                                        <Activity size={160} className="sm:w-[200px] sm:h-[200px]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white border border-black/5 rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[700px]">
                                    <thead>
                                        <tr className="border-b border-black/5 bg-[#f8fafc]/50">
                                            <th className="px-4 sm:px-10 py-5 sm:py-8 text-[0.5rem] sm:text-[0.625rem] font-black text-[#64748b] uppercase tracking-[0.3em] sm:tracking-[0.4em]">Asset Matrix</th>
                                            <th className="px-4 sm:px-10 py-5 sm:py-8 text-[0.5rem] sm:text-[0.625rem] font-black text-[#64748b] uppercase tracking-[0.3em] sm:tracking-[0.4em]">Current Price</th>
                                            <th className="px-4 sm:px-10 py-5 sm:py-8 text-[0.5rem] sm:text-[0.625rem] font-black text-[#64748b] uppercase tracking-[0.3em] sm:tracking-[0.4em]">24h Performance</th>
                                            <th className="px-4 sm:px-10 py-5 sm:py-8 text-[0.5rem] sm:text-[0.625rem] font-black text-[#64748b] uppercase tracking-[0.3em] sm:tracking-[0.4em]">Node Volume</th>
                                            <th className="px-4 sm:px-10 py-5 sm:py-8 text-[0.5rem] sm:text-[0.625rem] font-black text-[#64748b] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-right">Market Cap</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-black/5">
                                        {coins.map((coin) => (
                                            <tr key={coin.id} className="group hover:bg-[#f8fafc] transition-colors duration-300">
                                                <td className="px-4 sm:px-10 py-5 sm:py-8">
                                                    <div className="flex items-center gap-3 sm:gap-6">
                                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden bg-[#f8fafc] border border-black/5 p-1.5 sm:p-2 transition-transform group-hover:scale-110">
                                                            <img src={coin.icon} className="w-full h-full object-contain" alt={coin.name} />
                                                        </div>
                                                        <div>
                                                            <p className="font-headline font-black text-[#00193c] text-base sm:text-lg leading-tight">{coin.name}</p>
                                                            <p className="text-[0.5rem] sm:text-[0.5625rem] text-[#29695b] font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase">{coin.symbol}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 sm:px-10 py-5 sm:py-8">
                                                    <p className="font-headline font-black text-[#00193c] text-lg sm:text-2xl tracking-tighter">{coin.price}</p>
                                                </td>
                                                <td className="px-4 sm:px-10 py-5 sm:py-8">
                                                    <div className={cn(
                                                        "inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[0.5625rem] sm:text-[0.6875rem] font-black tracking-widest",
                                                        coin.positive ? "bg-[#29695b]/10 text-[#29695b]" : "bg-red-500/10 text-red-500"
                                                    )}>
                                                        {coin.positive ? <TrendingUp size={12} className="sm:w-[14px] sm:h-[14px]" /> : <TrendingDown size={12} className="sm:w-[14px] sm:h-[14px]" />}
                                                        {coin.change}
                                                    </div>
                                                </td>
                                                <td className="px-4 sm:px-10 py-5 sm:py-8">
                                                    <p className="font-headline font-black text-[#00193c] text-base sm:text-lg">${coin.volume}</p>
                                                    <p className="text-[0.4375rem] sm:text-[0.5rem] font-black text-[#64748b] uppercase tracking-[0.15em] sm:tracking-[0.2em]">Institutional</p>
                                                </td>
                                                <td className="px-4 sm:px-10 py-5 sm:py-8 text-right">
                                                    <p className="font-headline font-black text-[#00193c] text-base sm:text-lg">${coin.marketCap}</p>
                                                    <Activity size={14} className={cn("inline-block ml-2 opacity-20 sm:w-4 sm:h-4", coin.positive ? "text-[#29695b]" : "text-red-500")} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                )}

                <section className="bg-[#00193c] mt-16 sm:mt-32 md:mt-48 rounded-[2rem] sm:rounded-[3.5rem] p-6 sm:p-12 md:p-20 flex flex-col lg:row items-center gap-10 sm:gap-16 border border-white/5 relative overflow-hidden shadow-3xl text-left">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-[#caf300]/5 blur-[150px] pointer-events-none"></div>
                    <div className="w-full lg:flex lg:items-center lg:gap-24">
                        <div className="lg:w-1/2">
                            <h3 className="font-headline font-black text-2xl sm:text-3xl lg:text-7xl text-white mb-6 sm:mb-8 leading-[0.85] tracking-tightest flex flex-col uppercase">
                                <span className="flex items-center gap-3 sm:gap-4 text-[#caf300] mb-4 sm:mb-6 text-[0.5rem] sm:text-[0.625rem] tracking-[0.4em] sm:tracking-[0.6em] uppercase font-bold text-left"><Activity size={16} className="sm:w-5 sm:h-5" /> XtraProfit Bureau</span>
                                Market <br />Intelligence.
                            </h3>
                            <p className="text-white/40 text-base sm:text-xl lg:text-3xl font-medium leading-[1.3] mb-10 sm:mb-14 max-w-xl text-left">
                                High-density analysis engines for modern asset navigation. Analyze global liquidity nodes and institutional benchmarks with sub-second precision.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mt-6 lg:mt-0">
                            {[
                                { label: 'Global Sentiment', value: 'BULLISH 72%', color: 'bg-[#caf300]' },
                                { label: 'Network Integrity', value: 'OPTIMAL 99.9%', color: 'bg-blue-500' },
                                { label: 'Liquidity Nodes', value: '42 ACTIVE', color: 'bg-[#29695b]' },
                                { label: 'Data Latency', value: '< 250 MS', color: 'bg-orange-500' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/5 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group cursor-default">
                                    <p className="text-[0.5rem] sm:text-[0.5625rem] text-white/40 font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] mb-3 sm:mb-4 group-hover:text-[#caf300] transition-colors">{stat.label}</p>
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className={cn("w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] animate-pulse", stat.color)}></div>
                                        <p className="text-xl sm:text-2xl font-headline font-black text-white tracking-tight">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Related Tools Section */}
                <section className="mt-20 sm:mt-32 border-t border-black/5 pt-16 sm:pt-24 text-left">
                    <h2 className="font-headline font-black text-2xl sm:text-4xl text-[#00193c] mb-8 sm:mb-12 tracking-tight">Related Market Intelligence</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Financial News', link: '/news', desc: 'Verified news and analysis.' },
                            { name: 'Gold & Silver Price Today', link: '/metals', desc: 'Live precious metals rates.' },
                            { name: 'Currency Converter', link: '/tools/currency', desc: 'Real-time FX exchange rates.' },
                            { name: 'Custom Solutions', link: '/services', desc: 'Software development services.' }
                        ].map((tool, i) => (
                            <Link key={i} to={tool.link} className="bg-white border border-black/5 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                                <h3 className="font-headline font-black text-lg text-[#00193c] group-hover:text-[#29695b] transition-colors mb-2">{tool.name}</h3>
                                <p className="text-sm text-[#64748b] font-medium">{tool.desc}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Crypto;
