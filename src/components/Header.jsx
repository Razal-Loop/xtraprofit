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

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

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
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col gap-4 border-t border-black/5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                                "text-xl sm:text-2xl font-black font-headline tracking-tighter py-3 border-b border-black/5",
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
                            className="w-full bg-[#00193c] text-white py-4 sm:py-5 rounded-[1.25rem] text-[0.625rem] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3 shadow-xl"
                        >
                            Contact Desk <ArrowUpRight size={16} className="text-[#caf300]" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
