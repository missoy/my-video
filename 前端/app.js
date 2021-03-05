var util = require("we7/resource/js/util.js"), onfire = require("sg_movie/resource/js/onfire.js"), app = getApp();

App({
    onLaunch: function(t) {
        var o = this;
        wx.getSystemInfo({
            success: function(t) {
                o.globalData.StatusBar = t.statusBarHeight;
                var e = wx.getMenuButtonBoundingClientRect();
                e ? (o.globalData.Custom = e, o.globalData.CustomBar = e.bottom + e.top - t.statusBarHeight) : o.globalData.CustomBar = t.statusBarHeight + 50;
            }
        }), getApp = function() {
            return o;
        }, this.util.request({
            url: "entry/wxapp/GetConfig",
            data: {
                m: "sg_movie"
            },
            success: function(t) {
                console.log(t), wx.setStorageSync("config", t.data.data), onfire.fire("config", t.data.data);
            }
        });
    },
    onShow: function(t) {},
    onHide: function() {},
    onError: function(t) {
        console.log(t);
    },
    util: util,
    userInfo: {
        sessionid: null
    },
    siteInfo: require("siteinfo.js"),
    globalData: {
        height: 0,
        ColorList: [ {
            title: "嫣红",
            name: "red",
            color: "#e54d42"
        }, {
            title: "桔橙",
            name: "orange",
            color: "#f37b1d"
        }, {
            title: "明黄",
            name: "yellow",
            color: "#fbbd08"
        }, {
            title: "橄榄",
            name: "olive",
            color: "#8dc63f"
        }, {
            title: "森绿",
            name: "green",
            color: "#39b54a"
        }, {
            title: "天青",
            name: "cyan",
            color: "#1cbbb4"
        }, {
            title: "海蓝",
            name: "blue",
            color: "#0081ff"
        }, {
            title: "姹紫",
            name: "purple",
            color: "#6739b6"
        }, {
            title: "木槿",
            name: "mauve",
            color: "#9c26b0"
        }, {
            title: "桃粉",
            name: "pink",
            color: "#e03997"
        }, {
            title: "棕褐",
            name: "brown",
            color: "#a5673f"
        }, {
            title: "玄灰",
            name: "grey",
            color: "#8799a3"
        }, {
            title: "草灰",
            name: "gray",
            color: "#aaaaaa"
        }, {
            title: "墨黑",
            name: "black",
            color: "#333333"
        }, {
            title: "雅白",
            name: "white",
            color: "#ffffff"
        } ]
    }
});