var app = getApp();

Page({
    data: {
        modalName: !1
    },
    onLoad: function(t) {
        var o = wx.getStorageSync("ads"), n = wx.getStorageSync("config");
        this.setData({
            ads: o,
            config: n
        }), this.updateuserinfo(), this.getRecordList();
    },
    onReady: function() {},
    onShow: function() {
        this.getRecordList();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    taplogin: function() {
        this.showlogin();
    },
    authlogin: function(t) {
        var o = this;
        console.log(t), app.util.getUserInfo(function(t) {
            console.log(t), o.updateuserinfo();
        }, t.detail);
    },
    updateuserinfo: function() {
        var t = wx.getStorageSync("userInfo");
        t ? (this.setData({
            userinfo: t
        }), this.getRecordList()) : this.showlogin();
    },
    showlogin: function() {
        this.setData({
            modalName: "DialogModal1"
        });
    },
    hideModal: function() {
        this.setData({
            modalName: !1
        });
    },
    about: function() {
        wx.navigateTo({
            url: "../about/about"
        });
    },
    gotoplay: function(t) {
        console.log(t), wx.navigateTo({
            url: "../play/play?id=" + t.currentTarget.dataset.vid
        });
    },
    getRecordList: function() {
        var o = this;
        app.util.request({
            url: "entry/wxapp/recordList",
            data: {},
            success: function(t) {
                console.log(t), o.setData({
                    recordlist: t.data.data
                });
            }
        });
    }
});