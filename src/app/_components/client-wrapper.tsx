'use client';

import dynamic from 'next/dynamic';

const HeroSectionClient = dynamic(() => import("./hero"), {
    ssr: false,
});

export default function ClientWrapper() {
    return <HeroSectionClient />;
} 