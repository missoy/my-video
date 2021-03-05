var interstitialAd = null, onfire = require("../../resource/js/onfire.js"), app = getApp();

Page({
    data: {
        TabCur: 0,
        current: 0,
        scrollLeft: 0,
        initData: !1,
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        height: app.globalData.height,
        ads: app.globalData.ads,
        config: app.globalData.config,
        vodlist: {}
    },
    onPullDownRefresh: function() {
        this.getInitData();
    },
    tabSelect: function(t) {
        this.setData({
            current: t.currentTarget.dataset.index,
            TabCur: t.currentTarget.dataset.id,
            scrollLeft: 60 * (t.currentTarget.dataset.id - 1)
        });
    },
    onLoad: function() {
        var a = this;
        console.log(app.globalData);
        var t = wx.getStorageSync("config");
        this.setData({
            config: t,
            CustomBar: app.globalData.CustomBar
        });
        this.getInitData(), onfire.on("config", function(t) {
            a.setData({
                config: t
            });
        }), setTimeout(function() {
            a.chaPing();
        }, 3e3);
    },
    onShareAppMessage: function(t) {
        return "button" === t.from && console.log(t.target), {
            title: this.config.name + "--免费电影"
        };
    },
    onReady: function() {},
    gotoplay: function(t) {
        console.log(t), wx.navigateTo({
            url: "../play/play?id=" + t.currentTarget.dataset.vid
        });
    },
    gotoitem: function(t) {
        wx.navigateTo({
            url: "../play/play?id=" + t.currentTarget.dataset.vid
        });
    },
    banner_tap: function(t) {
        console.log("banner点击事件");
    },
    getconfig: function(t) {
        var a = this;
        app.util.request({
            url: "entry/wxapp/GetConfig",
            data: {},
            success: function(t) {
                console.log(t), app.globalData.config = t.data.data, a.setData({
                    config: t.data.data
                });
            }
        });
    },
    onReachBottom: function(t) {},
    imgerr: function(t) {},
    inputStr: function(t) {
        console.log(t.detail.value);
        var a = {
            keywords: t.detail.value
        };
        this.setData({
            keyword: t.detail.value
        }), "" != a.keywords ? this.search(a) : this.setData({
            searching: !1
        });
    },
    adError: function(t) {
        console.log(t);
    },
    gosearch: function() {
        wx.navigateTo({
            url: "../search/search"
        });
    },
    chaPing: function() {
        wx.createInterstitialAd && ((interstitialAd = wx.createInterstitialAd({
            adUnitId: this.data.config.ads.insertad
        })).onLoad(function() {
            interstitialAd.show();
        }), interstitialAd.onError(function(t) {
            console.log("onError event emit", t);
        }), interstitialAd.onClose(function(t) {
            console.log("onClose event emit", t);
        }));
    },
    getbanner: function() {
        var e = this;
        app.util.request({
            url: "entry/wxapp/banner",
            data: {},
            success: function(t) {
                if (console.log(t.data.data), t.data.data.forEach(function(t, a) {
                    t.imgurl = e.url_replace(t.imgurl);
                }), 0 < t.data.data.length) e.setData({
                    swiperList: t.data.data
                }); else {
                    var a = e.data.list.slice(0, 10);
                    a.forEach(function(t, a) {
                        t.vid = t.vod_id, t.imgurl = e.url_replace(t.vod_pic);
                    }), e.setData({
                        swiperList: a
                    });
                }
            }
        });
    },
    getv_list: function(t) {
        var s = this;
        app.util.request({
            url: "entry/wxapp/GetVideoList",
            data: {
                page: 1,
                t: this.data.initData.cate[t - 1].type_id
            },
            success: function(t) {
                for (var a in console.log(t), t.data.data) {
                    var e = t.data.data[a].vod_play_url.split("$$$")[0].split("#"), i = [];
                    for (var n in e) i.push(e[n].split("$"));
                    var o = i.length;
                    2 == t.data.data[a].type_id_1 && (t.data.data[a].vod_remarks = "更新至" + o + "集"), 
                    t.data.data[a].vod_pic = s.url_replace(t.data.data[a].vod_pic);
                }
                var r = s.data.vodlist;
                r[s.data.TabCur + ""] = t.data.data, s.setData({
                    vodlist: r
                });
            }
        });
    },
    url_replace: function(e) {
        var i = "";
        return [ [ "pic.china-gif.com", "img.pic-imges.com" ], [ "pic.china-gif.com", "rpg.pic-imges.com" ] ].forEach(function(t, a) {
            i = e.replace(t[0], t[1]);
        }), i;
    },
    getInitData: function() {
        var a = this;
        app.util.request({
            url: "entry/wxapp/index",
            data: {},
            cachetime: "30",
            success: function(t) {
                console.log(t), wx.stopPullDownRefresh(), a.setData({
                    initData: t.data.data
                });
            }
        });
    },
    cardswiper: function(t) {
        var a = t.detail.current, e = 0;
        e = 0 == a ? 0 : this.data.initData.cate[a - 1].type_id, this.setData({
            TabCur: e,
            current: a,
            scrollLeft: 60 * (e - 1)
        }), 0 < a && this.getv_list(a);
    }
});