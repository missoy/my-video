var app = getApp();

Page({
    data: {
        height: app.globalData.height,
        page: 1,
        t: 0,
        is_check: 1
    },
    onLoad: function(t) {
        var a = wx.getStorageSync("ads"), e = wx.getStorageSync("config");
        this.setData({
            ads: a,
            config: e,
            is_check: e.check
        }), this.get_category();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.setData({
            page: 1
        });
        var t = this.data.t;
        this.get_list(t);
    },
    onReachBottom: function() {
        this.get_list(this.data.t, this.data.page + 1);
    },
    onShareAppMessage: function() {},
    gosearch: function() {
        wx.navigateTo({
            url: "../search/search"
        });
    },
    tapcategory: function(t) {
        this.setData({
            t: t.currentTarget.dataset.t,
            page: 1
        }), this.get_list(t.currentTarget.dataset.t);
    },
    get_category: function() {
        var a = this;
        app.util.request({
            url: "entry/wxapp/Category",
            data: {},
            cachetime: "30",
            success: function(t) {
                console.log(t), a.setData({
                    categorylist: t.data.data
                }), a.get_list(0);
            }
        });
    },
    imgerr: function(t) {
        console.log(t);
        var a = this.data.list;
        a[t.currentTarget.dataset.index].vod_pic = "/sg_movie/resource/img/imgerr.png", 
        this.setData({
            list: a
        });
    },
    get_list: function(t) {
        var i = this, o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.data.page, c = this;
        app.util.request({
            url: "entry/wxapp/GetVideoList",
            data: {
                page: o,
                t: t
            },
            success: function(t) {
                for (var a in console.log(t), t.data.data) t.data.data[a].vod_pic = i.url_replace(t.data.data[a].vod_pic);
                if (1 < o) {
                    var e = i.data.list;
                    e = e.concat(t.data.data), i.setData({
                        list: e,
                        page: o
                    });
                } else console.log(t), wx.stopPullDownRefresh(), c.setData({
                    list: t.data.data
                });
            }
        });
    },
    topaly: function(t) {
        console.log(t), wx.navigateTo({
            url: "../play/play?id=" + t.currentTarget.dataset.vid
        });
    },
    url_replace: function(e) {
        var i = "";
        return [ [ "pic.china-gif.com", "img.pic-imges.com" ], [ "pic.china-gif.com", "rpg.pic-imges.com" ] ].forEach(function(t, a) {
            i = e.replace(t[0], t[1]);
        }), i;
    }
});