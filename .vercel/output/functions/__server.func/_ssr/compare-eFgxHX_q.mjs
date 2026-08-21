import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useReview } from "./router-W5KpDBpB.mjs";
import { n as PageHeader, t as PageFooterNav } from "./Page-Chc7axPe.mjs";
import { t as FeedbackBox } from "./FeedbackBox-BKc649_V.mjs";
import { n as logoAssets } from "./brand-z0rlNtDP.mjs";
import { t as ChoiceGroup } from "./ChoiceGroup-BDVyKUeB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-eFgxHX_q.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/compare.tsx?tsr-split=component";
function Compare() {
	const { review, set } = useReview();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			label: "Draft 02",
			title: "Compare Logo Variations",
			intro: "Compare the logo options side by side and choose the variation that best represents the venue."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: logoAssets.map((asset) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
				className: "overflow-hidden rounded-2xl border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: asset.image,
					alt: asset.title,
					width: 1280,
					height: 960,
					loading: "lazy",
					className: "w-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "px-6 py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "label-xs",
							children: asset.index
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 18,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "mt-2 text-[22px]",
							children: asset.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 19,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 text-[15px] text-muted-foreground",
							children: asset.description
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 20,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 13
				}, this)]
			}, asset.id, true, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 34
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceGroup, {
			legend: "Which variation feels most appropriate for Clouds & Spirits?",
			name: "logo",
			value: review.selected_logo,
			onChange: (value) => set("selected_logo", value),
			options: [
				{
					value: "variation-01",
					label: "Variation 01"
				},
				{
					value: "variation-02",
					label: "Variation 02"
				},
				{
					value: "variation-03",
					label: "Variation 03"
				},
				{
					value: "variation-04",
					label: "Variation 04"
				},
				{
					value: "variation-05",
					label: "Variation 05"
				},
				{
					value: "variation-06",
					label: "Variation 06"
				},
				{
					value: "variation-07",
					label: "Variation 07"
				},
				{
					value: "variation-08",
					label: "Variation 08"
				},
				{
					value: "undecided",
					label: "Not decided"
				}
			]
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedbackBox, {
			value: review.logo_note,
			onChange: (value) => set("logo_note", value)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageFooterNav, {
			prev: {
				to: "/logos",
				label: "Logos"
			},
			next: {
				to: "/review",
				label: "Your review"
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
//#endregion
export { Compare as component };
