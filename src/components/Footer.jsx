import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#00193c] w-full border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                    <div className="font-headline font-black text-2xl text-[#caf300] tracking-tighter">
                        XtraProfit
                    </div>
                    <p className="font-body text-[0.625rem] leading-relaxed text-white/40 uppercase tracking-[0.2em] font-black">
                        © 2024 XtraProfit Deployment. <br />
                        Data is for informational purposes. <br />
                        Sovereign Analysis Engineering.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {['Terms of Service', 'Privacy Policy', 'Risk Disclosure', 'Cookie Settings'].map((link, i) => (
                        <Link
                            key={i}
                            className="font-headline text-[0.6875rem] font-black uppercase tracking-[0.3em] text-white/40 hover:text-[#caf300] transition-colors"
                            to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
