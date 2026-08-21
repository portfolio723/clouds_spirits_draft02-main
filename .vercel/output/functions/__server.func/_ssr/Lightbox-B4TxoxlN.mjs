import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Lightbox-B4TxoxlN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/Lightbox.tsx";
function Lightbox({ items, index, onClose, onIndexChange, showNav = true }) {
	const isOpen = index !== null;
	const step = (0, import_react.useCallback)((delta) => {
		if (index === null || !onIndexChange) return;
		onIndexChange((index + delta + items.length) % items.length);
	}, [
		index,
		items.length,
		onIndexChange
	]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
			if (showNav && event.key === "ArrowRight") step(1);
			if (showNav && event.key === "ArrowLeft") step(-1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		isOpen,
		onClose,
		step,
		showNav
	]);
	if (index === null) return null;
	const item = items[index];
	if (!item) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": item.title,
		className: "fixed inset-0 z-50 flex flex-col bg-background/97 backdrop-blur-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex h-16 items-center justify-end px-4",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "Close image viewer",
					className: "inline-flex size-11 items-center justify-center rounded-full text-[20px] text-muted-foreground transition-colors hover:bg-surface hover:text-foreground",
					children: "×"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-1 items-center justify-center overflow-auto px-4",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: item.image,
					alt: `${item.title} — ${item.description}`,
					className: "max-h-[70dvh] w-auto max-w-full rounded-xl border border-border object-contain"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center justify-center gap-3 px-6 py-8 relative",
				children: [
					showNav && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => step(-1),
						className: "absolute left-6 inline-flex h-11 items-center rounded-xl border border-border-strong px-4 text-[14px] font-medium",
						children: "← Previous"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-center text-[14px] font-medium text-foreground",
						children: item.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 9
					}, this),
					showNav && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => step(1),
						className: "absolute right-6 inline-flex h-11 items-center rounded-xl border border-border-strong px-4 text-[14px] font-medium",
						children: "Next →"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 44,
		columnNumber: 5
	}, this);
}
//#endregion
export { Lightbox as t };
