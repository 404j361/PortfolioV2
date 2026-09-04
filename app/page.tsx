"use client";
import { useEffect } from "react";
import { Achievement, Intro, Skills } from "./components";
import RecentProjects from "./components/RecentProjects";
import WorkHistory from "./components/WorkHistory";
import ContactUs from "./components/ContactUs";
import ScrollAtmosphere from "./components/ScrollAtmosphere";

const parchmentStyle =
    "w-full max-w-6xl py-14 md:py-20";

export default function Home() {
    useEffect(() => {
        if (!("scrollRestoration" in window.history)) return;

        window.history.scrollRestoration = "manual";

        const navigation = performance.getEntriesByType("navigation")[0] as
            | PerformanceNavigationTiming
            | undefined;

        if (navigation?.type !== "reload") return;

        if (window.location.hash) {
            window.history.replaceState(null, "", window.location.pathname + window.location.search);
        }

        const resetScroll = () => {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        };

        resetScroll();
        requestAnimationFrame(resetScroll);
        window.setTimeout(resetScroll, 80);
    }, []);

    return (
        <main className="shell relative min-h-dvh overflow-hidden px-4 pt-24 md:px-8">
            <div className="pointer-events-none fixed left-1/2 top-20 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(97,244,255,0.18),transparent_68%)] blur-3xl" />
            <div className="pointer-events-none fixed bottom-[-12rem] left-1/2 h-96 w-[54rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(141,123,255,0.17),transparent_68%)] blur-3xl" />
            <ScrollAtmosphere />

            <div className="relative z-10 mx-auto flex w-full flex-col items-center">
                <Intro parchmentStyle={parchmentStyle} />
                <Skills parchmentStyle={parchmentStyle} />
                <RecentProjects parchmentStyle={parchmentStyle} />
                <Achievement parchmentStyle={parchmentStyle} />
                <WorkHistory parchmentStyle={parchmentStyle} />
                <ContactUs parchmentStyle={parchmentStyle} />
            </div>
        </main>
    );
}
