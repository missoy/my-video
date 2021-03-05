function _defineProperty(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var app = getApp(), rewardedVideoAd = null, videoContext = null, onfire = require("../../resource/js/onfire.js");

Page({
    data: {
        is_check: 1,
        line: 0,
        adcanPlay: !1,
        is_share: !1,
        excitingSwitch: !1,
        adrecord: [ !1, !1 ],
        numstr: [ "一", "二", "三", "四", "五", "六", "七", "八", "九", "十" ],
        ok: !1
    },
    onLoad: function(a) {
        var t = this;
        console.log(a), this.setData({
            id: a.id,
            is_share: !!a.is_share && a.is_share
        });
        var e = wx.getStorageSync("config");
        console.log(e), this.setData({
            config: e
        }), onfire.on("config", function(a) {
            t.setData({
                config: a
            });
        }), this.getvideo(a.id), this.excitingAd();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(a) {
        var t = this, e = t.data.id;
        return {
            title: t.data.video.vod_name,
            path: "/sg_movie/pages/play/play?id=" + e + "&is_share=1",
            imageUrl: t.data.video.vod_pic
        };
    },
    getvideo: function(a) {
        var r = this, c = this;
        app.util.request({
            url: "entry/wxapp/GetVideo",
            data: {
                id: a
            },
            success: function(a) {
                console.log(a);
                var t = [], e = a.data.data.vod_play_url.split("$$$");
                for (var i in e) {
                    var o = [], d = e[i].split("#");
                    for (var n in d) {
                        var s = {
                            name: d[n].split("$")[0],
                            url: d[n].split("$")[1]
                        };
                        o.push(s);
                    }
                    t.push(o);
                }
                2 == a.data.data.type_id_1 && (a.data.data.vod_remarks = "更新至" + t[0].length + "集"), 
                a.data.data.vod_pic = r.url_replace(a.data.data.vod_pic), c.setData({
                    video: a.data.data,
                    urllist: [],
                    videoline: t,
                    play_url: t[0][0].url,
                    index: 0
                }), videoContext = wx.createVideoContext("myVideo"), r.updateRecord(r.data.index, !1), 
                r.record(r.data.video.vod_id);
            }
        });
    },
    excitingAd: function() {
        var t = this;
        console.log("创建广告"), wx.createRewardedVideoAd && ((rewardedVideoAd = wx.createRewardedVideoAd({
            adUnitId: this.data.config.ads.excitead
        })).onLoad(function() {
            console.log("广告加载成功"), t.setData({
                adcanPlay: !0
            });
        }), rewardedVideoAd.onError(function(a) {
            console.log("onError event emit", a), t.setData({
                adcanPlay: !1
            });
        }), rewardedVideoAd.onClose(function(a) {
            a && a.isEnded ? (t.data.isCard && t.gojiexi(), 1 == t.data.config.jumpmode && (t.setData({
                ok: !0
            }), t.goplay()), t.updateRecord(t.data.index, !0, !0), videoContext.play()) : (t.updateRecord(t.data.index, !t.data.config.excit, !0), 
            videoContext.pause());
        }));
    },
    onplay: function() {
        var t = this;
        this.data.config.ads.excitead && this.data.adcanPlay && (console.log(this.data.adrecord[0]), 
        console.log(this.data.index), console.log(this.data.adrecord[1]), this.data.adrecord[0] == this.data.index && this.data.adrecord[1] ? console.log("本集已观看过广告") : (console.log("需要观看广告"), 
        videoContext.pause(), this.data.adcanPlay && wx.showModal({
            title: "观看完广告即可播放哦",
            content: "",
            success: function(a) {
                console.log(a), a.confirm && t.showAd();
            }
        })));
    },
    playerr: function() {
        app.util.message("播放错误，请切换资源");
    },
    canplay: function() {
        app.util.message("视频加载成功"), videoContext.play();
    },
    paly: function() {},
    set_url: function(a) {
        console.log(a), this.setData({
            play_url: a.currentTarget.dataset.url,
            index: a.currentTarget.dataset.index,
            line: a.currentTarget.dataset.line
        }), this.updateRecord(this.data.index, !1);
    },
    imgerr: function(a) {
        console.log(a);
        var t = this.data.data;
        t.pic = "../../img/imgerr.jpg", this.setData({
            data: t
        });
    },
    playend: function(a) {
        1 == this.data.urllist.length ? wx.showToast({
            title: "播放完毕"
        }) : (wx.showToast({
            title: "自动播放下一集"
        }), this.setData({
            play_url: this.data.urllist[this.data.index + 1][1],
            index: this.data.index + 1
        }), this.updateRecord(this.data.index, !1));
    },
    showAd: function() {
        rewardedVideoAd.show();
    },
    updateRecord: function(a, t) {
        2 < arguments.length && void 0 !== arguments[2] && arguments[2] ? this.setData({
            adrecord: [ a, t || !1 ]
        }) : a != this.data.adrecord[0] && this.setData({
            adrecord: [ a, t || !1 ]
        }), this.data.isCard && (videoContext.pause(), this.adcheck());
    },
    record: function(a) {
        app.util.request({
            url: "entry/wxapp/addrecord",
            data: {
                vid: a
            },
            success: function(a) {
                console.log(a);
            }
        });
    },
    url_replace: function(e) {
        var i = "";
        return [ [ "pic.china-gif.com", "img.pic-imges.com" ], [ "pic.china-gif.com", "rpg.pic-imges.com" ] ].forEach(function(a, t) {
            i = e.replace(a[0], a[1]);
        }), i;
    },
    goplay: function() {
        this.areyouok() ? this.jump() : this.data.adcanPlay && this.showAd();
    },
    isCard: function(a) {
        this.setData({
            isCard: a.detail.value
        }), 0 == this.data.index && this.data.isCard && (videoContext.pause(), this.adcheck());
    },
    adcheck: function() {
        var t = this;
        this.data.config.ads.excitead && this.data.adcanPlay ? (console.log(this.data.adrecord[0]), 
        console.log(this.data.index), console.log(this.data.adrecord[1]), this.data.adrecord[0] == this.data.index && this.data.adrecord[1] ? (console.log("本集已观看过广告"), 
        this.gojiexi()) : this.data.adcanPlay ? wx.showModal({
            title: "观看完广告即可播放哦",
            content: "",
            success: function(a) {
                console.log(a), a.confirm && t.showAd();
            }
        }) : this.gojiexi()) : this.gojiexi();
    },
    gojiexi: function() {
        videoContext.pause();
        var a = {
            host: "https://www.coolcoolcloud.com/m3u8.php?url=",
            url: this.data.play_url
        };
        console.log("解析触发"), wx.navigateTo({
            url: "/sg_movie/pages/web/web?query=" + encodeURIComponent(JSON.stringify(a))
        });
    },
    areyouok: function() {
        return !this.data.config.ads.excitead || (!this.data.adcanPlay || !!this.data.ok);
    },
    jump: function() {
        var a, t = this.data.video;
        t.config = this.data.config, wx.navigateToMiniProgram((_defineProperty(a = {
            appId: this.data.config.jumpappid,
            path: "sg_nav/pages/play/play",
            envVersion: "develop",
            extraData: {
                data: t
            }
        }, "envVersion", "develop"), _defineProperty(a, "success", function(a) {}), a));
    }
});