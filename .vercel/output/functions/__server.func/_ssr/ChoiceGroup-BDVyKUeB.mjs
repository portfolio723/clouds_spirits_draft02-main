import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ChoiceGroup-BDVyKUeB.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/ChoiceGroup.tsx";
function ChoiceGroup({ legend, name, options, value, onChange, columns = 2 }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
			className: "text-[18px] text-foreground md:text-[20px]",
			children: legend
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: `mt-5 grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"}`,
			role: "radiogroup",
			"aria-label": legend,
			children: options.map((option) => {
				const selected = value === option.value;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					role: "radio",
					"aria-checked": selected,
					name,
					onClick: () => onChange(selected ? "" : option.value),
					className: `min-h-12 rounded-xl border px-5 py-3 text-left transition-colors ${selected ? "border-accent bg-accent/10 text-foreground" : "border-border-strong bg-background text-foreground hover:bg-surface"}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							"aria-hidden": "true",
							className: `inline-flex size-4 shrink-0 items-center justify-center rounded-full border ${selected ? "border-accent" : "border-border-strong"}`,
							children: selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-accent" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 31
							}, this) : null
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[15px] font-medium",
							children: option.label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 15
					}, this), option.hint ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "mt-1 block pl-7 text-[13px] text-muted-foreground",
						children: option.hint
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 17
					}, this) : null]
				}, option.value, true, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 13
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
//#endregion
export { ChoiceGroup as t };
