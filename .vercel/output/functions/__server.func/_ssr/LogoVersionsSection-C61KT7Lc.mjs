import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as ArrowLeft, r as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LogoVersionsSection-C61KT7Lc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var v_11_default = "/assets/v-11-Cdw6naT0.png";
var v_12_default = "/assets/v-12-DW2eortt.png";
var v_13_default = "/assets/v-13-CM4ziM36.png";
var v_5_default = "/assets/v-5-BvhP4W_f.png";
var v_6_default = "/assets/v-6-B5l6S_5M.png";
var v_7_default = "/assets/v-7-QY3XNR_Y.png";
var v_8_default = "/assets/v-8-CkgGf3NW.png";
var v_9_default = "/assets/v-9-Cf_NMESJ.png";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var _jsxFileName$2 = "/app/applet/src/components/ui/button.tsx";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 43,
		columnNumber: 7
	}, void 0);
});
Button.displayName = "Button";
var _jsxFileName$1 = "/app/applet/src/components/ui/carousel.tsx";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 120,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 108,
		columnNumber: 5
	}, void 0);
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 141,
			columnNumber: 9
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 140,
		columnNumber: 7
	}, void 0);
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 161,
		columnNumber: 7
	}, void 0);
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 197,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Previous slide"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 198,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 182,
		columnNumber: 7
	}, void 0);
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 225,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Next slide"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 226,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 210,
		columnNumber: 7
	}, void 0);
});
CarouselNext.displayName = "CarouselNext";
var _jsxFileName = "/app/applet/src/components/LogoVersionsSection.tsx";
var logoVersions = [
	{
		id: "v1",
		title: "Version 1",
		description: "Logo variation — Version 1",
		image: v_11_default
	},
	{
		id: "v2",
		title: "Version 2",
		description: "Logo variation — Version 2",
		image: v_12_default
	},
	{
		id: "v3",
		title: "Version 3",
		description: "Logo variation — Version 3",
		image: v_13_default
	},
	{
		id: "v4",
		title: "Version 4",
		description: "Logo variation — Version 4",
		image: v_5_default
	},
	{
		id: "v5",
		title: "Version 5",
		description: "Logo variation — Version 5",
		image: v_6_default
	},
	{
		id: "v6",
		title: "Version 6",
		description: "Logo variation — Version 6",
		image: v_7_default
	},
	{
		id: "v7",
		title: "Version 7",
		description: "Logo variation — Version 7",
		image: v_8_default
	},
	{
		id: "v8",
		title: "Version 8",
		description: "Logo variation — Version 8",
		image: v_9_default
	}
];
function LogoVersionsSection({ title = "Logo Versions", subtitle = "Explore the logo concepts rendered on dark backgrounds.", className = "mt-12 mb-8" }) {
	const [api, setApi] = (0, import_react.useState)();
	const [current, setCurrent] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());
		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-[22px] font-medium text-foreground",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 95,
					columnNumber: 9
				}, this), subtitle && /* @__PURE__ */ (void 0)("p", {
					className: "mt-1 text-[14px] text-muted-foreground",
					children: subtitle
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 96,
					columnNumber: 22
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 94,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Carousel, {
					setApi,
					className: "w-full",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CarouselContent, {
						className: "-ml-3",
						children: logoVersions.map((version, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CarouselItem, {
							className: "pl-3 basis-[82%] sm:basis-[60%]",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "group hover-lift relative overflow-hidden rounded-2xl border border-neutral-800 bg-black text-left flex flex-col transition-all duration-300 hover:border-neutral-600 shadow-md h-full",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "aspect-square w-full bg-black p-6 flex items-center justify-center relative overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: version.image,
										alt: version.title,
										className: "max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 107,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 106,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "px-4 py-3 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-display text-[15px] font-medium text-white",
										children: version.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 114,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[12px] text-neutral-400 font-mono",
										children: ["0", index + 1]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 117,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 113,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 17
							}, this)
						}, version.id, false, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex items-center justify-between px-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex gap-2",
							children: logoVersions.map((_, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => api?.scrollTo(idx),
								"aria-label": `Go to slide ${idx + 1}`,
								className: `h-2 rounded-full transition-all duration-300 ${current === idx ? "w-6 bg-primary" : "w-2 bg-border"}`
							}, idx, false, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 124,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CarouselPrevious, { className: "static translate-y-0 h-9 w-9 border-border bg-surface text-foreground" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 138,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CarouselNext, { className: "static translate-y-0 h-9 w-9 border-border bg-surface text-foreground" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 137,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4",
				children: logoVersions.map((version, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group hover-lift relative overflow-hidden rounded-2xl border border-neutral-800 bg-black text-left flex flex-col transition-all duration-300 hover:border-neutral-600 shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "aspect-square w-full bg-black p-6 flex items-center justify-center relative overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: version.image,
							alt: version.title,
							className: "max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 153,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "px-4 py-3 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-display text-[15px] font-medium text-white",
							children: version.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[12px] text-neutral-400 font-mono",
							children: ["0", index + 1]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 159,
						columnNumber: 13
					}, this)]
				}, version.id, true, {
					fileName: _jsxFileName,
					lineNumber: 148,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 146,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 93,
		columnNumber: 5
	}, this);
}
//#endregion
export { LogoVersionsSection as t };
