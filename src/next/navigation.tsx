"use client";

import {
  AppRouterInstance,
  NavigateOptions,
} from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
export default function useNextRouter(): AppRouterInstance {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentUrl =
    (pathName || "") + (searchParams ? `?${searchParams.toString()}` : "");
  const push: AppRouterInstance["push"] = (
    href: string,
    options?: NavigateOptions | undefined
  ) => {
    if (href !== currentUrl && !href.startsWith("#")) {
      NProgress.start();
    }
    router.push(href, options);
  };
  const back: AppRouterInstance["back"] = () => {
    NProgress.start();
    router.back();
  };
  const replace: AppRouterInstance["replace"] = (
    href: string,
    options?: NavigateOptions | undefined
  ) => {
    if (href !== currentUrl && !href.startsWith("#")) {
      NProgress.start();
    }
    router.replace(href, options);
  };
  const forward: AppRouterInstance["forward"] = () => {
    NProgress.start();
    router.forward();
  };
  return {
    ...router,
    push,
    back,
    replace,
    forward,
  };
}
