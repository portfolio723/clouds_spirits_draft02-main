import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Page-Chc7axPe.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/Page.tsx";
function PageHeader({ label, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "pt-6 sm:pt-10 pb-8 md:pt-24 md:pb-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "label-xs",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-3 text-[32px] md:text-[44px]",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			intro ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 max-w-[62ch] text-[16px] text-muted-foreground md:text-[17px]",
				children: intro
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
function PageFooterNav({ prev, next }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
		"aria-label": "Draft navigation",
		className: "mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-border py-10 md:mt-28",
		children: [prev ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: prev.to,
			className: "inline-flex h-12 items-center rounded-xl border border-border-strong bg-background px-5 text-[14px] font-medium text-foreground transition-colors hover:bg-surface",
			children: ["← ", prev.label]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 9
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 9
		}, this), next ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: next.to,
			className: "inline-flex h-12 items-center rounded-xl bg-primary px-6 text-[14px] font-medium text-primary-foreground transition-opacity hover:opacity-90",
			children: [next.label, " →"]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 9
		}, this) : null]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 34,
		columnNumber: 5
	}, this);
}
//#endregion
export { PageHeader as n, PageFooterNav as t };
