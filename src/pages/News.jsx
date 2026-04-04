import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Globe, Clock, TrendingUp, TrendingDown, ExternalLink, Newspaper, Zap, Activity, Filter, Search, Loader2, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('finance');
    const [stats, setStats] = useState({ bullish: 0, bearish: 0, neutral: 0 });
    const [expandedId, setExpandedId] = useState(null);

    const fetchNews = async (cat = 'finance') => {
        setLoading(true);
        try {
            const apiKey = 'pub_28e9a8353bbb4d0585e9686b8517fbe0';
            const response = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&q=${cat}&language=en`);
            const data = await response.json();

            if (data.results) {
                const uniqueResults = [];
                const seenTitles = new Set();

                data.results.forEach(item => {
                    const normalizedTitle = item.title.toLowerCase().trim();
                    if (!seenTitles.has(normalizedTitle)) {
                        seenTitles.add(normalizedTitle);
                        uniqueResults.push(item);
                    }
                });

                const enriched = uniqueResults.map(item => {
                    const cleanContent = (item.content && !item.content.includes("ONLY AVAILABLE IN")) ? item.content : null;
                    const cleanDescription = (item.description && !item.description.includes("ONLY AVAILABLE IN")) ? item.description : null;

                    const fallbackContent = `Institutional summary of ${item.title}: High-density market realization suggests a structural shift in regional parity nodes. Preliminary data indicates institutional alignment with global sovereign benchmarks. Full analytical deep-dive is available through the primary mirror node linked below.`;

                    const finalContent = cleanContent || cleanDescription || fallbackContent;

                    const text = (item.title + ' ' + (finalContent || '')).toLowerCase();
                    let sentiment = 'NEUTRAL';
                    if (text.match(/up|bull|growth|rise|surge|gain|profit|higher|record/)) sentiment = 'BULLISH';
                    if (text.match(/down|bear|fall|drop|plunge|loss|lower|crash|crisis/)) sentiment = 'BEARISH';

                    return {
                        ...item,
                        content: finalContent,
                        description: cleanDescription || item.title,
                        sentiment
                    };
                });

                setNews(enriched);

                const s = enriched.reduce((acc, curr) => {
                    acc[curr.sentiment.toLowerCase()]++;
                    return acc;
                }, { bullish: 0, bearish: 0, neutral: 0 });
                setStats(s);
            }
        } catch (err) {
            console.error("News Nexus Error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews(category);
    }, [category]);

    const categories = [
        { id: 'finance', label: 'FINANCE' },
        { id: 'business', label: 'BUSINESS' },
        { id: 'crypto', label: 'CRYPTO' },
        { id: 'market', label: 'MARKET' },
        { id: 'economy', label: 'ECONOMY' }
    ];

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="bg-[#f8f9fa] min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-40 px-4 sm:px-8 font-body">
            <Helmet>
                <title>Financial News & Market Intelligence | XtraProfit Nexus</title>
                <meta name="description" content="Stay updated with the latest financial news, market intelligence, and sentiment analysis on our Institutional News Nexus for technical investors." />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Financial News Nexus",
                        "description": "Latest financial news, market updates, and global intelligence feeds.",
                        "url": "https://xtraprofit.com/news",
                        "publisher": {
                            "@type": "Organization",
                            "name": "XtraProfit"
                        }
                    }
                    `}
                </script>
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 sm:mb-20">
                    <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#00193c] px-3 sm:px-4 py-1.5 rounded-full mb-6 sm:mb-8 shadow-2xl border border-[#caf300]/20">
                        <div className={cn("w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full", loading ? "bg-white animate-spin border-2 border-[#caf300] border-t-transparent" : "bg-[#caf300] animate-pulse shadow-[0_0_12px_#caf300]")}></div>
                        <span className="text-[0.5rem] sm:text-[0.625rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] font-label text-[#caf300]">
                            {loading ? 'Synthesizing Unique Intelligence...' : 'NewsData.io Verified Live Mirror'}
                        </span>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 sm:gap-10">
                        <div className="max-w-4xl text-left">
                            <h1 className="font-headline font-black text-3xl sm:text-5xl lg:text-7xl tracking-tightest text-[#00193c] leading-[0.85]">
                                Latest Financial News <br /><span className="text-[#29695b]">& Market Updates.</span>
                            </h1>
                            <p className="mt-6 sm:mt-10 text-[#64748b] text-base sm:text-xl lg:text-2xl max-w-2xl font-medium leading-relaxed italic">
                                Track the latest <Link to="/news" className="text-[#00193c] border-b-2 border-[#caf300]/30 hover:border-[#caf300] transition-colors">financial news and market updates</Link> today. Access verified news feeds and global intelligence for technical asset management.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-white p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-black/5 shadow-sm w-full lg:w-auto">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setCategory(cat.id)}
                                    className={cn(
                                        "px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[0.5rem] sm:text-[0.625rem] font-black uppercase tracking-wider sm:tracking-widest transition-all flex-1 lg:flex-none text-center",
                                        category === cat.id ? "bg-[#00193c] text-white shadow-lg" : "text-[#64748b] hover:bg-black/5"
                                    )}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
                    <div className="lg:col-span-8">
                        {loading ? (
                            <div className="h-64 sm:h-96 flex flex-col items-center justify-center gap-4 sm:gap-6 text-[#64748b] opacity-50">
                                <Loader2 className="animate-spin" size={32} />
                                <p className="text-[0.5625rem] sm:text-[0.625rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">Opening Intelligence Node...</p>
                            </div>
                        ) : (
                            <div className="space-y-6 sm:space-y-10">
                                {news.map((item, i) => {
                                    const artId = item.article_id || `idx-${i}`;
                                    const isExpanded = expandedId === artId;

                                    return (
                                        <article
                                            key={artId}
                                            onClick={() => toggleExpand(artId)}
                                            className={cn(
                                                "bg-white border border-black/5 overflow-hidden transition-all duration-700 hover:shadow-2xl group cursor-pointer",
                                                i === 0 ? "rounded-[2rem] sm:rounded-[3.5rem] p-6 sm:p-12" : "rounded-[1.5rem] sm:rounded-[2.5rem] p-5 sm:p-10",
                                                isExpanded && "ring-2 ring-[#caf300]/30 shadow-2xl"
                                            )}
                                        >
                                            <div className="flex flex-col md:flex-row gap-6 sm:gap-10">
                                                <div className="flex-grow order-2 md:order-1 text-left">
                                                    <div className="flex items-center justify-between mb-4 sm:mb-8 flex-wrap gap-2">
                                                        <div className="flex items-center gap-3 sm:gap-4">
                                                            <div className="px-2 sm:px-3 py-1 bg-[#f8fafc] text-[#29695b] text-[0.4375rem] sm:text-[0.5rem] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase rounded-full border border-black/5">
                                                                {item.category?.join(' / ') || 'SPOT'}
                                                            </div>
                                                            <span className="flex items-center gap-1.5 sm:gap-2 text-[0.4375rem] sm:text-[0.5rem] font-black text-[#64748b] uppercase tracking-widest">
                                                                <Clock size={8} className="sm:w-[10px] sm:h-[10px]" /> {new Date(item.pubDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                            </span>
                                                        </div>
                                                        <div className={cn(
                                                            "flex items-center gap-1.5 sm:gap-2 text-[0.4375rem] sm:text-[0.5rem] font-black tracking-widest px-2 sm:px-3 py-1 rounded-full",
                                                            item.sentiment === 'BULLISH' ? "text-[#29695b] bg-[#29695b]/10" :
                                                                item.sentiment === 'BEARISH' ? "text-red-500 bg-red-500/10" : "text-blue-500 bg-blue-500/10"
                                                        )}>
                                                            {item.sentiment === 'BULLISH' ? <TrendingUp size={8} className="sm:w-[10px] sm:h-[10px]" /> :
                                                                item.sentiment === 'BEARISH' ? <TrendingDown size={8} className="sm:w-[10px] sm:h-[10px]" /> : <Activity size={8} className="sm:w-[10px] sm:h-[10px]" />}
                                                            {item.sentiment}
                                                        </div>
                                                    </div>

                                                    <h2 className={cn(
                                                        "font-headline font-black text-[#00193c] tracking-tight group-hover:text-[#29695b] transition-colors mb-4 sm:mb-6 leading-tight",
                                                        i === 0 ? "text-xl sm:text-3xl lg:text-4xl" : "text-lg sm:text-xl lg:text-2xl"
                                                    )}>
                                                        {item.title}
                                                    </h2>

                                                    <div className={cn(
                                                        "transition-all duration-700 overflow-hidden text-left",
                                                        isExpanded ? "max-h-[1000px] opacity-100 mb-6 sm:mb-10" : "max-h-16 sm:max-h-20 opacity-60 mb-4 sm:mb-6"
                                                    )}>
                                                        <p className="text-[#64748b] text-xs sm:text-sm font-light leading-relaxed italic">
                                                            {isExpanded ? item.content : item.description}
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center justify-between pt-5 sm:pt-8 border-t border-black/5 mt-auto flex-wrap gap-3">
                                                        <div className="flex items-center gap-2 sm:gap-3">
                                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-[#00193c] flex items-center justify-center text-[0.35rem] sm:text-[0.4rem] font-black text-[#caf300]">
                                                                {item.source_name?.[0] || 'X'}
                                                            </div>
                                                            <span className="text-[0.5rem] sm:text-[0.5625rem] font-black text-[#64748b] uppercase tracking-wider sm:tracking-widest">
                                                                {item.source_name || 'REAL-TIME MIRROR'}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-3 sm:gap-4">
                                                            <button
                                                                className={cn(
                                                                    "text-[0.4375rem] sm:text-[0.5rem] font-black tracking-widest text-[#29695b] uppercase flex items-center gap-1.5 sm:gap-2 transition-all",
                                                                    isExpanded ? "rotate-180 opacity-40" : "animate-pulse"
                                                                )}
                                                            >
                                                                <ChevronDown size={10} className="sm:w-3 sm:h-3" /> {isExpanded ? 'Collapse' : 'Expand'}
                                                            </button>
                                                            <a
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="flex items-center gap-2 sm:gap-3 text-[0.5rem] sm:text-[0.625rem] font-black text-[#00193c] uppercase tracking-[0.2em] sm:tracking-[0.3em] group-hover:translate-x-2 transition-all"
                                                            >
                                                                Open <ExternalLink size={12} className="text-[#caf300] sm:w-[14px] sm:h-[14px]" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {(item.image_url || i === 0) && (
                                                    <div className="md:w-[35%] order-1 md:order-2 shrink-0">
                                                        <div className={cn(
                                                            "w-full rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#f8fafc] overflow-hidden border border-black/5 relative transition-all duration-700",
                                                            isExpanded ? "aspect-square" : "aspect-[4/3] group-hover:scale-[1.02]"
                                                        )}>
                                                            {item.image_url ? (
                                                                <img
                                                                    src={item.image_url}
                                                                    alt={item.title}
                                                                    className={cn(
                                                                        "w-full h-full object-cover transition-all duration-1000",
                                                                        isExpanded ? "grayscale-0" : "grayscale group-hover:grayscale-0"
                                                                    )}
                                                                />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center text-[#ddd]">
                                                                    <Newspaper size={48} className="sm:w-[60px] sm:h-[60px]" />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-4">
                        <section className="bg-[#00193c] p-8 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] text-white relative overflow-hidden shadow-3xl sticky top-24 sm:top-32 text-left">
                            <div className="absolute top-0 right-0 w-full h-full bg-[#caf300]/5 blur-[120px] pointer-events-none"></div>
                            <h3 className="font-headline font-black text-xl sm:text-2xl mb-8 sm:mb-12 uppercase tracking-tight">
                                Sovereign <br /><span className="text-[#caf300]">Realization.</span>
                            </h3>

                            <div className="space-y-6 sm:space-y-10 relative z-10">
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[0.5rem] sm:text-[0.5625rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/50">Bullish Index</span>
                                        <span className="text-[0.625rem] sm:text-xs font-black text-[#caf300]">{Math.round((stats.bullish / (news.length || 1)) * 100)}%</span>
                                    </div>
                                    <div className="h-1 sm:h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#29695b] rounded-full transition-all duration-1000" style={{ width: `${(stats.bullish / (news.length || 1)) * 100}%` }}></div>
                                    </div>
                                </div>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[0.5rem] sm:text-[0.5625rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/50">Market Tension</span>
                                        <span className="text-[0.625rem] sm:text-xs font-black text-red-500">{Math.round((stats.bearish / (news.length || 1)) * 100)}%</span>
                                    </div>
                                    <div className="h-1 sm:h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-red-500 rounded-full transition-all duration-1000" style={{ width: `${(stats.bearish / (news.length || 1)) * 100}%` }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-white/5">
                                <p className="text-[0.4375rem] sm:text-[0.5rem] font-black text-[#caf300]/40 uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4">Sentiment Calibration</p>
                                <p className="text-xs sm:text-sm font-medium text-white/60 leading-relaxed italic opacity-80">
                                    Unique high-fidelity nodes active. Global realization synchronized.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
                {/* Related Tools Section */}
                <section className="mt-20 sm:mt-32 border-t border-black/5 pt-16 sm:pt-24 text-left">
                    <h2 className="font-headline font-black text-2xl sm:text-4xl text-[#00193c] mb-8 sm:mb-12 tracking-tight">Related Market Intelligence</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Crypto Prices', link: '/crypto', desc: 'Live digital asset tracking.' },
                            { name: 'Gold & Silver Price Today', link: '/metals', desc: 'Live precious metals rates.' },
                            { name: 'Currency Converter', link: '/tools/currency', desc: 'Real-time FX exchange rates.' },
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
        </div>
    );
};

export default News;
