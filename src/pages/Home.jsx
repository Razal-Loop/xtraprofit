import React from 'react';
import { ArrowRight, ArrowUpRight, Globe, Calculator, BarChart3, ShieldCheck, Zap, Laptop, Smartphone, Code2, Layers, Briefcase, ExternalLink, Github, Linkedin, CheckCircle2, Newspaper } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { cn } from '../lib/utils';

const Home = () => {
    const tools = [
        {
            title: 'Currency Converter',
            desc: 'Powerful currency converter with real-time exchange rates for 170+ global currencies.',
            icon: <Globe className="text-[#29695b]" size={20} />,
            link: '/tools/currency'
        },
        {
            title: 'EMI Calculator',
            desc: 'Easy-to-use EMI calculator for loans, interest breakdowns, and monthly repayment schedules.',
            icon: <ShieldCheck className="text-[#29695b]" size={20} />,
            link: '/tools/emi'
        },
        {
            title: 'Investment Calculator',
            desc: 'Professional investment calculator for SIP, mutual funds, and compound growth modeling.',
            icon: <Zap className="text-[#29695b]" size={20} />,
            link: '/tools/investment'
        },
        {
            title: 'Profit Margin Calculator',
            desc: 'Accurate profit margin calculator for business analysis and gross capitalization forecasting.',
            icon: <Calculator className="text-[#29695b]" size={20} />,
            link: '/tools/profit'
        }
    ];

    const intelligence = [
        {
            title: 'Gold & Silver Prices',
            desc: 'Track live gold and silver prices today with real-time precious metals benchmarks.',
            icon: <BarChart3 className="text-[#29695b]" size={20} />,
            link: '/metals'
        },
        {
            title: 'Crypto Prices',
            desc: 'Stay updated with live crypto prices and market trends for Bitcoin, Ethereum, and more.',
            icon: <Code2 className="text-[#29695b]" size={20} />,
            link: '/crypto'
        },
        {
            title: 'Financial News',
            desc: 'Latest financial news and market updates for technical investors and financial analysts.',
            icon: <Newspaper className="text-[#29695b]" size={20} />,
            link: '/news'
        }
    ];

    return (
        <div className="bg-[#f8f9fa] text-[#0f172a] font-body selection:bg-[#caf300]/30 selection:text-[#00193c] leading-relaxed overflow-x-hidden pt-14 sm:pt-20">
            <Helmet>
                <title>XtraProfit | Home - Financial Tools & Software Solutions</title>
                <meta name="description" content="XtraProfit Home - Your financial utility hub with currency converters, EMI calculators, and custom software services for modern investors." />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "XtraProfit",
                        "url": "https://xtraprofit.com",
                        "description": "Premium financial utility hub with currency converters, calculators, and market intelligence.",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://xtraprofit.com/tools?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    }
                    `}
                </script>
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "XtraProfit",
                        "url": "https://xtraprofit.com",
                        "logo": "https://xtraprofit.com/logo.png",
                        "sameAs": [
                            "https://github.com/Razal-Loop",
                            "https://www.linkedin.com/in/razal-ali-8b3693379"
                        ]
                    }
                    `}
                </script>
            </Helmet>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-white py-10 sm:py-16 lg:py-40">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[#caf300]/5 blur-[120px] pointer-events-none rounded-full -mr-1/3"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#29695b]/5 blur-[120px] pointer-events-none rounded-full -ml-1/6"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-20">
                        <div className="lg:w-3/5 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#00193c] px-3 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-10 shadow-2xl">
                                <div className="w-2 h-2 bg-[#caf300] rounded-full animate-pulse shadow-[0_0_10px_#caf300]"></div>
                                <span className="text-[0.5625rem] sm:text-[0.6875rem] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#caf300]">XtraProfit Welcome Port</span>
                            </div>

                            <h1 className="font-headline text-4xl sm:text-5xl lg:text-8xl font-black text-[#00193c] leading-[0.85] mb-6 sm:mb-10 tracking-tightest">
                                Financial Tools, Crypto Prices & <br /><span className="text-[#29695b]">Software Solutions.</span>
                            </h1>

                            <p className="text-[#64748b] text-base sm:text-xl lg:text-3xl max-w-2xl mb-8 sm:mb-16 font-medium leading-relaxed mx-auto lg:mx-0 font-body">
                                Access <Link to="/tools" className="text-[#00193c] border-b-2 border-[#caf300]/30 hover:border-[#caf300] transition-colors">free financial tools</Link>, track live crypto prices, and explore professional software solutions. XtraProfit is your sovereign hub for high-performance digital utilities.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-12 mb-8 sm:mb-16">
                                <Link
                                    to="/services"
                                    className="w-full sm:w-auto bg-[#00193c] hover:bg-[#002d62] text-white px-8 sm:px-12 py-5 sm:py-7 rounded-[1.5rem] sm:rounded-[1.75rem] font-headline font-black text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] transition-all duration-300 shadow-3xl hover:translate-y-[-2px] flex items-center justify-center gap-4"
                                >
                                    Explore Services <ArrowRight size={18} />
                                </Link>

                                <div className="flex items-center gap-3 sm:gap-4 p-2 bg-[#f8f9fa] rounded-full border border-black/5 pr-4 sm:pr-6">
                                    <div className="flex -space-x-3 sm:-space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-[#00193c] flex items-center justify-center text-[0.5rem] sm:text-[0.6rem] font-black text-[#caf300] shadow-xl">FX</div>
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-[#29695b] flex items-center justify-center text-[0.5rem] sm:text-[0.6rem] font-black text-white shadow-xl">AU</div>
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-[#caf300] flex items-center justify-center text-[0.5rem] sm:text-[0.6rem] font-black text-[#00193c] shadow-xl">BTC</div>
                                    </div>
                                    <span className="text-[0.5rem] sm:text-[0.625rem] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#00193c]/50">42+ Active Nodes</span>
                                </div>
                            </div>

                            {/* Disclaimer */}
                            <div className="flex items-start gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0 p-4 sm:p-6 bg-[#00193c]/5 border-l-4 border-[#29695b] rounded-r-2xl text-left">
                                <ShieldCheck size={18} className="text-[#29695b] mt-1 shrink-0 sm:w-5 sm:h-5 text-left" />
                                <p className="text-[0.625rem] sm:text-[0.75rem] font-bold leading-normal text-[#64748b] uppercase tracking-wider text-left">
                                    <span className="text-[#00193c] font-black">XtraProfit is a Software Engineering Desk.</span> We provide high-fidelity visualization tools and utility calculators. We do <span className="underline decoration-[#caf300] decoration-2">NOT</span> provide financial advice or brokerage services.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-2/5 relative w-full">
                            <div className="relative w-full rounded-[2rem] sm:rounded-[4rem] border border-black/5 overflow-hidden flex items-center justify-center h-[280px] sm:h-[400px] md:h-[550px] shadow-3xl bg-white group hover:scale-[1.02] transition-all duration-700">
                                <div className="absolute inset-0 bg-gradient-radial from-[#caf300]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <DotLottieReact
                                    src="https://lottie.host/fee05fab-f190-4114-9d3b-64686a71d866/gT6kLhWsai.lottie"
                                    loop
                                    autoplay
                                    className="w-full h-full object-contain scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK UTIL SECTION */}
            <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f9fa] border-t border-black/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="text-center mb-12 sm:mb-24">
                        <div className="inline-flex items-center gap-3 bg-[#00193c] px-4 sm:px-5 py-2 rounded-full mb-6 sm:mb-8 shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-default">
                            <div className="w-2 h-2 rounded-full bg-[#caf300] animate-pulse"></div>
                            <span className="text-[0.5625rem] sm:text-[0.625rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] font-label text-[#caf300]">Utility Hub</span>
                        </div>
                        <h2 className="font-headline font-black text-4xl sm:text-6xl lg:text-9xl text-[#00193c] tracking-tightest leading-none uppercase">Tools.</h2>
                        <p className="mt-4 sm:mt-8 text-[#64748b] text-base sm:text-xl lg:text-3xl max-w-2xl mx-auto font-medium leading-[1.3] font-body opacity-60 italic lowercase">
                            Institutional logic engines for real-time asset navigation.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {tools.map((f, i) => (
                            <Link
                                key={i}
                                to={f.link}
                                className="group bg-white p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-black/5 hover:border-[#caf300] transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[1.25rem] sm:rounded-[1.5rem] bg-[#f8f9fa] flex items-center justify-center mb-6 sm:mb-10 group-hover:bg-[#00193c] group-hover:text-[#caf300] transition-all duration-500">
                                    {f.icon}
                                </div>
                                <h3 className="font-headline font-black text-lg sm:text-xl text-[#00193c] mb-3 sm:mb-4 tracking-tight">{f.title}</h3>
                                <p className="text-[0.75rem] sm:text-[0.8rem] font-medium leading-relaxed text-[#64748b] mb-4 sm:mb-6">{f.desc}</p>
                                <div className="flex items-center gap-3 text-[0.55rem] sm:text-[0.6rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#29695b] group-hover:translate-x-2 transition-all">
                                    Launch Tool <ArrowRight size={14} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTELLIGENCE SECTION */}
            <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="flex flex-col lg:flex-row items-end justify-between mb-12 sm:mb-24 gap-6">
                        <div className="lg:w-2/3 text-left">
                            <p className="text-[0.625rem] font-black uppercase tracking-[0.4em] text-[#29695b] mb-4">Sovereign Data Streams</p>
                            <h2 className="font-headline font-black text-3xl sm:text-5xl lg:text-7xl text-[#00193c] tracking-tightest leading-none">Market <br />Intelligence.</h2>
                        </div>
                        <p className="lg:w-1/3 text-[#64748b] text-sm sm:text-lg font-medium leading-relaxed">
                            Quantum-level insights into global asset vectors and digital sentiment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
                        {intelligence.map((f, i) => (
                            <Link
                                key={i}
                                to={f.link}
                                className="group flex flex-col bg-[#f8f9fa] p-8 sm:p-12 rounded-[2.5rem] border border-black/5 hover:bg-[#00193c] transition-all duration-500"
                            >
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#29695b] group-hover:bg-[#caf300] group-hover:text-[#00193c] transition-colors">{f.icon}</div>
                                    <ArrowUpRight className="text-black/10 group-hover:text-[#caf300] transition-colors" size={24} />
                                </div>
                                <h3 className="font-headline font-black text-xl sm:text-2xl text-[#00193c] group-hover:text-white mb-4 tracking-tighter">{f.title}</h3>
                                <p className="text-[0.8rem] font-medium leading-relaxed text-[#64748b] group-hover:text-white/60 mb-8">{f.desc}</p>
                                <div className="mt-auto pt-6 border-t border-black/5 group-hover:border-white/10">
                                    <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#29695b] group-hover:text-[#caf300]">View Analysis Node</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ENGINEERING HUB */}
            <section className="bg-[#00193c] py-16 sm:py-24 lg:py-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 sm:gap-3 border border-[#caf300]/20 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-10">
                            <Code2 size={14} className="text-[#caf300] sm:w-4 sm:h-4" />
                            <span className="text-[0.5625rem] sm:text-[0.625rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#caf300]">Dev Sector Deployment</span>
                        </div>
                        <h2 className="font-headline text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 sm:mb-10 tracking-tightest leading-[0.9]">Custom <br />Engineering.</h2>
                        <p className="text-white/40 text-base sm:text-xl lg:text-2xl font-medium leading-relaxed mb-10 sm:mb-16 max-w-xl">
                            We architect high-fidelity digital solutions for businesses requiring <span className="text-[#caf300]">Sovereign Web Apps</span>, custom Mobile ecosystems, and AI integrations.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                            {[
                                { t: 'Web Development', i: <Laptop size={18} /> },
                                { t: 'Mobile Engineering', i: <Smartphone size={18} /> },
                                { t: 'AI Logic Engines', i: <Layers size={18} /> },
                                { t: 'Sovereign UI/UX', i: <Zap size={18} /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 sm:gap-4 bg-white/5 border border-white/10 px-4 sm:px-6 py-4 sm:py-5 rounded-[1.25rem] sm:rounded-[1.5rem] hover:bg-white/10 transition-all cursor-default">
                                    <div className="text-[#caf300]">{item.i}</div>
                                    <span className="text-white font-headline font-black text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.15em] sm:tracking-[0.2em]">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-white/5 border border-white/10 rounded-[2rem] sm:rounded-[4rem] p-8 sm:p-12 lg:p-20 relative overflow-hidden backdrop-blur-xl group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#caf300]/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-[#caf300]/20 transition-all"></div>
                            <h4 className="font-headline font-black text-white text-2xl sm:text-3xl mb-6 sm:mb-10 tracking-tight">Need a custom desk?</h4>
                            <p className="text-white/60 mb-8 sm:mb-12 font-medium leading-relaxed text-sm sm:text-base">
                                Our desk specialized in building high-performance logic engines and aesthetic dashboards tailored to institutional standards.
                            </p>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-4 sm:gap-6 bg-[#caf300] text-[#00193c] px-6 sm:px-10 py-4 sm:py-6 rounded-[1.25rem] sm:rounded-[1.5rem] font-headline font-black text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.3em] sm:tracking-[0.4em] shadow-xl hover:shadow-[0_0_30px_rgba(202,243,0,0.3)] transition-all"
                            >
                                Hire My Engineering Desk <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
