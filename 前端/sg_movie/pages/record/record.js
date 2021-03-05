var app = getApp();

Page({
    data: {},
    onLoad: function(n) {
        this.getRecordList();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getRecordList: function() {
        var t = this;
        app.util.request({
            url: "entry/wxapp/recordList",
            data: {},
            success: function(n) {
                console.log(n), t.setData({
                    recordlist: n.data.data
                });
            }
        });
    }
});