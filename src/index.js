"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationEvents = exports.useNextRouter = exports.NextLink = void 0;
const link_1 = __importDefault(require("./next/link"));
exports.NextLink = link_1.default;
const navigation_1 = __importDefault(require("./next/navigation"));
exports.useNextRouter = navigation_1.default;
const navigation_event_1 = __importDefault(require("./next/navigation-event"));
exports.NavigationEvents = navigation_event_1.default;
