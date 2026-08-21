import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as PageFooterNav } from "./Page-Chc7axPe.mjs";
import { t as LogoVersionsSection } from "./LogoVersionsSection-C61KT7Lc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-dodH4LOG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function Overview() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "pt-6 sm:pt-10 pb-2 md:pt-20 md:pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "label-xs",
						children: "Brand exploration · Draft 02"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 9,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "mt-3 text-[36px] leading-[1.05] sm:text-[40px] md:text-[64px]",
						children: "Clouds & Spirits"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 10,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 max-w-[52ch] text-[17px] text-foreground sm:text-[18px] md:text-[20px]",
						children: "Your brand direction is ready to review."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 13,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-3 max-w-[62ch] text-[15px] text-muted-foreground sm:text-[16px] md:text-[17px]",
						children: "We've explored the visual identity across color, typography and logo directions. Take a look through the options and tell us what feels right."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 16,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/colors",
						className: "inline-flex h-12 items-center rounded-xl bg-primary px-6 text-[14px] font-medium text-primary-foreground transition-opacity hover:opacity-90",
						children: "View Draft 02"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setOpen((value) => !value),
						"aria-expanded": open,
						className: "inline-flex h-12 items-center rounded-xl border border-border-strong bg-background px-6 text-[14px] font-medium text-foreground transition-colors hover:bg-surface",
						children: "About this review"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this), open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 max-w-[62ch] rounded-2xl border border-border bg-surface p-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-[20px]",
						children: "What is this?"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-3 text-[15px] text-muted-foreground",
						children: "This is an early visual exploration, not the final brand system. Your feedback will help us refine the selected direction before we develop the complete identity."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 17
				}, this) : null]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mt-12 md:mt-16 grid gap-4 sm:grid-cols-3",
				children: [
					{
						title: "Color",
						text: "Six colours drawn from the interior, lighting and materials."
					},
					{
						title: "Typography",
						text: "Two type directions to compare side by side."
					},
					{
						title: "Logos",
						text: "Logo variations and real-world applications showcase."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-2xl border border-border p-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-[20px]",
						children: item.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-[14px] text-muted-foreground",
						children: item.text
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 13
					}, this)]
				}, item.title, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 22
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoVersionsSection, {
				title: "Logo Directions",
				subtitle: "Explore the logo version concepts on dark backgrounds.",
				className: "mt-12 md:mt-16 mb-8 md:mb-12"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 9
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageFooterNav, { next: {
				to: "/colors",
				label: "Color direction"
			} }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 9
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 10
	}, this);
}
//#endregion
export { Overview as component };
