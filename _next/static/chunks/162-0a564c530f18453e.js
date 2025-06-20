"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [162], {
        8162: function(e, t, a) {
            a.d(t, {
                default: function() {
                    return S
                }
            });
            var r = a(7949),
                n = a(3091),
                s = a(1425),
                l = a(6265),
                i = a(3206),
                d = a(9290);
            let o = e => {
                let {
                    shouldScaleBackground: t = !0,
                    ...a
                } = e;
                return (0, r.jsx)(i.d.Root, {
                    shouldScaleBackground: t,
                    ...a
                })
            };
            o.displayName = "Drawer";
            let c = i.d.Trigger,
                m = i.d.Portal;
            i.d.Close;
            let f = l.forwardRef((e, t) => {
                let {
                    className: a,
                    ...n
                } = e;
                return (0, r.jsx)(i.d.Overlay, {
                    ref: t,
                    className: (0, d.cn)("fixed inset-0 z-50 bg-black/80", a),
                    ...n
                })
            });
            f.displayName = i.d.Overlay.displayName;
            let u = l.forwardRef((e, t) => {
                let {
                    className: a,
                    children: n,
                    ...s
                } = e;
                return (0, r.jsxs)(m, {
                    children: [(0, r.jsx)(f, {}), (0, r.jsxs)(i.d.Content, {
                        ref: t,
                        className: (0, d.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", a),
                        ...s,
                        children: [(0, r.jsx)("div", {
                            className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"
                        }), n]
                    })]
                })
            });
            u.displayName = "DrawerContent";
            let x = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, d.cn)("grid gap-1.5 p-4 text-center sm:text-left", t),
                    ...a
                })
            };
            x.displayName = "DrawerHeader";
            let h = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, d.cn)("mt-auto flex flex-col gap-2 p-4", t),
                    ...a
                })
            };
            h.displayName = "DrawerFooter", l.forwardRef((e, t) => {
                let {
                    className: a,
                    ...n
                } = e;
                return (0, r.jsx)(i.d.Title, {
                    ref: t,
                    className: (0, d.cn)("text-lg font-semibold leading-none tracking-tight", a),
                    ...n
                })
            }).displayName = i.d.Title.displayName, l.forwardRef((e, t) => {
                let {
                    className: a,
                    ...n
                } = e;
                return (0, r.jsx)(i.d.Description, {
                    ref: t,
                    className: (0, d.cn)("text-sm text-muted-foreground", a),
                    ...n
                })
            }).displayName = i.d.Description.displayName;
            var p = a(5515),
                g = a(4571),
                j = a(9547);

            function N() {
                return (0, r.jsxs)(o, {
                    children: [(0, r.jsx)(c, {
                        children: (0, r.jsx)(j.YAS, {
                            className: "text-2xl"
                        })
                    }), (0, r.jsxs)(u, {
                        children: [(0, r.jsxs)(x, {
                            className: "px-6",
                            children: [(0, r.jsx)("div", {
                                className: "",
                                children: (0, r.jsxs)(g.default, {
                                    href: "/",
                                    title: "brand-logo",
                                    className: "relative mr-6 flex items-center space-x-2",
                                    children: [(0, r.jsx)(n.P.logo, {
                                        className: "w-auto h-[40px]"
                                    }), (0, r.jsx)("span", {
                                        className: "font-bold text-xl",
                                        children: p.J.name
                                    })]
                                })
                            }), (0, r.jsx)("nav", {
                                children: (0, r.jsx)("ul", {
                                    className: "mt-7 text-left",
                                    children: p.J.header.map((e, t) => (0, r.jsx)("li", {
                                        className: "my-3",
                                        children: e.trigger ? (0, r.jsx)("span", {
                                            className: "font-semibold",
                                            children: e.trigger
                                        }) : (0, r.jsx)(g.default, {
                                            href: e.href || "",
                                            className: "font-semibold",
                                            children: e.label
                                        })
                                    }, t))
                                })
                            })]
                        }), (0, r.jsxs)(h, {
                            children: [(0, r.jsx)(g.default, {
                                href: "/login",
                                className: (0, s.d)({
                                    variant: "outline"
                                }),
                                children: "Login"
                            }), (0, r.jsxs)(g.default, {
                                href: "/signup",
                                className: (0, d.cn)((0, s.d)({
                                    variant: "default"
                                }), "w-full sm:w-auto text-background flex gap-2"),
                                children: [(0, r.jsx)(n.P.logo, {
                                    className: "h-6 w-6"
                                }), "Get Started for Free"]
                            })]
                        })]
                    })]
                })
            }
            var v = a(4374),
                b = a(9e3),
                w = a(7039);
            let y = l.forwardRef((e, t) => {
                let {
                    className: a,
                    children: n,
                    ...s
                } = e;
                return (0, r.jsxs)(v.fC, {
                    ref: t,
                    className: (0, d.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", a),
                    ...s,
                    children: [n, (0, r.jsx)(E, {})]
                })
            });
            y.displayName = v.fC.displayName;
            let k = l.forwardRef((e, t) => {
                let {
                    className: a,
                    ...n
                } = e;
                return (0, r.jsx)(v.aV, {
                    ref: t,
                    className: (0, d.cn)("group flex flex-1 list-none items-center justify-center space-x-1", a),
                    ...n
                })
            });
            k.displayName = v.aV.displayName;
            let z = v.ck,
                R = (0, b.j)("group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/10 data-[state=open]:bg-primary/10"),
                C = l.forwardRef((e, t) => {
                    let {
                        className: a,
                        children: n,
                        ...s
                    } = e;
                    return (0, r.jsxs)(v.xz, {
                        ref: t,
                        className: (0, d.cn)(R(), "group", a),
                        ...s,
                        children: [n, " ", (0, r.jsx)(w.Z, {
                            className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
                            "aria-hidden": "true"
                        })]
                    })
                });
            C.displayName = v.xz.displayName;
            let _ = l.forwardRef((e, t) => {
                let {
                    className: a,
                    ...n
                } = e;
                return (0, r.jsx)(v.VY, {
                    ref: t,
                    className: (0, d.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", a),
                    ...n
                })
            });
            _.displayName = v.VY.displayName;
            let D = v.rU,
                E = l.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...n
                    } = e;
                    return (0, r.jsx)("div", {
                        className: (0, d.cn)("absolute left-0 top-full flex justify-center"),
                        children: (0, r.jsx)(v.l_, {
                            className: (0, d.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", a),
                            ref: t,
                            ...n
                        })
                    })
                });

            function L() {
                return (0, r.jsx)(y, {
                    children: (0, r.jsx)(k, {
                        children: p.J.header.map((e, t) => (0, r.jsx)(z, {
                            children: e.trigger ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(C, {
                                    children: e.trigger
                                }), (0, r.jsx)(_, {
                                    children: (0, r.jsxs)("ul", {
                                        className: "grid gap-3 p-6 ".concat(e.content.main ? "md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]" : "w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"),
                                        children: [e.content.main && (0, r.jsx)("li", {
                                            className: "row-span-3",
                                            children: (0, r.jsx)(D, {
                                                asChild: !0,
                                                children: (0, r.jsxs)(g.default, {
                                                    className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-primary/10 from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
                                                    href: e.content.main.href,
                                                    children: [e.content.main.icon, (0, r.jsx)("div", {
                                                        className: "mb-2 mt-4 text-lg font-medium",
                                                        children: e.content.main.title
                                                    }), (0, r.jsx)("p", {
                                                        className: "text-sm leading-tight text-muted-foreground",
                                                        children: e.content.main.description
                                                    })]
                                                })
                                            })
                                        }), e.content.items.map((e, t) => (0, r.jsx)(P, {
                                            href: e.href,
                                            title: e.title,
                                            className: "hover:bg-primary/10",
                                            children: e.description
                                        }, t))]
                                    })
                                })]
                            }) : (0, r.jsx)(g.default, {
                                href: e.href || "",
                                target: "_arya",
                                legacyBehavior: !0,
                                passHref: !0,
                                children: (0, r.jsx)(D, {
                                    className: R(),
                                    children: e.label
                                })
                            })
                        }, t))
                    })
                })
            }
            E.displayName = v.l_.displayName, l.forwardRef((e, t) => {
                let {
                    className: a,
                    ...n
                } = e;
                return (0, r.jsx)(v.z$, {
                    ref: t,
                    className: (0, d.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", a),
                    ...n,
                    children: (0, r.jsx)("div", {
                        className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
                    })
                })
            }).displayName = v.z$.displayName;
            let P = l.forwardRef((e, t) => {
                let {
                    className: a,
                    title: n,
                    children: s,
                    ...l
                } = e;
                return (0, r.jsx)("li", {
                    children: (0, r.jsx)(D, {
                        asChild: !0,
                        children: (0, r.jsxs)("a", {
                            ref: t,
                            className: (0, d.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", a),
                            ...l,
                            children: [(0, r.jsx)("div", {
                                className: "text-sm font-medium leading-none",
                                children: n
                            }), (0, r.jsx)("p", {
                                className: "line-clamp-2 text-sm leading-snug text-muted-foreground",
                                children: s
                            })]
                        })
                    })
                })
            });

            function S() {
                let [e, t] = (0, l.useState)(!1);
                return (0, l.useEffect)(() => {
                    let e = () => {
                        window.scrollY > 20 ? t(!0) : t(!1)
                    };
                    return window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                }, []), (0, r.jsxs)("header", {
                    className: "relative sticky top-0 z-50 py-2 bg-background/60 backdrop-blur",
                    children: [(0, r.jsxs)("div", {
                        className: "flex justify-between items-center container",
                        children: [(0, r.jsxs)(g.default, {
                            href: "/",
                            title: "brand-logo",
                            className: "relative mr-6 flex items-center space-x-2",
                            children: [(0, r.jsx)(n.P.logo, {
                                className: "w-auto h-[40px]"
                            }), (0, r.jsx)("span", {
                                className: "font-bold text-xl",
                                children: p.J.name
                            })]
                        }), (0, r.jsx)("div", {
                            className: "hidden lg:block",
                            children: (0, r.jsxs)("div", {
                                className: "flex items-center ",
                                children: [(0, r.jsx)("nav", {
                                    className: "mr-10",
                                    children: (0, r.jsx)(L, {})
                                }), (0, r.jsxs)("div", {
                                    className: "gap-2 flex",
                                    children: [(0, r.jsx)(g.default, {
                                        href: "/login",
                                        className: (0, s.d)({
                                            variant: "outline"
                                        }),
                                        children: "Login"
                                    }), (0, r.jsxs)(g.default, {
                                        href: "/signup",
                                        className: (0, d.cn)((0, s.d)({
                                            variant: "default"
                                        }), "w-full sm:w-auto text-background flex gap-2"),
                                        children: [(0, r.jsx)(n.P.logo, {
                                            className: "h-6 w-6"
                                        }), "Get Started for Free"]
                                    })]
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "mt-2 cursor-pointer block lg:hidden",
                            children: (0, r.jsx)(N, {})
                        })]
                    }), (0, r.jsx)("hr", {
                        className: (0, d.cn)("absolute w-full bottom-0 transition-opacity duration-300 ease-in-out", e ? "opacity-100" : "opacity-0")
                    })]
                })
            }
            P.displayName = "ListItem"
        },
        1425: function(e, t, a) {
            a.d(t, {
                d: function() {
                    return d
                },
                z: function() {
                    return o
                }
            });
            var r = a(7949),
                n = a(6265),
                s = a(8759),
                l = a(9e3),
                i = a(9290);
            let d = (0, l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline",
                            orange: "border border-input  hover:bg-accent hover:text-accent-foreground"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                o = n.forwardRef((e, t) => {
                    let {
                        className: a,
                        variant: n,
                        size: l,
                        asChild: o = !1,
                        ...c
                    } = e, m = o ? s.g7 : "button";
                    return (0, r.jsx)(m, {
                        className: (0, i.cn)(d({
                            variant: n,
                            size: l,
                            className: a
                        })),
                        ref: t,
                        ...c
                    })
                });
            o.displayName = "Button"
        }
    }
]);