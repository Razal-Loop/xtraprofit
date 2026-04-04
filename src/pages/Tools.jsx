import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Globe, Calculator, ShieldCheck, Zap, ArrowRight, ArrowUpRight, Sparkles, TrendingUp, Activity, Target } from 'lucide-react';
import { cn } from '../lib/utils';

const Tools = () => {
    const [hoveredTool, setHoveredTool] = useState(null);

    const tools = [
        {
            id: 'fx',
            title: 'FX Parity Matrix',
            subtitle: 'Live Currency Conversion',
            desc: 'High-precision currency conversion engine with real-time exchange benchmarks across 170+ global currency pairs. Institutional-grade cross-rate analysis powered by live market data feeds.',
            icon: <Globe size={24} />,
            link: '/tools/currency',
            gradient: 'from-[#00193c] to-[#002d62]',
            accentColor: '#29695b',
            stats: [
                { label: 'Currency Pairs', value: '170+' },
                { label: 'Update Freq', value: 'Live' },
                { label: 'Data Source', value: 'API' },
            ],
            tags: ['Forex', 'Conversion', 'Cross-Rate'],
        },
        {
            id: 'emi',
            title: 'EMI Amortization Desk',
            subtitle: 'Debt Modeling Engine',
            desc: 'Institutional debt modeling and monthly obligation analysis for strategic capitalization. Full amortization schedule generation with visual breakdowns of principal and interest components.',
            icon: <ShieldCheck size={24} />,
            link: '/tools/emi',
            gradient: 'from-[#29695b] to-[#1a4d42]',
            accentColor: '#caf300',
            stats: [
                { label: 'Precision', value: '0.01%' },
                { label: 'Max Tenure', value: '30yr' },
                { label: 'Charts', value: 'Yes' },
            ],
            tags: ['Loans', 'EMI', 'Amortization'],
        },
        {
            id: 'yield',
            title: 'Yield Forecasting',
            subtitle: 'Compound Growth Engine',
            desc: 'Compound growth projections and wealth realization modeling for long-term investment horizons. Advanced yield curve analysis with SIP, lump sum, and hybrid modeling capabilities.',
            icon: <Zap size={24} />,
            link: '/tools/investment',
            gradient: 'from-[#00193c] to-[#29695b]',
            accentColor: '#caf300',
            stats: [
                { label: 'Models', value: '3+' },
                { label: 'Projections', value: '50yr' },
                { label: 'Accuracy', value: 'High' },
            ],
            tags: ['Investment', 'SIP', 'Compound'],
        },
        {
            id: 'profit',
            title: 'Profit Realization',
            subtitle: 'Margin Benchmarking',
            desc: 'Strategic fiscal forecasting for unit-level margins and gross business capitalization. Real-time profit-loss modeling with cost breakdowns, markup analysis, and revenue projections.',
            icon: <Calculator size={24} />,
            link: '/tools/profit',
            gradient: 'from-[#1a4d42] to-[#00193c]',
            accentColor: '#29695b',
            stats: [
                { label: 'Metrics', value: '5+' },
                { label: 'Modes', value: 'Multi' },
                { label: 'Export', value: 'Yes' },
            ],
            tags: ['Profit', 'Margins', 'Revenue'],
        },
    ];

    const features = [
        { icon: <Sparkles size={20} />, title: 'Instant Calculations', desc: 'Zero latency – all computations execute client-side for blazing performance.' },
        { icon: <TrendingUp size={20} />, title: 'Live Data Feeds', desc: 'Real-time API integrations for currency rates, metal prices, and crypto markets.' },
        { icon: <Activity size={20} />, title: 'Visual Analytics', desc: 'Interactive charts and graphs for intuitive data interpretation and decision support.' },
        { icon: <Target size={20} />, title: 'Precision Engineering', desc: 'Institutional-grade accuracy with multi-decimal precision across all tools.' },
    ];

    return (
        <div className="bg-[#f8f9fa] text-[#0f172a] font-body selection:bg-[#caf300]/30 selection:text-[#00193c] leading-relaxed overflow-x-hidden pt-14 sm:pt-20">
            <Helmet>
                <title>Financial Tools & Calculators | XtraProfit Utility Suite</title>
                <meta name="description" content="Financial Tools & Calculators - Explore XtraProfit's suite of EMI calculators, currency converters, and investment yield trackers for accurate planning." />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://xtraprofit.com"
                        },{
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Tools",
                            "item": "https://xtraprofit.com/tools"
                        }]
                    }
                    `}
                </script>
            </Helmet>

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-[#00193c] py-16 sm:py-24 lg:py-36">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#29695b]/15 blur-[150px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#caf300]/8 blur-[120px] rounded-full -ml-32 -mb-32 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-3 border border-[#caf300]/20 px-5 py-2.5 rounded-full mb-8 sm:mb-12 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-[#caf300] rounded-full animate-pulse shadow-[0_0_10px_#caf300]"></div>
                            <span className="text-[0.625rem] sm:text-[0.6875rem] font-black uppercase tracking-[0.3em] text-[#caf300]">Utility Calculator Suite</span>
                        </div>

                        <h1 className="font-headline text-4xl sm:text-5xl lg:text-8xl font-black text-white leading-[0.85] mb-6 sm:mb-10 tracking-tightest">
                            Free Financial Tools <br /><span className="text-[#caf300]">& Calculators.</span>
                        </h1>
                        <p className="text-white/60 text-lg sm:text-2xl lg:text-3xl max-w-2xl font-medium leading-relaxed italic mx-auto">
                            Explore our comprehensive suite of <Link to="/tools" className="text-white border-b-2 border-[#caf300]/30 hover:border-[#caf300] transition-colors">free financial tools and calculators</Link> for accurate planning. Access EMI calculators, currency converters, and investment trackers in one place.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 mt-12">
                            {['Real-Time', 'Zero Latency', 'API-Powered', 'Open Access'].map((tag, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#caf300]"></div>
                                    <span className="text-[0.6rem] sm:text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/70">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f8f9fa] to-transparent"></div>
            </section>

            {/* TOOLS GRID SECTION */}
            <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f9fa] -mt-16 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="text-center mb-12 sm:mb-20">
                        <p className="text-[0.625rem] font-black uppercase tracking-[0.4em] text-[#29695b] mb-4">Select Your Calculator</p>
                        <h2 className="font-headline font-black text-3xl sm:text-5xl lg:text-7xl text-[#00193c] tracking-tightest leading-none">
                            Choose a Tool
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {tools.map((tool, i) => (
                            <Link
                                key={tool.id}
                                to={tool.link}
                                onMouseEnter={() => setHoveredTool(tool.id)}
                                onMouseLeave={() => setHoveredTool(null)}
                                className={cn(
                                    "group relative bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 overflow-hidden transition-all duration-500",
                                    hoveredTool === tool.id
                                        ? "shadow-2xl scale-[1.01] border-[#caf300]/40"
                                        : "hover:shadow-xl"
                                )}
                            >
                                {/* Card Header Gradient */}
                                <div className={cn("bg-gradient-to-br p-6 sm:p-8 lg:p-10 relative overflow-hidden", tool.gradient)}>
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#caf300]/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>

                                    <div className="relative z-10 flex items-start justify-between">
                                        <div>
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-md rounded-[1.25rem] flex items-center justify-center text-[#caf300] mb-5 sm:mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                                {tool.icon}
                                            </div>
                                            <h3 className="font-headline font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight mb-2">{tool.title}</h3>
                                            <p className="text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[#caf300]/80">{tool.subtitle}</p>
                                        </div>
                                        <ArrowUpRight
                                            size={28}
                                            className="text-white/20 group-hover:text-[#caf300] group-hover:rotate-12 transition-all duration-500 shrink-0 mt-2"
                                        />
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-6 sm:p-8 lg:p-10">
                                    <p className="text-[#64748b] text-sm sm:text-[0.9rem] font-medium leading-relaxed mb-6 sm:mb-8">{tool.desc}</p>

                                    {/* Stats Row */}
                                    <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                                        {tool.stats.map((stat, j) => (
                                            <div key={j} className="flex-1 text-center p-3 sm:p-4 bg-[#f8f9fa] rounded-[1rem] border border-black/5">
                                                <p className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-[#64748b] mb-1">{stat.label}</p>
                                                <p className="text-sm sm:text-base font-black text-[#00193c]">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tags + CTA */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            {tool.tags.map((tag, k) => (
                                                <span key={k} className="text-[0.55rem] font-bold uppercase tracking-widest text-[#29695b] bg-[#29695b]/5 px-3 py-1.5 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#00193c] group-hover:text-[#29695b] group-hover:translate-x-1 transition-all whitespace-nowrap">
                                            Launch <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="py-16 sm:py-24 lg:py-32 bg-white border-t border-black/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="text-center mb-12 sm:mb-20">
                        <div className="inline-flex items-center gap-3 bg-[#00193c] px-5 py-2 rounded-full mb-6 sm:mb-8 shadow-2xl">
                            <div className="w-2 h-2 rounded-full bg-[#caf300] animate-pulse"></div>
                            <span className="text-[0.625rem] font-black uppercase tracking-[0.4em] text-[#caf300]">Architecture</span>
                        </div>
                        <h2 className="font-headline font-black text-3xl sm:text-5xl lg:text-7xl text-[#00193c] tracking-tightest leading-none mb-4 sm:mb-6">
                            Why Our Tools<span className="text-[#29695b]">.</span>
                        </h2>
                        <p className="text-[#64748b] text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                            Every tool is engineered with sovereign-grade precision for institutional analysis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="group bg-[#f8f9fa] p-8 sm:p-10 rounded-[2rem] border border-black/5 hover:bg-[#00193c] transition-all duration-500 cursor-default"
                            >
                                <div className="w-14 h-14 bg-white rounded-[1.25rem] flex items-center justify-center text-[#29695b] group-hover:bg-[#caf300] group-hover:text-[#00193c] transition-all duration-500 mb-6 sm:mb-8 shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="font-headline font-black text-lg text-[#00193c] group-hover:text-white mb-3 tracking-tight">{feature.title}</h3>
                                <p className="text-[0.8rem] font-medium leading-relaxed text-[#64748b] group-hover:text-white/50">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f9fa] border-t border-black/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
                    <div className="bg-[#00193c] rounded-[2.5rem] sm:rounded-[3rem] p-10 sm:p-16 lg:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#caf300]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#29695b]/20 rounded-full -ml-24 -mb-24 blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="font-headline font-black text-3xl sm:text-5xl text-white mb-6 tracking-tight leading-tight">
                                Need a Custom<br />Calculator?
                            </h3>
                            <p className="text-white/40 text-sm sm:text-lg font-medium leading-relaxed mb-10 max-w-xl mx-auto">
                                Our engineering desk builds bespoke financial modeling tools and custom dashboards for institutional clients.
                            </p>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-4 bg-[#caf300] text-[#00193c] px-8 sm:px-12 py-5 sm:py-6 rounded-[1.5rem] font-headline font-black text-[0.625rem] sm:text-[0.7rem] uppercase tracking-[0.3em] shadow-xl hover:shadow-[0_0_40px_rgba(202,243,0,0.3)] transition-all hover:translate-y-[-2px]"
                            >
                                Hire Engineering Desk <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Tools Section */}
            <section className="mt-20 sm:mt-32 border-t border-black/5 pt-16 sm:pt-24 text-left px-4 sm:px-8">
                <h2 className="font-headline font-black text-2xl sm:text-4xl text-[#00193c] mb-8 sm:mb-12 tracking-tight">Related Market Intelligence</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { name: 'Financial News', link: '/news', desc: 'Verified news and analysis.' },
                        { name: 'Crypto Prices', link: '/crypto', desc: 'Live digital asset tracking.' },
                        { name: 'Gold & Silver Price Today', link: '/metals', desc: 'Live precious metals rates.' },
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
    );
};

export default Tools;
