import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Currency', path: '/currency' },
        { name: 'Profit', path: '/profit' },
        { name: 'Crypto', path: '/crypto' },
        { name: 'Metals', path: '/metals' },
        { name: 'News', path: '/news' },
        { name: 'Services', path: '/services' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-[100] transition-all duration-500",
                scrolled
                    ? "bg-white/90 backdrop-blur-xl py-3 border-b border-black/5 shadow-lg"
                    : "bg-transparent py-6"
            )}
        >
            <nav className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 bg-[#00193c] rounded-[0.85rem] flex items-center justify-center text-[#caf300] shadow-xl group-hover:scale-105 transition-transform">
                        <Terminal size={18} />
                    </div>
                    <span className="text-xl font-black tracking-tightest text-[#00193c] font-headline">
                        XtraProfit<span className="text-[#29695b]">.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-6 bg-black/5 px-5 py-2 rounded-full border border-black/5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "text-[0.625rem] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-[#00193c]",
                                    location.pathname === link.path
                                        ? "text-[#00193c]"
                                        : "text-[#64748b]"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2.5 bg-[#00193c] text-white rounded-xl shadow-lg active:scale-90 transition-all font-body"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Nav Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-[70px] bg-white z-[90] p-8 animate-in slide-in-from-top-3 duration-300 flex flex-col gap-5 h-screen border-t border-black/5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                                "text-2xl font-black font-headline tracking-tighter py-3 border-b border-black/5",
                                location.pathname === link.path
                                    ? "text-[#00193c]"
                                    : "text-[#cbd5e1]"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-6">
                        <Link
                            to="/services"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full bg-[#00193c] text-white py-5 rounded-[1.25rem] text-[0.625rem] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3 shadow-xl"
                        >
                            Contact Desk <ArrowUpRight size={16} className="text-[#caf300]" />
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
