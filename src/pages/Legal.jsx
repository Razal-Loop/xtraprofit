import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react';
import { Shield, FileText, AlertTriangle, Cookie, ArrowLeft, ChevronRight, Lock, Scale, Eye, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const Legal = ({ section = 'terms' }) => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(section);

    useEffect(() => {
        // Sync active tab with route segments if necessary
        const path = location.pathname;
        if (path.includes('terms')) setActiveTab('terms');
        else if (path.includes('privacy')) setActiveTab('privacy');
        else if (path.includes('risk')) setActiveTab('risk');
        else if (path.includes('cookie')) setActiveTab('cookies');
    }, [location]);

    const tabs = [
        { id: 'terms', label: 'Terms of Service', icon: <FileText size={18} />, color: 'blue' },
        { id: 'privacy', label: 'Privacy Policy', icon: <Shield size={18} />, color: 'green' },
        { id: 'risk', label: 'Risk Disclosure', icon: <AlertTriangle size={18} />, color: 'yellow' },
        { id: 'cookies', label: 'Cookie Settings', icon: <Cookie size={18} />, color: 'purple' }
    ];

    const content = {
        terms: {
            title: "Institutional Terms of Service",
            subtitle: "Global Access Governance & Sovereign Protocol",
            icon: <Scale className="text-[#29695b]" size={32} />,
            sections: [
                {
                    h: "1. Access License",
                    p: "XtraProfit grants you a limited, non-transferable license to access the sovereign dashboard systems. Any attempt to modify, decompile, or otherwise reverse-engineer our proprietary visualization logic is strictly prohibited."
                },
                {
                    h: "2. Visual Accuracy benchmarks",
                    p: "While we strive for absolute technical precision through our real-time API integrations (Gold, Currency, Crypto), all data provided is for institutional benchmarking and informational purposes. XtraProfit does not guarantee 100% uptime of third-party market data feeds."
                },
                {
                    h: "3. Operational Responsibility",
                    p: "Users are solely responsible for all financial and strategic decisions resulting from the use of our calculators and trackers. XtraProfit is a software engineering deployment, not a registered investment advisor."
                }
            ]
        },
        privacy: {
            title: "Data Privacy Protocol",
            subtitle: "Absolute Sovereignty & Minimal Footprint",
            icon: <Lock className="text-[#29695b]" size={32} />,
            sections: [
                {
                    h: "1. Zero-Retention Logic",
                    p: "We operate on a zero-retention foundation. Your financial calculations, asset tracking data, and fiscal projections are processed client-side and are not logged in our persistent databases."
                },
                {
                    h: "2. Inquiry Encryption",
                    p: "Project inquiries submitted via the Services Desk are encrypted using industry-standard TLS protocols. Your business identity and technical requirements are treated with institutional secrecy."
                },
                {
                    h: "3. Third-Party Syncing",
                    p: "We do not sell, trade, or share user data with external brokers. Any data sync with external APIs (Yahoo Finance, etc.) is performed anonymously to protect your footprint."
                }
            ]
        },
        risk: {
            title: "Risk Disclosure Notice",
            subtitle: "Institutional Boundary & Technical Limitation",
            icon: <Info className="text-[#29695b]" size={32} />,
            sections: [
                {
                    h: "Non-Advisory Status",
                    p: "XtraProfit is and remains a premium technology engineering desk. We specialize in high-fidelity data visualization and software architecture. We do NOT provide trading signals, investment strategies, or financial advice."
                },
                {
                    h: "Market Volatility",
                    p: "Financial markets, including Precious Metals and Cryptocurrency, are subject to extreme volatility. The institutional benchmarks provided in our apps are indicators, not guarantees of performance."
                }
            ]
        },
        cookies: {
            title: "Cookie Infrastructure",
            subtitle: "Session Integrity & Performance Anchors",
            icon: <Cookie className="text-[#29695b]" size={32} />,
            sections: [
                {
                    h: "1. Session Management",
                    p: "We use strictly necessary cookies to maintain your application session state and ensure the dashboard remains responsive across your navigation."
                },
                {
                    h: "2. Performance Tracking",
                    p: "Anonymous performance cookies help us optimize our 'Sovereign' visual engine for your specific browser and hardware configuration."
                }
            ]
        }
    };

    return (
        <div className="bg-[#f8f9fa] min-h-screen pt-24 pb-32">
            <Helmet>
                <title>Terms of Service & Privacy Policy | XtraProfit Governance</title>
                <meta name="description" content="Review XtraProfit's Terms of Service, Privacy Policy, Risk Disclosure, and Cookie Infrastructure in our institutional Governance Protocol." />
            </Helmet>
            <div className="max-w-7xl mx-auto px-8">
                {/* Back Link */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-3 text-[#00193c] hover:text-[#29695b] transition-all mb-16 group"
                >
                    <div className="w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center group-hover:bg-[#00193c] group-hover:text-white transition-all shadow-sm">
                        <ArrowLeft size={14} />
                    </div>
                    <span className="text-[0.625rem] font-black uppercase tracking-[0.4em]">Back to Hub</span>
                </Link>

                <div className="flex flex-col lg:flex-row gap-20">
                    {/* SIDEBAR NAVIGATION */}
                    <aside className="lg:w-1/3">
                        <h1 className="font-headline text-5xl font-black text-[#00193c] mb-10 tracking-tightest leading-[0.85]">
                            Terms of Service <br /><span className="text-[#29695b]">& Privacy Policy.</span>
                        </h1>
                        <p className="text-[#64748b] text-lg font-medium leading-relaxed mb-16 max-w-sm">
                            Review our official Terms of Service, Privacy Policy, and Risk Disclosure protocols. Understand the institutional benchmarks and governance of the XtraProfit platform.
                        </p>

                        <nav className="flex flex-col gap-3">
                            {tabs.map((tab) => (
                                <Link
                                    key={tab.id}
                                    to={`/${tab.id === 'terms' ? 'terms-of-service' : tab.id === 'privacy' ? 'privacy-policy' : tab.id === 'risk' ? 'risk-disclosure' : 'cookie-settings'}`}
                                    className={cn(
                                        "flex items-center justify-between p-6 rounded-[1.5rem] border transition-all duration-300 group",
                                        activeTab === tab.id
                                            ? "bg-[#00193c] border-[#00193c] text-white shadow-xl translate-x-2"
                                            : "bg-white border-black/5 text-[#00193c]/60 hover:bg-[#f1f5f9] hover:text-[#00193c]"
                                    )}
                                >
                                    <div className="flex items-center gap-5">
                                        <div className={cn(
                                            "w-10 h-10 rounded-[1rem] flex items-center justify-center transition-all",
                                            activeTab === tab.id ? "bg-white/10 text-[#caf300]" : "bg-[#f8f9fa] text-[#00193c]"
                                        )}>
                                            {tab.icon}
                                        </div>
                                        <span className="font-headline font-black text-xs uppercase tracking-[0.2em]">{tab.label}</span>
                                    </div>
                                    <ChevronRight size={16} className={cn("transition-all", activeTab === tab.id ? "translate-x-1 opacity-100" : "opacity-0")} />
                                </Link>
                            ))}
                        </nav>
                    </aside>

                    {/* CONTENT AREA */}
                    <main className="lg:w-2/3">
                        <div className="bg-white p-12 lg:p-20 rounded-[3.5rem] border border-black/5 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#caf300]/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                            {/* ACTIVE TAB CONTENT */}
                            <div key={activeTab} className="animate-in fade-in duration-700 slide-in-from-bottom-5">
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="w-20 h-20 rounded-[2rem] bg-[#f8f9fa] flex items-center justify-center shadow-inner">
                                        {content[activeTab].icon}
                                    </div>
                                    <div>
                                        <p className="text-[0.625rem] font-black uppercase tracking-[0.5em] text-[#29695b] mb-2">{content[activeTab].subtitle}</p>
                                        <h2 className="font-headline text-3xl font-black text-[#00193c] tracking-tight">{content[activeTab].title}</h2>
                                    </div>
                                </div>

                                <div className="space-y-16">
                                    {content[activeTab].sections.map((sec, i) => (
                                        <div key={i} className="group">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-8 h-1 bg-[#caf300] rounded-full group-hover:w-16 transition-all duration-500"></div>
                                                <h3 className="font-headline font-black text-xs uppercase tracking-[0.25em] text-[#00193c]">{sec.h}</h3>
                                            </div>
                                            <p className="text-[#64748b] text-base lg:text-lg font-medium leading-[1.8] pl-12 border-l border-black/5 -ml-px">
                                                {sec.p}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-24 pt-12 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-8">
                                    <div className="flex items-center gap-3">
                                        <Shield size={16} className="text-[#29695b]" />
                                        <span className="text-[0.5625rem] font-black uppercase tracking-[0.3em] text-[#00193c]/40">Last Verified Protocol: Oct 2024</span>
                                    </div>
                                    <button
                                        className="bg-[#00193c] text-[#caf300] px-8 py-4 rounded-[1.25rem] font-headline font-black text-[0.6rem] uppercase tracking-[0.3em] shadow-xl hover:bg-[#29695b] hover:text-white transition-all active:scale-95"
                                        onClick={() => window.print()}
                                    >
                                        Print Document
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Legal;
