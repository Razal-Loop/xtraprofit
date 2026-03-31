import React from 'react';

const Ticker = () => {
    const items = [
        { label: 'GOLD/USD', value: '2,342.10', change: '+0.42%', positive: true },
        { label: 'SILVER', value: '28.45', change: '+1.12%', positive: true },
        { label: 'PLATINUM', value: '985.30', change: '-0.15%', positive: false },
        { label: 'BTC/USD', value: '67,240.15', change: '+2.4%', positive: true },
        { label: 'PKR/USD', value: '278.40', change: '0.00%', positive: true },
    ];

    return (
        <div className="w-full bg-surface-container-highest/30 py-3 overflow-hidden rounded-xl border border-outline-variant/10 mt-12">
            <div className="ticker-wrap flex">
                <div className="ticker-move flex gap-12 items-center px-6">
                    {items.concat(items).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 shrink-0">
                            <span className="font-bold text-sm">{item.label}</span>
                            <span className={item.positive ? 'text-secondary font-medium' : 'text-error font-medium'}>
                                {item.value}
                            </span>
                            <span className={`text-xs ${item.positive ? 'text-secondary' : 'text-error'}`}>
                                {item.change}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ticker;
