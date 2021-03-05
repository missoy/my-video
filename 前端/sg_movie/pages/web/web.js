Page({
    data: {
        query: {}
    },
    onLoad: function(n) {
        console.log(n.query), this.setData({
            query: JSON.parse(decodeURIComponent(n.query))
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});