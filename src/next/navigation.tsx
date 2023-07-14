"use client";
import {
  AppRouterInstance,
  NavigateOptions,
} from "next/dist/shared/lib/app-router-context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
export default function useNextRouter(): AppRouterInstance {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const push: AppRouterInstance["push"] = (
    href: string,
    options?: NavigateOptions | undefined
  ) => {
    const currentUrl =
      (pathName || "") + (searchParams ? `?${searchParams.toString()}` : "");
    if (href !== currentUrl) {
      NProgress.start();
    }
    router.push(href, options);
  };
  return {
    ...router,
    push,
  };
}
