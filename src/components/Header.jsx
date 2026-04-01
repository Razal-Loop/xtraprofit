import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Menu, X, Terminal, ArrowUpRight, ChevronDown, Globe, Calculator, ShieldCheck, Zap, BarChart3, Newspaper, Code2 } from 'lucide-react';

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setIsToolsOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    const toolLinks = [
        { name: 'FX Parity', path: '/currency', icon: <Globe size={14} />, desc: 'Live Currency Conversion' },
        { name: 'EMI Desk', path: '/emi', icon: <ShieldCheck size={14} />, desc: 'Debt Amortization' },
        { name: 'Yield Forecast', path: '/investment', icon: <Zap size={14} />, desc: 'Compound Growth' },
        { name: 'Profit Logic', path: '/profit', icon: <Calculator size={14} />, desc: 'Margin Benchmarking' },
    ];

    const mainNavLinks = [
        { name: 'Crypto', path: '/crypto' },
        { name: 'Metals', path: '/metals' },
        { name: 'News', path: '/news' },
        { name: 'Services', path: '/services' },
    ];

    const isToolActive = toolLinks.some(link => location.pathname === link.path);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-[100] transition-all duration-500",
                scrolled
                    ? "bg-white/90 backdrop-blur-xl py-2.5 sm:py-3 border-b border-black/5 shadow-lg"
                    : "bg-transparent py-4 sm:py-6"
            )}
        >
            <nav className="flex justify-between items-center w-full px-4 sm:px-6 max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#00193c] rounded-[0.85rem] flex items-center justify-center text-[#caf300] shadow-xl group-hover:scale-105 transition-transform">
                        <Terminal size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </div>
                    <span className="text-lg sm:text-xl font-black tracking-tightest text-[#00193c] font-headline">
                        XtraProfit<span className="text-[#29695b]">.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-2 bg-black/5 p-1.5 rounded-full border border-black/5">
                        {/* Tools Dropdown Trigger */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsToolsOpen(true)}
                            onMouseLeave={() => setIsToolsOpen(false)}
                        >
                            <button
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 text-[0.625rem] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-full",
                                    isToolActive || isToolsOpen
                                        ? "bg-[#00193c] text-white"
                                        : "text-[#64748b] hover:text-[#00193c] hover:bg-black/5"
                                )}
                            >
                                Tools <ChevronDown size={14} className={cn("transition-transform duration-300", isToolsOpen && "rotate-180")} />
                            </button>

                            {/* Dropdown Menu */}
                            <div className={cn(
                                "absolute top-full left-0 mt-2 w-64 bg-white rounded-[1.5rem] shadow-2xl border border-black/5 p-3 grid grid-cols-1 gap-1 transition-all duration-300 origin-top-left",
                                isToolsOpen
                                    ? "opacity-100 scale-100 pointer-events-auto"
                                    : "opacity-0 scale-95 pointer-events-none"
                            )}>
                                {toolLinks.map((tool) => (
                                    <Link
                                        key={tool.name}
                                        to={tool.path}
                                        className={cn(
                                            "flex items-center gap-3 p-3 rounded-[1rem] transition-all group/tool",
                                            location.pathname === tool.path
                                                ? "bg-[#caf300]/10 text-[#00193c]"
                                                : "hover:bg-[#f8f9fa] text-[#64748b] hover:text-[#00193c]"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                                            location.pathname === tool.path
                                                ? "bg-[#00193c] text-[#caf300]"
                                                : "bg-black/5 text-[#29695b] group-hover/tool:bg-[#00193c] group-hover/tool:text-[#caf300]"
                                        )}>
                                            {tool.icon}
                                        </div>
                                        <div>
                                            <p className="text-[0.6rem] font-black uppercase tracking-widest leading-none mb-1">{tool.name}</p>
                                            <p className="text-[0.55rem] font-medium opacity-60 leading-none">{tool.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {mainNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "px-4 py-2 text-[0.625rem] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-full",
                                    location.pathname === link.path
                                        ? "bg-[#00193c] text-white"
                                        : "text-[#64748b] hover:text-[#00193c] hover:bg-black/5"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 sm:p-2.5 bg-[#00193c] text-white rounded-xl shadow-lg active:scale-90 transition-all font-body"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Nav Overlay */}
            <div
                className={cn(
                    "lg:hidden fixed inset-0 bg-white z-[90] flex flex-col transition-all duration-300",
                    isMenuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                )}
                style={{ top: scrolled ? '52px' : '60px' }}
            >
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col gap-6 border-t border-black/5">
                    {/* Mobile Tools Section */}
                    <div>
                        <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-[#cbd5e1] mb-6 pl-2">Calculators</p>
                        <div className="grid grid-cols-1 gap-2">
                            {toolLinks.map((tool) => (
                                <Link
                                    key={tool.name}
                                    to={tool.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                        "flex items-center gap-4 p-4 rounded-[1.25rem] transition-all border",
                                        location.pathname === tool.path
                                            ? "bg-[#00193c] text-white border-transparent shadow-xl"
                                            : "bg-[#f8f9fa] text-[#64748b] border-black/5"
                                    )}
                                >
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center",
                                        location.pathname === tool.path ? "bg-[#caf300] text-[#00193c]" : "bg-white text-[#29695b]"
                                    )}>
                                        {tool.icon}
                                    </div>
                                    <span className="text-sm font-black uppercase tracking-widest">{tool.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-[#cbd5e1] mb-6 pl-2">Market Intelligence</p>
                        <div className="grid grid-cols-1 gap-2">
                            {mainNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                        "flex items-center gap-4 p-4 rounded-[1.25rem] transition-all border",
                                        location.pathname === link.path
                                            ? "bg-[#00193c] text-white border-transparent shadow-xl"
                                            : "bg-[#f8f9fa] text-[#64748b] border-black/5"
                                    )}
                                >
                                    <span className="text-sm font-black uppercase tracking-widest pl-4">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto">
                        <Link
                            to="/services"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full bg-[#00193c] text-white py-5 rounded-[1.5rem] text-[0.625rem] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3 shadow-xl"
                        >
                            Hire Engineering Desk <ArrowUpRight size={16} className="text-[#caf300]" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
