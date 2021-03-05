var app = getApp();

Page({
    data: {
        searching: !1,
        search_list: [],
        keyword: ""
    },
    onLoad: function(a) {
        wx.getStorageSync("config");
        var t = wx.getStorageSync("ads");
        this.setData({
            ads: t
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    inputStr: function(a) {
        console.log(a.detail.value);
        var t = {
            keywords: a.detail.value
        };
        this.setData({
            keyword: a.detail.value
        }), "" != t.keywords ? this.search(t) : this.setData({
            searching: !1
        });
    },
    searchblur: function(a) {},
    clear: function(a) {
        this.setData({
            keyword: "",
            searching: !1,
            search_list: []
        });
    },
    search: function() {
        var c = this, r = this;
        app.util.request({
            url: "entry/wxapp/Search",
            data: {
                key: r.data.keyword
            },
            success: function(a) {
                for (var t in console.log(a), a.data.data) {
                    var e = a.data.data[t].vod_play_url.split("#"), n = [];
                    for (var o in e) n.push(e[o].split("$"));
                    var i = n.length;
                    2 == a.data.data[t].type_id_1 && (a.data.data[t].vod_remarks = "更新至" + i + "集"), 
                    a.data.data[t].vod_pic = c.url_replace(a.data.data[t].vod_pic);
                }
                r.setData({
                    searching: !0,
                    search_list: a.data.data
                });
            }
        });
    },
    gotoplay: function(a) {
        console.log(a), wx.navigateTo({
            url: "../play/play?id=" + a.currentTarget.dataset.vid
        });
    },
    url_replace: function(e) {
        var n = "";
        return [ [ "pic.china-gif.com", "img.pic-imges.com" ], [ "pic.china-gif.com", "rpg.pic-imges.com" ] ].forEach(function(a, t) {
            n = e.replace(a[0], a[1]);
        }), n;
    }
});