import React, { useState, useEffect, useRef } from "react";
import { ArrowRightLeft, TrendingUp, History, Globe, ShieldCheck, Search, ChevronDown, Activity, Zap } from "lucide-react";
import { cn } from "../lib/utils";

const Currency = () => {
    const [amount, setAmount] = useState("1000");
    const [fromCurrency, setFromCurrency] = useState({ code: 'USD', name: 'United States Dollar' });
    const [toCurrency, setToCurrency] = useState({ code: 'EUR', name: 'Euro' });
    const [exchangeRate, setExchangeRate] = useState(0.92);
    const [rates, setRates] = useState({});
    const [loading, setLoading] = useState(true);
    const [isSelectingFrom, setIsSelectingFrom] = useState(false);
    const [isSelectingTo, setIsSelectingTo] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const fromRef = useRef(null);
    const toRef = useRef(null);

    const currencies = [
        { code: 'USD', name: 'United States Dollar' }, { code: 'EUR', name: 'Euro' }, { code: 'GBP', name: 'British Pound' },
        { code: 'JPY', name: 'Japanese Yen' }, { code: 'AUD', name: 'Australian Dollar' }, { code: 'CAD', name: 'Canadian Dollar' },
        { code: 'CHF', name: 'Swiss Franc' }, { code: 'CNY', name: 'Chinese Yuan' }, { code: 'INR', name: 'Indian Rupee' },
        { code: 'AED', name: 'UAE Dirham' }, { code: 'SAR', name: 'Saudi Riyal' }, { code: 'BTC', name: 'Bitcoin' },
        { code: 'ETH', name: 'Ethereum' }
    ];

    const filteredCurrencies = currencies.filter(c =>
        c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const fetchRates = async () => {
        try {
            const response = await fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=cee64139e84a410faac3c4bf1016236c');
            const data = await response.json();
            if (data && data.rates) {
                setRates(data.rates);
                if (data.rates[toCurrency.code] && data.rates[fromCurrency.code]) {
                    setExchangeRate(parseFloat(data.rates[toCurrency.code]) / parseFloat(data.rates[fromCurrency.code]));
                }
            }
        } catch (err) {
            console.error("Nexus Sync Error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRates();
        const interval = setInterval(fetchRates, 120000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (rates[fromCurrency.code] && rates[toCurrency.code]) {
            setExchangeRate(rates[toCurrency.code] / rates[fromCurrency.code]);
        }
    }, [fromCurrency, toCurrency, rates]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (fromRef.current && !fromRef.current.contains(event.target)) setIsSelectingFrom(false);
            if (toRef.current && !toRef.current.contains(event.target)) setIsSelectingTo(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const convertedAmount = (parseFloat(amount) * exchangeRate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const CurrencySelector = ({ selected, onSelect, isOpen, setIsOpen, label, dropdownRef }) => (
        <div className="relative flex-grow" ref={dropdownRef}>
            <p className="text-[0.5625rem] sm:text-[0.625rem] font-black text-[#00193c] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3 ml-1 sm:ml-2">{label}</p>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    setSearchQuery("");
                }}
                className="w-full bg-[#f8f9fa] border border-black/5 rounded-[1rem] sm:rounded-[1.25rem] p-4 sm:p-6 flex items-center justify-between group hover:bg-white transition-all shadow-sm"
            >
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl flex items-center justify-center font-headline font-black text-sm sm:text-base text-[#00193c] shadow-sm border border-black/5">
                        {selected.code.slice(0, 2)}
                    </div>
                    <div className="text-left">
                        <p className="font-headline font-black text-base sm:text-lg text-[#00193c]">{selected.code}</p>
                        <p className="text-[0.5rem] sm:text-[0.625rem] text-[#64748b] font-medium uppercase tracking-wider hidden sm:block">{selected.name}</p>
                    </div>
                </div>
                <ChevronDown className={cn("text-[#64748b] transition-transform duration-300", isOpen && "rotate-180")} size={18} />
            </button>

            {isOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-black/10 rounded-[1.25rem] sm:rounded-[1.75rem] shadow-[0_30px_70px_rgba(0,0,0,0.15)] z-[100] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="p-3 sm:p-5 border-b border-black/5 bg-[#f8f9fa]">
                        <div className="relative">
                            <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-[#00193c]/40" size={14} />
                            <input
                                autoFocus
                                className="w-full bg-white border border-black/10 rounded-xl sm:rounded-2xl py-3 sm:py-4 pl-10 sm:pl-12 pr-4 sm:pr-5 text-sm font-bold text-[#00193c] placeholder:text-[#64748b]/50 placeholder:font-medium outline-none focus:ring-4 focus:ring-[#caf300]/30 transition-all"
                                placeholder="Search benchmarks..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                    <div className="max-h-[280px] sm:max-h-[320px] overflow-y-auto institutional-scrollbar">
                        {filteredCurrencies.length > 0 ? (
                            filteredCurrencies.map((c) => (
                                <button
                                    key={c.code}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onSelect(c);
                                        setIsOpen(false);
                                    }}
                                    className="w-full text-left p-4 sm:p-6 hover:bg-[#f8f9fa] flex items-center gap-4 sm:gap-6 transition-all group border-b border-black/[0.02] last:border-0"
                                >
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f1f5f9] rounded-lg sm:rounded-xl flex items-center justify-center font-headline font-black text-xs text-[#00193c]/40 group-hover:bg-[#00193c] group-hover:text-[#caf300] transition-colors">
                                        {c.code.slice(0, 2)}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-headline font-black text-[#00193c] text-sm tracking-tight">{c.code}</span>
                                        <span className="text-[0.5rem] sm:text-[0.6rem] text-[#64748b] font-black uppercase tracking-widest">{c.name}</span>
                                    </div>
                                </button>
                            ))
                        ) : (
                            <div className="p-8 sm:p-12 text-center">
                                <p className="text-[0.5625rem] sm:text-[0.625rem] font-black text-[#64748b] uppercase tracking-[0.3em]">No Assets found</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <div className="bg-[#f8f9fa] min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-40 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 sm:mb-20">
                    <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#00193c] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-10 shadow-2xl">
                        <div className={cn("w-2 h-2 rounded-full", loading ? "bg-white animate-spin border-2 border-[#caf300] border-t-transparent" : "bg-[#caf300] animate-pulse")}></div>
                        <span className="text-[0.5rem] sm:text-[0.625rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] font-label text-[#caf300]">
                            {loading ? 'Synchronizing Nexus...' : 'Global Asset Sync Matrix • LIVE'}
                        </span>
                    </div>
                    <h1 className="font-headline font-black text-3xl sm:text-5xl lg:text-7xl text-[#00193c] leading-[0.9] tracking-tightest mb-6 sm:mb-10">
                        Exchange <br /><span className="text-[#29695b]">Parity Engine.</span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
                    <div className="lg:col-span-8 space-y-6 sm:space-y-8">
                        <div className="bg-white border border-black/5 p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-3xl relative group text-left">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#caf300]/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-[#caf300]/10 transition-all pointer-events-none"></div>

                            <div className="space-y-6 sm:space-y-10 relative z-20">
                                <div className="space-y-3 sm:space-y-4">
                                    <p className="text-[0.5625rem] sm:text-[0.625rem] font-black text-[#00193c] uppercase tracking-[0.3em] sm:tracking-[0.4em] ml-1 sm:ml-2">Capital Allocation</p>
                                    <div className="relative group/input flex items-center">
                                        <span className="absolute left-5 sm:left-8 text-lg sm:text-xl font-headline font-black text-[#64748b]">$</span>
                                        <input
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="w-full bg-[#f8f9fa] border border-black/10 rounded-[1rem] sm:rounded-[1.25rem] p-5 sm:p-8 pl-10 sm:pl-12 font-headline font-black text-2xl sm:text-3xl text-[#00193c] focus:ring-4 focus:ring-[#caf300]/20 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-end gap-4 sm:gap-6">
                                    <CurrencySelector
                                        label="Source Asset"
                                        selected={fromCurrency}
                                        onSelect={setFromCurrency}
                                        isOpen={isSelectingFrom}
                                        setIsOpen={setIsSelectingFrom}
                                        dropdownRef={fromRef}
                                    />
                                    <div className="hidden md:flex p-4 sm:p-6 bg-[#00193c] text-[#caf300] rounded-xl sm:rounded-2xl shadow-xl self-center mb-1">
                                        <ArrowRightLeft size={18} className="sm:w-5 sm:h-5" />
                                    </div>
                                    <div className="flex md:hidden w-full justify-center py-2">
                                        <div className="p-3 bg-[#00193c] text-[#caf300] rounded-xl shadow-xl">
                                            <ArrowRightLeft size={18} className="rotate-90" />
                                        </div>
                                    </div>
                                    <CurrencySelector
                                        label="Target Asset"
                                        selected={toCurrency}
                                        onSelect={setToCurrency}
                                        isOpen={isSelectingTo}
                                        setIsOpen={setIsSelectingTo}
                                        dropdownRef={toRef}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
                            {[
                                { label: 'Benchmark Rate', value: exchangeRate.toFixed(4), icon: <TrendingUp size={14} className="sm:w-4 sm:h-4" /> },
                                { label: 'Institutional Fee', value: '0.00%', icon: <ShieldCheck size={14} className="sm:w-4 sm:h-4" /> },
                                { label: 'Latency', value: loading ? 'SYNC...' : '1.2ms', icon: <Activity size={14} className="sm:w-4 sm:h-4" /> }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white border border-black/5 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl transition-all group text-left">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <div className="p-2 sm:p-2.5 bg-[#f8fafc] rounded-lg sm:rounded-xl text-[#29695b] group-hover:bg-[#00193c] group-hover:text-[#caf300] transition-colors">{stat.icon}</div>
                                        <p className="text-[0.5rem] sm:text-[0.5625rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#64748b]">{stat.label}</p>
                                    </div>
                                    <p className="font-headline font-black text-xl sm:text-2xl text-[#00193c]">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 h-full">
                        <section className="bg-[#00193c] p-8 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] text-white relative overflow-hidden h-full flex flex-col justify-between shadow-3xl border border-white/5 text-left">
                            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#caf300]/5 blur-[150px] pointer-events-none"></div>
                            <div className="relative z-10 w-full">
                                <p className="text-[0.5625rem] sm:text-[0.625rem] font-black text-[#caf300] uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-4 sm:mb-6 opacity-100 italic">Realized Allocation</p>
                                <div className="space-y-2">
                                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black text-white tracking-tightest leading-none break-all">
                                        {convertedAmount}
                                    </h2>
                                    <p className="font-headline font-black text-xl sm:text-2xl text-[#caf300] uppercase tracking-[0.1em]">{toCurrency.code}</p>
                                </div>
                            </div>

                            <div className="mt-12 sm:mt-20 space-y-4 sm:space-y-6 relative z-10">
                                <div className="p-4 sm:p-6 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
                                    <p className="text-[0.5625rem] sm:text-[0.625rem] font-black text-white/40 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4">Market Sentiment</p>
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                        <span className="font-headline font-black text-base sm:text-lg text-white">HIGH VOLATILITY</span>
                                    </div>
                                </div>
                                <button className="w-full bg-[#caf300] text-[#00193c] py-4 sm:py-6 rounded-[1.25rem] sm:rounded-[1.5rem] font-headline font-black text-[0.5625rem] sm:text-[0.625rem] uppercase tracking-[0.2em] sm:tracking-[0.3em] shadow-xl hover:scale-105 active:scale-95 transition-all outline-none">
                                    Execute Swap
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Currency;
