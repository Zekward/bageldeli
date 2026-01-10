"use client";
import { useEffect } from "react";

export default function VisitorTracker() {
    useEffect(() => {
        let visitorId = localStorage.getItem("visitor_id")

        if (!visitorId) {
            visitorId = crypto.randomUUID();
            localStorage.setItem("visitor_id", visitorId);
        }

        fetch("/api/track-visit", {
            method: "POST",
            headers: { "Content_Type": "application/json" },
            body: JSON.stringify({
                visitorId,
                source: "website",
            }),
        });
    }, []);

    return null;
}