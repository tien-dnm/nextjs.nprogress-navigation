"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const navigation_1 = require("next/navigation");
const nprogress_1 = __importDefault(require("nprogress"));
function useNextRouter() {
    const router = (0, navigation_1.useRouter)();
    const pathName = (0, navigation_1.usePathname)();
    const searchParams = (0, navigation_1.useSearchParams)();
    const push = (href, options) => {
        const currentUrl = (pathName || "") + (searchParams ? `?${searchParams.toString()}` : "");
        if (href !== currentUrl) {
            nprogress_1.default.start();
        }
        router.push(href, options);
    };
    return Object.assign(Object.assign({}, router), { push });
}
exports.default = useNextRouter;
