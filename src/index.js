"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationEvents = exports.useNextRouter = exports.NextLink = void 0;
var link_1 = require("./next/link");
Object.defineProperty(exports, "NextLink", { enumerable: true, get: function () { return __importDefault(link_1).default; } });
var navigation_1 = require("./next/navigation");
Object.defineProperty(exports, "useNextRouter", { enumerable: true, get: function () { return __importDefault(navigation_1).default; } });
var navigation_event_1 = require("./next/navigation-event");
Object.defineProperty(exports, "NavigationEvents", { enumerable: true, get: function () { return __importDefault(navigation_event_1).default; } });
