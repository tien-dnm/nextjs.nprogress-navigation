"use strict";
"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const nprogress_1 = __importDefault(require("nprogress"));
const router_1 = __importDefault(require("next/router"));
const resolve_href_1 = require("next/dist/client/resolve-href");
function NextLink(_a) {
    var { scroll, href } = _a, props = __rest(_a, ["scroll", "href"]);
    let stringHref = "";
    if (typeof href !== "string") {
        const [, resolvedAs] = (0, resolve_href_1.resolveHref)(router_1.default, href, true);
        stringHref = resolvedAs || "";
    }
    else {
        stringHref = href;
    }
    const current_searchParams = (0, navigation_1.useSearchParams)();
    const current_path = (0, navigation_1.usePathname)();
    const withoutHash = stringHref.split("#")[0];
    const current_Path = (current_searchParams === null || current_searchParams === void 0 ? void 0 : current_searchParams.toString())
        ? `${current_path}?${current_searchParams === null || current_searchParams === void 0 ? void 0 : current_searchParams.toString()}`
        : current_path;
    return (react_1.default.createElement(link_1.default, Object.assign({ onClick: (e) => {
            if (!stringHref)
                return;
            if (stringHref === "#")
                return;
            if (withoutHash === current_Path)
                return;
            if (e.detail > 1)
                return;
            nprogress_1.default.start();
        }, href: href, scroll: scroll || false }, props)));
}
exports.default = NextLink;
