"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nprogress_1 = __importDefault(require("nprogress"));
const react_1 = require("react");
const navigation_1 = require("next/navigation");
nprogress_1.default.configure({
    showSpinner: false,
    easing: "ease",
    speed: 500,
});
function NavigationEvents() {
    const pathname = (0, navigation_1.usePathname)();
    const searchParams = (0, navigation_1.useSearchParams)();
    (0, react_1.useEffect)(() => {
        nprogress_1.default.done(true);
    }, [pathname, searchParams]);
    return null;
}
exports.default = NavigationEvents;
