"use client";
import { useEffect, useRef } from "react";

export default function VisitorTracker() {
    const hasTracked = useRef(false);

    useEffect(() => {
        // Guard against double-firing in React Strict Mode / re-renders.
        if (hasTracked.current) return;
        hasTracked.current = true;

        // No-op safely if the browser APIs aren't available (e.g. SSR edge cases).
        if (typeof window === "undefined") return;

        // Count a visit once per session.
        try {
            if (sessionStorage.getItem("visit_tracked")) return;
        } catch {
            // sessionStorage may be unavailable (privacy mode); continue best-effort.
        }

        let visitorId: string | null = null;
        try {
            visitorId = localStorage.getItem("visitor_id");

            if (!visitorId) {
                visitorId =
                    typeof crypto !== "undefined" && "randomUUID" in crypto
                        ? crypto.randomUUID()
                        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
                localStorage.setItem("visitor_id", visitorId);
            }
        } catch {
            // localStorage unavailable; fall back to an ephemeral id so we never throw.
            visitorId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        }

        try {
            fetch("/api/track-visit", {
                method: "POST",
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    visitorId,
                    source: "website",
                }),
            })
                .then(() => {
                    try {
                        sessionStorage.setItem("visit_tracked", "1");
                    } catch {
                        // ignore
                    }
                })
                .catch(() => {
                    // Fail silently; tracking must never disrupt the user experience.
                });
        } catch {
            // Ignore synchronous fetch failures (e.g. env without fetch).
        }
    }, []);

    return null;
}
