var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n;
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
};

!function(n, o) {
    "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = o() : n.onfire = o();
}("undefined" != typeof window ? window : void 0, function() {
    var f = {}, i = 0, r = "string", u = "function", c = Function.call.bind(Object.hasOwnProperty), e = Function.call.bind(Array.prototype.slice);
    function t(n, o, e, t) {
        if ((void 0 === n ? "undefined" : _typeof(n)) !== r || (void 0 === o ? "undefined" : _typeof(o)) !== u) throw new Error("args: " + r + ", " + u);
        return c(f, n) || (f[n] = {}), f[n][++i] = [ o, e, t ], [ n, i ];
    }
    function d(n, o) {
        for (var e in n) c(n, e) && o(e, n[e]);
    }
    function y(e, t) {
        c(f, e) && d(f[e], function(n, o) {
            o[0].apply(o[2], t), o[1] && delete f[e][n];
        });
    }
    return {
        on: function(n, o, e) {
            return t(n, o, 0, e);
        },
        one: function(n, o, e) {
            return t(n, o, 1, e);
        },
        un: function(t) {
            var n, o, i = !1, e = void 0 === t ? "undefined" : _typeof(t);
            return e === r ? !!c(f, t) && (delete f[t], !0) : "object" === e ? (n = t[0], o = t[1], 
            !(!c(f, n) || !c(f[n], o) || (delete f[n][o], 0))) : e !== u || (d(f, function(e, n) {
                d(n, function(n, o) {
                    o[0] === t && (delete f[e][n], i = !0);
                });
            }), i);
        },
        fire: function(n) {
            var o = e(arguments, 1);
            setTimeout(function() {
                y(n, o);
            });
        },
        fireSync: function(n) {
            y(n, e(arguments, 1));
        },
        clear: function() {
            f = {};
        }
    };
});