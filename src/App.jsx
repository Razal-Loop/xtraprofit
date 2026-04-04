import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profit from './pages/Profit';
import Currency from './pages/Currency';
import Crypto from './pages/Crypto';
import Gold from './pages/Gold';
import News from './pages/News';
import Services from './pages/Services';
import Legal from './pages/Legal';
import EMI from './pages/EMI';
import Investment from './pages/Investment';
import Tools from './pages/Tools';

// Placeholder components for other pages
const Placeholder = ({ name }) => (
    <div className="flex items-center justify-center min-h-[60vh] flex-col gap-4">
        <h2 className="text-3xl font-headline font-bold text-primary">{name} coming soon</h2>
        <p className="text-on-surface-variant">We are integrating institutional data feeds for this section.</p>
    </div>
);

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="tools">
                    <Route index element={<Tools />} />
                    <Route path="profit" element={<Profit />} />
                    <Route path="emi" element={<EMI />} />
                    <Route path="investment" element={<Investment />} />
                    <Route path="currency" element={<Currency />} />
                </Route>
                <Route path="crypto" element={<Crypto />} />
                <Route path="metals" element={<Gold />} />
                <Route path="news" element={<News />} />
                <Route path="services" element={<Services />} />
                <Route path="terms-of-service" element={<Legal section="terms" />} />
                <Route path="privacy-policy" element={<Legal section="privacy" />} />
                <Route path="risk-disclosure" element={<Legal section="risk" />} />
                <Route path="cookie-settings" element={<Legal section="cookies" />} />
                <Route path="*" element={<Placeholder name="Page Not Found" />} />
            </Route>
        </Routes>
    );
}

export default App;
