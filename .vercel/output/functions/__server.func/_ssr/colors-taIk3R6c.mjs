import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useReview } from "./router-W5KpDBpB.mjs";
import { n as PageHeader, t as PageFooterNav } from "./Page-Chc7axPe.mjs";
import { t as FeedbackBox } from "./FeedbackBox-BKc649_V.mjs";
import { t as brandColors } from "./brand-z0rlNtDP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/colors-taIk3R6c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/colors.tsx?tsr-split=component";
function Colors() {
	const { review, set } = useReview();
	const [hoveredColor, setHoveredColor] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			label: "Draft 02",
			title: "Color Direction",
			intro: "Hover or tap any color card to expand it and see where it is used across the brand identity."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-6 pb-2",
			children: brandColors.map((color) => {
				const isHovered = hoveredColor === color.name;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					onMouseEnter: () => setHoveredColor(color.name),
					onMouseLeave: () => setHoveredColor(null),
					onClick: () => setHoveredColor(isHovered ? null : color.name),
					style: isHovered ? {
						borderColor: color.hex,
						boxShadow: `0 12px 28px -6px ${color.hex}40, 0 0 0 1px ${color.hex}`
					} : void 0,
					className: `group relative overflow-hidden rounded-2xl border text-left transition-all duration-300 ease-out cursor-pointer ${isHovered ? "-translate-y-3 bg-surface z-10" : "border-border hover:-translate-y-2 hover:border-border-strong hover:shadow-md bg-card"}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "block h-32 w-full md:h-36 transition-transform duration-300 group-hover:scale-[1.01]",
						style: { backgroundColor: color.hex },
						"aria-hidden": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block font-display text-[18px] text-foreground font-medium",
								children: color.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 26,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "mt-1 block text-[14px] text-muted-foreground",
								children: [
									color.hex,
									" · ",
									color.role
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: `grid transition-all duration-300 ease-out ${isHovered ? "grid-rows-[1fr] opacity-100 mt-4 pt-3 border-t border-border" : "grid-rows-[0fr] opacity-0 mt-0"}`,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[12px] font-semibold tracking-wider text-accent uppercase",
										children: "Used for"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 35,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
										className: "mt-2 space-y-1.5 text-[14px] text-foreground",
										children: color.usage.map((use) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "size-2 rounded-full shrink-0 border border-black/10 shadow-xs",
												style: { backgroundColor: color.hex }
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 40,
												columnNumber: 27
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: use }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 43,
												columnNumber: 27
											}, this)]
										}, use, true, {
											fileName: _jsxFileName,
											lineNumber: 39,
											columnNumber: 47
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 38,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 34,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 33,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 15
					}, this)]
				}, color.hex, true, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 16
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-4 text-[14px] text-muted-foreground",
			children: "Hover over any colour above to see its applications."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 53,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedbackBox, {
			value: review.colors_note,
			onChange: (value) => set("colors_note", value),
			label: "Anything you'd like us to change about the colours?"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageFooterNav, {
			prev: {
				to: "/",
				label: "Overview"
			},
			next: {
				to: "/typography",
				label: "Typography"
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
//#endregion
export { Colors as component };
