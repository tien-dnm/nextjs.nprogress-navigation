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
    const currentUrl = (pathName || "") + (searchParams ? `?${searchParams.toString()}` : "");
    const push = (href, options) => {
        if (href !== currentUrl) {
            nprogress_1.default.start();
        }
        router.push(href, options);
    };
    const back = () => {
        nprogress_1.default.start();
        router.back();
    };
    const replace = (href, options) => {
        if (href !== currentUrl) {
            nprogress_1.default.start();
        }
        router.replace(href, options);
    };
    const forward = () => {
        nprogress_1.default.start();
        router.forward();
    };
    return Object.assign(Object.assign({}, router), { push,
        back,
        replace,
        forward });
}
exports.default = useNextRouter;
