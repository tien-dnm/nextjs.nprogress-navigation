"use client";
import NProgress from "nprogress";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

NProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 500,
});

export default function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    NProgress.done(true);
  }, [pathname, searchParams]);
  return null;
}
