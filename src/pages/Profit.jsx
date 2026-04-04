import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRightLeft, TrendingUp, History, ShieldCheck, Zap, Info, ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

const Profit = () => {
    const [cost, setCost] = useState("1000");
    const [price, setPrice] = useState("1500");
    const [quantity, setQuantity] = useState("10");

    const totalCost = parseFloat(cost) * parseFloat(quantity);
    const totalRevenue = parseFloat(price) * parseFloat(quantity);
    const profit = totalRevenue - totalCost;
    const margin = (profit / totalRevenue) * 100;

    return (
        <div className="bg-[#f8f9fa] min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-40 px-4 sm:px-8">
            <Helmet>
                <title>XtraProfit | Profit Calculator - Business Analysis</title>
                <link rel="canonical" href="https://xtraprofit.com/tools/profit" />
                <meta name="description" content="Calculate business profit margins and gross capitalization. Precision-grade profit modeling for modern commerce and financial forecasting." />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Profit Margin Calculator",
                        "applicationCategory": "FinanceApplication",
                        "operatingSystem": "Web",
                        "url": "https://xtraprofit.com/tools/profit",
                        "description": "Calculate unit-level margins and gross business capitalization with our precision profit calculator.",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        }
                    }
                    `}
                </script>
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 sm:mb-20">
                    <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#00193c] px-3 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-10 shadow-2xl">
                        <div className="w-2 h-2 bg-[#caf300] rounded-full animate-pulse shadow-[0_0_10px_#caf300]"></div>
                        <span className="text-[0.5rem] sm:text-[0.625rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#caf300] font-label">Liquidity Realization Desk • Active Terminal</span>
                    </div>
                    <h1 className="font-headline font-black text-3xl sm:text-5xl lg:text-8xl tracking-tightest text-[#00193c] leading-[0.85]">
                        Profit Margin Calculator <br /><span className="text-[#29695b]">for Business Analysis.</span>
                    </h1>
                    <p className="mt-6 sm:mt-10 text-[#64748b] text-base sm:text-xl lg:text-2xl max-w-2xl font-medium leading-relaxed italic">
                        Calculate business profit margins and analyze unit-level profitability with our <Link to="/profit" className="text-[#00193c] border-b-2 border-[#caf300]/30 hover:border-[#caf300] transition-colors">Profit Margin Calculator</Link>. Benchmark your capitalization strategies with technical clarity.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
                    {/* Calculator Field Matrix */}
                    <div className="lg:col-span-8 bg-white border border-black/5 p-6 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] shadow-3xl overflow-hidden relative group text-left">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#caf300]/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-[#caf300]/10 transition-all"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 relative z-10">
                            {[
                                { label: "Unit Acquisition Cost", value: cost, setter: setCost, icon: <Zap size={16} className="sm:w-[18px] sm:h-[18px]" />, prefix: "$" },
                                { label: "Target Realization Price", value: price, setter: setPrice, icon: <TrendingUp size={16} className="sm:w-[18px] sm:h-[18px]" />, prefix: "$" },
                                { label: "Inventory Allocation", value: quantity, setter: setQuantity, icon: <History size={16} className="sm:w-[18px] sm:h-[18px]" />, prefix: "#" }
                            ].map((field, i) => (
                                <div key={i} className="space-y-3 sm:space-y-4">
                                    <label className="flex items-center gap-2 sm:gap-3 text-[0.5625rem] sm:text-[0.6875rem] font-black text-[#00193c] uppercase tracking-[0.3em] sm:tracking-[0.4em] ml-1 sm:ml-2">
                                        <div className="text-[#29695b]">{field.icon}</div>
                                        {field.label}
                                    </label>
                                    <div className="relative group/input flex items-center">
                                        <span className="absolute left-5 sm:left-8 text-lg sm:text-xl font-headline font-black text-[#64748b] group-hover/input:text-[#00193c] transition-colors">{field.prefix}</span>
                                        <input
                                            type="number"
                                            value={field.value}
                                            onChange={(e) => field.setter(e.target.value)}
                                            className="w-full bg-[#f8f9fa] border-none rounded-[1.25rem] sm:rounded-[1.5rem] p-5 sm:p-8 pl-10 sm:pl-14 font-headline font-black text-xl sm:text-2xl lg:text-3xl text-[#00193c] focus:ring-4 focus:ring-[#caf300]/20 transition-all outline-none"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 sm:mt-16 pt-10 sm:pt-16 border-t border-black/5 relative z-10">
                            <div className="flex flex-col gap-3">
                                <p className="text-[0.5625rem] sm:text-[0.625rem] font-black text-[#64748b] uppercase tracking-[0.3em] sm:tracking-[0.4em] ml-1">Capitalization Efficiency</p>
                                <div className="flex items-center gap-3 sm:gap-5">
                                    <div className="p-3 sm:p-4 bg-[#00193c] rounded-[1rem] sm:rounded-[1.25rem] text-[#caf300] shadow-xl shrink-0">
                                        <ShieldCheck size={20} className="sm:w-6 sm:h-6" />
                                    </div>
                                    <p className="text-[#00193c] font-medium max-w-sm leading-relaxed text-xs sm:text-sm">
                                        Your margins are currently optimized at <span className="font-black text-[#29695b]">{margin.toFixed(1)}%</span> against the target benchmark.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Sidebar */}
                    <div className="lg:col-span-4 h-full">
                        <section className="bg-[#00193c] p-8 sm:p-12 lg:p-16 rounded-[2rem] sm:rounded-[3.5rem] text-white relative overflow-hidden h-full flex flex-col justify-between shadow-3xl border border-white/5 text-left">
                            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#caf300]/5 blur-[150px] pointer-events-none"></div>

                            <div className="relative z-10 w-full mb-10 sm:mb-16">
                                <div className="space-y-10 sm:space-y-16">
                                    <div className="group">
                                        <p className="text-[0.5625rem] sm:text-[0.6875rem] font-black text-[#caf300] uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4 opacity-100 group-hover:translate-x-2 transition-transform duration-500">Gross Realization</p>
                                        <div className="flex items-baseline gap-2 sm:gap-3">
                                            <span className="text-lg sm:text-xl font-headline font-black text-white/40">$</span>
                                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black text-white tracking-tightest leading-none">
                                                {profit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <p className="text-[0.5625rem] sm:text-[0.6875rem] font-black text-[#29695b] uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4 group-hover:text-[#caf300] transition-colors group-hover:translate-x-2 transition-transform duration-500">Yield Margin</p>
                                        <div className="flex items-baseline gap-2 sm:gap-3">
                                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black text-[#caf300] tracking-tightest leading-none">
                                                {margin.toFixed(1)}
                                            </h2>
                                            <span className="text-xl sm:text-2xl font-headline font-black text-[#caf300]/40">%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto bg-white/5 p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/5 relative z-10 w-full hover:bg-white/10 transition-all cursor-default">
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-[0.5625rem] sm:text-[0.625rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] font-headline text-white/50">
                                    <Info size={16} className="text-[#caf300] sm:w-[18px] sm:h-[18px]" />
                                    Institutional Status
                                </div>
                                <div className="space-y-3 sm:space-y-5">
                                    <div className="flex justify-between items-center px-1 sm:px-2 py-1"><span className="text-[0.625rem] sm:text-xs font-bold text-white/30 uppercase tracking-[0.1em]">Total Cost</span><span className="font-headline font-black text-base sm:text-lg text-white">${totalCost.toLocaleString()}</span></div>
                                    <div className="flex justify-between items-center px-1 sm:px-2 py-1"><span className="text-[0.625rem] sm:text-xs font-bold text-white/30 uppercase tracking-[0.1em]">Total Revenue</span><span className="font-headline font-black text-base sm:text-lg text-white">${totalRevenue.toLocaleString()}</span></div>
                                    <div className="h-[2px] bg-white/10 rounded-full w-full"></div>
                                    <div className="flex justify-between items-center px-1 sm:px-2 py-1"><span className="text-[0.625rem] sm:text-xs font-bold text-[#caf300] uppercase tracking-[0.1em]">Sovereign Yield</span><span className="font-headline font-black text-xl sm:text-2xl text-[#caf300]">+{(margin).toFixed(1)}%</span></div>
                                </div>
                            </div>
                        </section>
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
                            { name: 'Crypto Prices', link: '/crypto', desc: 'Live digital asset tracking.' }
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

export default Profit;
