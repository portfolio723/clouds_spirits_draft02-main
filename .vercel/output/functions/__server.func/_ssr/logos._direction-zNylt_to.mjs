import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as PageHeader, t as PageFooterNav } from "./Page-Chc7axPe.mjs";
import { n as logoAssets } from "./brand-z0rlNtDP.mjs";
import { t as Lightbox } from "./Lightbox-B4TxoxlN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logos._direction-zNylt_to.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/logos.$direction.tsx?tsr-split=component";
function DirectionPage() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			label: "Draft 02",
			title: "Logo Showcase",
			intro: "Explore the logo options and applications for Clouds & Spirits."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: logoAssets.map((asset, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => setOpen(index),
				className: `hover-lift overflow-hidden rounded-2xl border border-border text-left hover:border-border-strong ${index === 4 ? "md:col-span-2" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: asset.image,
					alt: `${asset.title} — ${asset.description}`,
					width: 1280,
					height: 960,
					loading: "lazy",
					className: "w-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 12,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "block px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "label-xs",
							children: asset.index
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 14,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "mt-1 block text-[17px] text-foreground",
							children: asset.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 15,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "mt-1 block text-[14px] text-muted-foreground",
							children: asset.description
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 16,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 13
				}, this)]
			}, asset.id, true, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 43
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 10,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lightbox, {
			items: logoAssets,
			index: open,
			onClose: () => setOpen(null),
			onIndexChange: setOpen
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageFooterNav, {
			prev: {
				to: "/typography",
				label: "Typography"
			},
			next: {
				to: "/review",
				label: "Review"
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 10
	}, this);
}
//#endregion
export { DirectionPage as component };
