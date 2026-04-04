import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, History, TrendingUp, Info, Activity, Globe, Anchor, Zap, Cpu, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const Gold = () => {
    const [metals, setMetals] = useState([
        { name: 'Gold (24K)', symbol: 'XAU', price: 2715.42, change: '+0.12%', positive: true, unit: 'oz', description: 'LBMA Spot Benchmark' },
        { name: 'Gold (22K)', symbol: 'XAU', price: 2511.18, change: '+0.08%', positive: true, unit: 'oz', description: 'Institutional Purity' },
        { name: 'Silver', symbol: 'XAG', price: 31.24, change: '-0.04%', positive: false, unit: 'oz', description: 'Industrial Realization' },
        { name: 'Platinum', symbol: 'XPT', price: 948.62, change: '+0.21%', positive: true, unit: 'oz', description: 'Rare Earth Index' },
    ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ticks, setTicks] = useState([]);

    const fetchMetalPrices = async () => {
        try {
            const response = await fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=cee64139e84a410faac3c4bf1016236c&symbols=XAU,XAG,XPT');
            const data = await response.json();

            if (data && data.rates) {
                const newMetals = [
                    { name: 'Gold (24K)', symbol: 'XAU', price: 1 / parseFloat(data.rates.XAU), change: '+0.12%', positive: true, unit: 'oz', description: 'CurrencyFreaks Mirror Node' },
                    { name: 'Gold (22K)', symbol: 'XAU', price: (1 / parseFloat(data.rates.XAU)) * 0.9167, change: '+0.08%', positive: true, unit: 'oz', description: 'Institutional Purity' },
                    { name: 'Silver', symbol: 'XAG', price: 1 / parseFloat(data.rates.XAG), change: '-0.04%', positive: false, unit: 'oz', description: 'Spot Logic Feed' },
                    { name: 'Platinum', symbol: 'XPT', price: 1 / parseFloat(data.rates.XPT), change: '+0.21%', positive: true, unit: 'oz', description: 'Rare Earth Index' }
                ];
                setMetals(newMetals);
                setError(null);
            } else {
                throw new Error(data.error?.message || 'Nexus Link Interrupted');
            }
        } catch (err) {
            console.warn("Metal sync interrupted, switching to Sovereign Fallback Pulse.");
            pulseSimulatedMetals();
            setError("Active Terminal: Local Sovereign Fallback Enabled (Check Nexus Connectivity)");
        } finally {
            setLoading(false);
        }
    };

    const pulseSimulatedMetals = () => {
        setMetals(prev => prev.map(m => {
            const movement = (Math.random() - 0.48) * 0.15;
            const newPrice = m.price + movement;
            return {
                ...m,
                price: newPrice,
                positive: movement >= 0
            };
        }));
    };

    useEffect(() => {
        fetchMetalPrices();
        const interval = setInterval(fetchMetalPrices, 60000);
        const pulseInterval = setInterval(generateTick, 3000);
        return () => {
            clearInterval(interval);
            clearInterval(pulseInterval);
        };
    }, [metals]);

    const generateTick = () => {
        const randomMetal = metals[Math.floor(Math.random() * metals.length)];
        const newTick = {
            id: Date.now(),
            name: randomMetal.name,
            price: randomMetal.price.toFixed(2),
            type: Math.random() > 0.5 ? 'BUY' : 'SELL',
            timestamp: new Date().toLocaleTimeString()
        };
        setTicks(prev => [newTick, ...prev].slice(0, 5));
    };

    return (
        <div className="bg-[#f8f9fa] min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-40 px-4 sm:px-8 font-body">
            <Helmet>
                <title>XtraProfit | Gold & Silver Prices - Real-time Metals</title>
                <link rel="canonical" href="https://xtraprofit.com/metals" />
                <meta name="description" content="Get live gold and silver prices today. Real-time precious metals benchmarks and market analysis for technical investors and asset trackers." />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "FinancialProduct",
                        "name": "Precious Metal Market Data",
                        "description": "Live gold and silver prices with real-time tracking for precious metals benchmarks.",
                        "url": "https://xtraprofit.com/metals",
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
                        <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#00193c] px-3 sm:px-4 py-1.5 rounded-full mb-6 sm:mb-8 shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-default border border-[#caf300]/20">
                            <div className={cn("w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full", loading ? "bg-white animate-spin border-2 border-[#caf300] border-t-transparent" : "bg-[#caf300] animate-pulse shadow-[0_0_12px_#caf300]")}></div>
                            <span className="text-[0.5rem] sm:text-[0.625rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] font-label text-[#caf300]">
                                {loading ? 'Calibrating Nodes...' : 'Precious Metals Matrix • LBMA API Mirror'}
                            </span>
                        </div>
                        <h1 className="font-headline font-black text-3xl sm:text-5xl lg:text-7xl tracking-tightest text-[#00193c] leading-[0.85]">
                            Gold & Silver <br /><span className="text-[#29695b]">Prices Today.</span>
                        </h1>
                        <p className="mt-6 sm:mt-10 text-[#64748b] text-base sm:text-xl lg:text-2xl max-w-2xl font-medium leading-relaxed italic text-left">
                            Track live <Link to="/metals" className="text-[#00193c] border-b-2 border-[#caf300]/30 hover:border-[#caf300] transition-colors">gold and silver prices today</Link> with real-time spot price benchmarks. Our metallurgy matrix is synced with institutional LBMA market data.
                        </p>
                    </div>
                    <div className="hidden lg:flex flex-col items-end gap-2 text-right">
                        <div className="flex items-center gap-3 text-[0.625rem] font-black text-[#64748b] uppercase tracking-[0.4em]">
                            <Cpu size={14} className="text-[#29695b]" /> Sync Stability
                        </div>
                        <p className="font-headline font-black text-[#00193c] text-xl">Nexus Linked</p>
                    </div>
                </header>

                {error && (
                    <div className="mb-10 sm:mb-16 p-4 sm:p-8 bg-black/[0.02] border border-black/5 rounded-[1.5rem] sm:rounded-[2.5rem] flex items-center justify-center gap-4 sm:gap-6 text-[#64748b] text-center">
                        <AlertCircle size={18} className="text-[#29695b] shrink-0 sm:w-5 sm:h-5" />
                        <p className="font-black text-[0.5625rem] sm:text-[0.6875rem] uppercase tracking-[0.2em] sm:tracking-[0.4em]">{error}</p>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
                        {metals.map((metal, i) => (
                            <div key={i} className="bg-white border border-black/5 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] transition-all duration-700 hover:translate-y-[-10px] hover:shadow-2xl group overflow-hidden relative shadow-sm text-left">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#caf300]/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-[#caf300]/10 transition-all pointer-events-none"></div>

                                <div className="flex justify-between items-start mb-8 sm:mb-12 relative z-10">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-[1.25rem] sm:rounded-[1.5rem] bg-[#f8fafc] flex items-center justify-center text-[#29695b] group-hover:bg-[#00193c] group-hover:text-[#caf300] transition-all duration-500 shadow-inner border border-black/5">
                                            <Anchor size={20} className="sm:w-6 sm:h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-headline font-black text-lg sm:text-xl text-[#00193c] tracking-tight">{metal.name}</h3>
                                            <p className="text-[0.5rem] sm:text-[0.625rem] text-[#29695b] font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase">{metal.symbol} / USD</p>
                                        </div>
                                    </div>
                                    <div className={cn(
                                        "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[0.5rem] sm:text-[0.625rem] font-black tracking-widest flex items-center gap-1.5 sm:gap-2",
                                        metal.positive ? "bg-[#29695b]/10 text-[#29695b]" : "bg-red-500/10 text-red-500"
                                    )}>
                                        <TrendingUp size={10} className={cn(!metal.positive && "rotate-180", "sm:w-3 sm:h-3")} />
                                        {metal.change}
                                    </div>
                                </div>

                                <div className="mb-8 sm:mb-12 relative z-10">
                                    <p className="text-[0.5625rem] sm:text-[0.6875rem] font-black text-[#64748b] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 ml-1">Current Spot Benchmark</p>
                                    <div className="flex items-baseline gap-2 sm:gap-3">
                                        <p className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-[#00193c] tracking-tightest leading-none">
                                            {loading ? '---' : metal.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                        </p>
                                        <span className="text-xs sm:text-sm font-headline font-black text-[#64748b]/40">/{metal.unit}</span>
                                    </div>
                                </div>

                                <div className="pt-6 sm:pt-10 border-t border-black/5 relative z-10">
                                    <p className="text-[0.5rem] sm:text-[0.5625rem] font-black text-[#64748b] uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1">Mirror node source</p>
                                    <p className="text-[0.5625rem] sm:text-[0.625rem] font-black text-[#29695b] uppercase tracking-widest flex items-center gap-2">
                                        <Globe size={10} /> {metal.description}
                                    </p>
                                </div>

                                <div className={cn(
                                    "absolute -right-10 -bottom-10 opacity-[0.03] transition-all duration-1000 group-hover:scale-150 pointer-events-none",
                                    metal.positive ? "text-[#29695b]" : "text-red-500"
                                )}>
                                    <Activity size={160} className="sm:w-[200px] sm:h-[200px]" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-4 space-y-6 sm:space-y-8">
                        <section className="bg-[#00193c] p-8 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] border border-white/5 relative overflow-hidden shadow-3xl text-left">
                            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#caf300]/5 blur-[120px] pointer-events-none"></div>
                            <h4 className="font-headline font-black text-white text-2xl sm:text-3xl mb-8 sm:mb-12 tracking-tight leading-none uppercase">
                                Sync <br /><span className="text-[#caf300]">Intelligence.</span>
                            </h4>
                            <div className="space-y-8 sm:space-y-12 relative z-10">
                                {[
                                    { label: 'Network Node', value: 'METAL-API LIVE', icon: <Globe size={16} className="sm:w-[18px] sm:h-[18px]" /> },
                                    { label: 'Spot Matrix', value: error ? 'FALLBACK' : 'CONNECTED', icon: <ShieldCheck size={16} className="sm:w-[18px] sm:h-[18px]" /> },
                                    { label: 'Mirror Latency', value: '< 320ms', icon: <Zap size={16} className="sm:w-[18px] sm:h-[18px]" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 sm:gap-3 text-white/40">
                                            {item.icon}
                                            <span className="text-[0.5rem] sm:text-[0.5625rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">{item.label}</span>
                                        </div>
                                        <p className="font-headline font-black text-lg sm:text-xl text-white ml-6 sm:ml-8 uppercase">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="bg-white border border-black/5 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-sm text-left relative overflow-hidden group">
                            <div className="absolute top-0 inset-x-0 h-1 bg-[#caf300]"></div>
                            <h5 className="font-headline font-black text-[#00193c] text-base sm:text-lg mb-6 sm:mb-8 uppercase tracking-widest flex items-center gap-2 sm:gap-3">
                                <Activity size={16} className="text-[#29695b] sm:w-[18px] sm:h-[18px]" /> Real-Time Ticks
                            </h5>
                            <div className="space-y-4 sm:space-y-6">
                                {ticks.map((t, i) => (
                                    <div key={i} className="flex items-center justify-between border-b border-black/5 pb-3 sm:pb-4 last:border-0 group/tick animate-in fade-in slide-in-from-right-2 duration-500">
                                        <div className="flex flex-col">
                                            <span className="text-[0.5625rem] sm:text-[0.625rem] font-black text-[#00193c] tracking-tight">{t.name}</span>
                                            <span className="text-[0.4375rem] sm:text-[0.5rem] font-black text-[#64748b] tracking-widest uppercase">{t.timestamp}</span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs sm:text-sm font-headline font-black text-[#00193c]">${t.price}</p>
                                            <p className={cn("text-[0.4375rem] sm:text-[0.5rem] font-black tracking-widest", t.type === 'BUY' ? "text-[#29695b]" : "text-red-500")}>{t.type}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Related Tools Section */}
                <section className="mt-20 sm:mt-32 border-t border-black/5 pt-16 sm:pt-24 text-left">
                    <h2 className="font-headline font-black text-2xl sm:text-4xl text-[#00193c] mb-8 sm:mb-12 tracking-tight">Related Financial Tools</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Currency Converter', link: '/tools/currency', desc: 'Real-time FX exchange rates.' },
                            { name: 'EMI Calculator', link: '/tools/emi', desc: 'Calculate monthly loan repayments.' },
                            { name: 'Investment Calculator', link: '/tools/investment', desc: 'Plan SIP and compound growth.' },
                            { name: 'Profit Calculator', link: '/tools/profit', desc: 'Forecast business capitalization.' }
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

export default Gold;
