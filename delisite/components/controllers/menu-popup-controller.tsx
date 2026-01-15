"use client";

const FIRST_DELAY = 10_000;        // 10 seconds
const REPEAT_DELAY = 150_000; 

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FloatingCard } from "@/components/popup/floating-card";

export function MenuPopupController() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Only show on homepage (adjust if needed)
  const shouldShowOnThisPage = pathname === "/";

  useEffect(() => {
    if (!shouldShowOnThisPage) return;

    // First popup after 10 seconds
    timeoutRef.current = setTimeout(() => {
      setOpen(true);
    }, FIRST_DELAY);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [shouldShowOnThisPage]);

  const handleClose = () => {
    setOpen(false);

    // Schedule next popup after close
    timeoutRef.current = setTimeout(() => {
      setOpen(true);
    }, REPEAT_DELAY);
  };

  if (!shouldShowOnThisPage) return null;

  return open ? <FloatingCard onClose={handleClose} /> : null;
}