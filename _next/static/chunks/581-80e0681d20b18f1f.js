"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [581], {
        2012: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(6265);
            /**
             * @license lucide-react v0.417.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                a = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.filter((e, t, n) => !!e && n.indexOf(e) === t).join(" ")
                };
            /**
             * @license lucide-react v0.417.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            var i = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            /**
             * @license lucide-react v0.417.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let u = (0, r.forwardRef)((e, t) => {
                    let {
                        color: n = "currentColor",
                        size: o = 24,
                        strokeWidth: u = 2,
                        absoluteStrokeWidth: l,
                        className: c = "",
                        children: s,
                        iconNode: d,
                        ...f
                    } = e;
                    return (0, r.createElement)("svg", {
                        ref: t,
                        ...i,
                        width: o,
                        height: o,
                        stroke: n,
                        strokeWidth: l ? 24 * Number(u) / Number(o) : u,
                        className: a("lucide", c),
                        ...f
                    }, [...d.map(e => {
                        let [t, n] = e;
                        return (0, r.createElement)(t, n)
                    }), ...Array.isArray(s) ? s : [s]])
                }),
                l = (e, t) => {
                    let n = (0, r.forwardRef)((n, i) => {
                        let {
                            className: l,
                            ...c
                        } = n;
                        return (0, r.createElement)(u, {
                            ref: i,
                            iconNode: t,
                            className: a("lucide-".concat(o(e)), l),
                            ...c
                        })
                    });
                    return n.displayName = "".concat(e), n
                }
        },
        7039: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            /**
             * @license lucide-react v0.417.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let r = (0, n(2012).Z)("ChevronDown", [
                ["path", {
                    d: "m6 9 6 6 6-6",
                    key: "qrunsl"
                }]
            ])
        },
        4571: function(e, t, n) {
            n.d(t, {
                default: function() {
                    return o.a
                }
            });
            var r = n(3403),
                o = n.n(r)
        },
        369: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return r
                }
            });

            function r(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (e ? .(r), !1 === n || !r.defaultPrevented) return t ? .(r)
                }
            }
        },
        4004: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return l
                }
            });
            var r = n(6265),
                o = n(8944),
                a = n(3250),
                i = n(8759),
                u = n(7949);

            function l(e) {
                let t = e + "CollectionProvider",
                    [n, l] = (0, o.b)(t),
                    [c, s] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    d = e => {
                        let {
                            scope: t,
                            children: n
                        } = e, o = r.useRef(null), a = r.useRef(new Map).current;
                        return (0, u.jsx)(c, {
                            scope: t,
                            itemMap: a,
                            collectionRef: o,
                            children: n
                        })
                    };
                d.displayName = t;
                let f = e + "CollectionSlot",
                    v = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: r
                        } = e, o = s(f, n), l = (0, a.e)(t, o.collectionRef);
                        return (0, u.jsx)(i.g7, {
                            ref: l,
                            children: r
                        })
                    });
                v.displayName = f;
                let p = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    h = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o,
                            ...l
                        } = e, c = r.useRef(null), d = (0, a.e)(t, c), f = s(p, n);
                        return r.useEffect(() => (f.itemMap.set(c, {
                            ref: c,
                            ...l
                        }), () => void f.itemMap.delete(c))), (0, u.jsx)(i.g7, {
                            [m]: "",
                            ref: d,
                            children: o
                        })
                    });
                return h.displayName = p, [{
                    Provider: d,
                    Slot: v,
                    ItemSlot: h
                }, function(t) {
                    let n = s(e + "CollectionConsumer", t);
                    return r.useCallback(() => {
                        let e = n.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                        return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                    }, [n.collectionRef, n.itemMap])
                }, l]
            }
        },
        8944: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return i
                },
                k: function() {
                    return a
                }
            });
            var r = n(6265),
                o = n(7949);

            function a(e, t) {
                let n = r.createContext(t);

                function a(e) {
                    let {
                        children: t,
                        ...a
                    } = e, i = r.useMemo(() => a, Object.values(a));
                    return (0, o.jsx)(n.Provider, {
                        value: i,
                        children: t
                    })
                }
                return a.displayName = e + "Provider", [a, function(o) {
                    let a = r.useContext(n);
                    if (a) return a;
                    if (void 0 !== t) return t;
                    throw Error(`\`${o}\` must be used within \`${e}\``)
                }]
            }

            function i(e, t = []) {
                let n = [],
                    a = () => {
                        let t = n.map(e => r.createContext(e));
                        return function(n) {
                            let o = n ? .[e] || t;
                            return r.useMemo(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: o
                                }
                            }), [n, o])
                        }
                    };
                return a.scopeName = e, [function(t, a) {
                    let i = r.createContext(a),
                        u = n.length;

                    function l(t) {
                        let {
                            scope: n,
                            children: a,
                            ...l
                        } = t, c = n ? .[e][u] || i, s = r.useMemo(() => l, Object.values(l));
                        return (0, o.jsx)(c.Provider, {
                            value: s,
                            children: a
                        })
                    }
                    return n = [...n, a], l.displayName = t + "Provider", [l, function(n, o) {
                        let l = o ? .[e][u] || i,
                            c = r.useContext(l);
                        if (c) return c;
                        if (void 0 !== a) return a;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => {
                                let o = n(e)[`__scope${r}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return r.useMemo(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(a, ...t)]
            }
        },
        2304: function(e, t, n) {
            n.d(t, {
                gm: function() {
                    return a
                }
            });
            var r = n(6265);
            n(7949);
            var o = r.createContext(void 0);

            function a(e) {
                let t = r.useContext(o);
                return e || t || "ltr"
            }
        },
        873: function(e, t, n) {
            n.d(t, {
                XB: function() {
                    return f
                }
            });
            var r, o = n(6265),
                a = n(369),
                i = n(6248),
                u = n(3250),
                l = n(317),
                c = n(7949),
                s = "dismissableLayer.update",
                d = o.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                f = o.forwardRef((e, t) => {
                    var n, f;
                    let {
                        disableOutsidePointerEvents: m = !1,
                        onEscapeKeyDown: h,
                        onPointerDownOutside: g,
                        onFocusOutside: w,
                        onInteractOutside: y,
                        onDismiss: b,
                        ...E
                    } = e, x = o.useContext(d), [R, C] = o.useState(null), M = null !== (f = null == R ? void 0 : R.ownerDocument) && void 0 !== f ? f : null === (n = globalThis) || void 0 === n ? void 0 : n.document, [, N] = o.useState({}), T = (0, u.e)(t, e => C(e)), D = Array.from(x.layers), [S] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1), P = D.indexOf(S), A = R ? D.indexOf(R) : -1, O = x.layersWithOutsidePointerEventsDisabled.size > 0, j = A >= P, k = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, l.W)(e),
                            a = o.useRef(!1),
                            i = o.useRef(() => {});
                        return o.useEffect(() => {
                            let e = e => {
                                    if (e.target && !a.current) {
                                        let t = function() {
                                                p("dismissableLayer.pointerDownOutside", r, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", i.current), i.current = t, n.addEventListener("click", i.current, {
                                            once: !0
                                        })) : t()
                                    } else n.removeEventListener("click", i.current);
                                    a.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", i.current)
                            }
                        }, [n, r]), {
                            onPointerDownCapture: () => a.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...x.branches].some(e => e.contains(t));
                        !j || n || (null == g || g(e), null == y || y(e), e.defaultPrevented || null == b || b())
                    }, M), L = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, l.W)(e),
                            a = o.useRef(!1);
                        return o.useEffect(() => {
                            let e = e => {
                                e.target && !a.current && p("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
                        }, [n, r]), {
                            onFocusCapture: () => a.current = !0,
                            onBlurCapture: () => a.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...x.branches].some(e => e.contains(t)) || (null == w || w(e), null == y || y(e), e.defaultPrevented || null == b || b())
                    }, M);
                    return ! function(e, t = globalThis ? .document) {
                        let n = (0, l.W)(e);
                        o.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        A !== x.layers.size - 1 || (null == h || h(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
                    }, M), o.useEffect(() => {
                        if (R) return m && (0 === x.layersWithOutsidePointerEventsDisabled.size && (r = M.body.style.pointerEvents, M.body.style.pointerEvents = "none"), x.layersWithOutsidePointerEventsDisabled.add(R)), x.layers.add(R), v(), () => {
                            m && 1 === x.layersWithOutsidePointerEventsDisabled.size && (M.body.style.pointerEvents = r)
                        }
                    }, [R, M, m, x]), o.useEffect(() => () => {
                        R && (x.layers.delete(R), x.layersWithOutsidePointerEventsDisabled.delete(R), v())
                    }, [R, x]), o.useEffect(() => {
                        let e = () => N({});
                        return document.addEventListener(s, e), () => document.removeEventListener(s, e)
                    }, []), (0, c.jsx)(i.WV.div, { ...E,
                        ref: T,
                        style: {
                            pointerEvents: O ? j ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, a.M)(e.onFocusCapture, L.onFocusCapture),
                        onBlurCapture: (0, a.M)(e.onBlurCapture, L.onBlurCapture),
                        onPointerDownCapture: (0, a.M)(e.onPointerDownCapture, k.onPointerDownCapture)
                    })
                });

            function v() {
                let e = new CustomEvent(s);
                document.dispatchEvent(e)
            }

            function p(e, t, n, r) {
                let {
                    discrete: o
                } = r, a = n.originalEvent.target, u = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
                t && a.addEventListener(e, t, {
                    once: !0
                }), o ? (0, i.jH)(a, u) : a.dispatchEvent(u)
            }
            f.displayName = "DismissableLayer", o.forwardRef((e, t) => {
                let n = o.useContext(d),
                    r = o.useRef(null),
                    a = (0, u.e)(t, r);
                return o.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, c.jsx)(i.WV.div, { ...e,
                    ref: a
                })
            }).displayName = "DismissableLayerBranch"
        },
        9264: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return l
                }
            });
            var r, o = n(6265),
                a = n(8283),
                i = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
                u = 0;

            function l(e) {
                let [t, n] = o.useState(i());
                return (0, a.b)(() => {
                    e || n(e => e ? ? String(u++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        4374: function(e, t, n) {
            n.d(t, {
                VY: function() {
                    return ey
                },
                z$: function() {
                    return ew
                },
                ck: function() {
                    return em
                },
                rU: function() {
                    return eg
                },
                aV: function() {
                    return ep
                },
                fC: function() {
                    return ev
                },
                xz: function() {
                    return eh
                },
                l_: function() {
                    return eb
                }
            });
            var r = n(6265),
                o = n(2357),
                a = n(8944),
                i = n(369),
                u = n(6248),
                l = n(7824),
                c = n(3250),
                s = n(2304),
                d = n(7258),
                f = n(9264),
                v = n(4004),
                p = n(873),
                m = n(2352),
                h = n(8283),
                g = n(317),
                w = n(7949),
                y = r.forwardRef((e, t) => (0, w.jsx)(u.WV.span, { ...e,
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                }));
            y.displayName = "VisuallyHidden";
            var b = "NavigationMenu",
                [E, x, R] = (0, v.B)(b),
                [C, M, N] = (0, v.B)(b),
                [T, D] = (0, a.b)(b, [R, N]),
                [S, P] = T(b),
                [A, O] = T(b),
                j = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        value: o,
                        onValueChange: a,
                        defaultValue: i,
                        delayDuration: d = 200,
                        skipDelayDuration: f = 300,
                        orientation: v = "horizontal",
                        dir: p,
                        ...m
                    } = e, [h, g] = r.useState(null), y = (0, c.e)(t, e => g(e)), b = (0, s.gm)(p), E = r.useRef(0), x = r.useRef(0), R = r.useRef(0), [C, M] = r.useState(!0), [N = "", T] = (0, l.T)({
                        prop: o,
                        onChange: e => {
                            let t = f > 0;
                            "" !== e ? (window.clearTimeout(R.current), t && M(!1)) : (window.clearTimeout(R.current), R.current = window.setTimeout(() => M(!0), f)), null == a || a(e)
                        },
                        defaultProp: i
                    }), D = r.useCallback(() => {
                        window.clearTimeout(x.current), x.current = window.setTimeout(() => T(""), 150)
                    }, [T]), S = r.useCallback(e => {
                        window.clearTimeout(x.current), T(e)
                    }, [T]), P = r.useCallback(e => {
                        N === e ? window.clearTimeout(x.current) : E.current = window.setTimeout(() => {
                            window.clearTimeout(x.current), T(e)
                        }, d)
                    }, [N, T, d]);
                    return r.useEffect(() => () => {
                        window.clearTimeout(E.current), window.clearTimeout(x.current), window.clearTimeout(R.current)
                    }, []), (0, w.jsx)(L, {
                        scope: n,
                        isRootMenu: !0,
                        value: N,
                        dir: b,
                        orientation: v,
                        rootNavigationMenu: h,
                        onTriggerEnter: e => {
                            window.clearTimeout(E.current), C ? P(e) : S(e)
                        },
                        onTriggerLeave: () => {
                            window.clearTimeout(E.current), D()
                        },
                        onContentEnter: () => window.clearTimeout(x.current),
                        onContentLeave: D,
                        onItemSelect: e => {
                            T(t => t === e ? "" : e)
                        },
                        onItemDismiss: () => T(""),
                        children: (0, w.jsx)(u.WV.nav, {
                            "aria-label": "Main",
                            "data-orientation": v,
                            dir: b,
                            ...m,
                            ref: y
                        })
                    })
                });
            j.displayName = b;
            var k = "NavigationMenuSub";
            r.forwardRef((e, t) => {
                let {
                    __scopeNavigationMenu: n,
                    value: r,
                    onValueChange: o,
                    defaultValue: a,
                    orientation: i = "horizontal",
                    ...c
                } = e, s = P(k, n), [d = "", f] = (0, l.T)({
                    prop: r,
                    onChange: o,
                    defaultProp: a
                });
                return (0, w.jsx)(L, {
                    scope: n,
                    isRootMenu: !1,
                    value: d,
                    dir: s.dir,
                    orientation: i,
                    rootNavigationMenu: s.rootNavigationMenu,
                    onTriggerEnter: e => f(e),
                    onItemSelect: e => f(e),
                    onItemDismiss: () => f(""),
                    children: (0, w.jsx)(u.WV.div, {
                        "data-orientation": i,
                        ...c,
                        ref: t
                    })
                })
            }).displayName = k;
            var L = e => {
                    let {
                        scope: t,
                        isRootMenu: n,
                        rootNavigationMenu: o,
                        dir: a,
                        orientation: i,
                        children: u,
                        value: l,
                        onItemSelect: c,
                        onItemDismiss: s,
                        onTriggerEnter: d,
                        onTriggerLeave: v,
                        onContentEnter: p,
                        onContentLeave: h
                    } = e, [y, b] = r.useState(null), [x, R] = r.useState(new Map), [C, M] = r.useState(null);
                    return (0, w.jsx)(S, {
                        scope: t,
                        isRootMenu: n,
                        rootNavigationMenu: o,
                        value: l,
                        previousValue: (0, m.D)(l),
                        baseId: (0, f.M)(),
                        dir: a,
                        orientation: i,
                        viewport: y,
                        onViewportChange: b,
                        indicatorTrack: C,
                        onIndicatorTrackChange: M,
                        onTriggerEnter: (0, g.W)(d),
                        onTriggerLeave: (0, g.W)(v),
                        onContentEnter: (0, g.W)(p),
                        onContentLeave: (0, g.W)(h),
                        onItemSelect: (0, g.W)(c),
                        onItemDismiss: (0, g.W)(s),
                        onViewportContentChange: r.useCallback((e, t) => {
                            R(n => (n.set(e, t), new Map(n)))
                        }, []),
                        onViewportContentRemove: r.useCallback(e => {
                            R(t => t.has(e) ? (t.delete(e), new Map(t)) : t)
                        }, []),
                        children: (0, w.jsx)(E.Provider, {
                            scope: t,
                            children: (0, w.jsx)(A, {
                                scope: t,
                                items: x,
                                children: u
                            })
                        })
                    })
                },
                I = "NavigationMenuList",
                W = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        ...r
                    } = e, o = P(I, n), a = (0, w.jsx)(u.WV.ul, {
                        "data-orientation": o.orientation,
                        ...r,
                        ref: t
                    });
                    return (0, w.jsx)(u.WV.div, {
                        style: {
                            position: "relative"
                        },
                        ref: o.onIndicatorTrackChange,
                        children: (0, w.jsx)(E.Slot, {
                            scope: n,
                            children: o.isRootMenu ? (0, w.jsx)(er, {
                                asChild: !0,
                                children: a
                            }) : a
                        })
                    })
                });
            W.displayName = I;
            var F = "NavigationMenuItem",
                [_, z] = T(F),
                V = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        value: o,
                        ...a
                    } = e, i = (0, f.M)(), l = r.useRef(null), c = r.useRef(null), s = r.useRef(null), d = r.useRef(() => {}), v = r.useRef(!1), p = r.useCallback(function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "start";
                        if (l.current) {
                            d.current();
                            let t = ei(l.current);
                            t.length && eu("start" === e ? t : t.reverse())
                        }
                    }, []), m = r.useCallback(() => {
                        if (l.current) {
                            let e = ei(l.current);
                            e.length && (d.current = (e.forEach(e => {
                                e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
                            }), () => {
                                e.forEach(e => {
                                    let t = e.dataset.tabindex;
                                    e.setAttribute("tabindex", t)
                                })
                            }))
                        }
                    }, []);
                    return (0, w.jsx)(_, {
                        scope: n,
                        value: o || i || "LEGACY_REACT_AUTO_VALUE",
                        triggerRef: c,
                        contentRef: l,
                        focusProxyRef: s,
                        wasEscapeCloseRef: v,
                        onEntryKeyDown: p,
                        onFocusProxyEnter: p,
                        onRootContentClose: m,
                        onContentFocusOutside: m,
                        children: (0, w.jsx)(u.WV.li, { ...a,
                            ref: t
                        })
                    })
                });
            V.displayName = F;
            var U = "NavigationMenuTrigger",
                B = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        disabled: o,
                        ...a
                    } = e, l = P(U, e.__scopeNavigationMenu), s = z(U, e.__scopeNavigationMenu), d = r.useRef(null), f = (0, c.e)(d, s.triggerRef, t), v = es(l.baseId, s.value), p = ed(l.baseId, s.value), m = r.useRef(!1), h = r.useRef(!1), g = s.value === l.value;
                    return (0, w.jsxs)(w.Fragment, {
                        children: [(0, w.jsx)(E.ItemSlot, {
                            scope: n,
                            value: s.value,
                            children: (0, w.jsx)(ea, {
                                asChild: !0,
                                children: (0, w.jsx)(u.WV.button, {
                                    id: v,
                                    disabled: o,
                                    "data-disabled": o ? "" : void 0,
                                    "data-state": ec(g),
                                    "aria-expanded": g,
                                    "aria-controls": p,
                                    ...a,
                                    ref: f,
                                    onPointerEnter: (0, i.M)(e.onPointerEnter, () => {
                                        h.current = !1, s.wasEscapeCloseRef.current = !1
                                    }),
                                    onPointerMove: (0, i.M)(e.onPointerMove, ef(() => {
                                        o || h.current || s.wasEscapeCloseRef.current || m.current || (l.onTriggerEnter(s.value), m.current = !0)
                                    })),
                                    onPointerLeave: (0, i.M)(e.onPointerLeave, ef(() => {
                                        o || (l.onTriggerLeave(), m.current = !1)
                                    })),
                                    onClick: (0, i.M)(e.onClick, () => {
                                        l.onItemSelect(s.value), h.current = g
                                    }),
                                    onKeyDown: (0, i.M)(e.onKeyDown, e => {
                                        let t = {
                                            horizontal: "ArrowDown",
                                            vertical: "rtl" === l.dir ? "ArrowLeft" : "ArrowRight"
                                        }[l.orientation];
                                        g && e.key === t && (s.onEntryKeyDown(), e.preventDefault())
                                    })
                                })
                            })
                        }), g && (0, w.jsxs)(w.Fragment, {
                            children: [(0, w.jsx)(y, {
                                "aria-hidden": !0,
                                tabIndex: 0,
                                ref: s.focusProxyRef,
                                onFocus: e => {
                                    let t = s.contentRef.current,
                                        n = e.relatedTarget,
                                        r = n === d.current,
                                        o = null == t ? void 0 : t.contains(n);
                                    (r || !o) && s.onFocusProxyEnter(r ? "start" : "end")
                                }
                            }), l.viewport && (0, w.jsx)("span", {
                                "aria-owns": p
                            })]
                        })]
                    })
                });
            B.displayName = U;
            var H = "navigationMenu.linkSelect",
                K = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        active: r,
                        onSelect: o,
                        ...a
                    } = e;
                    return (0, w.jsx)(ea, {
                        asChild: !0,
                        children: (0, w.jsx)(u.WV.a, {
                            "data-active": r ? "" : void 0,
                            "aria-current": r ? "page" : void 0,
                            ...a,
                            ref: t,
                            onClick: (0, i.M)(e.onClick, e => {
                                let t = e.target,
                                    n = new CustomEvent(H, {
                                        bubbles: !0,
                                        cancelable: !0
                                    });
                                if (t.addEventListener(H, e => null == o ? void 0 : o(e), {
                                        once: !0
                                    }), (0, u.jH)(t, n), !n.defaultPrevented && !e.metaKey) {
                                    let e = new CustomEvent(J, {
                                        bubbles: !0,
                                        cancelable: !0
                                    });
                                    (0, u.jH)(t, e)
                                }
                            }, {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                });
            K.displayName = "NavigationMenuLink";
            var Y = "NavigationMenuIndicator",
                X = r.forwardRef((e, t) => {
                    let {
                        forceMount: n,
                        ...r
                    } = e, a = P(Y, e.__scopeNavigationMenu), i = !!a.value;
                    return a.indicatorTrack ? o.createPortal((0, w.jsx)(d.z, {
                        present: n || i,
                        children: (0, w.jsx)(q, { ...r,
                            ref: t
                        })
                    }), a.indicatorTrack) : null
                });
            X.displayName = Y;
            var q = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        ...o
                    } = e, a = P(Y, n), i = x(n), [l, c] = r.useState(null), [s, d] = r.useState(null), f = "horizontal" === a.orientation, v = !!a.value;
                    r.useEffect(() => {
                        var e;
                        let t = null === (e = i().find(e => e.value === a.value)) || void 0 === e ? void 0 : e.ref.current;
                        t && c(t)
                    }, [i, a.value]);
                    let p = () => {
                        l && d({
                            size: f ? l.offsetWidth : l.offsetHeight,
                            offset: f ? l.offsetLeft : l.offsetTop
                        })
                    };
                    return el(l, p), el(a.indicatorTrack, p), s ? (0, w.jsx)(u.WV.div, {
                        "aria-hidden": !0,
                        "data-state": v ? "visible" : "hidden",
                        "data-orientation": a.orientation,
                        ...o,
                        ref: t,
                        style: {
                            position: "absolute",
                            ...f ? {
                                left: 0,
                                width: s.size + "px",
                                transform: "translateX(".concat(s.offset, "px)")
                            } : {
                                top: 0,
                                height: s.size + "px",
                                transform: "translateY(".concat(s.offset, "px)")
                            },
                            ...o.style
                        }
                    }) : null
                }),
                $ = "NavigationMenuContent",
                Z = r.forwardRef((e, t) => {
                    let {
                        forceMount: n,
                        ...r
                    } = e, o = P($, e.__scopeNavigationMenu), a = z($, e.__scopeNavigationMenu), u = (0, c.e)(a.contentRef, t), l = a.value === o.value, s = {
                        value: a.value,
                        triggerRef: a.triggerRef,
                        focusProxyRef: a.focusProxyRef,
                        wasEscapeCloseRef: a.wasEscapeCloseRef,
                        onContentFocusOutside: a.onContentFocusOutside,
                        onRootContentClose: a.onRootContentClose,
                        ...r
                    };
                    return o.viewport ? (0, w.jsx)(G, {
                        forceMount: n,
                        ...s,
                        ref: u
                    }) : (0, w.jsx)(d.z, {
                        present: n || l,
                        children: (0, w.jsx)(Q, {
                            "data-state": ec(l),
                            ...s,
                            ref: u,
                            onPointerEnter: (0, i.M)(e.onPointerEnter, o.onContentEnter),
                            onPointerLeave: (0, i.M)(e.onPointerLeave, ef(o.onContentLeave)),
                            style: {
                                pointerEvents: !l && o.isRootMenu ? "none" : void 0,
                                ...s.style
                            }
                        })
                    })
                });
            Z.displayName = $;
            var G = r.forwardRef((e, t) => {
                    let {
                        onViewportContentChange: n,
                        onViewportContentRemove: r
                    } = P($, e.__scopeNavigationMenu);
                    return (0, h.b)(() => {
                        n(e.value, {
                            ref: t,
                            ...e
                        })
                    }, [e, t, n]), (0, h.b)(() => () => r(e.value), [e.value, r]), null
                }),
                J = "navigationMenu.rootContentDismiss",
                Q = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        value: o,
                        triggerRef: a,
                        focusProxyRef: u,
                        wasEscapeCloseRef: l,
                        onRootContentClose: s,
                        onContentFocusOutside: d,
                        ...f
                    } = e, v = P($, n), m = r.useRef(null), h = (0, c.e)(m, t), g = es(v.baseId, o), y = ed(v.baseId, o), b = x(n), E = r.useRef(null), {
                        onItemDismiss: R
                    } = v;
                    r.useEffect(() => {
                        let e = m.current;
                        if (v.isRootMenu && e) {
                            let t = () => {
                                var t;
                                R(), s(), e.contains(document.activeElement) && (null === (t = a.current) || void 0 === t || t.focus())
                            };
                            return e.addEventListener(J, t), () => e.removeEventListener(J, t)
                        }
                    }, [v.isRootMenu, e.value, a, R, s]);
                    let C = r.useMemo(() => {
                        let e = b().map(e => e.value);
                        "rtl" === v.dir && e.reverse();
                        let t = e.indexOf(v.value),
                            n = e.indexOf(v.previousValue),
                            r = o === v.value,
                            a = n === e.indexOf(o);
                        if (!r && !a) return E.current;
                        let i = (() => {
                            if (t !== n) {
                                if (r && -1 !== n) return t > n ? "from-end" : "from-start";
                                if (a && -1 !== t) return t > n ? "to-start" : "to-end"
                            }
                            return null
                        })();
                        return E.current = i, i
                    }, [v.previousValue, v.value, v.dir, b, o]);
                    return (0, w.jsx)(er, {
                        asChild: !0,
                        children: (0, w.jsx)(p.XB, {
                            id: y,
                            "aria-labelledby": g,
                            "data-motion": C,
                            "data-orientation": v.orientation,
                            ...f,
                            ref: h,
                            disableOutsidePointerEvents: !1,
                            onDismiss: () => {
                                var e;
                                let t = new Event(J, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                null === (e = m.current) || void 0 === e || e.dispatchEvent(t)
                            },
                            onFocusOutside: (0, i.M)(e.onFocusOutside, e => {
                                var t;
                                d();
                                let n = e.target;
                                (null === (t = v.rootNavigationMenu) || void 0 === t ? void 0 : t.contains(n)) && e.preventDefault()
                            }),
                            onPointerDownOutside: (0, i.M)(e.onPointerDownOutside, e => {
                                var t;
                                let n = e.target,
                                    r = b().some(e => {
                                        var t;
                                        return null === (t = e.ref.current) || void 0 === t ? void 0 : t.contains(n)
                                    }),
                                    o = v.isRootMenu && (null === (t = v.viewport) || void 0 === t ? void 0 : t.contains(n));
                                (r || o || !v.isRootMenu) && e.preventDefault()
                            }),
                            onKeyDown: (0, i.M)(e.onKeyDown, e => {
                                let t = e.altKey || e.ctrlKey || e.metaKey;
                                if ("Tab" === e.key && !t) {
                                    let t = ei(e.currentTarget),
                                        r = document.activeElement,
                                        o = t.findIndex(e => e === r);
                                    if (eu(e.shiftKey ? t.slice(0, o).reverse() : t.slice(o + 1, t.length))) e.preventDefault();
                                    else {
                                        var n;
                                        null === (n = u.current) || void 0 === n || n.focus()
                                    }
                                }
                            }),
                            onEscapeKeyDown: (0, i.M)(e.onEscapeKeyDown, e => {
                                l.current = !0
                            })
                        })
                    })
                }),
                ee = "NavigationMenuViewport",
                et = r.forwardRef((e, t) => {
                    let {
                        forceMount: n,
                        ...r
                    } = e, o = !!P(ee, e.__scopeNavigationMenu).value;
                    return (0, w.jsx)(d.z, {
                        present: n || o,
                        children: (0, w.jsx)(en, { ...r,
                            ref: t
                        })
                    })
                });
            et.displayName = ee;
            var en = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        children: o,
                        ...a
                    } = e, l = P(ee, n), s = (0, c.e)(t, l.onViewportChange), f = O($, e.__scopeNavigationMenu), [v, p] = r.useState(null), [m, h] = r.useState(null), g = v ? (null == v ? void 0 : v.width) + "px" : void 0, y = v ? (null == v ? void 0 : v.height) + "px" : void 0, b = !!l.value, E = b ? l.value : l.previousValue;
                    return el(m, () => {
                        m && p({
                            width: m.offsetWidth,
                            height: m.offsetHeight
                        })
                    }), (0, w.jsx)(u.WV.div, {
                        "data-state": ec(b),
                        "data-orientation": l.orientation,
                        ...a,
                        ref: s,
                        style: {
                            pointerEvents: !b && l.isRootMenu ? "none" : void 0,
                            "--radix-navigation-menu-viewport-width": g,
                            "--radix-navigation-menu-viewport-height": y,
                            ...a.style
                        },
                        onPointerEnter: (0, i.M)(e.onPointerEnter, l.onContentEnter),
                        onPointerLeave: (0, i.M)(e.onPointerLeave, ef(l.onContentLeave)),
                        children: Array.from(f.items).map(e => {
                            let [t, {
                                ref: n,
                                forceMount: r,
                                ...o
                            }] = e, a = E === t;
                            return (0, w.jsx)(d.z, {
                                present: r || a,
                                children: (0, w.jsx)(Q, { ...o,
                                    ref: (0, c.F)(n, e => {
                                        a && e && h(e)
                                    })
                                })
                            }, t)
                        })
                    })
                }),
                er = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        ...r
                    } = e, o = P("FocusGroup", n);
                    return (0, w.jsx)(C.Provider, {
                        scope: n,
                        children: (0, w.jsx)(C.Slot, {
                            scope: n,
                            children: (0, w.jsx)(u.WV.div, {
                                dir: o.dir,
                                ...r,
                                ref: t
                            })
                        })
                    })
                }),
                eo = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
                ea = r.forwardRef((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        ...r
                    } = e, o = M(n), a = P("FocusGroupItem", n);
                    return (0, w.jsx)(C.ItemSlot, {
                        scope: n,
                        children: (0, w.jsx)(u.WV.button, { ...r,
                            ref: t,
                            onKeyDown: (0, i.M)(e.onKeyDown, e => {
                                if (["Home", "End", ...eo].includes(e.key)) {
                                    let t = o().map(e => e.ref.current);
                                    if (["rtl" === a.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && t.reverse(), eo.includes(e.key)) {
                                        let n = t.indexOf(e.currentTarget);
                                        t = t.slice(n + 1)
                                    }
                                    setTimeout(() => eu(t)), e.preventDefault()
                                }
                            })
                        })
                    })
                });

            function ei(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function eu(e) {
                let t = document.activeElement;
                return e.some(e => e === t || (e.focus(), document.activeElement !== t))
            }

            function el(e, t) {
                let n = (0, g.W)(t);
                (0, h.b)(() => {
                    let t = 0;
                    if (e) {
                        let r = new ResizeObserver(() => {
                            cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
                        });
                        return r.observe(e), () => {
                            window.cancelAnimationFrame(t), r.unobserve(e)
                        }
                    }
                }, [e, n])
            }

            function ec(e) {
                return e ? "open" : "closed"
            }

            function es(e, t) {
                return "".concat(e, "-trigger-").concat(t)
            }

            function ed(e, t) {
                return "".concat(e, "-content-").concat(t)
            }

            function ef(e) {
                return t => "mouse" === t.pointerType ? e(t) : void 0
            }
            var ev = j,
                ep = W,
                em = V,
                eh = B,
                eg = K,
                ew = X,
                ey = Z,
                eb = et
        },
        7258: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return u
                }
            });
            var r = n(6265),
                o = n(2357),
                a = n(3250),
                i = n(8283),
                u = e => {
                    var t, n;
                    let u, c;
                    let {
                        present: s,
                        children: d
                    } = e, f = function(e) {
                        var t, n;
                        let [a, u] = r.useState(), c = r.useRef({}), s = r.useRef(e), d = r.useRef("none"), [f, v] = (t = e ? "mounted" : "unmounted", n = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, r.useReducer((e, t) => {
                            let r = n[e][t];
                            return null != r ? r : e
                        }, t));
                        return r.useEffect(() => {
                            let e = l(c.current);
                            d.current = "mounted" === f ? e : "none"
                        }, [f]), (0, i.b)(() => {
                            let t = c.current,
                                n = s.current;
                            if (n !== e) {
                                let r = d.current,
                                    o = l(t);
                                e ? v("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? v("UNMOUNT") : n && r !== o ? v("ANIMATION_OUT") : v("UNMOUNT"), s.current = e
                            }
                        }, [e, v]), (0, i.b)(() => {
                            if (a) {
                                let e = e => {
                                        let t = l(c.current).includes(e.animationName);
                                        e.target === a && t && o.flushSync(() => v("ANIMATION_END"))
                                    },
                                    t = e => {
                                        e.target === a && (d.current = l(c.current))
                                    };
                                return a.addEventListener("animationstart", t), a.addEventListener("animationcancel", e), a.addEventListener("animationend", e), () => {
                                    a.removeEventListener("animationstart", t), a.removeEventListener("animationcancel", e), a.removeEventListener("animationend", e)
                                }
                            }
                            v("ANIMATION_END")
                        }, [a, v]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(f),
                            ref: r.useCallback(e => {
                                e && (c.current = getComputedStyle(e)), u(e)
                            }, [])
                        }
                    }(s), v = "function" == typeof d ? d({
                        present: f.isPresent
                    }) : r.Children.only(d), p = (0, a.e)(f.ref, (u = null === (t = Object.getOwnPropertyDescriptor(v.props, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning" in u && u.isReactWarning ? v.ref : (u = null === (n = Object.getOwnPropertyDescriptor(v, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in u && u.isReactWarning ? v.props.ref : v.props.ref || v.ref);
                    return "function" == typeof d || f.isPresent ? r.cloneElement(v, {
                        ref: p
                    }) : null
                };

            function l(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            u.displayName = "Presence"
        },
        6248: function(e, t, n) {
            n.d(t, {
                WV: function() {
                    return u
                },
                jH: function() {
                    return l
                }
            });
            var r = n(6265),
                o = n(2357),
                a = n(8759),
                i = n(7949),
                u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let n = r.forwardRef((e, n) => {
                        let {
                            asChild: r,
                            ...o
                        } = e, u = r ? a.g7 : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(u, { ...o,
                            ref: n
                        })
                    });
                    return n.displayName = `Primitive.${t}`, { ...e,
                        [t]: n
                    }
                }, {});

            function l(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t))
            }
        },
        317: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return o
                }
            });
            var r = n(6265);

            function o(e) {
                let t = r.useRef(e);
                return r.useEffect(() => {
                    t.current = e
                }), r.useMemo(() => (...e) => t.current ? .(...e), [])
            }
        },
        7824: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return a
                }
            });
            var r = n(6265),
                o = n(317);

            function a({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [a, i] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let n = r.useState(e),
                        [a] = n,
                        i = r.useRef(a),
                        u = (0, o.W)(t);
                    return r.useEffect(() => {
                        i.current !== a && (u(a), i.current = a)
                    }, [a, i, u]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), u = void 0 !== e, l = u ? e : a, c = (0, o.W)(n);
                return [l, r.useCallback(t => {
                    if (u) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && c(n)
                    } else i(t)
                }, [u, e, i, c])]
            }
        },
        8283: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return o
                }
            });
            var r = n(6265),
                o = globalThis ? .document ? r.useLayoutEffect : () => {}
        },
        2352: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return o
                }
            });
            var r = n(6265);

            function o(e) {
                let t = r.useRef({
                    value: e,
                    previous: e
                });
                return r.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
            }
        },
        3206: function(e, t, n) {
            let r, o;
            n.d(t, {
                d: function() {
                    return tT
                }
            });
            var a, i, u, l, c, s, d, f = n(6265),
                v = n(369),
                p = n(3250),
                m = n(8944),
                h = n(9264),
                g = n(7824),
                w = n(873),
                y = n(6248),
                b = n(317),
                E = n(7949),
                x = "focusScope.autoFocusOnMount",
                R = "focusScope.autoFocusOnUnmount",
                C = {
                    bubbles: !1,
                    cancelable: !0
                },
                M = f.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: a,
                        ...i
                    } = e, [u, l] = f.useState(null), c = (0, b.W)(o), s = (0, b.W)(a), d = f.useRef(null), v = (0, p.e)(t, e => l(e)), m = f.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    f.useEffect(() => {
                        if (r) {
                            let e = function(e) {
                                    if (m.paused || !u) return;
                                    let t = e.target;
                                    u.contains(t) ? d.current = t : D(d.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (m.paused || !u) return;
                                    let t = e.relatedTarget;
                                    null === t || u.contains(t) || D(d.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && D(u)
                            });
                            return u && n.observe(u, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, u, m.paused]), f.useEffect(() => {
                        if (u) {
                            S.add(m);
                            let e = document.activeElement;
                            if (!u.contains(e)) {
                                let t = new CustomEvent(x, C);
                                u.addEventListener(x, c), u.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.activeElement;
                                    for (let r of e)
                                        if (D(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(N(u).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && D(u))
                            }
                            return () => {
                                u.removeEventListener(x, c), setTimeout(() => {
                                    let t = new CustomEvent(R, C);
                                    u.addEventListener(R, s), u.dispatchEvent(t), t.defaultPrevented || D(null != e ? e : document.body, {
                                        select: !0
                                    }), u.removeEventListener(R, s), S.remove(m)
                                }, 0)
                            }
                        }
                    }, [u, c, s, m]);
                    let h = f.useCallback(e => {
                        if (!n && !r || m.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, a] = function(e) {
                                    let t = N(e);
                                    return [T(t, e), T(t.reverse(), e)]
                                }(t);
                            r && a ? e.shiftKey || o !== a ? e.shiftKey && o === r && (e.preventDefault(), n && D(a, {
                                select: !0
                            })) : (e.preventDefault(), n && D(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, m.paused]);
                    return (0, E.jsx)(y.WV.div, {
                        tabIndex: -1,
                        ...i,
                        ref: v,
                        onKeyDown: h
                    })
                });

            function N(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function T(e, t) {
                for (let n of e)
                    if (! function(e, t) {
                            let {
                                upTo: n
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === n || e !== n);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function D(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            M.displayName = "FocusScope";
            var S = (o = [], {
                add(e) {
                    let t = o[0];
                    e !== t && (null == t || t.pause()), (o = P(o, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (o = P(o, e))[0]) || void 0 === t || t.resume()
                }
            });

            function P(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var A = n(2357),
                O = n(8283),
                j = f.forwardRef((e, t) => {
                    var n, r;
                    let {
                        container: o,
                        ...a
                    } = e, [i, u] = f.useState(!1);
                    (0, O.b)(() => u(!0), []);
                    let l = o || i && (null === (r = globalThis) || void 0 === r ? void 0 : null === (n = r.document) || void 0 === n ? void 0 : n.body);
                    return l ? A.createPortal((0, E.jsx)(y.WV.div, { ...a,
                        ref: t
                    }), l) : null
                });
            j.displayName = "Portal";
            var k = n(7258),
                L = 0;

            function I() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
            var W = function() {
                return (W = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function F(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                return n
            }
            "function" == typeof SuppressedError && SuppressedError;
            var _ = "right-scroll-bar-position",
                z = "width-before-scroll-bar";

            function V(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var U = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect,
                B = new WeakMap,
                H = (void 0 === a && (a = {}), (void 0 === i && (i = function(e) {
                    return e
                }), u = [], l = !1, c = {
                    read: function() {
                        if (l) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return u.length ? u[u.length - 1] : null
                    },
                    useMedium: function(e) {
                        var t = i(e, l);
                        return u.push(t),
                            function() {
                                u = u.filter(function(e) {
                                    return e !== t
                                })
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (l = !0; u.length;) {
                            var t = u;
                            u = [], t.forEach(e)
                        }
                        u = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return u
                            }
                        }
                    },
                    assignMedium: function(e) {
                        l = !0;
                        var t = [];
                        if (u.length) {
                            var n = u;
                            u = [], n.forEach(e), t = u
                        }
                        var r = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            o = function() {
                                return Promise.resolve().then(r)
                            };
                        o(), u = {
                            push: function(e) {
                                t.push(e), o()
                            },
                            filter: function(e) {
                                return t = t.filter(e), u
                            }
                        }
                    }
                }).options = W({
                    async: !0,
                    ssr: !1
                }, a), c),
                K = function() {},
                Y = f.forwardRef(function(e, t) {
                    var n, r, o, a, i = f.useRef(null),
                        u = f.useState({
                            onScrollCapture: K,
                            onWheelCapture: K,
                            onTouchMoveCapture: K
                        }),
                        l = u[0],
                        c = u[1],
                        s = e.forwardProps,
                        d = e.children,
                        v = e.className,
                        p = e.removeScrollBar,
                        m = e.enabled,
                        h = e.shards,
                        g = e.sideCar,
                        w = e.noIsolation,
                        y = e.inert,
                        b = e.allowPinchZoom,
                        E = e.as,
                        x = e.gapMode,
                        R = F(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        C = (n = [i, t], r = function(e) {
                            return n.forEach(function(t) {
                                return V(t, e)
                            })
                        }, (o = (0, f.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = r, a = o.facade, U(function() {
                            var e = B.get(a);
                            if (e) {
                                var t = new Set(e),
                                    r = new Set(n),
                                    o = a.current;
                                t.forEach(function(e) {
                                    r.has(e) || V(e, null)
                                }), r.forEach(function(e) {
                                    t.has(e) || V(e, o)
                                })
                            }
                            B.set(a, n)
                        }, [n]), a),
                        M = W(W({}, R), l);
                    return f.createElement(f.Fragment, null, m && f.createElement(g, {
                        sideCar: H,
                        removeScrollBar: p,
                        shards: h,
                        noIsolation: w,
                        inert: y,
                        setCallbacks: c,
                        allowPinchZoom: !!b,
                        lockRef: i,
                        gapMode: x
                    }), s ? f.cloneElement(f.Children.only(d), W(W({}, M), {
                        ref: C
                    })) : f.createElement(void 0 === E ? "div" : E, W({}, M, {
                        className: v,
                        ref: C
                    }), d))
                });
            Y.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, Y.classNames = {
                fullWidth: z,
                zeroRight: _
            };
            var X = function(e) {
                var t = e.sideCar,
                    n = F(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return f.createElement(r, W({}, n))
            };
            X.isSideCarExport = !0;
            var q = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(r) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = d || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var o, a;
                                (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), a = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                $ = function() {
                    var e = q();
                    return function(t, n) {
                        f.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                Z = function() {
                    var e = $();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                G = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                J = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                Q = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [J(n), J(r), J(o)]
                },
                ee = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return G;
                    var t = Q(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                et = Z(),
                en = "data-scroll-locked",
                er = function(e, t, n, r) {
                    var o = e.left,
                        a = e.top,
                        i = e.right,
                        u = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(u, "px ").concat(r, ";\n  }\n  body[").concat(en, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(_, " {\n    right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(z, " {\n    margin-right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(_, " .").concat(_, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(z, " .").concat(z, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(en, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(u, "px;\n  }\n")
                },
                eo = function() {
                    var e = parseInt(document.body.getAttribute(en) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                ea = function() {
                    f.useEffect(function() {
                        return document.body.setAttribute(en, (eo() + 1).toString()),
                            function() {
                                var e = eo() - 1;
                                e <= 0 ? document.body.removeAttribute(en) : document.body.setAttribute(en, e.toString())
                            }
                    }, [])
                },
                ei = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r;
                    ea();
                    var a = f.useMemo(function() {
                        return ee(o)
                    }, [o]);
                    return f.createElement(et, {
                        styles: er(a, !t, o, n ? "" : "!important")
                    })
                },
                eu = !1;
            if ("undefined" != typeof window) try {
                var el = Object.defineProperty({}, "passive", {
                    get: function() {
                        return eu = !0, !0
                    }
                });
                window.addEventListener("test", el, el), window.removeEventListener("test", el, el)
            } catch (e) {
                eu = !1
            }
            var ec = !!eu && {
                    passive: !1
                },
                es = function(e, t) {
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
                },
                ed = function(e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), ef(e, r)) {
                            var o = ev(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== n.body);
                    return !1
                },
                ef = function(e, t) {
                    return "v" === e ? es(t, "overflowY") : es(t, "overflowX")
                },
                ev = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                ep = function(e, t, n, r, o) {
                    var a, i = (a = window.getComputedStyle(t).direction, "h" === e && "rtl" === a ? -1 : 1),
                        u = i * r,
                        l = n.target,
                        c = t.contains(l),
                        s = !1,
                        d = u > 0,
                        f = 0,
                        v = 0;
                    do {
                        var p = ev(e, l),
                            m = p[0],
                            h = p[1] - p[2] - i * m;
                        (m || h) && ef(e, l) && (f += h, v += m), l instanceof ShadowRoot ? l = l.host : l = l.parentNode
                    } while (!c && l !== document.body || c && (t.contains(l) || t === l));
                    return d && (o && 1 > Math.abs(f) || !o && u > f) ? s = !0 : !d && (o && 1 > Math.abs(v) || !o && -u > v) && (s = !0), s
                },
                em = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                eh = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                eg = function(e) {
                    return e && "current" in e ? e.current : e
                },
                ew = 0,
                ey = [],
                eb = (s = function(e) {
                    var t = f.useRef([]),
                        n = f.useRef([0, 0]),
                        r = f.useRef(),
                        o = f.useState(ew++)[0],
                        a = f.useState(Z)[0],
                        i = f.useRef(e);
                    f.useEffect(function() {
                        i.current = e
                    }, [e]), f.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var t = (function(e, t, n) {
                                if (n || 2 == arguments.length)
                                    for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                                return e.concat(r || Array.prototype.slice.call(t))
                            })([e.lockRef.current], (e.shards || []).map(eg), !0).filter(Boolean);
                            return t.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(o))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(o))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var u = f.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !i.current.allowPinchZoom;
                            var o, a = em(e),
                                u = n.current,
                                l = "deltaX" in e ? e.deltaX : u[0] - a[0],
                                c = "deltaY" in e ? e.deltaY : u[1] - a[1],
                                s = e.target,
                                d = Math.abs(l) > Math.abs(c) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === s.type) return !1;
                            var f = ed(d, s);
                            if (!f) return !0;
                            if (f ? o = d : (o = "v" === d ? "h" : "v", f = ed(d, s)), !f) return !1;
                            if (!r.current && "changedTouches" in e && (l || c) && (r.current = o), !o) return !0;
                            var v = r.current || o;
                            return ep(v, t, e, "h" === v ? l : c, !0)
                        }, []),
                        l = f.useCallback(function(e) {
                            if (ey.length && ey[ey.length - 1] === a) {
                                var n = "deltaY" in e ? eh(e) : em(e),
                                    r = t.current.filter(function(t) {
                                        var r;
                                        return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    })[0];
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var o = (i.current.shards || []).map(eg).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (o.length > 0 ? u(e, o[0]) : !i.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        c = f.useCallback(function(e, n, r, o) {
                            var a = {
                                name: e,
                                delta: n,
                                target: r,
                                should: o,
                                shadowParent: function(e) {
                                    for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                    return t
                                }(r)
                            };
                            t.current.push(a), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== a
                                })
                            }, 1)
                        }, []),
                        s = f.useCallback(function(e) {
                            n.current = em(e), r.current = void 0
                        }, []),
                        d = f.useCallback(function(t) {
                            c(t.type, eh(t), t.target, u(t, e.lockRef.current))
                        }, []),
                        v = f.useCallback(function(t) {
                            c(t.type, em(t), t.target, u(t, e.lockRef.current))
                        }, []);
                    f.useEffect(function() {
                        return ey.push(a), e.setCallbacks({
                                onScrollCapture: d,
                                onWheelCapture: d,
                                onTouchMoveCapture: v
                            }), document.addEventListener("wheel", l, ec), document.addEventListener("touchmove", l, ec), document.addEventListener("touchstart", s, ec),
                            function() {
                                ey = ey.filter(function(e) {
                                    return e !== a
                                }), document.removeEventListener("wheel", l, ec), document.removeEventListener("touchmove", l, ec), document.removeEventListener("touchstart", s, ec)
                            }
                    }, []);
                    var p = e.removeScrollBar,
                        m = e.inert;
                    return f.createElement(f.Fragment, null, m ? f.createElement(a, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, p ? f.createElement(ei, {
                        gapMode: e.gapMode
                    }) : null)
                }, H.useMedium(s), X),
                eE = f.forwardRef(function(e, t) {
                    return f.createElement(Y, W({}, e, {
                        ref: t,
                        sideCar: eb
                    }))
                });
            eE.classNames = Y.classNames;
            var ex = new WeakMap,
                eR = new WeakMap,
                eC = {},
                eM = 0,
                eN = function(e) {
                    return e && (e.host || eN(e.parentNode))
                },
                eT = function(e, t, n, r) {
                    var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = eN(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    eC[n] || (eC[n] = new WeakMap);
                    var a = eC[n],
                        i = [],
                        u = new Set,
                        l = new Set(o),
                        c = function(e) {
                            !e || u.has(e) || (u.add(e), c(e.parentNode))
                        };
                    o.forEach(c);
                    var s = function(e) {
                        !e || l.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (u.has(e)) s(e);
                            else try {
                                var t = e.getAttribute(r),
                                    o = null !== t && "false" !== t,
                                    l = (ex.get(e) || 0) + 1,
                                    c = (a.get(e) || 0) + 1;
                                ex.set(e, l), a.set(e, c), i.push(e), 1 === l && o && eR.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return s(t), u.clear(), eM++,
                        function() {
                            i.forEach(function(e) {
                                var t = ex.get(e) - 1,
                                    o = a.get(e) - 1;
                                ex.set(e, t), a.set(e, o), t || (eR.has(e) || e.removeAttribute(r), eR.delete(e)), o || e.removeAttribute(n)
                            }), --eM || (ex = new WeakMap, ex = new WeakMap, eR = new WeakMap, eC = {})
                        }
                },
                eD = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), eT(r, o, n, "aria-hidden")) : function() {
                        return null
                    }
                },
                eS = n(8759),
                eP = "Dialog",
                [eA, eO] = (0, m.b)(eP),
                [ej, ek] = eA(eP),
                eL = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: r,
                        defaultOpen: o,
                        onOpenChange: a,
                        modal: i = !0
                    } = e, u = f.useRef(null), l = f.useRef(null), [c = !1, s] = (0, g.T)({
                        prop: r,
                        defaultProp: o,
                        onChange: a
                    });
                    return (0, E.jsx)(ej, {
                        scope: t,
                        triggerRef: u,
                        contentRef: l,
                        contentId: (0, h.M)(),
                        titleId: (0, h.M)(),
                        descriptionId: (0, h.M)(),
                        open: c,
                        onOpenChange: s,
                        onOpenToggle: f.useCallback(() => s(e => !e), [s]),
                        modal: i,
                        children: n
                    })
                };
            eL.displayName = eP;
            var eI = "DialogTrigger",
                eW = f.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = ek(eI, n), a = (0, p.e)(t, o.triggerRef);
                    return (0, E.jsx)(y.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": o.open,
                        "aria-controls": o.contentId,
                        "data-state": e2(o.open),
                        ...r,
                        ref: a,
                        onClick: (0, v.M)(e.onClick, o.onOpenToggle)
                    })
                });
            eW.displayName = eI;
            var eF = "DialogPortal",
                [e_, ez] = eA(eF, {
                    forceMount: void 0
                }),
                eV = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, a = ek(eF, t);
                    return (0, E.jsx)(e_, {
                        scope: t,
                        forceMount: n,
                        children: f.Children.map(r, e => (0, E.jsx)(k.z, {
                            present: n || a.open,
                            children: (0, E.jsx)(j, {
                                asChild: !0,
                                container: o,
                                children: e
                            })
                        }))
                    })
                };
            eV.displayName = eF;
            var eU = "DialogOverlay",
                eB = f.forwardRef((e, t) => {
                    let n = ez(eU, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        a = ek(eU, e.__scopeDialog);
                    return a.modal ? (0, E.jsx)(k.z, {
                        present: r || a.open,
                        children: (0, E.jsx)(eH, { ...o,
                            ref: t
                        })
                    }) : null
                });
            eB.displayName = eU;
            var eH = f.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = ek(eU, n);
                    return (0, E.jsx)(eE, {
                        as: eS.g7,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, E.jsx)(y.WV.div, {
                            "data-state": e2(o.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                eK = "DialogContent",
                eY = f.forwardRef((e, t) => {
                    let n = ez(eK, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        a = ek(eK, e.__scopeDialog);
                    return (0, E.jsx)(k.z, {
                        present: r || a.open,
                        children: a.modal ? (0, E.jsx)(eX, { ...o,
                            ref: t
                        }) : (0, E.jsx)(eq, { ...o,
                            ref: t
                        })
                    })
                });
            eY.displayName = eK;
            var eX = f.forwardRef((e, t) => {
                    let n = ek(eK, e.__scopeDialog),
                        r = f.useRef(null),
                        o = (0, p.e)(t, n.contentRef, r);
                    return f.useEffect(() => {
                        let e = r.current;
                        if (e) return eD(e)
                    }, []), (0, E.jsx)(e$, { ...e,
                        ref: o,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, v.M)(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                        }),
                        onPointerDownOutside: (0, v.M)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || n) && e.preventDefault()
                        }),
                        onFocusOutside: (0, v.M)(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                eq = f.forwardRef((e, t) => {
                    let n = ek(eK, e.__scopeDialog),
                        r = f.useRef(!1),
                        o = f.useRef(!1);
                    return (0, E.jsx)(e$, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var a, i;
                            null === (a = e.onCloseAutoFocus) || void 0 === a || a.call(e, t), t.defaultPrevented || (r.current || null === (i = n.triggerRef.current) || void 0 === i || i.focus(), t.preventDefault()), r.current = !1, o.current = !1
                        },
                        onInteractOutside: t => {
                            var a, i;
                            null === (a = e.onInteractOutside) || void 0 === a || a.call(e, t), t.defaultPrevented || (r.current = !0, "pointerdown" !== t.detail.originalEvent.type || (o.current = !0));
                            let u = t.target;
                            (null === (i = n.triggerRef.current) || void 0 === i ? void 0 : i.contains(u)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
                        }
                    })
                }),
                e$ = f.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: r,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: a,
                        ...i
                    } = e, u = ek(eK, n), l = f.useRef(null), c = (0, p.e)(t, l);
                    return f.useEffect(() => {
                        var e, t;
                        let n = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : I()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : I()), L++, () => {
                            1 === L && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), L--
                        }
                    }, []), (0, E.jsxs)(E.Fragment, {
                        children: [(0, E.jsx)(M, {
                            asChild: !0,
                            loop: !0,
                            trapped: r,
                            onMountAutoFocus: o,
                            onUnmountAutoFocus: a,
                            children: (0, E.jsx)(w.XB, {
                                role: "dialog",
                                id: u.contentId,
                                "aria-describedby": u.descriptionId,
                                "aria-labelledby": u.titleId,
                                "data-state": e2(u.open),
                                ...i,
                                ref: c,
                                onDismiss: () => u.onOpenChange(!1)
                            })
                        }), (0, E.jsxs)(E.Fragment, {
                            children: [(0, E.jsx)(e4, {
                                titleId: u.titleId
                            }), (0, E.jsx)(e7, {
                                contentRef: l,
                                descriptionId: u.descriptionId
                            })]
                        })]
                    })
                }),
                eZ = "DialogTitle",
                eG = f.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = ek(eZ, n);
                    return (0, E.jsx)(y.WV.h2, {
                        id: o.titleId,
                        ...r,
                        ref: t
                    })
                });
            eG.displayName = eZ;
            var eJ = "DialogDescription",
                eQ = f.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = ek(eJ, n);
                    return (0, E.jsx)(y.WV.p, {
                        id: o.descriptionId,
                        ...r,
                        ref: t
                    })
                });
            eQ.displayName = eJ;
            var e0 = "DialogClose",
                e1 = f.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = ek(e0, n);
                    return (0, E.jsx)(y.WV.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: (0, v.M)(e.onClick, () => o.onOpenChange(!1))
                    })
                });

            function e2(e) {
                return e ? "open" : "closed"
            }
            e1.displayName = e0;
            var e3 = "DialogTitleWarning",
                [e6, e5] = (0, m.k)(e3, {
                    contentName: eK,
                    titleName: eZ,
                    docsSlug: "dialog"
                }),
                e4 = e => {
                    let {
                        titleId: t
                    } = e, n = e5(e3), r = "`".concat(n.contentName, "` requires a `").concat(n.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);
                    return f.useEffect(() => {
                        t && !document.getElementById(t) && console.error(r)
                    }, [r, t]), null
                },
                e7 = e => {
                    let {
                        contentRef: t,
                        descriptionId: n
                    } = e, r = e5("DialogDescriptionWarning"), o = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName, "}.");
                    return f.useEffect(() => {
                        var e;
                        let r = null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                        n && r && !document.getElementById(n) && console.warn(o)
                    }, [o, t, n]), null
                };
            let e8 = f.createContext({
                    drawerRef: {
                        current: null
                    },
                    overlayRef: {
                        current: null
                    },
                    scaleBackground: () => {},
                    onPress: () => {},
                    onRelease: () => {},
                    onDrag: () => {},
                    onNestedDrag: () => {},
                    onNestedOpenChange: () => {},
                    onNestedRelease: () => {},
                    openProp: void 0,
                    dismissible: !1,
                    handleOnly: !1,
                    isOpen: !1,
                    isDragging: !1,
                    keyboardIsOpen: {
                        current: !1
                    },
                    snapPointsOffset: null,
                    snapPoints: null,
                    modal: !1,
                    shouldFade: !1,
                    activeSnapPoint: null,
                    onOpenChange: () => {},
                    setActiveSnapPoint: () => {},
                    visible: !1,
                    closeDrawer: () => {},
                    setVisible: () => {},
                    direction: "bottom"
                }),
                e9 = () => {
                    let e = f.useContext(e8);
                    if (!e) throw Error("useDrawerContext must be used within a Drawer.Root");
                    return e
                };
            ! function(e) {
                if (!e || "undefined" == typeof document) return;
                let t = document.head || document.getElementsByTagName("head")[0],
                    n = document.createElement("style");
                n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
            }("[vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-handle]{display:block;position:relative;opacity:.8;margin-left:auto;margin-right:auto;height:5px;width:56px;border-radius:1rem;touch-action:pan-y;cursor:grab}[vaul-handle]:active,[vaul-handle]:hover{opacity:1}[vaul-handle]:active{cursor:grabbing}[vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible=false]){opacity:1}@media (hover:hover) and (pointer:fine){[vaul-drawer]{user-select:none}}@media (pointer:fine){[vaul-handle-hitarea]:{width:100%;height:100%}}");
            let te = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect;

            function tt() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    for (let e of t) "function" == typeof e && e(...n)
                }
            }

            function tn() {
                return tr(/^iPhone/) || tr(/^iPad/) || tr(/^Mac/) && navigator.maxTouchPoints > 1
            }

            function tr(e) {
                return "undefined" != typeof window && null != window.navigator ? e.test(window.navigator.platform) : void 0
            }
            let to = "undefined" != typeof document && window.visualViewport;

            function ta(e) {
                let t = window.getComputedStyle(e);
                return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY)
            }

            function ti(e) {
                for (ta(e) && (e = e.parentElement); e && !ta(e);) e = e.parentElement;
                return e || document.scrollingElement || document.documentElement
            }
            let tu = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
                tl = 0;

            function tc(e, t, n) {
                let r = e.style[t];
                return e.style[t] = n, () => {
                    e.style[t] = r
                }
            }

            function ts(e, t, n, r) {
                return e.addEventListener(t, n, r), () => {
                    e.removeEventListener(t, n, r)
                }
            }

            function td(e) {
                let t = document.scrollingElement || document.documentElement;
                for (; e && e !== t;) {
                    let t = ti(e);
                    if (t !== document.documentElement && t !== document.body && t !== e) {
                        let n = t.getBoundingClientRect().top,
                            r = e.getBoundingClientRect().top;
                        e.getBoundingClientRect().bottom > t.getBoundingClientRect().bottom && (t.scrollTop += r - n)
                    }
                    e = t.parentElement
                }
            }

            function tf(e) {
                return e instanceof HTMLInputElement && !tu.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
            }

            function tv() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return f.useCallback(function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return e => t.forEach(t => {
                        "function" == typeof t ? t(e) : null != t && (t.current = e)
                    })
                }(...t), t)
            }
            let tp = null,
                tm = new WeakMap;

            function th(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!e || !(e instanceof HTMLElement)) return;
                let r = {};
                Object.entries(t).forEach(t => {
                    let [n, o] = t;
                    if (n.startsWith("--")) {
                        e.style.setProperty(n, o);
                        return
                    }
                    r[n] = e.style[n], e.style[n] = o
                }), n || tm.set(e, r)
            }

            function tg(e, t) {
                if (!e || !(e instanceof HTMLElement)) return;
                let n = tm.get(e);
                n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(t => {
                    let [n, r] = t;
                    e.style[n] = r
                }))
            }
            let tw = e => {
                switch (e) {
                    case "top":
                    case "bottom":
                        return !0;
                    case "left":
                    case "right":
                        return !1;
                    default:
                        return e
                }
            };

            function ty(e, t) {
                if (!e) return null;
                let n = window.getComputedStyle(e),
                    r = n.transform || n.webkitTransform || n.mozTransform,
                    o = r.match(/^matrix3d\((.+)\)$/);
                return o ? parseFloat(o[1].split(", ")[tw(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/)) ? parseFloat(o[1].split(", ")[tw(t) ? 5 : 4]) : null
            }
            let tb = {
                DURATION: .5,
                EASE: [.32, .72, 0, 1]
            };

            function tE(e) {
                let t = f.useRef(e);
                return f.useEffect(() => {
                    t.current = e
                }), f.useMemo(() => function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return null == t.current ? void 0 : t.current.call(t, ...n)
                }, [])
            }
            let tx = "vaul-dragging";

            function tR(e) {
                var t;
                let {
                    open: n,
                    onOpenChange: o,
                    children: a,
                    shouldScaleBackground: i,
                    onDrag: u,
                    onRelease: l,
                    snapPoints: c,
                    nested: s = !1,
                    setBackgroundColorOnScale: d = !0,
                    closeThreshold: v = .25,
                    scrollLockTimeout: p = 100,
                    dismissible: m = !0,
                    handleOnly: h = !1,
                    fadeFromIndex: g = c && c.length - 1,
                    activeSnapPoint: w,
                    setActiveSnapPoint: y,
                    fixed: b,
                    modal: E = !0,
                    onClose: x,
                    noBodyStyles: R,
                    direction: C = "bottom",
                    preventScrollRestoration: M = !0,
                    disablePreventScroll: N = !1
                } = e, [T = !1, D] = f.useState(!1), [S, P] = f.useState(!1), [A, O] = f.useState(!1), [j, k] = f.useState(!1), [L, I] = f.useState(!1), [W, F] = f.useState(!1), _ = f.useRef(null), z = f.useRef(null), V = f.useRef(null), U = f.useRef(null), B = f.useRef(null), H = f.useRef(!1), K = f.useRef(null), Y = f.useRef(0), X = f.useRef(!1), q = f.useRef(0), $ = f.useRef(null), Z = f.useRef((null == (t = $.current) ? void 0 : t.getBoundingClientRect().height) || 0), G = f.useRef(0), J = f.useCallback(e => {
                    c && e === er.length - 1 && (z.current = new Date)
                }, []), {
                    activeSnapPoint: Q,
                    activeSnapPointIndex: ee,
                    setActiveSnapPoint: et,
                    onRelease: en,
                    snapPointsOffset: er,
                    onDrag: eo,
                    shouldFade: ea,
                    getPercentageDragged: ei
                } = function(e) {
                    let {
                        activeSnapPointProp: t,
                        setActiveSnapPointProp: n,
                        snapPoints: r,
                        drawerRef: o,
                        overlayRef: a,
                        fadeFromIndex: i,
                        onSnapPointChange: u,
                        direction: l = "bottom"
                    } = e, [c, s] = function(e) {
                        let {
                            prop: t,
                            defaultProp: n,
                            onChange: r = () => {}
                        } = e, [o, a] = function(e) {
                            let {
                                defaultProp: t,
                                onChange: n
                            } = e, r = f.useState(t), [o] = r, a = f.useRef(o), i = tE(n);
                            return f.useEffect(() => {
                                a.current !== o && (i(o), a.current = o)
                            }, [o, a, i]), r
                        }({
                            defaultProp: n,
                            onChange: r
                        }), i = void 0 !== t, u = i ? t : o, l = tE(r);
                        return [u, f.useCallback(e => {
                            if (i) {
                                let n = "function" == typeof e ? e(t) : e;
                                n !== t && l(n)
                            } else a(e)
                        }, [i, t, a, l])]
                    }({
                        prop: t,
                        defaultProp: null == r ? void 0 : r[0],
                        onChange: n
                    }), d = f.useMemo(() => c === (null == r ? void 0 : r[r.length - 1]) || null, [r, c]), v = r && r.length > 0 && (i || 0 === i) && !Number.isNaN(i) && r[i] === c || !r, p = f.useMemo(() => null == r ? void 0 : r.findIndex(e => e === c), [r, c]), m = f.useMemo(() => {
                        var e;
                        return null != (e = null == r ? void 0 : r.map(e => {
                            let t = "undefined" != typeof window,
                                n = "string" == typeof e,
                                r = 0;
                            if (n && (r = parseInt(e, 10)), tw(l)) {
                                let o = n ? r : t ? e * window.innerHeight : 0;
                                return t ? "bottom" === l ? window.innerHeight - o : -window.innerHeight + o : o
                            }
                            let o = n ? r : t ? e * window.innerWidth : 0;
                            return t ? "right" === l ? window.innerWidth - o : -window.innerWidth + o : o
                        })) ? e : []
                    }, [r]), h = f.useMemo(() => null !== p ? null == m ? void 0 : m[p] : null, [m, p]), g = f.useCallback(e => {
                        var t;
                        let n = null != (t = null == m ? void 0 : m.findIndex(t => t === e)) ? t : null;
                        u(n), th(o.current, {
                            transition: "transform ".concat(tb.DURATION, "s cubic-bezier(").concat(tb.EASE.join(","), ")"),
                            transform: tw(l) ? "translate3d(0, ".concat(e, "px, 0)") : "translate3d(".concat(e, "px, 0, 0)")
                        }), m && n !== m.length - 1 && n !== i ? th(a.current, {
                            transition: "opacity ".concat(tb.DURATION, "s cubic-bezier(").concat(tb.EASE.join(","), ")"),
                            opacity: "0"
                        }) : th(a.current, {
                            transition: "opacity ".concat(tb.DURATION, "s cubic-bezier(").concat(tb.EASE.join(","), ")"),
                            opacity: "1"
                        }), s(null !== n ? null == r ? void 0 : r[n] : null)
                    }, [o.current, r, m, i, a, s]);
                    return f.useEffect(() => {
                        if (c || t) {
                            var e;
                            let n = null != (e = null == r ? void 0 : r.findIndex(e => e === t || e === c)) ? e : -1;
                            m && -1 !== n && "number" == typeof m[n] && g(m[n])
                        }
                    }, [c, t, r, m, g]), {
                        isLastSnapPoint: d,
                        activeSnapPoint: c,
                        shouldFade: v,
                        getPercentageDragged: function(e, t) {
                            if (!r || "number" != typeof p || !m || void 0 === i) return null;
                            let n = p === i - 1;
                            if (p >= i && t) return 0;
                            if (n && !t) return 1;
                            if (!v && !n) return null;
                            let o = n ? p + 1 : p - 1,
                                a = e / Math.abs(n ? m[o] - m[o - 1] : m[o + 1] - m[o]);
                            return n ? 1 - a : a
                        },
                        setActiveSnapPoint: s,
                        activeSnapPointIndex: p,
                        onRelease: function(e) {
                            let {
                                draggedDistance: t,
                                closeDrawer: n,
                                velocity: o,
                                dismissible: u
                            } = e;
                            if (void 0 === i) return;
                            let c = "bottom" === l || "right" === l ? (null != h ? h : 0) - t : (null != h ? h : 0) + t,
                                s = p === i - 1,
                                f = 0 === p,
                                v = t > 0;
                            if (s && th(a.current, {
                                    transition: "opacity ".concat(tb.DURATION, "s cubic-bezier(").concat(tb.EASE.join(","), ")")
                                }), o > 2 && !v) {
                                u ? n() : g(m[0]);
                                return
                            }
                            if (o > 2 && v && m && r) {
                                g(m[r.length - 1]);
                                return
                            }
                            let w = null == m ? void 0 : m.reduce((e, t) => "number" != typeof e || "number" != typeof t ? e : Math.abs(t - c) < Math.abs(e - c) ? t : e),
                                y = tw(l) ? window.innerHeight : window.innerWidth;
                            if (o > .4 && Math.abs(t) < .4 * y) {
                                let e = v ? 1 : -1;
                                if (e > 0 && d) {
                                    g(m[r.length - 1]);
                                    return
                                }
                                if (f && e < 0 && u && n(), null === p) return;
                                g(m[p + e]);
                                return
                            }
                            g(w)
                        },
                        onDrag: function(e) {
                            let {
                                draggedDistance: t
                            } = e;
                            if (null === h) return;
                            let n = "bottom" === l || "right" === l ? h - t : h + t;
                            ("bottom" === l || "right" === l) && n < m[m.length - 1] || ("top" === l || "left" === l) && n > m[m.length - 1] || th(o.current, {
                                transform: tw(l) ? "translate3d(0, ".concat(n, "px, 0)") : "translate3d(".concat(n, "px, 0, 0)")
                            })
                        },
                        snapPointsOffset: m
                    }
                }({
                    snapPoints: c,
                    activeSnapPointProp: w,
                    setActiveSnapPointProp: y,
                    drawerRef: $,
                    fadeFromIndex: g,
                    overlayRef: _,
                    onSnapPointChange: J,
                    direction: C
                });
                ! function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            isDisabled: t
                        } = e;
                    te(() => {
                        if (!t) {
                            let e, t, n, o, a, i;
                            return 1 == ++tl && (r = tn() ? (t = 0, n = window.pageXOffset, o = window.pageYOffset, a = tt(tc(document.documentElement, "paddingRight", "".concat(window.innerWidth - document.documentElement.clientWidth, "px"))), window.scrollTo(0, 0), i = tt(ts(document, "touchstart", n => {
                                ((e = ti(n.target)) !== document.documentElement || e !== document.body) && (t = n.changedTouches[0].pageY)
                            }, {
                                passive: !1,
                                capture: !0
                            }), ts(document, "touchmove", n => {
                                if (!e || e === document.documentElement || e === document.body) {
                                    n.preventDefault();
                                    return
                                }
                                let r = n.changedTouches[0].pageY,
                                    o = e.scrollTop,
                                    a = e.scrollHeight - e.clientHeight;
                                0 !== a && ((o <= 0 && r > t || o >= a && r < t) && n.preventDefault(), t = r)
                            }, {
                                passive: !1,
                                capture: !0
                            }), ts(document, "touchend", e => {
                                let t = e.target;
                                tf(t) && t !== document.activeElement && (e.preventDefault(), t.style.transform = "translateY(-2000px)", t.focus(), requestAnimationFrame(() => {
                                    t.style.transform = ""
                                }))
                            }, {
                                passive: !1,
                                capture: !0
                            }), ts(document, "focus", e => {
                                let t = e.target;
                                tf(t) && (t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                                    t.style.transform = "", to && (to.height < window.innerHeight ? requestAnimationFrame(() => {
                                        td(t)
                                    }) : to.addEventListener("resize", () => td(t), {
                                        once: !0
                                    }))
                                }))
                            }, !0), ts(window, "scroll", () => {
                                window.scrollTo(0, 0)
                            })), () => {
                                a(), i(), window.scrollTo(n, o)
                            }) : tt(tc(document.documentElement, "paddingRight", "".concat(window.innerWidth - document.documentElement.clientWidth, "px")))), () => {
                                0 == --tl && r()
                            }
                        }
                    }, [t])
                }({
                    isDisabled: !T || L || !E || W || !S || N
                });
                let {
                    restorePositionSetting: eu
                } = function(e) {
                    let {
                        isOpen: t,
                        modal: n,
                        nested: r,
                        hasBeenOpened: o,
                        preventScrollRestoration: a,
                        noBodyStyles: i
                    } = e, [u, l] = f.useState(() => "undefined" != typeof window ? window.location.href : ""), c = f.useRef(0), s = f.useCallback(() => {
                        if (null === tp && t && !i) {
                            tp = {
                                position: document.body.style.position,
                                top: document.body.style.top,
                                left: document.body.style.left,
                                height: document.body.style.height,
                                right: "unset"
                            };
                            let {
                                scrollX: e,
                                innerHeight: t
                            } = window;
                            document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
                                top: "".concat(-c.current, "px"),
                                left: "".concat(-e, "px"),
                                right: "0px",
                                height: "auto"
                            }), window.setTimeout(() => window.requestAnimationFrame(() => {
                                let e = t - window.innerHeight;
                                e && c.current >= t && (document.body.style.top = "".concat(-(c.current + e), "px"))
                            }), 300)
                        }
                    }, [t]), d = f.useCallback(() => {
                        if (null !== tp && !i) {
                            let e = -parseInt(document.body.style.top, 10),
                                t = -parseInt(document.body.style.left, 10);
                            Object.assign(document.body.style, tp), window.requestAnimationFrame(() => {
                                if (a && u !== window.location.href) {
                                    l(window.location.href);
                                    return
                                }
                                window.scrollTo(t, e)
                            }), tp = null
                        }
                    }, [u]);
                    return f.useEffect(() => {
                        function e() {
                            c.current = window.scrollY
                        }
                        return e(), window.addEventListener("scroll", e), () => {
                            window.removeEventListener("scroll", e)
                        }
                    }, []), f.useEffect(() => {
                        r || !o || (t ? (window.matchMedia("(display-mode: standalone)").matches || s(), n || window.setTimeout(() => {
                            d()
                        }, 500)) : d())
                    }, [t, o, u, n, r, s, d]), {
                        restorePositionSetting: d
                    }
                }({
                    isOpen: T,
                    modal: E,
                    nested: s,
                    hasBeenOpened: S,
                    preventScrollRestoration: M,
                    noBodyStyles: R
                });

                function el() {
                    return (window.innerWidth - 26) / window.innerWidth
                }

                function ec(e, t) {
                    var n;
                    let r = e,
                        o = null == (n = window.getSelection()) ? void 0 : n.toString(),
                        a = $.current ? ty($.current, C) : null,
                        i = new Date;
                    if (r.hasAttribute("data-vaul-no-drag") || r.closest("[data-vaul-no-drag]")) return !1;
                    if ("right" === C || "left" === C) return !0;
                    if (z.current && i.getTime() - z.current.getTime() < 500) return !1;
                    if (null !== a && ("bottom" === C ? a > 0 : a < 0)) return !0;
                    if (o && o.length > 0) return !1;
                    if (B.current && i.getTime() - B.current.getTime() < p && 0 === a || t) return B.current = i, !1;
                    for (; r;) {
                        if (r.scrollHeight > r.clientHeight) {
                            if (0 !== r.scrollTop) return B.current = new Date, !1;
                            if ("dialog" === r.getAttribute("role")) break
                        }
                        r = r.parentNode
                    }
                    return !0
                }

                function es() {
                    $.current && (L && $.current && ($.current.classList.remove(tx), H.current = !1, I(!1), U.current = new Date), null == x || x(), th($.current, {
                        transform: tw(C) ? "translate3d(0, ".concat("bottom" === C ? "100%" : "-100%", ", 0)") : "translate3d(".concat("right" === C ? "100%" : "-100%", ", 0, 0)"),
                        transition: "transform ".concat(tb.DURATION, "s cubic-bezier(").concat(tb.EASE.join(","), ")")
                    }), th(_.current, {
                        opacity: "0",
                        transition: "opacity ".concat(tb.DURATION, "s cubic-bezier(").concat(tb.EASE.join(","), ")")
                    }), ef(!1), setTimeout(() => {
                        O(!1), D(!1)
                    }, 300), setTimeout(() => {
                        c && et(c[0])
                    }, 1e3 * tb.DURATION))
                }

                function ed() {
                    if (!$.current) return;
                    let e = document.querySelector("[vaul-drawer-wrapper]"),
                        t = ty($.current, C);
                    th($.current, {
                        transform: "translate3d(0, 0, 0)",
                        transition: "transform ".concat(tb.DURATION, "s cubic-bezier(").concat(tb.EASE.join(","), ")")
                    }), th(_.current, {
                        transition: "opacity ".concat(tb.DURATION, "s cubic-bezier(").concat(tb.EASE.join(","), ")"),
                        opacity: "1"
                    }), i && t && t > 0 && T && th(e, {
                        borderRadius: "".concat(8, "px"),
                        overflow: "hidden",
                        ...tw(C) ? {
                            transform: "scale(".concat(el(), ") translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)"),
                            transformOrigin: "top"
                        } : {
                            transform: "scale(".concat(el(), ") translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)"),
                            transformOrigin: "left"
                        },
                        transitionProperty: "transform, border-radius",
                        transitionDuration: "".concat(tb.DURATION, "s"),
                        transitionTimingFunction: "cubic-bezier(".concat(tb.EASE.join(","), ")")
                    }, !0)
                }

                function ef(e) {
                    let t = document.querySelector("[vaul-drawer-wrapper]");
                    t && i && (e ? (d && !R && (th(document.body, {
                        background: document.body.style.backgroundColor || document.body.style.background
                    }), th(document.body, {
                        background: "black"
                    }, !0)), th(t, {
                        borderRadius: "".concat(8, "px"),
                        overflow: "hidden",
                        ...tw(C) ? {
                            transform: "scale(".concat(el(), ") translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)"),
                            transformOrigin: "top"
                        } : {
                            transform: "scale(".concat(el(), ") translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)"),
                            transformOrigin: "left"
                        },
                        transitionProperty: "transform, border-radius",
                        transitionDuration: "".concat(tb.DURATION, "s"),
                        transitionTimingFunction: "cubic-bezier(".concat(tb.EASE.join(","), ")")
                    })) : (tg(t, "overflow"), tg(t, "transform"), tg(t, "borderRadius"), th(t, {
                        transitionProperty: "transform, border-radius",
                        transitionDuration: "".concat(tb.DURATION, "s"),
                        transitionTimingFunction: "cubic-bezier(".concat(tb.EASE.join(","), ")")
                    })))
                }
                return f.useEffect(() => () => {
                    ef(!1), eu()
                }, []), f.useEffect(() => {
                    var e;

                    function t() {
                        if ($.current && (tf(document.activeElement) || X.current)) {
                            var e;
                            let t = (null == (e = window.visualViewport) ? void 0 : e.height) || 0,
                                n = window.innerHeight - t,
                                r = $.current.getBoundingClientRect().height || 0;
                            G.current || (G.current = r);
                            let o = $.current.getBoundingClientRect().top;
                            if (Math.abs(q.current - n) > 60 && (X.current = !X.current), c && c.length > 0 && er && ee && (n += er[ee] || 0), q.current = n, r > t || X.current) {
                                let e = $.current.getBoundingClientRect().height,
                                    r = e;
                                e > t && (r = t - 26), b ? $.current.style.height = "".concat(e - Math.max(n, 0), "px") : $.current.style.height = "".concat(Math.max(r, t - o), "px")
                            } else $.current.style.height = "".concat(G.current, "px");
                            c && c.length > 0 && !X.current ? $.current.style.bottom = "0px" : $.current.style.bottom = "".concat(Math.max(n, 0), "px")
                        }
                    }
                    return null == (e = window.visualViewport) || e.addEventListener("resize", t), () => {
                        var e;
                        return null == (e = window.visualViewport) ? void 0 : e.removeEventListener("resize", t)
                    }
                }, [ee, c, er]), f.useEffect(() => {
                    if (!T && i) {
                        let e = setTimeout(() => {
                            tg(document.body)
                        }, 200);
                        return () => clearTimeout(e)
                    }
                }, [T, i]), f.useLayoutEffect(() => {
                    n ? (D(!0), P(!0)) : es()
                }, [n]), f.useEffect(() => {
                    j && (null == o || o(T))
                }, [T]), f.useEffect(() => {
                    k(!0)
                }, []), f.useEffect(() => {
                    T && (th(document.documentElement, {
                        scrollBehavior: "auto"
                    }), z.current = new Date, ef(!0))
                }, [T]), f.useEffect(() => {
                    if ($.current && A) {
                        var e;
                        let t = null == $ ? void 0 : null == (e = $.current) ? void 0 : e.querySelectorAll("*");
                        null == t || t.forEach(e => {
                            (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth) && e.classList.add("vaul-scrollable")
                        })
                    }
                }, [A]), f.createElement(eL, {
                    modal: E,
                    onOpenChange: e => {
                        if (void 0 !== n) {
                            null == o || o(e);
                            return
                        }
                        e ? (P(!0), D(e)) : es()
                    },
                    open: T
                }, f.createElement(e8.Provider, {
                    value: {
                        visible: A,
                        activeSnapPoint: Q,
                        snapPoints: c,
                        setActiveSnapPoint: et,
                        drawerRef: $,
                        overlayRef: _,
                        scaleBackground: ef,
                        onOpenChange: o,
                        onPress: function(e) {
                            var t;
                            (m || c) && (!$.current || $.current.contains(e.target)) && (Z.current = (null == (t = $.current) ? void 0 : t.getBoundingClientRect().height) || 0, I(!0), V.current = new Date, tn() && window.addEventListener("touchend", () => H.current = !1, {
                                once: !0
                            }), e.target.setPointerCapture(e.pointerId), Y.current = tw(C) ? e.clientY : e.clientX)
                        },
                        setVisible: O,
                        onRelease: function(e) {
                            var t;
                            if (!L || !$.current) return;
                            $.current.classList.remove(tx), H.current = !1, I(!1), U.current = new Date;
                            let n = ty($.current, C);
                            if (!ec(e.target, !1) || !n || Number.isNaN(n) || null === V.current) return;
                            let r = U.current.getTime() - V.current.getTime(),
                                o = Y.current - (tw(C) ? e.clientY : e.clientX),
                                a = Math.abs(o) / r;
                            if (a > .05 && (F(!0), setTimeout(() => {
                                    F(!1)
                                }, 200)), c) {
                                en({
                                    draggedDistance: o * ("bottom" === C || "right" === C ? 1 : -1),
                                    closeDrawer: es,
                                    velocity: a,
                                    dismissible: m
                                }), null == l || l(e, !0);
                                return
                            }
                            if ("bottom" === C || "right" === C ? o > 0 : o < 0) {
                                ed(), null == l || l(e, !0);
                                return
                            }
                            if (a > .4 || n >= Math.min(null != (t = $.current.getBoundingClientRect().height) ? t : 0, window.innerHeight) * v) {
                                es(), null == l || l(e, !1);
                                return
                            }
                            null == l || l(e, !0), ed()
                        },
                        onDrag: function(e) {
                            if ($.current && L) {
                                let t = "bottom" === C || "right" === C ? 1 : -1,
                                    n = (Y.current - (tw(C) ? e.clientY : e.clientX)) * t,
                                    r = n > 0,
                                    o = c && !m && !r;
                                if (o && 0 === ee) return;
                                let a = Math.abs(n),
                                    l = document.querySelector("[vaul-drawer-wrapper]"),
                                    s = a / Z.current,
                                    d = ei(a, r);
                                if (null !== d && (s = d), o && s >= 1 || !H.current && !ec(e.target, r)) return;
                                if ($.current.classList.add(tx), H.current = !0, th($.current, {
                                        transition: "none"
                                    }), th(_.current, {
                                        transition: "none"
                                    }), c && eo({
                                        draggedDistance: n
                                    }), r && !c) {
                                    let e = Math.min(-(8 * (Math.log(n + 1) - 2) * 1), 0) * t;
                                    th($.current, {
                                        transform: tw(C) ? "translate3d(0, ".concat(e, "px, 0)") : "translate3d(".concat(e, "px, 0, 0)")
                                    });
                                    return
                                }
                                let f = 1 - s;
                                if ((ea || g && ee === g - 1) && (null == u || u(e, s), th(_.current, {
                                        opacity: "".concat(f),
                                        transition: "none"
                                    }, !0)), l && _.current && i) {
                                    let e = Math.min(el() + s * (1 - el()), 1),
                                        t = 8 - 8 * s,
                                        n = Math.max(0, 14 - 14 * s);
                                    th(l, {
                                        borderRadius: "".concat(t, "px"),
                                        transform: tw(C) ? "scale(".concat(e, ") translate3d(0, ").concat(n, "px, 0)") : "scale(".concat(e, ") translate3d(").concat(n, "px, 0, 0)"),
                                        transition: "none"
                                    }, !0)
                                }
                                if (!c) {
                                    let e = a * t;
                                    th($.current, {
                                        transform: tw(C) ? "translate3d(0, ".concat(e, "px, 0)") : "translate3d(".concat(e, "px, 0, 0)")
                                    })
                                }
                            }
                        },
                        dismissible: m,
                        handleOnly: h,
                        isOpen: T,
                        isDragging: L,
                        shouldFade: ea,
                        closeDrawer: es,
                        onNestedDrag: function(e, t) {
                            if (t < 0) return;
                            let n = tw(C) ? window.innerHeight : window.innerWidth,
                                r = (n - 16) / n,
                                o = r + t * (1 - r),
                                a = -16 + 16 * t;
                            th($.current, {
                                transform: tw(C) ? "scale(".concat(o, ") translate3d(0, ").concat(a, "px, 0)") : "scale(".concat(o, ") translate3d(").concat(a, "px, 0, 0)"),
                                transition: "none"
                            })
                        },
                        onNestedOpenChange: function(e) {
                            let t = e ? (window.innerWidth - 16) / window.innerWidth : 1;
                            K.current && window.clearTimeout(K.current), th($.current, {
                                transition: "transform ".concat(tb.DURATION, "s cubic-bezier(").concat(tb.EASE.join(","), ")"),
                                transform: "scale(".concat(t, ") translate3d(0, ").concat(e ? -16 : 0, "px, 0)")
                            }), !e && $.current && (K.current = setTimeout(() => {
                                let e = ty($.current, C);
                                th($.current, {
                                    transition: "none",
                                    transform: tw(C) ? "translate3d(0, ".concat(e, "px, 0)") : "translate3d(".concat(e, "px, 0, 0)")
                                })
                            }, 500))
                        },
                        onNestedRelease: function(e, t) {
                            let n = tw(C) ? window.innerHeight : window.innerWidth,
                                r = t ? (n - 16) / n : 1,
                                o = t ? -16 : 0;
                            t && th($.current, {
                                transition: "transform ".concat(tb.DURATION, "s cubic-bezier(").concat(tb.EASE.join(","), ")"),
                                transform: tw(C) ? "scale(".concat(r, ") translate3d(0, ").concat(o, "px, 0)") : "scale(".concat(r, ") translate3d(").concat(o, "px, 0, 0)")
                            })
                        },
                        keyboardIsOpen: X,
                        openProp: n,
                        modal: E,
                        snapPointsOffset: er,
                        direction: C
                    }
                }, a))
            }
            let tC = f.forwardRef(function(e, t) {
                let {
                    preventCycle: n = !1,
                    children: r,
                    ...o
                } = e, {
                    visible: a,
                    closeDrawer: i,
                    isDragging: u,
                    snapPoints: l,
                    activeSnapPoint: c,
                    setActiveSnapPoint: s,
                    dismissible: d,
                    handleOnly: v,
                    onPress: p,
                    onDrag: m
                } = e9(), h = f.useRef(null), g = f.useRef(!1);

                function w() {
                    window.clearTimeout(h.current), g.current = !1
                }
                return f.createElement("div", {
                    onClick: function() {
                        if (g.current) {
                            w();
                            return
                        }
                        window.setTimeout(() => {
                            ! function() {
                                if (u || n || g.current) {
                                    w();
                                    return
                                }
                                if (w(), (!l || 0 === l.length) && d || c === l[l.length - 1] && d) {
                                    i();
                                    return
                                }
                                let e = l.findIndex(e => e === c); - 1 !== e && s(l[e + 1])
                            }()
                        }, 120)
                    },
                    onDoubleClick: () => {
                        g.current = !0, i()
                    },
                    onPointerCancel: w,
                    onPointerDown: e => {
                        v && p(e), h.current = window.setTimeout(() => {
                            g.current = !0
                        }, 250)
                    },
                    onPointerMove: e => {
                        v && m(e)
                    },
                    ref: t,
                    "vaul-drawer-visible": a ? "true" : "false",
                    "vaul-handle": "",
                    "aria-hidden": "true",
                    ...o
                }, f.createElement("span", {
                    "vaul-handle-hitarea": "",
                    "aria-hidden": "true"
                }, r))
            });
            tC.displayName = "Drawer.Handle";
            let tM = f.forwardRef(function(e, t) {
                let {
                    children: n,
                    ...r
                } = e, {
                    overlayRef: o,
                    snapPoints: a,
                    onRelease: i,
                    shouldFade: u,
                    isOpen: l,
                    visible: c
                } = e9(), s = tv(t, o), d = a && a.length > 0;
                return f.createElement(eB, {
                    onMouseUp: i,
                    ref: s,
                    "vaul-drawer-visible": c ? "true" : "false",
                    "vaul-overlay": "",
                    "vaul-snap-points": l && d ? "true" : "false",
                    "vaul-snap-points-overlay": l && u ? "true" : "false",
                    ...r
                })
            });
            tM.displayName = "Drawer.Overlay";
            let tN = f.forwardRef(function(e, t) {
                let {
                    onOpenAutoFocus: n,
                    onPointerDownOutside: r,
                    onAnimationEnd: o,
                    style: a,
                    ...i
                } = e, {
                    drawerRef: u,
                    onPress: l,
                    onRelease: c,
                    onDrag: s,
                    dismissible: d,
                    keyboardIsOpen: v,
                    snapPointsOffset: p,
                    visible: m,
                    closeDrawer: h,
                    modal: g,
                    openProp: w,
                    onOpenChange: y,
                    setVisible: b,
                    handleOnly: E,
                    direction: x
                } = e9(), R = tv(t, u), C = f.useRef(null), M = f.useRef(!1), N = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    if (M.current) return !0;
                    let r = Math.abs(e.y),
                        o = Math.abs(e.x),
                        a = o > r,
                        i = ["bottom", "right"].includes(t) ? 1 : -1;
                    if ("left" === t || "right" === t) {
                        if (!(e.x * i < 0) && o >= 0 && o <= n) return a
                    } else if (!(e.y * i < 0) && r >= 0 && r <= n) return !a;
                    return M.current = !0, !0
                };
                return f.useEffect(() => {
                    b(!0)
                }, []), f.createElement(eY, {
                    "vaul-drawer": "",
                    "vaul-drawer-direction": x,
                    "vaul-drawer-visible": m ? "true" : "false",
                    ...i,
                    ref: R,
                    style: p && p.length > 0 ? {
                        "--snap-point-height": "".concat(p[0], "px"),
                        ...a
                    } : a,
                    onOpenAutoFocus: e => {
                        if (n) n(e);
                        else {
                            var t;
                            e.preventDefault(), null == (t = u.current) || t.focus()
                        }
                    },
                    onPointerDown: e => {
                        E || (null == i.onPointerDown || i.onPointerDown.call(i, e), C.current = {
                            x: e.clientX,
                            y: e.clientY
                        }, l(e))
                    },
                    onPointerDownOutside: e => {
                        if (null == r || r(e), !g || e.defaultPrevented) {
                            e.preventDefault();
                            return
                        }
                        v.current && (v.current = !1), e.preventDefault(), null == y || y(!1), d && void 0 === w && h()
                    },
                    onFocusOutside: e => {
                        if (!g) {
                            e.preventDefault();
                            return
                        }
                    },
                    onEscapeKeyDown: e => {
                        if (!g) {
                            e.preventDefault();
                            return
                        }
                    },
                    onPointerMove: e => {
                        if (E || (null == i.onPointerMove || i.onPointerMove.call(i, e), !C.current)) return;
                        let t = e.clientY - C.current.y,
                            n = e.clientX - C.current.x,
                            r = "touch" === e.pointerType ? 10 : 2;
                        N({
                            x: n,
                            y: t
                        }, x, r) ? s(e) : (Math.abs(n) > r || Math.abs(t) > r) && (C.current = null)
                    },
                    onPointerUp: e => {
                        null == i.onPointerUp || i.onPointerUp.call(i, e), C.current = null, M.current = !1, c(e)
                    }
                })
            });
            tN.displayName = "Drawer.Content";
            let tT = {
                Root: tR,
                NestedRoot: function(e) {
                    let {
                        onDrag: t,
                        onOpenChange: n,
                        ...r
                    } = e, {
                        onNestedDrag: o,
                        onNestedOpenChange: a,
                        onNestedRelease: i
                    } = e9();
                    if (!o) throw Error("Drawer.NestedRoot must be placed in another drawer");
                    return f.createElement(tR, {
                        nested: !0,
                        onClose: () => {
                            a(!1)
                        },
                        onDrag: (e, n) => {
                            o(e, n), null == t || t(e, n)
                        },
                        onOpenChange: e => {
                            e && a(e), null == n || n(e)
                        },
                        onRelease: i,
                        ...r
                    })
                },
                Content: tN,
                Handle: tC,
                Overlay: tM,
                Trigger: eW,
                Portal: eV,
                Close: e1,
                Title: eG,
                Description: eQ
            }
        }
    }
]);