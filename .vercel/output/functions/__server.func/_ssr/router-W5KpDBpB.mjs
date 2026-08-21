import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as __exportAll } from "./server-DLvgK4bV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-W5KpDBpB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-D4H2u_RS.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var _2_default = "/assets/2-D4PhlsY6.png";
var _jsxFileName$2 = "/app/applet/src/components/SiteNav.tsx";
var items = [
	{
		to: "/",
		label: "Overview"
	},
	{
		to: "/colors",
		label: "Colors"
	},
	{
		to: "/typography",
		label: "Typography"
	},
	{
		to: "/logos",
		label: "Logos"
	},
	{
		to: "/review",
		label: "Review"
	}
];
function SiteNav() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				"aria-label": "Draft sections",
				className: "page-shell flex min-h-[72px] sm:min-h-[80px] py-2 items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "shrink-0 flex items-center",
						onClick: () => setMenuOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: _2_default,
							alt: "Clouds & Spirits",
							className: "h-10 sm:h-14 w-auto max-w-[200px] sm:max-w-[240px] object-contain object-left"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 24,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 23,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "-mx-2 hidden items-center gap-1 md:flex",
						children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: item.to,
							activeOptions: { exact: item.to === "/" },
							className: "inline-flex h-11 items-center rounded-lg px-3.5 text-[14px] text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-surface data-[status=active]:text-foreground data-[status=active]:font-medium",
							children: item.label
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 35,
							columnNumber: 15
						}, this) }, item.to, false, {
							fileName: _jsxFileName$2,
							lineNumber: 34,
							columnNumber: 13
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 32,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "label-xs hidden shrink-0 sm:inline",
							children: "Draft 02"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 47,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setMenuOpen((prev) => !prev),
							"aria-label": menuOpen ? "Close navigation menu" : "Open navigation menu",
							"aria-expanded": menuOpen,
							className: "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:bg-muted md:hidden",
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 57,
								columnNumber: 25
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 57,
								columnNumber: 52
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 50,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 46,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			menuOpen && /* @__PURE__ */ (void 0)("div", {
				className: "border-t border-border bg-background px-4 py-4 md:hidden shadow-xl animate-in slide-in-from-top-2 duration-200",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "page-shell space-y-1",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "mb-2 flex items-center justify-between px-3 py-1.5",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Navigation"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 67,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "label-xs",
							children: "Draft 02"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 70,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 66,
						columnNumber: 13
					}, this), items.map((item) => /* @__PURE__ */ (void 0)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						onClick: () => setMenuOpen(false),
						className: "flex h-12 items-center rounded-xl px-4 text-[15px] text-muted-foreground transition-colors hover:bg-surface hover:text-foreground data-[status=active]:bg-primary/10 data-[status=active]:font-medium data-[status=active]:text-primary",
						children: item.label
					}, item.to, false, {
						fileName: _jsxFileName$2,
						lineNumber: 73,
						columnNumber: 15
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 65,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 64,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border-t border-border md:hidden overflow-x-auto bg-surface/50",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "page-shell flex items-center gap-1 py-1.5 min-w-max",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						className: "inline-flex h-9 items-center whitespace-nowrap rounded-lg px-3 text-[13px] text-muted-foreground data-[status=active]:bg-primary/10 data-[status=active]:font-medium data-[status=active]:text-primary",
						children: item.label
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 92,
						columnNumber: 15
					}, this) }, item.to, false, {
						fileName: _jsxFileName$2,
						lineNumber: 91,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 89,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 88,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/lib/review-store.tsx";
var empty = {
	name: "",
	age: "",
	gender: "",
	selected_typography: "",
	selected_logo: "",
	color_feedback: "",
	colors_note: "",
	typography_note: "",
	logo_note: "",
	overall_feedback: ""
};
var STORAGE_KEY = "cs-draft-02-review";
var ReviewContext = (0, import_react.createContext)({
	review: empty,
	set: () => {},
	reset: () => {}
});
function ReviewProvider({ children }) {
	const [review, setReview] = (0, import_react.useState)(empty);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (raw) setReview({
				...empty,
				...JSON.parse(raw)
			});
		} catch {}
	}, []);
	const set = (0, import_react.useCallback)((key, value) => {
		setReview((prev) => {
			const next = {
				...prev,
				[key]: value
			};
			try {
				window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
			} catch {}
			return next;
		});
	}, []);
	const reset = (0, import_react.useCallback)(() => {
		setReview(empty);
		try {
			window.localStorage.removeItem(STORAGE_KEY);
		} catch {}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReviewContext.Provider, {
		value: {
			review,
			set,
			reset
		},
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 72,
		columnNumber: 10
	}, this);
}
function useReview() {
	return (0, import_react.useContext)(ReviewContext);
}
var _jsxFileName = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 5
	}, this);
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Clouds & Spirits — Brand Exploration, Draft 02" },
			{
				name: "description",
				content: "Review the brand direction for Clouds & Spirits."
			},
			{
				property: "og:title",
				content: "Clouds & Spirits — Brand Exploration, Draft 02"
			},
			{
				property: "og:description",
				content: "Review the first brand direction for Clouds & Spirits."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Quicksand:wght@400;500;600&family=DM+Serif+Display&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 116,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 115,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 120,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 118,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 114,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReviewProvider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteNav, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 132,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
			className: "page-shell pb-16",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 135,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 133,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 131,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 130,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$8 = () => import("./routes-dodH4LOG.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Clouds & Spirits — Brand Exploration, Draft 02" },
		{
			name: "description",
			content: "Review the brand direction for Clouds & Spirits: colour, typography and logo directions, with space for your feedback."
		},
		{
			property: "og:title",
			content: "Clouds & Spirits — Brand Exploration, Draft 02"
		},
		{
			property: "og:description",
			content: "Your brand direction is ready to review."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./colors-taIk3R6c.mjs");
var Route$7 = createFileRoute("/colors")({
	head: () => ({ meta: [
		{ title: "Color Direction — Clouds & Spirits Draft 02" },
		{
			name: "description",
			content: "The Clouds & Spirits Draft 02 palette: espresso, ivory, champagne, gold, taupe and olive, shown across menu, packaging and social."
		},
		{
			property: "og:title",
			content: "Color Direction — Clouds & Spirits Draft 02"
		},
		{
			property: "og:description",
			content: "A palette drawn from the interior, warm lighting, marble and wood."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./compare-eFgxHX_q.mjs");
var Route$6 = createFileRoute("/compare")({
	head: () => ({ meta: [
		{ title: "Compare Logo Variations — Clouds & Spirits Draft 02" },
		{
			name: "description",
			content: "Compare the Clouds & Spirits logo variations side by side and select your preference."
		},
		{
			property: "og:title",
			content: "Compare Logo Variations — Clouds & Spirits Draft 02"
		},
		{
			property: "og:description",
			content: "Which variation feels more appropriate for Clouds & Spirits?"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./logos-z5KLnYQh.mjs");
var Route$5 = createFileRoute("/logos")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./review-Cr5A2TyZ.mjs");
var Route$4 = createFileRoute("/review")({
	head: () => ({ meta: [
		{ title: "Your Draft 02 Review — Clouds & Spirits" },
		{
			name: "description",
			content: "Tell us which colour, typography and logo directions to take forward into the next Clouds & Spirits draft."
		},
		{
			property: "og:title",
			content: "Your Draft 02 Review — Clouds & Spirits"
		},
		{
			property: "og:description",
			content: "Review the directions and tell us what to take forward."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./thanks-IlI_HsCz.mjs");
var Route$3 = createFileRoute("/thanks")({
	head: () => ({ meta: [
		{ title: "Thanks — Clouds & Spirits Draft 02" },
		{
			name: "description",
			content: "Your Draft 02 feedback for Clouds & Spirits has been received."
		},
		{
			property: "og:title",
			content: "Thanks — Clouds & Spirits Draft 02"
		},
		{
			property: "og:description",
			content: "Your feedback has been received."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./typography-3e_NupqS.mjs");
var Route$2 = createFileRoute("/typography")({
	head: () => ({ meta: [
		{ title: "Typography — Clouds & Spirits Draft 02" },
		{
			name: "description",
			content: "Compare two type directions for Clouds & Spirits: Gotham Rounded with SF Pro, or DM Serif Display with Inter."
		},
		{
			property: "og:title",
			content: "Typography — Clouds & Spirits Draft 02"
		},
		{
			property: "og:description",
			content: "Two possible type directions for the brand."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./logos.index-BNzbg68w.mjs");
var Route$1 = createFileRoute("/logos/")({
	head: () => ({ meta: [
		{ title: "Logos — Clouds & Spirits Draft 02" },
		{
			name: "description",
			content: "Logo variations and applications for Clouds & Spirits."
		},
		{
			property: "og:title",
			content: "Logos — Clouds & Spirits Draft 02"
		},
		{
			property: "og:description",
			content: "Logo variations and applications showcase."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./logos._direction-zNylt_to.mjs");
var Route = createFileRoute("/logos/$direction")({
	head: () => ({ meta: [{ title: "Logos — Clouds & Spirits Draft 02" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var ColorsRoute = Route$7.update({
	id: "/colors",
	path: "/colors",
	getParentRoute: () => Route$9
});
var CompareRoute = Route$6.update({
	id: "/compare",
	path: "/compare",
	getParentRoute: () => Route$9
});
var LogosRoute = Route$5.update({
	id: "/logos",
	path: "/logos",
	getParentRoute: () => Route$9
});
var ReviewRoute = Route$4.update({
	id: "/review",
	path: "/review",
	getParentRoute: () => Route$9
});
var ThanksRoute = Route$3.update({
	id: "/thanks",
	path: "/thanks",
	getParentRoute: () => Route$9
});
var TypographyRoute = Route$2.update({
	id: "/typography",
	path: "/typography",
	getParentRoute: () => Route$9
});
var LogosIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => LogosRoute
});
var LogosRouteChildren = {
	LogosDirectionRoute: Route.update({
		id: "/$direction",
		path: "/$direction",
		getParentRoute: () => LogosRoute
	}),
	LogosIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	ColorsRoute,
	CompareRoute,
	LogosRoute: LogosRoute._addFileChildren(LogosRouteChildren),
	ReviewRoute,
	ThanksRoute,
	TypographyRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { useReview as n, router_exports as t };
