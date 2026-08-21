import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as useReview } from "./router-W5KpDBpB.mjs";
import { n as PageHeader } from "./Page-Chc7axPe.mjs";
import { t as FeedbackBox } from "./FeedbackBox-BKc649_V.mjs";
import { t as ChoiceGroup } from "./ChoiceGroup-BDVyKUeB.mjs";
import { t as supabase } from "./client-DRZdV0TS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-Cr5A2TyZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/review.tsx?tsr-split=component";
function Review() {
	const { review, set, reset } = useReview();
	const navigate = useNavigate();
	const [sending, setSending] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function send() {
		setSending(true);
		setError(null);
		const payload = {
			project_slug: "clouds-and-spirits",
			name: review.name || null,
			age: review.age || null,
			gender: review.gender || null,
			selected_logo: review.selected_logo || null,
			selected_typography: review.selected_typography || null,
			color_feedback: review.color_feedback || null,
			colors_note: review.colors_note || null,
			typography_note: review.typography_note || null,
			logo_note: review.logo_note || null,
			overall_feedback: review.overall_feedback || null
		};
		try {
			const { error: insertError } = await supabase.from("client_feedback").insert(payload);
			setSending(false);
			if (insertError) {
				console.error("Supabase submission error:", insertError);
				const details = [
					insertError.message,
					insertError.details,
					insertError.hint
				].filter(Boolean).join(" — ");
				setError(`Submission error: ${details || "Could not insert record into client_feedback."}`);
				return;
			}
			reset();
			navigate({ to: "/thanks" });
		} catch (err) {
			setSending(false);
			console.error("Network or fetch exception:", err);
			const msg = err instanceof Error ? err.message : String(err);
			setError(`Submission error: ${msg}. Please check your network connection or try again.`);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			label: "Draft 02",
			title: "Your Draft 02 Review",
			intro: "Review the directions above and tell us what you would like us to take forward."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-[20px] font-medium text-foreground",
					children: "Your Details"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-[14px] text-muted-foreground",
					children: "Please share your name, age, and gender before reviewing the brand variations."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							htmlFor: "reviewer-name",
							className: "block text-[14px] font-medium text-foreground mb-2",
							children: "Name"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							id: "reviewer-name",
							type: "text",
							placeholder: "Your name",
							value: review.name || "",
							onChange: (e) => set("name", e.target.value),
							className: "w-full h-11 rounded-xl border border-border bg-background px-4 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							htmlFor: "reviewer-age",
							className: "block text-[14px] font-medium text-foreground mb-2",
							children: "Age"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							id: "reviewer-age",
							type: "number",
							min: "1",
							max: "120",
							placeholder: "Your age",
							value: review.age || "",
							onChange: (e) => set("age", e.target.value),
							className: "w-full h-11 rounded-xl border border-border bg-background px-4 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							htmlFor: "reviewer-gender",
							className: "block text-[14px] font-medium text-foreground mb-2",
							children: "Gender"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
							id: "reviewer-gender",
							value: review.gender || "",
							onChange: (e) => set("gender", e.target.value),
							className: "w-full h-11 rounded-xl border border-border bg-background px-4 text-[14px] text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "",
									children: "Select gender"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 84,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "male",
									children: "Male"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 85,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "female",
									children: "Female"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 86,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "non-binary",
									children: "Non-binary"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 87,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "prefer-not-to-say",
									children: "Prefer not to say"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 88,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "other",
									children: "Other"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceGroup, {
			legend: "Logo Variation",
			name: "review-logo",
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
			lineNumber: 95,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceGroup, {
			legend: "Typography",
			name: "review-typography",
			value: review.selected_typography,
			onChange: (value) => set("selected_typography", value),
			options: [
				{
					value: "gotham",
					label: "Gotham Rounded + SF Pro"
				},
				{
					value: "dm-serif",
					label: "DM Serif Display + Inter"
				},
				{
					value: "undecided",
					label: "Not decided"
				}
			]
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 124,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceGroup, {
			legend: "Colors",
			name: "review-colors",
			value: review.color_feedback,
			onChange: (value) => set("color_feedback", value),
			options: [
				{
					value: "proceed",
					label: "Good to proceed"
				},
				{
					value: "minor",
					label: "Minor changes"
				},
				{
					value: "another",
					label: "Need another direction"
				}
			]
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 135,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedbackBox, {
			label: "Overall feedback",
			rows: 6,
			placeholder: "What should we keep, change or explore in the next draft?",
			value: review.overall_feedback,
			onChange: (value) => set("overall_feedback", value)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 146,
			columnNumber: 7
		}, this),
		error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			role: "alert",
			className: "mt-6 text-[15px] text-destructive",
			children: error
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 148,
			columnNumber: 16
		}, this) : null,
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-10 border-t border-border py-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: send,
				disabled: sending,
				className: "inline-flex h-12 items-center rounded-xl bg-primary px-7 text-[14px] font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60",
				children: sending ? "Sending…" : "Send feedback"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-[13px] text-muted-foreground",
				children: "Nothing here is mandatory — send whatever you have."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 156,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 152,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 55,
		columnNumber: 10
	}, this);
}
//#endregion
export { Review as component };
