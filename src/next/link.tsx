"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { ComponentProps } from "react";
import { resolveHref } from "next/dist/shared/lib/router/utils/resolve-href";
import Router from "next/router";
export default function NextLink({
  scroll,
  href,
  ...props
}: ComponentProps<typeof Link>) {
  let stringHref = "";
  if (typeof href !== "string") {
    const [, resolvedAs] = resolveHref(Router, href, true);
    stringHref = resolvedAs || "";
  } else {
    stringHref = href;
  }
  const current_searchParams = useSearchParams();
  const current_path = usePathname();
  const withoutHash = stringHref.split("#")[0];

  const current_Path = current_searchParams?.toString()
    ? `${current_path}?${current_searchParams?.toString()}`
    : current_path;
  return (
    <Link
      onClick={(e) => {
        if (!stringHref) return;
        if (stringHref === "#") return;
        if (withoutHash === current_Path) return;
        if (e.detail > 1) return;
        NProgress.start();
      }}
      href={href}
      scroll={scroll || false}
      {...props}
    />
  );
}
