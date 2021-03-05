var app = getApp();

Page({
    data: {},
    onLoad: function(n) {
        this.getAbout();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getAbout: function() {
        var t = this;
        app.util.request({
            url: "entry/wxapp/about",
            data: {},
            success: function(n) {
                console.log(n), t.setData({
                    about: n.data.data
                });
            }
        });
    }
});