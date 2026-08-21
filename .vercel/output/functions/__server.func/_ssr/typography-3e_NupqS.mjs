import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useReview } from "./router-W5KpDBpB.mjs";
import { n as PageHeader, t as PageFooterNav } from "./Page-Chc7axPe.mjs";
import { t as FeedbackBox } from "./FeedbackBox-BKc649_V.mjs";
import { r as typographyDirections } from "./brand-z0rlNtDP.mjs";
import { t as ChoiceGroup } from "./ChoiceGroup-BDVyKUeB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/typography-3e_NupqS.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/typography.tsx?tsr-split=component";
function Typography() {
	const { review, set } = useReview();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			label: "Draft 02",
			title: "Typography",
			intro: "Two possible type directions for the brand. Look at the name first — the rest follows from it."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: typographyDirections.map((direction) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
				className: "flex flex-col rounded-2xl border border-border p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "label-xs",
						children: ["Direction ", direction.number]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 16,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: `mt-8 text-[34px] leading-tight text-foreground md:text-[42px] ${direction.fontClass}`,
						children: "Clouds & Spirits"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 17,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: `mt-3 text-[12px] tracking-[0.3em] text-muted-foreground uppercase ${direction.fontClass}`,
						children: "Bar & Kitchen"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
						className: "mt-10 space-y-3 border-t border-border pt-6 text-[15px]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
								className: "text-muted-foreground",
								children: "Headlines"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 26,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
								className: "text-foreground",
								children: direction.primary
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 27,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
								className: "text-muted-foreground",
								children: "Supporting"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
								className: "text-foreground",
								children: direction.secondary
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 31,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 29,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-6 text-[15px] text-muted-foreground",
						children: direction.explanation
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-[13px] text-muted-foreground",
						children: direction.feels
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 13
					}, this)
				]
			}, direction.number, true, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 48
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceGroup, {
			legend: "Which feels closer to the brand?",
			name: "typography",
			value: review.selected_typography,
			onChange: (value) => set("selected_typography", value),
			options: [
				{
					value: "gotham",
					label: "Direction 01",
					hint: "Gotham Rounded + SF Pro"
				},
				{
					value: "dm-serif",
					label: "Direction 02",
					hint: "DM Serif Display + Inter"
				},
				{
					value: "discuss",
					label: "I need to discuss this"
				}
			]
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedbackBox, {
			value: review.typography_note,
			onChange: (value) => set("typography_note", value)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 53,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageFooterNav, {
			prev: {
				to: "/colors",
				label: "Colors"
			},
			next: {
				to: "/logos",
				label: "Logos"
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 55,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
//#endregion
export { Typography as component };
