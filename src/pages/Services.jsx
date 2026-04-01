import React, { useState } from 'react';
import { Terminal, Codepen, BarChart4, Mail, Phone, MapPin, Laptop, Smartphone, Cpu, Network, Database, Layers, Github, Linkedin, Briefcase, ExternalLink, Code2, Globe, Server, CheckCircle2, CheckCircle, ArrowRight, Loader2, ShieldCheck, Zap } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cn } from '../lib/utils';
import softwareHubImg from '../assets/software-hub.png';

const Services = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const scrollToContact = () => {
        const element = document.getElementById('enquiry-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDeployRequest = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xykbjpyl", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                form.reset();
            } else {
                console.error("Sovereign Node Error: Transmission Denied.");
            }
        } catch (error) {
            console.error("Network Parity Error: Request Lost.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const projects = [
        { name: 'Armour Apparels', link: 'https://armourapparels.com' },
        { name: 'MyMeds Pharmacy Inc.', link: 'https://mymedspharmacyinc.com' },
        { name: 'XtraProfit Sovereign', link: 'https://xtraprofit.com' },
        { name: 'Institutional Desk Deployment', link: '#' },
        { name: 'Global Asset Sync Engine', link: '#' },
        { name: 'LBMA Live Terminal Console', link: '#' }
    ];

    const techStack = [
        'React.js', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS Cloud', 'Docker', 'Kubernetes', 'TensorFlow', 'TypeScript', 'Redux', 'MongoDB'
    ];

    const servicesGrid = [
        {
            title: 'Web Engineering',
            desc: 'Crafting high-speed business websites and ultra-optimized landing pages designed for scale.',
            icon: <Globe className="text-[#29695b]" size={20} />,
            features: ['Institutional Scale', 'Performance Core'],
        },
        {
            title: 'Web Applications',
            desc: 'Building scalable custom tools and interactive dashboards to automate your business workflow.',
            icon: <Laptop className="text-[#29695b]" size={20} />,
            features: ['Custom CRM/ERP Solutions', 'Real-time Databasing'],
        },
        {
            title: 'Mobile Ecosystems',
            desc: 'Native-level solutions for iOS and Android. High-fidelity mobile experiences that extend reach.',
            icon: <Smartphone className="text-[#29695b]" size={20} />,
            features: ['Native Performance', 'Market Penetration'],
        },
        {
            title: 'AI Logic Engines',
            desc: 'Integrating Large Language Models and custom logic into business apps to amplify intelligence.',
            icon: <Cpu className="text-[#29695b]" size={20} />,
            features: ['LLM Implementation', 'Automated Intelligence'],
        },
        {
            title: 'ERP Architecture',
            desc: 'Enterprise systems designed for operational longevity, asset tracking, and full scalability.',
            icon: <Database className="text-[#29695b]" size={20} />,
            features: ['Asset Management', 'Process Engineering'],
        },
        {
            title: 'Middleware & APIs',
            desc: 'Robust connective tissue for modern systems. Secure APIs to bridge the gap between intelligence and UI.',
            icon: <Network className="text-[#29695b]" size={20} />,
            features: ['Secure Data Bridging', 'Institutional APIs'],
        }
    ];

    return (
        <div className="bg-[#f8f9fa] text-[#0f172a] font-body selection:bg-[#caf300]/30 selection:text-[#00193c] leading-relaxed overflow-x-hidden pt-12 sm:pt-16">
            {/* Deployed Labs Marquee */}
            <section className="bg-[#00193c] py-3 sm:py-3.5 overflow-hidden relative border-b border-[#caf300]/10 group/projects z-[60]">
                <div className="hidden sm:flex items-center gap-3 px-4 sm:px-6 absolute left-0 h-full bg-[#00193c] z-20 border-r border-[#caf300]/20">
                    <div className="w-2 h-2 bg-[#caf300] rounded-full animate-pulse shadow-[0_0_10px_#caf300]"></div>
                    <span className="text-[0.5rem] sm:text-[0.5625rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#caf300] whitespace-nowrap">Deployed Labs</span>
                </div>

                <div className="flex whitespace-nowrap py-1">
                    <div className="flex animate-marquee items-center gap-10 sm:gap-20 pl-4 sm:pl-[180px]">
                        {[...projects, ...projects, ...projects].map((project, i) => (
                            <a
                                key={i}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 sm:gap-4 group/item cursor-pointer"
                            >
                                <span className="font-headline font-black text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#caf300]">
                                    {project.name}
                                </span>
                                <ExternalLink size={12} className="text-[#caf300]/30 group-hover/item:text-[#caf300] group-hover/item:translate-x-1 transition-all sm:w-[14px] sm:h-[14px]" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white py-10 sm:py-16 lg:py-32 border-b border-black/5 text-left">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-20">
                        <div className="lg:w-3/5 text-center lg:text-left text-left">
                            <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#00193c] px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8 shadow-2xl">
                                <div className="w-2 h-2 bg-[#caf300] rounded-full animate-pulse shadow-[0_0_10px_#caf300]"></div>
                                <span className="text-[0.5625rem] sm:text-[0.625rem] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#caf300]">Sovereign Tech Desk</span>
                            </div>
                            <h1 className="font-headline text-3xl sm:text-5xl lg:text-7xl font-black text-[#00193c] leading-[0.85] mb-6 sm:mb-10 tracking-tightest text-left">
                                Engineering <br /><span className="text-[#29695b]">Digital Sovereignty.</span>
                            </h1>
                            <p className="text-[#64748b] text-base sm:text-xl lg:text-2xl max-w-2xl mb-8 sm:mb-12 font-medium leading-relaxed text-left">
                                Deploying <span className="font-black text-[#00193c]">institutional-grade</span> software systems and premium dashboard logic for modern capital stakeholders.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10">
                                <button
                                    onClick={scrollToContact}
                                    className="w-full sm:w-auto bg-[#00193c] hover:bg-[#002d62] text-white px-8 sm:px-12 py-5 sm:py-6 rounded-[1.25rem] sm:rounded-[1.5rem] font-headline font-black text-[0.625rem] sm:text-[0.6875rem] uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 whitespace-nowrap"
                                >
                                    Hire My Desk <ArrowRight size={18} />
                                </button>
                                <div className="flex items-center gap-6 sm:gap-8">
                                    <a href="https://github.com/Razal-Loop" target="_blank" rel="noopener noreferrer" className="text-[#00193c] hover:text-[#29695b] transition-all hover:scale-110"><Github size={24} className="sm:w-7 sm:h-7" /></a>
                                    <a href="https://www.linkedin.com/in/razal-ali-8b3693379" target="_blank" rel="noopener noreferrer" className="text-[#00193c] hover:text-[#0077b5] transition-all hover:scale-110"><Linkedin size={24} className="sm:w-7 sm:h-7" /></a>
                                    <a href="https://www.upwork.com/freelancers/~01be37a636d42a689e" target="_blank" rel="noopener noreferrer" className="text-[#00193c] hover:text-[#14a800] transition-all hover:scale-110"><Briefcase size={24} className="sm:w-7 sm:h-7" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/5 relative w-full">
                            <div className="bg-[#caf300]/10 blur-[120px] absolute inset-0 rounded-full pointer-events-none"></div>
                            <div className="relative w-full rounded-[2rem] sm:rounded-[3rem] border border-black/5 overflow-hidden flex items-center justify-center h-[280px] sm:h-[350px] md:h-[500px] shadow-3xl bg-white">
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

            {/* Tech Stack Marquee */}
            <section className="bg-[#00193c] py-3 sm:py-4 overflow-hidden relative border-b border-[#caf300]/10 group/marquee z-20">
                <div className="hidden sm:flex items-center gap-3 sm:gap-4 px-4 sm:px-8 absolute left-0 h-full bg-[#00193c] z-20 border-r border-[#caf300]/20">
                    <div className="w-2 h-2 bg-[#caf300] rounded-full animate-ping"></div>
                    <span className="text-[0.5625rem] sm:text-[0.625rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#caf300]">Stack Node</span>
                </div>

                <div className="flex whitespace-nowrap py-1">
                    <div className="flex animate-marquee items-center gap-12 sm:gap-24 pl-4 sm:pl-[180px]">
                        {[...techStack, ...techStack].map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 sm:gap-4 inline-flex">
                                <span className="font-headline font-black text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#caf300]">
                                    {tech}
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#29695b]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 sm:py-24 lg:py-48 bg-[#f8f9fa] overflow-hidden text-left">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="max-w-4xl mb-12 sm:mb-24">
                        <h2 className="font-headline text-3xl sm:text-5xl lg:text-7xl font-black text-[#00193c] mb-6 sm:mb-10 tracking-tightest leading-[0.9]">Design. Code. <br /><span className="text-[#29695b] italic">Architect Profit.</span></h2>
                        <p className="text-[#64748b] text-base sm:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl">
                            Our development workflow is centered on <span className="font-black text-[#00193c]">absolute technical precision</span> and pixel-perfect scalability.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
                        {servicesGrid.map((service, i) => (
                            <div key={i} className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-white border border-black/5 transition-all duration-700 hover:translate-y-[-10px] hover:shadow-2xl relative overflow-hidden group flex flex-col items-start sm:items-center lg:items-start text-left sm:text-center lg:text-left h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#caf300]/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-[#caf300]/10 transition-all"></div>
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[1.25rem] sm:rounded-[1.5rem] bg-[#f8fafc] flex items-center justify-center mb-6 sm:mb-10 shadow-inner relative z-10 group-hover:bg-[#00193c] group-hover:text-[#caf300] transition-all">
                                    {service.icon}
                                </div>
                                <h4 className="font-headline text-xl sm:text-2xl font-black tracking-tight text-[#00193c] mb-3 sm:mb-5 relative z-10">
                                    {service.title}
                                </h4>
                                <p className="text-sm sm:text-base font-medium leading-relaxed text-[#64748b] mb-6 sm:mb-10 relative z-10 flex-grow">
                                    {service.desc}
                                </p>
                                <div className="w-full pt-4 sm:pt-6 border-t border-black/5 mb-4 sm:mb-6 relative z-10 text-left"></div>
                                <ul className="space-y-3 sm:space-y-4 relative z-10 w-full text-left">
                                    {service.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 sm:gap-3 text-[0.5625rem] sm:text-[0.625rem] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-none text-[#29695b]">
                                            <div className="w-4 h-4 rounded-full bg-[#29695b]/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={10} className="text-[#29695b]" />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sovereign Stack */}
            <section className="bg-[#00193c] py-16 sm:py-24 lg:py-48 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[#caf300]/5 blur-[150px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
                    <div className="lg:w-1/2">
                        <h2 className="font-headline text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 sm:mb-10 tracking-tightest leading-none">The Sovereign <br /><span className="text-[#caf300]">Stack.</span></h2>
                        <p className="text-white/40 text-base sm:text-lg lg:text-2xl font-medium leading-relaxed mb-10 sm:mb-16 max-w-xl">We deploy modern ecosystems using high-density technical primitives for the digital elite.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                            {['React Native / Expo', 'Node.js / Express', 'Next.js 15 (App Router)', 'PostgreSQL / Supabase', 'Python / AI Logic', 'High-Density APIs'].map((tech, i) => (
                                <div key={i} className="flex items-center gap-3 sm:gap-4 bg-white/5 border border-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-[1rem] sm:rounded-[1.25rem] hover:bg-white/10 transition-all cursor-default w-full">
                                    <CheckCircle size={16} className="text-[#caf300] shrink-0 sm:w-[18px] sm:h-[18px]" />
                                    <span className="text-white font-headline font-black text-[0.6rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em]">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="border border-white/10 rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden lg:translate-x-12 relative shadow-[0_30px_70px_rgba(0,0,0,0.5)] bg-[#001b44] group">
                            <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[600px]">
                                <img
                                    src={softwareHubImg}
                                    alt="Sovereign Software Hub"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#00193c] via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enquiry Form */}
            <section id="enquiry-form" className="py-16 sm:py-24 lg:py-48 px-4 sm:px-8 bg-white">
                <div className="max-w-7xl mx-auto bg-[#00193c] rounded-[2rem] sm:rounded-[3.5rem] p-6 sm:p-12 lg:p-24 shadow-3xl overflow-hidden relative border border-white/5">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-[#caf300]/5 blur-[150px] pointer-events-none"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 relative z-10">
                        <div className="text-left">
                            <h2 className="font-headline text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 sm:mb-10 tracking-tightest leading-[0.85]">Project <br /><span className="text-[#caf300]">Inquiry</span></h2>
                            <p className="text-white/40 text-base sm:text-lg lg:text-2xl font-medium mb-10 sm:mb-16 max-w-md leading-relaxed">Submit technical parameters for sovereign desk build-out. Verified responses in 24h.</p>
                            <div className="space-y-8 sm:space-y-12">
                                <div className="flex items-center gap-4 sm:gap-8 group cursor-default">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[1.25rem] sm:rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#caf300] group-hover:text-[#00193c] transition-all duration-500 shadow-xl shrink-0">
                                        <Mail size={20} className="sm:w-6 sm:h-6" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[0.5625rem] sm:text-[0.625rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#caf300] mb-1">Electronic Mail</p>
                                        <p className="font-headline font-black text-base sm:text-xl text-white tracking-tight border-none outline-none bg-transparent text-left truncate">official.razalali@gmail.com</p>
                                    </div>
                                </div>
                                <a href="https://wa.me/923012345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 sm:gap-8 group cursor-pointer" >
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[1.25rem] sm:rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500 shadow-xl shrink-0">
                                        <Phone size={20} className="sm:w-6 sm:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[0.5625rem] sm:text-[0.625rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#caf300] mb-1">Direct Terminal</p>
                                        <p className="font-headline font-black text-base sm:text-xl text-white tracking-tight border-none outline-none bg-transparent text-left">Chat on WhatsApp</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-6 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-3xl border border-black/5 relative text-left">
                            {isSuccess ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 sm:space-y-10 py-10 sm:py-20 animate-in fade-in zoom-in duration-500">
                                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#29695b]/10 flex items-center justify-center text-[#29695b] animate-bounce">
                                        <ShieldCheck size={36} className="sm:w-12 sm:h-12" />
                                    </div>
                                    <h3 className="font-headline font-black text-2xl sm:text-3xl text-[#00193c] tracking-tightest leading-tight">
                                        Protocol Initialized. <br />
                                        <span className="text-[#29695b]">Request Deployed.</span>
                                    </h3>
                                    <p className="text-[#64748b] font-medium leading-relaxed max-w-xs italic text-sm sm:text-base">
                                        Your technical parameters have been synchronized with the sovereign desk. Expect institutional realization in 24h.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-[0.5625rem] sm:text-[0.625rem] font-black uppercase tracking-[0.3em] text-[#00193c] hover:text-[#29695b] transition-colors"
                                    >
                                        New Inquiry System
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-5 sm:space-y-8" id="project-form" onSubmit={handleDeployRequest}>
                                    <div className="space-y-2 sm:space-y-3">
                                        <label className="block text-[0.5625rem] sm:text-[0.625rem] font-black text-[#00193c] uppercase tracking-[0.3em] sm:tracking-[0.4em] ml-1 sm:ml-2" htmlFor="name">Identity Tag</label>
                                        <input name="name" required className="w-full bg-[#f8f9fa] border-none rounded-[1rem] sm:rounded-[1.25rem] p-4 sm:p-6 lg:p-7 font-bold text-sm sm:text-base focus:ring-4 focus:ring-[#caf300]/20 transition-all outline-none" id="name" placeholder="Full Identity" type="text" />
                                    </div>
                                    <div className="space-y-2 sm:space-y-3">
                                        <label className="block text-[0.5625rem] sm:text-[0.625rem] font-black text-[#00193c] uppercase tracking-[0.3em] sm:tracking-[0.4em] ml-1 sm:ml-2" htmlFor="email">Return Channel</label>
                                        <input name="email" required className="w-full bg-[#f8f9fa] border-none rounded-[1rem] sm:rounded-[1.25rem] p-4 sm:p-6 lg:p-7 font-bold text-sm sm:text-base focus:ring-4 focus:ring-[#caf300]/20 transition-all outline-none" id="email" placeholder="Email Address" type="email" />
                                    </div>
                                    <div className="space-y-2 sm:space-y-3">
                                        <label className="block text-[0.5625rem] sm:text-[0.625rem] font-black text-[#00193c] uppercase tracking-[0.3em] sm:tracking-[0.4em] ml-1 sm:ml-2" htmlFor="budget">Allocation Target ($)</label>
                                        <input name="budget" required className="w-full bg-[#f8f9fa] border-none rounded-[1rem] sm:rounded-[1.25rem] p-4 sm:p-6 lg:p-7 font-bold text-sm sm:text-base focus:ring-4 focus:ring-[#caf300]/20 transition-all outline-none" id="budget" placeholder="Budget (500 - 40000)" type="number" min="500" max="40000" />
                                    </div>
                                    <div className="space-y-2 sm:space-y-3">
                                        <label className="block text-[0.5625rem] sm:text-[0.625rem] font-black text-[#00193c] uppercase tracking-[0.3em] sm:tracking-[0.4em] ml-1 sm:ml-2" htmlFor="message">Parameters</label>
                                        <textarea name="message" required className="w-full bg-[#f8f9fa] border-none rounded-[1rem] sm:rounded-[1.25rem] p-4 sm:p-6 lg:p-7 font-bold text-sm sm:text-base focus:ring-4 focus:ring-[#caf300]/20 transition-all outline-none min-h-[120px] sm:min-h-[150px]" id="message" placeholder="Technical requirements..."></textarea>
                                    </div>
                                    <button
                                        disabled={isSubmitting}
                                        className="w-full bg-[#00193c] text-white py-5 sm:py-8 rounded-[1.25rem] sm:rounded-[1.5rem] font-black text-[0.5625rem] sm:text-[0.625rem] uppercase tracking-[0.4em] sm:tracking-[0.6em] hover:bg-[#29695b] transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-3 sm:gap-4">
                                                <Loader2 size={16} className="animate-spin text-[#caf300] sm:w-[18px] sm:h-[18px]" />
                                                Transmitting Logic...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-3">
                                                <Zap size={16} className="text-[#caf300] group-hover:animate-pulse sm:w-[18px] sm:h-[18px]" />
                                                Deploy Request
                                            </span>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
