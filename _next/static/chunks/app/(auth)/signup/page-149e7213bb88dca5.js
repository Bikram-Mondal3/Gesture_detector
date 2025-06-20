(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [129, 665], {
        2810: function(e, n, t) {
            Promise.resolve().then(t.t.bind(t, 3403, 23)), Promise.resolve().then(t.bind(t, 5210))
        },
        5210: function(e, n, t) {
            "use strict";
            t.d(n, {
                Label: function() {
                    return s
                }
            });
            var r = t(7949),
                i = t(6265),
                a = t(1273),
                o = t(9e3),
                u = t(9290);
            let l = (0, o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                s = i.forwardRef((e, n) => {
                    let {
                        className: t,
                        ...i
                    } = e;
                    return (0, r.jsx)(a.f, {
                        ref: n,
                        className: (0, u.cn)(l(), t),
                        ...i
                    })
                });
            s.displayName = a.f.displayName
        },
        1273: function(e, n, t) {
            "use strict";
            t.d(n, {
                f: function() {
                    return u
                }
            });
            var r = t(6265),
                i = t(6248),
                a = t(7949),
                o = r.forwardRef((e, n) => (0, a.jsx)(i.WV.label, { ...e,
                    ref: n,
                    onMouseDown: n => {
                        var t;
                        n.target.closest("button, input, select, textarea") || (null === (t = e.onMouseDown) || void 0 === t || t.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault())
                    }
                }));
            o.displayName = "Label";
            var u = o
        },
        6248: function(e, n, t) {
            "use strict";
            t.d(n, {
                WV: function() {
                    return u
                },
                jH: function() {
                    return l
                }
            });
            var r = t(6265),
                i = t(2357),
                a = t(8759),
                o = t(7949),
                u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, n) => {
                    let t = r.forwardRef((e, t) => {
                        let {
                            asChild: r,
                            ...i
                        } = e, u = r ? a.g7 : n;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, o.jsx)(u, { ...i,
                            ref: t
                        })
                    });
                    return t.displayName = `Primitive.${n}`, { ...e,
                        [n]: t
                    }
                }, {});

            function l(e, n) {
                e && i.flushSync(() => e.dispatchEvent(n))
            }
        }
    },
    function(e) {
        e.O(0, [548, 188, 156, 403, 649, 290, 47, 623, 744], function() {
            return e(e.s = 2810)
        }), _N_E = e.O()
    }
]);