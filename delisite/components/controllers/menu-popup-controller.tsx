"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FloatingCard } from "@/components/popup/floating-card";

const FIRST_DELAY = 10_000;        // 10 seconds
const REPEAT_DELAY = 150_000;      // 2 min 30 seconds

export function MenuPopupController() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(false);

  // Only show on homepage (adjust if needed)
  const shouldShowOnThisPage = pathname === "/";

  // Clear any pending timer. Safe to call repeatedly.
  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Schedule a single popup after `delay` ms. Clearing first guarantees we
  // never have two timers racing (which could open the popup twice).
  const scheduleOpen = useCallback(
    (delay: number) => {
      clearTimer();
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        if (mountedRef.current) setOpen(true);
      }, delay);
    },
    [clearTimer]
  );

  useEffect(() => {
    // Track mount so timer callbacks never set state after unmount. This
    // effect (with an empty dep array) also survives Strict Mode's
    // double-invoke: the cleanup flips the flag off between runs.
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!shouldShowOnThisPage) return;

    // First popup after 10 seconds.
    scheduleOpen(FIRST_DELAY);

    // Cleanup on unmount / navigation clears the pending timer, preventing
    // leaks and duplicate popups under Strict Mode re-invocation.
    return clearTimer;
  }, [shouldShowOnThisPage, scheduleOpen, clearTimer]);

  const handleClose = useCallback(() => {
    setOpen(false);
    // Schedule the next popup after close.
    scheduleOpen(REPEAT_DELAY);
  }, [scheduleOpen]);

  if (!shouldShowOnThisPage) return null;

  return open ? <FloatingCard onClose={handleClose} /> : null;
}
