(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        8049: function(e, t, a) {
            Promise.resolve().then(a.t.bind(a, 2559, 23)), Promise.resolve().then(a.t.bind(a, 3403, 23)), Promise.resolve().then(a.bind(a, 9987)), Promise.resolve().then(a.bind(a, 9906)), Promise.resolve().then(a.bind(a, 7708)), Promise.resolve().then(a.bind(a, 8162)), Promise.resolve().then(a.bind(a, 8125)), Promise.resolve().then(a.bind(a, 158)), Promise.resolve().then(a.bind(a, 518)), Promise.resolve().then(a.bind(a, 6218)), Promise.resolve().then(a.bind(a, 8546)), Promise.resolve().then(a.bind(a, 8846))
        },
        9987: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return m
                }
            });
            var r = a(7949),
                i = a(9290);
            let l = e => {
                let {
                    className: t,
                    size: a = 200,
                    duration: l = 15,
                    anchor: n = 90,
                    borderWidth: s = 1.5,
                    colorFrom: o = "#ffaa40",
                    colorTo: c = "#9c40ff",
                    delay: d = 0
                } = e;
                return (0, r.jsx)("div", {
                    style: {
                        "--size": a,
                        "--duration": l,
                        "--anchor": n,
                        "--border-width": s,
                        "--color-from": o,
                        "--color-to": c,
                        "--delay": "-".concat(d, "s")
                    },
                    className: (0, i.cn)("pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]", "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]", "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]", t)
                })
            };
            var n = a(9501),
                s = a(3170),
                o = a(1619),
                c = a(6265);
            let d = (0, c.forwardRef)((e, t) => {
                let {
                    children: a,
                    className: l,
                    ...s
                } = e;
                return (0, r.jsx)(n.ck, {
                    className: (0, i.cn)("mt-px  focus-within:relative focus-within:z-10", l),
                    ...s,
                    ref: t,
                    children: a
                })
            });
            d.displayName = "AccordionItem";
            let u = (0, c.forwardRef)((e, t) => {
                let {
                    children: a,
                    className: l,
                    ...s
                } = e;
                return (0, r.jsx)(n.h4, {
                    className: "",
                    children: (0, r.jsx)(n.xz, {
                        className: (0, i.cn)("", l),
                        ...s,
                        ref: t,
                        children: a
                    })
                })
            });

            function m(e) {
                var t, a;
                let {
                    collapseDelay: i = 5e3,
                    ltr: m = !1,
                    linePosition: h = "left",
                    data: f = []
                } = e, [x, p] = (0, c.useState)(-1), g = (0, c.useRef)(null), v = (0, c.useRef)(null), b = (0, s.Y)(v, {
                    once: !0,
                    amount: .5
                });
                (0, c.useEffect)(() => {
                    let e = setTimeout(() => {
                        b ? p(0) : p(-1)
                    }, 100);
                    return () => clearTimeout(e)
                }, [b]);
                let y = e => {
                    if (g.current) {
                        let t = g.current.querySelectorAll(".card")[e];
                        if (t) {
                            let e = t.getBoundingClientRect(),
                                a = g.current.getBoundingClientRect(),
                                r = e.left - a.left - (a.width - e.width) / 2;
                            g.current.scrollTo({
                                left: g.current.scrollLeft + r,
                                behavior: "smooth"
                            })
                        }
                    }
                };
                return (0, c.useEffect)(() => {
                    let e = setInterval(() => {
                        p(e => void 0 !== e ? (e + 1) % f.length : 0)
                    }, i);
                    return () => clearInterval(e)
                }, [x]), (0, c.useEffect)(() => {
                    let e = setInterval(() => {
                        y((void 0 !== x ? x + 1 : 0) % f.length)
                    }, i);
                    return () => clearInterval(e)
                }, [x]), (0, c.useEffect)(() => {
                    let e = g.current;
                    if (e) {
                        let t = () => {
                            var t;
                            p(Math.min(Math.floor(e.scrollLeft / ((null === (t = e.querySelector(".card")) || void 0 === t ? void 0 : t.clientWidth) || 0)), f.length - 1))
                        };
                        return e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
                    }
                }, []), (0, r.jsx)("section", {
                    ref: v,
                    id: "features",
                    children: (0, r.jsx)("div", {
                        className: "container",
                        children: (0, r.jsx)("div", {
                            className: "max-w-6xl mx-auto ",
                            children: (0, r.jsxs)("div", {
                                className: "",
                                children: [(0, r.jsx)("div", {
                                    className: "hidden md:flex order-1 md:order-[0]  ".concat(m ? "md:order-2 md:justify-end" : "justify-start"),
                                    children: (0, r.jsx)(n.fC, {
                                        className: "grid md:grid-cols-4 gap-x-10 py-8",
                                        type: "single",
                                        defaultValue: "item-".concat(x),
                                        value: "item-".concat(x),
                                        onValueChange: e => p(Number(e.split("-")[1])),
                                        children: f.map((e, t) => (0, r.jsxs)(d, {
                                            className: "relative mb-8",
                                            value: "item-".concat(t),
                                            children: ["left" === h || "right" === h ? (0, r.jsx)("div", {
                                                className: "absolute bottom-0 top-0 h-full w-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 ".concat("right" === h ? "left-auto right-0" : "left-0 right-auto"),
                                                children: (0, r.jsx)("div", {
                                                    className: "absolute left-0 top-0 w-full ".concat(x === t ? "h-full" : "h-0", " origin-top bg-primary transition-all ease-linear dark:bg-white"),
                                                    style: {
                                                        transitionDuration: x === t ? "".concat(i, "ms") : "0s"
                                                    }
                                                })
                                            }) : null, "top" === h || "bottom" === h ? (0, r.jsx)("div", {
                                                className: "absolute left-0 right-0 w-full h-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 ".concat("bottom" === h ? "bottom-0" : "top-0"),
                                                children: (0, r.jsx)("div", {
                                                    className: "absolute left-0 ".concat("bottom" === h ? "bottom-0" : "top-0", " h-full ").concat(x === t ? "w-full" : "w-0", " origin-left bg-primary transition-all ease-linear dark:bg-white"),
                                                    style: {
                                                        transitionDuration: x === t ? "".concat(i, "ms") : "0s"
                                                    }
                                                })
                                            }) : null, (0, r.jsx)(u, {
                                                children: (0, r.jsxs)("div", {
                                                    className: "flex items-center relative flex-col",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "item-box size-16 bg-primary/10 rounded-full sm:mx-6 mx-2 shrink-0 flex items-center justify-center",
                                                        children: e.icon
                                                    }), (0, r.jsx)("div", {
                                                        className: "font-bold text-xl my-3 ",
                                                        children: e.title
                                                    }), (0, r.jsx)("div", {
                                                        className: "justify-center text-center mb-4",
                                                        children: e.content
                                                    })]
                                                })
                                            })]
                                        }, e.id))
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "w-auto overflow-hidden relative rounded-lg ".concat(m && "md:order-1"),
                                    children: [(null === (t = f[x]) || void 0 === t ? void 0 : t.image) ? (0, r.jsx)(o.E.img, {
                                        src: f[x].image,
                                        alt: "feature",
                                        className: "aspect-auto h-full w-full object-cover relative border rounded-lg shadow-lg",
                                        initial: {
                                            opacity: 0,
                                            scale: .98
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: .98
                                        },
                                        transition: {
                                            duration: .25,
                                            ease: "easeOut"
                                        }
                                    }, x) : (null === (a = f[x]) || void 0 === a ? void 0 : a.video) ? (0, r.jsx)("video", {
                                        preload: "auto",
                                        src: f[x].video,
                                        className: "aspect-auto h-full w-full rounded-lg object-cover border shadow-lg",
                                        autoPlay: !0,
                                        loop: !0,
                                        muted: !0
                                    }) : (0, r.jsx)("div", {
                                        className: "aspect-auto h-full w-full rounded-xl border border-neutral-300/50 bg-gray-200 p-1 min-h-[600px]"
                                    }), (0, r.jsx)(l, {
                                        size: 400,
                                        duration: 12,
                                        delay: 9,
                                        borderWidth: 1.5,
                                        colorFrom: "hsl(var(--primary))",
                                        colorTo: "hsl(var(--primary)/0)"
                                    })]
                                }), (0, r.jsx)("ul", {
                                    ref: g,
                                    className: "flex h-full snap-x flex-nowrap overflow-x-auto py-10 [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden snap-mandatory",
                                    style: {
                                        padding: "50px calc(50%)"
                                    },
                                    children: f.map((e, t) => (0, r.jsxs)("div", {
                                        className: "card relative mr-8 grid h-full max-w-60 shrink-0 items-start justify-center py-4 last:mr-0",
                                        onClick: () => p(t),
                                        style: {
                                            scrollSnapAlign: "center"
                                        },
                                        children: [(0, r.jsx)("div", {
                                            className: "absolute bottom-0 left-0 right-auto top-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30",
                                            children: (0, r.jsx)("div", {
                                                className: "absolute left-0 top-0 h-full ".concat(x === t ? "w-full" : "w-0", " origin-top bg-primary transition-all ease-linear dark:bg-white"),
                                                style: {
                                                    transitionDuration: x === t ? "".concat(i, "ms") : "0s"
                                                }
                                            })
                                        }), (0, r.jsx)("h2", {
                                            className: "text-xl font-bold",
                                            children: e.title
                                        }), (0, r.jsx)("p", {
                                            className: "mx-0 max-w-sm text-balance text-sm",
                                            children: e.content
                                        })]
                                    }, e.id))
                                })]
                            })
                        })
                    })
                })
            }
            u.displayName = "AccordionTrigger", (0, c.forwardRef)((e, t) => {
                let {
                    children: a,
                    className: l,
                    ...s
                } = e;
                return (0, r.jsx)(n.VY, {
                    className: (0, i.cn)("data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down", l),
                    ...s,
                    ref: t,
                    children: (0, r.jsx)("div", {
                        className: "px-5 py-2",
                        children: a
                    })
                })
            }).displayName = "AccordionContent"
        },
        9906: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return u
                }
            });
            var r = a(7949),
                i = a(9501),
                l = a(3170),
                n = a(1619),
                s = a(6265),
                o = a(9290);
            let c = (0, s.forwardRef)((e, t) => {
                let {
                    children: a,
                    className: l,
                    ...n
                } = e;
                return (0, r.jsx)(i.ck, {
                    className: (0, o.cn)("mt-px overflow-hidden focus-within:relative focus-within:z-10", l),
                    ...n,
                    ref: t,
                    children: a
                })
            });
            c.displayName = "AccordionItem";
            let d = (0, s.forwardRef)((e, t) => {
                let {
                    children: a,
                    className: l,
                    ...n
                } = e;
                return (0, r.jsx)(i.h4, {
                    className: "flex",
                    children: (0, r.jsx)(i.xz, {
                        className: (0, o.cn)("group flex flex-1 cursor-pointer items-center justify-between px-5 text-[15px] leading-none outline-none", l),
                        ...n,
                        ref: t,
                        children: a
                    })
                })
            });

            function u(e) {
                var t, a;
                let {
                    collapseDelay: o = 5e3,
                    ltr: u = !1,
                    linePosition: m = "left",
                    data: h = []
                } = e, [f, x] = (0, s.useState)(-1), p = (0, s.useRef)(null), g = (0, s.useRef)(null), v = (0, l.Y)(g, {
                    once: !0,
                    amount: .5
                });
                (0, s.useEffect)(() => {
                    let e = setTimeout(() => {
                        v ? x(0) : x(-1)
                    }, 100);
                    return () => clearTimeout(e)
                }, [v]);
                let b = e => {
                    if (p.current) {
                        let t = p.current.querySelectorAll(".card")[e];
                        if (t) {
                            let e = t.getBoundingClientRect(),
                                a = p.current.getBoundingClientRect(),
                                r = e.left - a.left - (a.width - e.width) / 2;
                            p.current.scrollTo({
                                left: p.current.scrollLeft + r,
                                behavior: "smooth"
                            })
                        }
                    }
                };
                return (0, s.useEffect)(() => {
                    let e = setInterval(() => {
                        x(e => void 0 !== e ? (e + 1) % h.length : 0)
                    }, o);
                    return () => clearInterval(e)
                }, [o, f, h.length]), (0, s.useEffect)(() => {
                    let e = setInterval(() => {
                        b((void 0 !== f ? f + 1 : 0) % h.length)
                    }, o);
                    return () => clearInterval(e)
                }, [o, f, h.length]), (0, s.useEffect)(() => {
                    let e = p.current;
                    if (e) {
                        let t = () => {
                            var t;
                            x(Math.min(Math.floor(e.scrollLeft / ((null === (t = e.querySelector(".card")) || void 0 === t ? void 0 : t.clientWidth) || 0)), h.length - 1))
                        };
                        return e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
                    }
                }, [h.length]), (0, r.jsx)("section", {
                    ref: g,
                    id: "features",
                    children: (0, r.jsx)("div", {
                        className: "container",
                        children: (0, r.jsx)("div", {
                            className: "max-w-6xl mx-auto",
                            children: (0, r.jsxs)("div", {
                                className: "mx-auto my-12 h-full grid lg:grid-cols-2 gap-10 items-center",
                                children: [(0, r.jsx)("div", {
                                    className: " hidden lg:flex order-1 lg:order-[0] ".concat(u ? "lg:order-2 lg:justify-end" : "justify-start"),
                                    children: (0, r.jsx)(i.fC, {
                                        className: "",
                                        type: "single",
                                        defaultValue: "item-".concat(f),
                                        value: "item-".concat(f),
                                        onValueChange: e => x(Number(e.split("-")[1])),
                                        children: h.map((e, t) => (0, r.jsxs)(c, {
                                            className: "relative mb-8 last:mb-0",
                                            value: "item-".concat(t),
                                            children: ["left" === m || "right" === m ? (0, r.jsx)("div", {
                                                className: "absolute bottom-0 top-0 h-full w-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 ".concat("right" === m ? "left-auto right-0" : "left-0 right-auto"),
                                                children: (0, r.jsx)("div", {
                                                    className: "absolute left-0 top-0 w-full ".concat(f === t ? "h-full" : "h-0", " origin-top bg-primary transition-all ease-linear dark:bg-white"),
                                                    style: {
                                                        transitionDuration: f === t ? "".concat(o, "ms") : "0s"
                                                    }
                                                })
                                            }) : null, "top" === m || "bottom" === m ? (0, r.jsx)("div", {
                                                className: "absolute left-0 right-0 w-full h-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 ".concat("bottom" === m ? "bottom-0" : "top-0"),
                                                children: (0, r.jsx)("div", {
                                                    className: "absolute left-0 ".concat("bottom" === m ? "bottom-0" : "top-0", " h-full ").concat(f === t ? "w-full" : "w-0", " origin-left bg-primary transition-all ease-linear dark:bg-white"),
                                                    style: {
                                                        transitionDuration: f === t ? "".concat(o, "ms") : "0s"
                                                    }
                                                })
                                            }) : null, (0, r.jsxs)("div", {
                                                className: "flex items-center relative",
                                                children: [(0, r.jsx)("div", {
                                                    className: "item-box w-12 h-12 bg-primary/10 rounded-full sm:mx-6 mx-2 shrink-0 flex items-center justify-center",
                                                    children: e.icon
                                                }), (0, r.jsxs)("div", {
                                                    children: [(0, r.jsx)(d, {
                                                        className: "text-xl font-bold pl-0",
                                                        children: e.title
                                                    }), (0, r.jsx)(d, {
                                                        className: "justify-start text-left leading-4 text-[16px] pl-0",
                                                        children: e.content
                                                    })]
                                                })]
                                            })]
                                        }, e.id))
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "h-[350px] min-h-[200px] w-auto  ".concat(u && "lg:order-1"),
                                    children: (null === (t = h[f]) || void 0 === t ? void 0 : t.image) ? (0, r.jsx)(n.E.img, {
                                        src: h[f].image,
                                        alt: "feature",
                                        className: "aspect-auto h-full w-full rounded-xl border border-neutral-300/50 object-cover object-left-top p-1 shadow-lg",
                                        initial: {
                                            opacity: 0,
                                            scale: .98
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: .98
                                        },
                                        transition: {
                                            duration: .25,
                                            ease: "easeOut"
                                        }
                                    }, f) : (null === (a = h[f]) || void 0 === a ? void 0 : a.video) ? (0, r.jsx)("video", {
                                        preload: "auto",
                                        src: h[f].video,
                                        className: "aspect-auto h-full w-full rounded-lg object-cover shadow-lg",
                                        autoPlay: !0,
                                        loop: !0,
                                        muted: !0
                                    }) : (0, r.jsx)("div", {
                                        className: "aspect-auto h-full w-full rounded-xl border border-neutral-300/50 bg-gray-200 p-1"
                                    })
                                }), (0, r.jsx)("ul", {
                                    ref: p,
                                    className: " flex h-full snap-x flex-nowrap overflow-x-auto py-10 [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden snap-mandatory",
                                    style: {
                                        padding: "50px calc(50%)"
                                    },
                                    children: h.map((e, t) => (0, r.jsxs)("div", {
                                        className: "card relative mr-8 grid h-full max-w-60 shrink-0 items-start justify-center py-4 last:mr-0",
                                        onClick: () => x(t),
                                        style: {
                                            scrollSnapAlign: "center"
                                        },
                                        children: [(0, r.jsx)("div", {
                                            className: "absolute bottom-0 left-0 right-auto top-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30",
                                            children: (0, r.jsx)("div", {
                                                className: "absolute left-0 top-0 h-full ".concat(f === t ? "w-full" : "w-0", " origin-top bg-primary transition-all ease-linear"),
                                                style: {
                                                    transitionDuration: f === t ? "".concat(o, "ms") : "0s"
                                                }
                                            })
                                        }), (0, r.jsx)("h2", {
                                            className: "text-xl font-bold",
                                            children: e.title
                                        }), (0, r.jsx)("p", {
                                            className: "mx-0 max-w-sm text-balance text-sm",
                                            children: e.content
                                        })]
                                    }, e.id))
                                })]
                            })
                        })
                    })
                })
            }
            d.displayName = "AccordionTrigger", (0, s.forwardRef)((e, t) => {
                let {
                    children: a,
                    className: l,
                    ...n
                } = e;
                return (0, r.jsx)(i.VY, {
                    className: (0, o.cn)("overflow-hidden text-[15px] font-medium data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down", l),
                    ...n,
                    ref: t,
                    children: (0, r.jsx)("div", {
                        className: "px-5 py-2",
                        children: a
                    })
                })
            }).displayName = "AccordionContent"
        },
        7708: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var r = a(7949),
                i = a(3170),
                l = a(3981),
                n = a(1619),
                s = a(6265);

            function o(e) {
                let {
                    children: t,
                    className: a,
                    variant: o,
                    duration: c = .4,
                    delay: d = 0,
                    yOffset: u = 6,
                    inView: m = !1,
                    inViewMargin: h = "-50px",
                    blur: f = "6px"
                } = e, x = (0, s.useRef)(null), p = (0, i.Y)(x, {
                    once: !0,
                    margin: h
                });
                return (0, r.jsx)(l.M, {
                    children: (0, r.jsx)(n.E.div, {
                        ref: x,
                        initial: "hidden",
                        animate: !m || p ? "visible" : "hidden",
                        exit: "hidden",
                        variants: o || {
                            hidden: {
                                y: u,
                                opacity: 0,
                                filter: "blur(".concat(f, ")")
                            },
                            visible: {
                                y: -u,
                                opacity: 1,
                                filter: "blur(0px)"
                            }
                        },
                        transition: {
                            delay: .04 + d,
                            duration: c,
                            ease: "easeOut"
                        },
                        className: a,
                        children: t
                    })
                })
            }
        },
        5527: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = a(7949);

            function i(e) {
                let {
                    id: t,
                    title: a,
                    subtitle: i,
                    description: l,
                    children: n,
                    className: s
                } = e, o = a ? a.toLowerCase().replace(/\s+/g, "-") : t;
                return (0, r.jsx)("section", {
                    id: t || o,
                    children: (0, r.jsx)("div", {
                        className: s,
                        children: (0, r.jsxs)("div", {
                            className: "relative container mx-auto px-4 py-16 max-w-7xl",
                            children: [(0, r.jsxs)("div", {
                                className: "text-center space-y-4 pb-6 mx-auto",
                                children: [a && (0, r.jsx)("h2", {
                                    className: "text-sm text-primary font-mono font-medium tracking-wider uppercase",
                                    children: a
                                }), i && (0, r.jsx)("h3", {
                                    className: "mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl",
                                    children: i
                                }), l && (0, r.jsx)("p", {
                                    className: "mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto",
                                    children: l
                                })]
                            }), n]
                        })
                    })
                })
            }
        },
        8125: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return w
                }
            });
            var r = a(7949),
                i = a(1619),
                l = a(3091),
                n = a(9290),
                s = a(3981),
                o = a(4197),
                c = a(7879),
                d = a(8585),
                u = a(6265);
            let m = {
                "from-bottom": {
                    initial: {
                        y: "100%",
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    exit: {
                        y: "100%",
                        opacity: 0
                    }
                },
                "from-center": {
                    initial: {
                        scale: .5,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: .5,
                        opacity: 0
                    }
                },
                "from-top": {
                    initial: {
                        y: "-100%",
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    exit: {
                        y: "-100%",
                        opacity: 0
                    }
                },
                "from-left": {
                    initial: {
                        x: "-100%",
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    exit: {
                        x: "-100%",
                        opacity: 0
                    }
                },
                "from-right": {
                    initial: {
                        x: "100%",
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    exit: {
                        x: "100%",
                        opacity: 0
                    }
                },
                fade: {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    }
                },
                "top-in-bottom-out": {
                    initial: {
                        y: "-100%",
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    exit: {
                        y: "100%",
                        opacity: 0
                    }
                },
                "left-in-right-out": {
                    initial: {
                        x: "-100%",
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    exit: {
                        x: "100%",
                        opacity: 0
                    }
                }
            };

            function h(e) {
                let {
                    animationStyle: t = "from-center",
                    videoSrc: a,
                    thumbnailSrc: l,
                    thumbnailAlt: h = "Video thumbnail",
                    className: f
                } = e, [x, p] = (0, u.useState)(!1), g = m[t];
                return (0, r.jsxs)("div", {
                    className: (0, n.cn)("relative", f),
                    children: [(0, r.jsxs)("div", {
                        className: "relative cursor-pointer group rounded-md p-2 ring-1 ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10 backdrop-blur-md",
                        onClick: () => p(!0),
                        children: [(0, r.jsx)(d.default, {
                            src: l,
                            alt: h,
                            width: 1920,
                            height: 1080,
                            className: "transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-md border"
                        }), (0, r.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl",
                            children: (0, r.jsx)("div", {
                                className: "z-30 bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28",
                                children: (0, r.jsx)("div", {
                                    className: "flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100",
                                    children: (0, r.jsx)(o.Z, {
                                        className: "size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out",
                                        style: {
                                            filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"
                                        }
                                    })
                                })
                            })
                        })]
                    }), (0, r.jsx)(s.M, {
                        children: x && (0, r.jsx)(i.E.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            onClick: () => p(!1),
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md",
                            children: (0, r.jsxs)(i.E.div, { ...g,
                                transition: {
                                    type: "spring",
                                    damping: 30,
                                    stiffness: 300
                                },
                                className: "relative w-full max-w-4xl aspect-video mx-4 md:mx-0",
                                children: [(0, r.jsx)(i.E.button, {
                                    className: "absolute -top-16 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 dark:bg-neutral-100/50 dark:text-black",
                                    children: (0, r.jsx)(c.Z, {
                                        className: "size-5"
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "size-full border-2 border-white rounded-2xl overflow-hidden isolate z-[1] relative",
                                    children: (0, r.jsx)("iframe", {
                                        src: a,
                                        className: "size-full rounded-2xl",
                                        allowFullScreen: !0,
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
            var f = a(1425),
                x = a(4571);
            let p = [.16, 1, .3, 1];

            function g() {
                return (0, r.jsxs)(i.E.a, {
                    href: "/blog/introducing-acme-ai",
                    className: "flex w-auto items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre",
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        ease: p
                    },
                    children: [(0, r.jsx)("div", {
                        className: "w-fit rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm",
                        children: "\uD83D\uDCE3 Announcement"
                    }), (0, r.jsx)("p", {
                        className: "text-xs font-medium text-primary sm:text-sm",
                        children: "Introducing Acme.ai"
                    }), (0, r.jsx)("svg", {
                        width: "12",
                        height: "12",
                        className: "ml-1",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            d: "M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z",
                            fill: "hsl(var(--primary))"
                        })
                    })]
                })
            }

            function v() {
                return (0, r.jsxs)("div", {
                    className: "flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8",
                    children: [(0, r.jsx)(i.E.h1, {
                        className: "text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl",
                        initial: {
                            filter: "blur(10px)",
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            filter: "blur(0px)",
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            ease: p,
                            staggerChildren: .2
                        },
                        children: ["Automate", "your", "workflow", "with AI"].map((e, t) => (0, r.jsx)(i.E.span, {
                            className: "inline-block px-1 md:px-2 text-balance font-semibold",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8,
                                delay: .2 * t,
                                ease: p
                            },
                            children: e
                        }, t))
                    }), (0, r.jsx)(i.E.p, {
                        className: "mx-auto max-w-xl text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9 text-balance",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .6,
                            duration: .8,
                            ease: p
                        },
                        children: "No matter what problem you have, our AI can help you solve it."
                    })]
                })
            }

            function b() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.E.div, {
                        className: "mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .8,
                            duration: .8,
                            ease: p
                        },
                        children: (0, r.jsxs)(x.default, {
                            href: "/signup",
                            className: (0, n.cn)((0, f.d)({
                                variant: "default"
                            }), "w-full sm:w-auto text-background flex gap-2"),
                            children: [(0, r.jsx)(l.P.logo, {
                                className: "h-6 w-6"
                            }), "Get started for free"]
                        })
                    }), (0, r.jsx)(i.E.p, {
                        className: "mt-5 text-sm text-muted-foreground",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1,
                            duration: .8
                        },
                        children: "7 day free trial. No credit card required."
                    })]
                })
            }

            function y() {
                return (0, r.jsx)(i.E.div, {
                    className: "relative mx-auto flex w-full items-center justify-center",
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 1.2,
                        duration: 1,
                        ease: p
                    },
                    children: (0, r.jsx)(h, {
                        animationStyle: "from-center",
                        videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
                        thumbnailSrc: "/dashboard.png",
                        thumbnailAlt: "Hero Video",
                        className: "border rounded-lg shadow-lg max-w-screen-lg mt-16"
                    })
                })
            }

            function w() {
                return (0, r.jsx)("section", {
                    id: "hero",
                    children: (0, r.jsxs)("div", {
                        className: "relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8",
                        children: [(0, r.jsx)(g, {}), (0, r.jsx)(v, {}), (0, r.jsx)(b, {}), (0, r.jsx)(y, {}), (0, r.jsx)("div", {
                            className: "pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"
                        })]
                    })
                })
            }
        },
        158: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return p
                }
            });
            var r = a(7949),
                i = a(5527),
                l = a(1425),
                n = a(5210),
                s = a(6265),
                o = a(3640),
                c = a(9290);
            let d = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(o.fC, {
                    className: (0, c.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", a),
                    ...i,
                    ref: t,
                    children: (0, r.jsx)(o.bU, {
                        className: (0, c.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
                    })
                })
            });
            d.displayName = o.fC.displayName;
            var u = a(5515),
                m = a(1619),
                h = a(5928),
                f = a(4571),
                x = a(9365);

            function p() {
                let [e, t] = (0, s.useState)(!0), {
                    isDesktop: a
                } = function() {
                    let [e, t] = (0, s.useState)({
                        width: void 0,
                        height: void 0
                    });
                    return (0, s.useEffect)(() => {
                        function e() {
                            t({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        }
                        return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
                    }, []), {
                        windowSize: e,
                        isMobile: "number" == typeof(null == e ? void 0 : e.width) && (null == e ? void 0 : e.width) < 768,
                        isDesktop: "number" == typeof(null == e ? void 0 : e.width) && (null == e ? void 0 : e.width) >= 768
                    }
                }();
                return (0, r.jsxs)(i.Z, {
                    title: "Pricing",
                    subtitle: "Choose the plan that's right for you",
                    children: [(0, r.jsxs)("div", {
                        className: "flex justify-center mb-10",
                        children: [(0, r.jsx)("span", {
                            className: "mr-2 font-semibold",
                            children: "Monthly"
                        }), (0, r.jsx)("label", {
                            className: "relative inline-flex items-center cursor-pointer",
                            children: (0, r.jsx)(n.Label, {
                                children: (0, r.jsx)(d, {
                                    checked: !e,
                                    onCheckedChange: () => {
                                        t(!e)
                                    }
                                })
                            })
                        }), (0, r.jsx)("span", {
                            className: "ml-2 font-semibold",
                            children: "Yearly"
                        })]
                    }), (0, r.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 sm:2 gap-4",
                        children: u.J.pricing.map((t, i) => (0, r.jsxs)(m.E.div, {
                            initial: {
                                y: 50,
                                opacity: 1
                            },
                            whileInView: a ? {
                                y: 0,
                                opacity: 1,
                                x: i === u.J.pricing.length - 1 ? -30 : 0 === i ? 30 : 0,
                                scale: 0 === i || i === u.J.pricing.length - 1 ? .94 : 1
                            } : {},
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: 1.6,
                                type: "spring",
                                stiffness: 100,
                                damping: 30,
                                delay: .4,
                                opacity: {
                                    duration: .5
                                }
                            },
                            className: (0, c.cn)("rounded-2xl border-[1px] p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative", t.isPopular ? "border-primary border-[2px]" : "border-border", 0 === i || i === u.J.pricing.length - 1 ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]" : "z-10", 0 === i && "origin-right", i === u.J.pricing.length - 1 && "origin-left"),
                            children: [t.isPopular && (0, r.jsxs)("div", {
                                className: "absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center",
                                children: [(0, r.jsx)(x.QJe, {
                                    className: "text-white"
                                }), (0, r.jsx)("span", {
                                    className: "text-white ml-1 font-sans font-semibold",
                                    children: "Popular"
                                })]
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("p", {
                                    className: "text-base font-semibold text-muted-foreground",
                                    children: t.name
                                }), (0, r.jsxs)("p", {
                                    className: "mt-6 flex items-center justify-center gap-x-2",
                                    children: [(0, r.jsx)("span", {
                                        className: "text-5xl font-bold tracking-tight text-foreground",
                                        children: e ? t.price : t.yearlyPrice
                                    }), "Next 3 months" !== t.period && (0, r.jsxs)("span", {
                                        className: "text-sm font-semibold leading-6 tracking-wide text-muted-foreground",
                                        children: ["/ ", t.period]
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "text-xs leading-5 text-muted-foreground",
                                    children: e ? "billed monthly" : "billed annually"
                                }), (0, r.jsx)("ul", {
                                    className: "mt-5 gap-2 flex flex-col",
                                    children: t.features.map((e, t) => (0, r.jsxs)("li", {
                                        className: "flex items-center",
                                        children: [(0, r.jsx)(h.Z, {
                                            className: "mr-2 h-4 w-4 text-primary"
                                        }), (0, r.jsx)("span", {
                                            children: e
                                        })]
                                    }, t))
                                }), (0, r.jsx)("hr", {
                                    className: "w-full my-4"
                                }), (0, r.jsx)(f.default, {
                                    href: t.href,
                                    className: (0, c.cn)((0, l.d)({
                                        variant: "outline"
                                    }), "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter", "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white", t.isPopular ? "bg-primary text-white" : "bg-white text-black"),
                                    children: t.buttonText
                                }), (0, r.jsx)("p", {
                                    className: "mt-6 text-xs leading-5 text-muted-foreground",
                                    children: t.description
                                })]
                            })]
                        }, i))
                    })]
                })
            }
        },
        518: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return u
                }
            });
            var r = a(7949),
                i = a(6265),
                l = a(9290);
            let n = i.memo(function(e) {
                let {
                    mainCircleSize: t = 210,
                    mainCircleOpacity: a = .24,
                    numCircles: i = 8,
                    className: n
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, l.cn)("absolute inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]", n),
                    children: Array.from({
                        length: i
                    }, (e, l) => {
                        let n = t + 70 * l,
                            s = 5 + 5 * l;
                        return (0, r.jsx)("div", {
                            className: "absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:".concat(l, "]"),
                            style: {
                                width: "".concat(n, "px"),
                                height: "".concat(n, "px"),
                                opacity: a - .03 * l,
                                animationDelay: "".concat(.06 * l, "s"),
                                borderStyle: l === i - 1 ? "dashed" : "solid",
                                borderWidth: "1px",
                                borderColor: "hsl(var(--foreground), ".concat(s / 100, ")"),
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)"
                            }
                        }, l)
                    })
                })
            });

            function s(e) {
                let {
                    src: t,
                    url: a,
                    width: i = 1203,
                    height: l = 753,
                    ...n
                } = e;
                return (0, r.jsxs)("svg", {
                    width: i,
                    height: l,
                    viewBox: "0 0 ".concat(i, " ").concat(l),
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...n,
                    children: [(0, r.jsxs)("g", {
                        clipPath: "url(#path0)",
                        children: [(0, r.jsx)("path", {
                            d: "M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z",
                            className: "fill-[#E5E5E5] dark:fill-[#404040]"
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z",
                            className: "fill-[#E5E5E5] dark:fill-[#404040]"
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z",
                            className: "fill-white dark:fill-[#262626]"
                        }), (0, r.jsx)("circle", {
                            cx: "27",
                            cy: "25",
                            r: "6",
                            className: "fill-[#E5E5E5] dark:fill-[#404040]"
                        }), (0, r.jsx)("circle", {
                            cx: "47",
                            cy: "25",
                            r: "6",
                            className: "fill-[#E5E5E5] dark:fill-[#404040]"
                        }), (0, r.jsx)("circle", {
                            cx: "67",
                            cy: "25",
                            r: "6",
                            className: "fill-[#E5E5E5] dark:fill-[#404040]"
                        }), (0, r.jsx)("path", {
                            d: "M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z",
                            fill: "#F5F5F5"
                        }), (0, r.jsx)("g", {
                            className: "mix-blend-luminosity",
                            children: (0, r.jsx)("path", {
                                d: "M566.269 32.0852H572.426C573.277 32.0852 573.696 31.6663 573.696 30.7395V25.9851C573.696 25.1472 573.353 24.7219 572.642 24.6521V23.0842C572.642 20.6721 571.036 19.5105 569.348 19.5105C567.659 19.5105 566.053 20.6721 566.053 23.0842V24.6711C565.393 24.7727 565 25.1917 565 25.9851V30.7395C565 31.6663 565.418 32.0852 566.269 32.0852ZM567.272 22.97C567.272 21.491 568.211 20.6785 569.348 20.6785C570.478 20.6785 571.423 21.491 571.423 22.97V24.6394L567.272 24.6458V22.97Z",
                                fill: "#A3A3A3"
                            })
                        }), (0, r.jsx)("g", {
                            className: "mix-blend-luminosity",
                            children: (0, r.jsx)("text", {
                                x: "580",
                                y: "30",
                                fill: "#A3A3A3",
                                fontSize: "12",
                                fontFamily: "Arial, sans-serif",
                                children: a
                            })
                        }), (0, r.jsx)("g", {
                            className: "mix-blend-luminosity",
                            children: (0, r.jsx)("path", {
                                d: "M265.5 33.8984C265.641 33.8984 265.852 33.8516 266.047 33.7422C270.547 31.2969 272.109 30.1641 272.109 27.3203V21.4219C272.109 20.4844 271.742 20.1484 270.961 19.8125C270.094 19.4453 267.18 18.4297 266.328 18.1406C266.07 18.0547 265.766 18 265.5 18C265.234 18 264.93 18.0703 264.672 18.1406C263.82 18.3828 260.906 19.4531 260.039 19.8125C259.258 20.1406 258.891 20.4844 258.891 21.4219V27.3203C258.891 30.1641 260.461 31.2812 264.945 33.7422C265.148 33.8516 265.359 33.8984 265.5 33.8984ZM265.922 19.5781C266.945 19.9766 269.172 20.7656 270.344 21.1875C270.562 21.2656 270.617 21.3828 270.617 21.6641V27.0234C270.617 29.3125 269.469 29.9375 265.945 32.0625C265.727 32.1875 265.617 32.2344 265.508 32.2344V19.4844C265.617 19.4844 265.734 19.5156 265.922 19.5781Z",
                                fill: "#A3A3A3"
                            })
                        }), (0, r.jsx)("g", {
                            className: "mix-blend-luminosity",
                            children: (0, r.jsx)("path", {
                                d: "M936.273 24.9766C936.5 24.9766 936.68 24.9062 936.82 24.7578L940.023 21.5312C940.195 21.3594 940.273 21.1719 940.273 20.9531C940.273 20.7422 940.188 20.5391 940.023 20.3828L936.82 17.125C936.68 16.9688 936.5 16.8906 936.273 16.8906C935.852 16.8906 935.516 17.2422 935.516 17.6719C935.516 17.8828 935.594 18.0547 935.727 18.2031L937.594 20.0312C937.227 19.9766 936.852 19.9453 936.477 19.9453C932.609 19.9453 929.516 23.0391 929.516 26.9141C929.516 30.7891 932.633 33.9062 936.5 33.9062C940.375 33.9062 943.484 30.7891 943.484 26.9141C943.484 26.4453 943.156 26.1094 942.688 26.1094C942.234 26.1094 941.93 26.4453 941.93 26.9141C941.93 29.9297 939.516 32.3516 936.5 32.3516C933.492 32.3516 931.07 29.9297 931.07 26.9141C931.07 23.875 933.469 21.4688 936.477 21.4688C936.984 21.4688 937.453 21.5078 937.867 21.5781L935.734 23.6875C935.594 23.8281 935.516 24 935.516 24.2109C935.516 24.6406 935.852 24.9766 936.273 24.9766Z",
                                fill: "#A3A3A3"
                            })
                        }), (0, r.jsx)("g", {
                            className: "mix-blend-luminosity",
                            children: (0, r.jsx)("path", {
                                d: "M1134 33.0156C1134.49 33.0156 1134.89 32.6094 1134.89 32.1484V27.2578H1139.66C1140.13 27.2578 1140.54 26.8594 1140.54 26.3672C1140.54 25.8828 1140.13 25.4766 1139.66 25.4766H1134.89V20.5859C1134.89 20.1172 1134.49 19.7188 1134 19.7188C1133.52 19.7188 1133.11 20.1172 1133.11 20.5859V25.4766H1128.34C1127.88 25.4766 1127.46 25.8828 1127.46 26.3672C1127.46 26.8594 1127.88 27.2578 1128.34 27.2578H1133.11V32.1484C1133.11 32.6094 1133.52 33.0156 1134 33.0156Z",
                                fill: "#A3A3A3"
                            })
                        }), (0, r.jsx)("g", {
                            className: "mix-blend-luminosity",
                            children: (0, r.jsx)("path", {
                                d: "M1161.8 31.0703H1163.23V32.375C1163.23 34.0547 1164.12 34.9219 1165.81 34.9219H1174.2C1175.89 34.9219 1176.77 34.0547 1176.77 32.3828V24.0469C1176.77 22.375 1175.89 21.5 1174.2 21.5H1172.77V20.2578C1172.77 18.5859 1171.88 17.7109 1170.19 17.7109H1161.8C1160.1 17.7109 1159.23 18.5781 1159.23 20.2578V28.5234C1159.23 30.1953 1160.1 31.0703 1161.8 31.0703ZM1161.9 29.5078C1161.18 29.5078 1160.78 29.1328 1160.78 28.3828V20.3984C1160.78 19.6406 1161.18 19.2656 1161.9 19.2656H1170.09C1170.8 19.2656 1171.2 19.6406 1171.2 20.3984V21.5H1165.81C1164.12 21.5 1163.23 22.375 1163.23 24.0469V29.5078H1161.9ZM1165.91 33.3672C1165.19 33.3672 1164.8 32.9922 1164.8 32.2422V24.1875C1164.8 23.4297 1165.19 23.0625 1165.91 23.0625H1174.1C1174.81 23.0625 1175.21 23.4297 1175.21 24.1875V32.2422C1175.21 32.9922 1174.81 33.3672 1174.1 33.3672H1165.91Z",
                                fill: "#A3A3A3"
                            })
                        }), (0, r.jsx)("g", {
                            className: "mix-blend-luminosity",
                            children: (0, r.jsx)("path", {
                                d: "M1099.51 28.4141C1099.91 28.4141 1100.24 28.0859 1100.24 27.6953V19.8359L1100.18 18.6797L1100.66 19.25L1101.75 20.4141C1101.88 20.5547 1102.06 20.625 1102.24 20.625C1102.6 20.625 1102.9 20.3672 1102.9 20C1102.9 19.8047 1102.82 19.6641 1102.69 19.5312L1100.06 17.0078C1099.88 16.8203 1099.7 16.7578 1099.51 16.7578C1099.32 16.7578 1099.14 16.8203 1098.95 17.0078L1096.33 19.5312C1096.2 19.6641 1096.12 19.8047 1096.12 20C1096.12 20.3672 1096.41 20.625 1096.77 20.625C1096.95 20.625 1097.14 20.5547 1097.27 20.4141L1098.35 19.25L1098.84 18.6719L1098.78 19.8359V27.6953C1098.78 28.0859 1099.11 28.4141 1099.51 28.4141ZM1095 34.6562H1104C1105.7 34.6562 1106.57 33.7812 1106.57 32.1094V24.4297C1106.57 22.7578 1105.7 21.8828 1104 21.8828H1101.89V23.4375H1103.9C1104.61 23.4375 1105.02 23.8125 1105.02 24.5625V31.9688C1105.02 32.7188 1104.61 33.0938 1103.9 33.0938H1095.1C1094.38 33.0938 1093.98 32.7188 1093.98 31.9688V24.5625C1093.98 23.8125 1094.38 23.4375 1095.1 23.4375H1097.13V21.8828H1095C1093.31 21.8828 1092.43 22.75 1092.43 24.4297V32.1094C1092.43 33.7812 1093.31 34.6562 1095 34.6562Z",
                                fill: "#A3A3A3"
                            })
                        }), (0, r.jsx)("g", {
                            className: "mix-blend-luminosity",
                            children: (0, r.jsx)("path", {
                                d: "M99.5703 33.6016H112.938C114.633 33.6016 115.516 32.7266 115.516 31.0547V21.5469C115.516 19.875 114.633 19 112.938 19H99.5703C97.8828 19 97 19.8672 97 21.5469V31.0547C97 32.7266 97.8828 33.6016 99.5703 33.6016ZM99.6719 32.0469C98.9531 32.0469 98.5547 31.6719 98.5547 30.9141V21.6875C98.5547 20.9297 98.9531 20.5547 99.6719 20.5547H103.234V32.0469H99.6719ZM112.836 20.5547C113.555 20.5547 113.953 20.9297 113.953 21.6875V30.9141C113.953 31.6719 113.555 32.0469 112.836 32.0469H104.711V20.5547H112.836ZM101.703 23.4141C101.984 23.4141 102.219 23.1719 102.219 22.9062C102.219 22.6406 101.984 22.4062 101.703 22.4062H100.102C99.8203 22.4062 99.5859 22.6406 99.5859 22.9062C99.5859 23.1719 99.8203 23.4141 100.102 23.4141H101.703ZM101.703 25.5156C101.984 25.5156 102.219 25.2812 102.219 25.0078C102.219 24.7422 101.984 24.5078 101.703 24.5078H100.102C99.8203 24.5078 99.5859 24.7422 99.5859 25.0078C99.5859 25.2812 99.8203 25.5156 100.102 25.5156H101.703ZM101.703 27.6094C101.984 27.6094 102.219 27.3828 102.219 27.1094C102.219 26.8438 101.984 26.6172 101.703 26.6172H100.102C99.8203 26.6172 99.5859 26.8438 99.5859 27.1094C99.5859 27.3828 99.8203 27.6094 100.102 27.6094H101.703Z",
                                fill: "#A3A3A3"
                            })
                        }), (0, r.jsx)("g", {
                            className: "mix-blend-luminosity",
                            children: (0, r.jsx)("path", {
                                d: "M143.914 32.5938C144.094 32.7656 144.312 32.8594 144.562 32.8594C145.086 32.8594 145.492 32.4531 145.492 31.9375C145.492 31.6797 145.391 31.4453 145.211 31.2656L139.742 25.9219L145.211 20.5938C145.391 20.4141 145.492 20.1719 145.492 19.9219C145.492 19.4062 145.086 19 144.562 19C144.312 19 144.094 19.0938 143.922 19.2656L137.844 25.2031C137.625 25.4062 137.516 25.6562 137.516 25.9297C137.516 26.2031 137.625 26.4375 137.836 26.6484L143.914 32.5938Z",
                                fill: "#A3A3A3"
                            })
                        }), (0, r.jsx)("g", {
                            className: "mix-blend-luminosity",
                            children: (0, r.jsx)("path", {
                                d: "M168.422 32.8594C168.68 32.8594 168.891 32.7656 169.07 32.5938L175.148 26.6562C175.359 26.4375 175.469 26.2109 175.469 25.9297C175.469 25.6562 175.367 25.4141 175.148 25.2109L169.07 19.2656C168.891 19.0938 168.68 19 168.422 19C167.898 19 167.492 19.4062 167.492 19.9219C167.492 20.1719 167.602 20.4141 167.773 20.5938L173.25 25.9375L167.773 31.2656C167.594 31.4531 167.492 31.6797 167.492 31.9375C167.492 32.4531 167.898 32.8594 168.422 32.8594Z",
                                fill: "#A3A3A3"
                            })
                        }), (0, r.jsx)("image", {
                            href: t,
                            width: "1200",
                            height: "700",
                            x: "1",
                            y: "52",
                            preserveAspectRatio: "xMidYMid slice",
                            clipPath: "url(#roundedBottom)"
                        })]
                    }), (0, r.jsxs)("defs", {
                        children: [(0, r.jsx)("clipPath", {
                            id: "path0",
                            children: (0, r.jsx)("rect", {
                                width: i,
                                height: l,
                                fill: "white"
                            })
                        }), (0, r.jsx)("clipPath", {
                            id: "roundedBottom",
                            children: (0, r.jsx)("path", {
                                d: "M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z",
                                fill: "white"
                            })
                        })]
                    })]
                })
            }
            n.displayName = "Ripple";
            var o = a(5527),
                c = a(1619);
            let d = [{
                title: "Advanced AI Algorithms",
                description: "Our platform utilizes cutting-edge AI algorithms to provide accurate and efficient solutions for your business needs.",
                className: "hover:bg-red-500/10 transition-all duration-500 ease-out",
                content: (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(s, {
                        src: "/dashboard.png",
                        url: "https://acme.ai",
                        className: "-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
                    })
                })
            }, {
                title: "Secure Data Handling",
                description: "We prioritize your data security with state-of-the-art encryption and strict privacy protocols, ensuring your information remains confidential.",
                className: "order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out",
                content: (0, r.jsx)(s, {
                    src: "/dashboard.png",
                    url: "https://acme.ai",
                    className: "-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
                })
            }, {
                title: "Seamless Integration",
                description: "Easily integrate our AI solutions into your existing workflows and systems for a smooth and efficient operation.",
                className: "md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out",
                content: (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(e => {
                        let {
                            squareSize: t = 4,
                            gridGap: a = 6,
                            flickerChance: l = .3,
                            color: n = "rgb(0, 0, 0)",
                            width: s,
                            height: o,
                            className: c,
                            maxOpacity: d = .3
                        } = e, u = (0, i.useRef)(null), [m, h] = (0, i.useState)(!1), f = (0, i.useMemo)(() => (e => {
                            let t = document.createElement("canvas");
                            t.width = t.height = 1;
                            let a = t.getContext("2d");
                            if (!a) return "rgba(255, 0, 0,";
                            if (e.startsWith("hsl")) {
                                a.fillStyle = e, a.fillRect(0, 0, 1, 1);
                                let [t, r, i] = a.getImageData(0, 0, 1, 1).data;
                                return "rgba(".concat(t, ", ").concat(r, ", ").concat(i, ",")
                            }
                            a.fillStyle = e, a.fillRect(0, 0, 1, 1);
                            let [r, i, l] = a.getImageData(0, 0, 1, 1).data;
                            return "rgba(".concat(r, ", ").concat(i, ", ").concat(l, ",")
                        })(n), [n]), x = (0, i.useCallback)(e => {
                            let r = s || e.clientWidth,
                                i = o || e.clientHeight,
                                l = window.devicePixelRatio || 1;
                            e.width = r * l, e.height = i * l, e.style.width = "".concat(r, "px"), e.style.height = "".concat(i, "px");
                            let n = Math.floor(r / (t + a)),
                                c = Math.floor(i / (t + a)),
                                u = new Float32Array(n * c);
                            for (let e = 0; e < u.length; e++) u[e] = Math.random() * d;
                            return {
                                width: r,
                                height: i,
                                cols: n,
                                rows: c,
                                squares: u,
                                dpr: l
                            }
                        }, [t, a, s, o, d]), p = (0, i.useCallback)((e, t) => {
                            for (let a = 0; a < e.length; a++) Math.random() < l * t && (e[a] = Math.random() * d)
                        }, [l, d]), g = (0, i.useCallback)((e, r, i, l, n, s, o) => {
                            e.clearRect(0, 0, r, i), e.fillStyle = "transparent", e.fillRect(0, 0, r, i);
                            for (let r = 0; r < l; r++)
                                for (let i = 0; i < n; i++) {
                                    let l = s[r * n + i];
                                    e.fillStyle = "".concat(f).concat(l, ")"), e.fillRect(r * (t + a) * o, i * (t + a) * o, t * o, t * o)
                                }
                        }, [f, t, a]);
                        return (0, i.useEffect)(() => {
                            let e;
                            let t = u.current;
                            if (!t) return;
                            let a = t.getContext("2d");
                            if (!a) return;
                            let {
                                width: r,
                                height: i,
                                cols: l,
                                rows: n,
                                squares: s,
                                dpr: o
                            } = x(t), c = 0, d = t => {
                                if (!m) return;
                                let u = (t - c) / 1e3;
                                c = t, p(s, u), g(a, r * o, i * o, l, n, s, o), e = requestAnimationFrame(d)
                            }, f = () => {
                                ({
                                    width: r,
                                    height: i,
                                    cols: l,
                                    rows: n,
                                    squares: s,
                                    dpr: o
                                } = x(t))
                            }, v = new IntersectionObserver(e => {
                                let [t] = e;
                                h(t.isIntersecting)
                            }, {
                                threshold: 0
                            });
                            return v.observe(t), window.addEventListener("resize", f), m && (e = requestAnimationFrame(d)), () => {
                                window.removeEventListener("resize", f), cancelAnimationFrame(e), v.disconnect()
                            }
                        }, [x, p, g, s, o, m]), (0, r.jsx)("canvas", {
                            ref: u,
                            className: "size-full pointer-events-none ".concat(c),
                            style: {
                                width: s || "100%",
                                height: o || "100%"
                            },
                            width: s,
                            height: o
                        })
                    }, {
                        className: "z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]",
                        squareSize: 4,
                        gridGap: 6,
                        color: "#000",
                        maxOpacity: .1,
                        flickerChance: .1,
                        height: 800,
                        width: 800
                    }), (0, r.jsx)(s, {
                        src: "/dashboard.png",
                        url: "https://acme.ai",
                        className: "-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
                    })]
                })
            }, {
                title: "Customizable Solutions",
                description: "Tailor our AI services to your specific needs with flexible customization options, allowing you to get the most out of our platform.",
                className: "flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out",
                content: (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(n, {
                        className: "absolute -bottom-full"
                    }), (0, r.jsx)(s, {
                        src: "/dashboard.png",
                        url: "https://acme.ai",
                        className: "-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
                    })]
                })
            }];

            function u() {
                return (0, r.jsx)(o.Z, {
                    title: "Solution",
                    subtitle: "Empower Your Business with AI Workflows",
                    description: "Generic AI tools won't suffice. Our platform is purpose-built to provide exceptional AI-driven solutions for your unique business needs.",
                    className: "bg-neutral-100 dark:bg-neutral-900",
                    children: (0, r.jsx)("div", {
                        className: "mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3",
                        children: d.map((e, t) => (0, r.jsxs)(c.E.div, {
                            className: (0, l.cn)("group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl", e.className),
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .5,
                                type: "spring",
                                stiffness: 100,
                                damping: 30,
                                delay: .1 * t
                            },
                            viewport: {
                                once: !0
                            },
                            children: [(0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h3", {
                                    className: "font-semibold mb-2 text-primary",
                                    children: e.title
                                }), (0, r.jsx)("p", {
                                    className: "text-foreground",
                                    children: e.description
                                })]
                            }), e.content, (0, r.jsx)("div", {
                                className: "absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none"
                            })]
                        }, t))
                    })
                })
            }
        },
        6218: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return h
                }
            });
            var r = a(7949),
                i = a(9290);

            function l(e) {
                let {
                    className: t,
                    reverse: a,
                    pauseOnHover: l = !1,
                    children: n,
                    vertical: s = !1,
                    repeat: o = 4,
                    ...c
                } = e;
                return (0, r.jsx)("div", { ...c,
                    className: (0, i.cn)("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]", {
                        "flex-row": !s,
                        "flex-col": s
                    }, t),
                    children: Array(o).fill(0).map((e, t) => (0, r.jsx)("div", {
                        className: (0, i.cn)("flex shrink-0 justify-around [gap:var(--gap)]", {
                            "animate-marquee flex-row": !s,
                            "animate-marquee-vertical flex-col": s,
                            "group-hover:[animation-play-state:paused]": l,
                            "[animation-direction:reverse]": a
                        }),
                        children: n
                    }, t))
                })
            }
            var n = a(5527),
                s = a(1619),
                o = a(5291),
                c = a(8585);
            let d = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, r.jsx)("span", {
                        className: (0, i.cn)("bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary", a),
                        children: t
                    })
                },
                u = e => {
                    let {
                        description: t,
                        name: a,
                        img: l,
                        role: n,
                        className: s,
                        ...d
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: (0, i.cn)("mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4", " border border-neutral-200 bg-white", "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]", s),
                        ...d,
                        children: [(0, r.jsxs)("div", {
                            className: "select-none text-sm font-normal text-neutral-700 dark:text-neutral-400",
                            children: [t, (0, r.jsxs)("div", {
                                className: "flex flex-row py-1",
                                children: [(0, r.jsx)(o.Z, {
                                    className: "size-4 text-yellow-500 fill-yellow-500"
                                }), (0, r.jsx)(o.Z, {
                                    className: "size-4 text-yellow-500 fill-yellow-500"
                                }), (0, r.jsx)(o.Z, {
                                    className: "size-4 text-yellow-500 fill-yellow-500"
                                }), (0, r.jsx)(o.Z, {
                                    className: "size-4 text-yellow-500 fill-yellow-500"
                                }), (0, r.jsx)(o.Z, {
                                    className: "size-4 text-yellow-500 fill-yellow-500"
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex w-full select-none items-center justify-start gap-5",
                            children: [(0, r.jsx)(c.default, {
                                width: 40,
                                height: 40,
                                src: l || "",
                                alt: a,
                                className: "h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("p", {
                                    className: "font-medium text-neutral-500",
                                    children: a
                                }), (0, r.jsx)("p", {
                                    className: "text-xs font-normal text-neutral-400",
                                    children: n
                                })]
                            })]
                        })]
                    })
                },
                m = [{
                    name: "Alex Rivera",
                    role: "CTO at InnovateTech",
                    img: "https://randomuser.me/api/portraits/men/91.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["The AI-driven analytics from #QuantumInsights have revolutionized our product development cycle.", (0, r.jsx)(d, {
                            children: "Insights are now more accurate and faster than ever."
                        }), " ", "A game-changer for tech companies."]
                    })
                }, {
                    name: "Samantha Lee",
                    role: "Marketing Director at NextGen Solutions",
                    img: "https://randomuser.me/api/portraits/women/12.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["Implementing #AIStream's customer prediction model has drastically improved our targeting strategy.", (0, r.jsx)(d, {
                            children: "Seeing a 50% increase in conversion rates!"
                        }), " Highly recommend their solutions."]
                    })
                }, {
                    name: "Raj Patel",
                    role: "Founder & CEO at StartUp Grid",
                    img: "https://randomuser.me/api/portraits/men/45.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["As a startup, we need to move fast and stay ahead. #CodeAI's automated coding assistant helps us do just that.", (0, r.jsx)(d, {
                            children: "Our development speed has doubled."
                        }), " Essential tool for any startup."]
                    })
                }, {
                    name: "Emily Chen",
                    role: "Product Manager at Digital Wave",
                    img: "https://randomuser.me/api/portraits/women/83.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["#VoiceGen's AI-driven voice synthesis has made creating global products a breeze.", (0, r.jsx)(d, {
                            children: "Localization is now seamless and efficient."
                        }), " A must-have for global product teams."]
                    })
                }, {
                    name: "Michael Brown",
                    role: "Data Scientist at FinTech Innovations",
                    img: "https://randomuser.me/api/portraits/men/1.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["Leveraging #DataCrunch's AI for our financial models has given us an edge in predictive accuracy.", (0, r.jsx)(d, {
                            children: "Our investment strategies are now powered by real-time data analytics."
                        }), " ", "Transformative for the finance industry."]
                    })
                }, {
                    name: "Linda Wu",
                    role: "VP of Operations at LogiChain Solutions",
                    img: "https://randomuser.me/api/portraits/women/5.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["#LogiTech's supply chain optimization tools have drastically reduced our operational costs.", (0, r.jsx)(d, {
                            children: "Efficiency and accuracy in logistics have never been better."
                        }), " "]
                    })
                }, {
                    name: "Carlos Gomez",
                    role: "Head of R&D at EcoInnovate",
                    img: "https://randomuser.me/api/portraits/men/14.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["By integrating #GreenTech's sustainable energy solutions, we've seen a significant reduction in carbon footprint.", (0, r.jsx)(d, {
                            children: "Leading the way in eco-friendly business practices."
                        }), " ", "Pioneering change in the industry."]
                    })
                }, {
                    name: "Aisha Khan",
                    role: "Chief Marketing Officer at Fashion Forward",
                    img: "https://randomuser.me/api/portraits/women/56.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["#TrendSetter's market analysis AI has transformed how we approach fashion trends.", (0, r.jsx)(d, {
                            children: "Our campaigns are now data-driven with higher customer engagement."
                        }), " ", "Revolutionizing fashion marketing."]
                    })
                }, {
                    name: "Tom Chen",
                    role: "Director of IT at HealthTech Solutions",
                    img: "https://randomuser.me/api/portraits/men/18.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["Implementing #MediCareAI in our patient care systems has improved patient outcomes significantly.", (0, r.jsx)(d, {
                            children: "Technology and healthcare working hand in hand for better health."
                        }), " ", "A milestone in medical technology."]
                    })
                }, {
                    name: "Sofia Patel",
                    role: "CEO at EduTech Innovations",
                    img: "https://randomuser.me/api/portraits/women/73.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["#LearnSmart's AI-driven personalized learning plans have doubled student performance metrics.", (0, r.jsx)(d, {
                            children: "Education tailored to every learner's needs."
                        }), " ", "Transforming the educational landscape."]
                    })
                }, {
                    name: "Jake Morrison",
                    role: "CTO at SecureNet Tech",
                    img: "https://randomuser.me/api/portraits/men/25.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["With #CyberShield's AI-powered security systems, our data protection levels are unmatched.", (0, r.jsx)(d, {
                            children: "Ensuring safety and trust in digital spaces."
                        }), " ", "Redefining cybersecurity standards."]
                    })
                }, {
                    name: "Nadia Ali",
                    role: "Product Manager at Creative Solutions",
                    img: "https://randomuser.me/api/portraits/women/78.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["#DesignPro's AI has streamlined our creative process, enhancing productivity and innovation.", (0, r.jsx)(d, {
                            children: "Bringing creativity and technology together."
                        }), " A game-changer for creative industries."]
                    })
                }, {
                    name: "Omar Farooq",
                    role: "Founder at Startup Hub",
                    img: "https://randomuser.me/api/portraits/men/54.jpg",
                    description: (0, r.jsxs)("p", {
                        children: ["#VentureAI's insights into startup ecosystems have been invaluable for our growth and funding strategies.", (0, r.jsx)(d, {
                            children: "Empowering startups with data-driven decisions."
                        }), " A catalyst for startup success."]
                    })
                }];

            function h() {
                return (0, r.jsx)(n.Z, {
                    title: "Testimonials",
                    subtitle: "What our customers are saying",
                    className: "max-w-8xl",
                    children: (0, r.jsxs)("div", {
                        className: "relative mt-6 max-h-screen overflow-hidden",
                        children: [(0, r.jsx)("div", {
                            className: "gap-4 md:columns-2 xl:columns-3 2xl:columns-4",
                            children: Array(Math.ceil(m.length / 3)).fill(0).map((e, t) => (0, r.jsx)(l, {
                                vertical: !0,
                                className: (0, i.cn)({
                                    "[--duration:60s]": 1 === t,
                                    "[--duration:30s]": 2 === t,
                                    "[--duration:70s]": 3 === t
                                }),
                                children: m.slice(3 * t, (t + 1) * 3).map((e, t) => (0, r.jsx)(s.E.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    whileInView: {
                                        opacity: 1
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    transition: {
                                        delay: .8 * Math.random(),
                                        duration: 1.2
                                    },
                                    children: (0, r.jsx)(u, { ...e
                                    })
                                }, t))
                            }, t))
                        }), (0, r.jsx)("div", {
                            className: "pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"
                        }), (0, r.jsx)("div", {
                            className: "pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"
                        })]
                    })
                })
            }
        },
        8546: function(e, t, a) {
            "use strict";
            a.d(t, {
                Accordion: function() {
                    return o
                },
                AccordionContent: function() {
                    return u
                },
                AccordionItem: function() {
                    return c
                },
                AccordionTrigger: function() {
                    return d
                }
            });
            var r = a(7949),
                i = a(6265),
                l = a(9501),
                n = a(7039),
                s = a(9290);
            let o = l.fC,
                c = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...i
                    } = e;
                    return (0, r.jsx)(l.ck, {
                        ref: t,
                        className: (0, s.cn)("border-b", a),
                        ...i
                    })
                });
            c.displayName = "AccordionItem";
            let d = i.forwardRef((e, t) => {
                let {
                    className: a,
                    children: i,
                    ...o
                } = e;
                return (0, r.jsx)(l.h4, {
                    className: "flex",
                    children: (0, r.jsxs)(l.xz, {
                        ref: t,
                        className: (0, s.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", a),
                        ...o,
                        children: [i, (0, r.jsx)(n.Z, {
                            className: "h-4 w-4 shrink-0 transition-transform duration-200"
                        })]
                    })
                })
            });
            d.displayName = l.xz.displayName;
            let u = i.forwardRef((e, t) => {
                let {
                    className: a,
                    children: i,
                    ...n
                } = e;
                return (0, r.jsx)(l.VY, {
                    ref: t,
                    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                    ...n,
                    children: (0, r.jsx)("div", {
                        className: (0, s.cn)("pb-4 pt-0", a),
                        children: i
                    })
                })
            });
            u.displayName = l.VY.displayName
        },
        8846: function(e, t, a) {
            "use strict";
            a.d(t, {
                Carousel: function() {
                    return m
                },
                CarouselContent: function() {
                    return h
                },
                CarouselItem: function() {
                    return f
                },
                CarouselNext: function() {
                    return p
                },
                CarouselPrevious: function() {
                    return x
                }
            });
            var r = a(7949),
                i = a(5296),
                l = a(8311),
                n = a(4637),
                s = a(6265),
                o = a(1425),
                c = a(9290);
            let d = s.createContext(null);

            function u() {
                let e = s.useContext(d);
                if (!e) throw Error("useCarousel must be used within a <Carousel />");
                return e
            }
            let m = s.forwardRef((e, t) => {
                let {
                    orientation: a = "horizontal",
                    opts: l,
                    setApi: n,
                    plugins: o,
                    className: u,
                    children: m,
                    ...h
                } = e, [f, x] = (0, i.Z)({ ...l,
                    axis: "horizontal" === a ? "x" : "y"
                }, o), [p, g] = s.useState(!1), [v, b] = s.useState(!1), y = s.useCallback(e => {
                    e && (g(e.canScrollPrev()), b(e.canScrollNext()))
                }, []), w = s.useCallback(() => {
                    null == x || x.scrollPrev()
                }, [x]), j = s.useCallback(() => {
                    null == x || x.scrollNext()
                }, [x]), N = s.useCallback(e => {
                    "ArrowLeft" === e.key ? (e.preventDefault(), w()) : "ArrowRight" === e.key && (e.preventDefault(), j())
                }, [w, j]);
                return s.useEffect(() => {
                    x && n && n(x)
                }, [x, n]), s.useEffect(() => {
                    if (x) return y(x), x.on("reInit", y), x.on("select", y), () => {
                        null == x || x.off("select", y)
                    }
                }, [x, y]), (0, r.jsx)(d.Provider, {
                    value: {
                        carouselRef: f,
                        api: x,
                        opts: l,
                        orientation: a || ((null == l ? void 0 : l.axis) === "y" ? "vertical" : "horizontal"),
                        scrollPrev: w,
                        scrollNext: j,
                        canScrollPrev: p,
                        canScrollNext: v
                    },
                    children: (0, r.jsx)("div", {
                        ref: t,
                        onKeyDownCapture: N,
                        className: (0, c.cn)("relative", u),
                        role: "region",
                        "aria-roledescription": "carousel",
                        ...h,
                        children: m
                    })
                })
            });
            m.displayName = "Carousel";
            let h = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e, {
                    carouselRef: l,
                    orientation: n
                } = u();
                return (0, r.jsx)("div", {
                    ref: l,
                    className: "overflow-hidden",
                    children: (0, r.jsx)("div", {
                        ref: t,
                        className: (0, c.cn)("flex", "horizontal" === n ? "-ml-4" : "-mt-4 flex-col", a),
                        ...i
                    })
                })
            });
            h.displayName = "CarouselContent";
            let f = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e, {
                    orientation: l
                } = u();
                return (0, r.jsx)("div", {
                    ref: t,
                    role: "group",
                    "aria-roledescription": "slide",
                    className: (0, c.cn)("min-w-0 shrink-0 grow-0 basis-full", "horizontal" === l ? "pl-4" : "pt-4", a),
                    ...i
                })
            });
            f.displayName = "CarouselItem";
            let x = s.forwardRef((e, t) => {
                let {
                    className: a,
                    variant: i = "outline",
                    size: n = "icon",
                    ...s
                } = e, {
                    orientation: d,
                    scrollPrev: m,
                    canScrollPrev: h
                } = u();
                return (0, r.jsxs)(o.z, {
                    ref: t,
                    variant: i,
                    size: n,
                    className: (0, c.cn)("absolute  h-8 w-8 rounded-full", "horizontal" === d ? "left-1/2 -translate-x-16 bottom-0 translate-y-4" : "-top-12 right-1/2 -translate-x-1/2 rotate-90", a),
                    disabled: !h,
                    onClick: m,
                    ...s,
                    children: [(0, r.jsx)(l.Z, {
                        className: "h-4 w-4"
                    }), (0, r.jsx)("span", {
                        className: "sr-only",
                        children: "Previous slide"
                    })]
                })
            });
            x.displayName = "CarouselPrevious";
            let p = s.forwardRef((e, t) => {
                let {
                    className: a,
                    variant: i = "outline",
                    size: l = "icon",
                    ...s
                } = e, {
                    orientation: d,
                    scrollNext: m,
                    canScrollNext: h
                } = u();
                return (0, r.jsxs)(o.z, {
                    ref: t,
                    variant: i,
                    size: l,
                    className: (0, c.cn)("absolute h-8 w-8 rounded-full", "horizontal" === d ? "right-1/2 bottom-0 translate-y-4 translate-x-16" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", a),
                    disabled: !h,
                    onClick: m,
                    ...s,
                    children: [(0, r.jsx)(n.Z, {
                        className: "h-4 w-4"
                    }), (0, r.jsx)("span", {
                        className: "sr-only",
                        children: "Next slide"
                    })]
                })
            });
            p.displayName = "CarouselNext"
        },
        5210: function(e, t, a) {
            "use strict";
            a.d(t, {
                Label: function() {
                    return c
                }
            });
            var r = a(7949),
                i = a(6265),
                l = a(1273),
                n = a(9e3),
                s = a(9290);
            let o = (0, n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                c = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...i
                    } = e;
                    return (0, r.jsx)(l.f, {
                        ref: t,
                        className: (0, s.cn)(o(), a),
                        ...i
                    })
                });
            c.displayName = l.f.displayName
        }
    },
    function(e) {
        e.O(0, [548, 188, 156, 309, 403, 649, 559, 581, 396, 290, 162, 47, 623, 744], function() {
            return e(e.s = 8049)
        }), _N_E = e.O()
    }
]);