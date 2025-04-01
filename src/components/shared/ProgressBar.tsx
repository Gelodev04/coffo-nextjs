"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Customize NProgress styles
NProgress.configure({ showSpinner: false, speed: 500 });

function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Start NProgress when the page changes (path or search params)
    NProgress.start();

    // Wait for some time before stopping NProgress
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    // Cleanup: clear the timer and stop NProgress if the component unmounts
    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname, searchParams]);

  return null;
}

export default function ProgressBarWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProgressBar />
    </Suspense>
  );
}
