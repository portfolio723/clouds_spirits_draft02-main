import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FeedbackBox-BKc649_V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/FeedbackBox.tsx";
function FeedbackBox({ label = "Anything you'd like us to change?", value, onChange, rows = 4, placeholder = "Tell us what feels right, what doesn't, or anything you'd like us to explore." }) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				htmlFor: id,
				className: "text-[18px] text-foreground md:text-[20px]",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
				id,
				rows,
				value,
				onChange: (event) => onChange(event.target.value),
				placeholder,
				className: "mt-4 w-full resize-y rounded-xl border border-border-strong bg-background px-4 py-3 text-[15px] leading-relaxed text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-[13px] text-muted-foreground",
				children: "Optional. Your notes are saved automatically as you type."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
//#endregion
export { FeedbackBox as t };
