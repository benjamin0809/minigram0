"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var hupu_1 = require("../../utils/hupu");
Page({
    data: {
        title: 'hupu',
        id: 1,
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500,
        offset: 0,
        files: []
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wx.showLoading({ title: '拼命加载中...' });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4, hupu_1.fetchHupuImages(this.data.offset)];
                    case 2:
                        res = _a.sent();
                        data = res['data'] || [];
                        this.setData({ "files": data });
                        return [3, 5];
                    case 3:
                        e_1 = _a.sent();
                        wx.showToast({
                            title: "出错了",
                            icon: 'success',
                            duration: 2000
                        });
                        return [3, 5];
                    case 4:
                        wx.hideLoading();
                        return [7];
                    case 5: return [2];
                }
            });
        });
    },
    loadmore: function () {
        var _this = this;
        hupu_1.fetchHupuImages(this.data.offset).then(function (res) {
            _this.setData({
                files: res['data'] || []
            });
        });
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
        console.log("onPullDownRefresh");
    },
    onReachBottom: function () {
        console.log("onReachBottom");
    },
    onShareAppMessage: function () {
        return {
            title: this.data.title,
            desc: this.data.title,
            path: '/pages/item?id=' + this.data.id
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVwdS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh1cHUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FFeUI7QUFFekIsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLE1BQU07UUFDYixFQUFFLEVBQUUsQ0FBQztRQUNMLFVBQVUsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO1FBQ3pELGFBQWEsRUFBRSxJQUFJO1FBQ25CLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBTSxFQUFFLENBQUM7UUFDVCxLQUFLLEVBQUUsRUFBRTtLQUNWO0lBS0ssTUFBTSxFQUFaOzs7Ozs7d0JBQ0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDOzs7O3dCQUVuQixXQUFNLHNCQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQWxELEdBQUcsR0FBUSxTQUF1Qzt3QkFDbEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQy9CLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs7Ozt3QkFFL0IsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsS0FBSzs0QkFDWixJQUFJLEVBQUUsU0FBUzs0QkFDZixRQUFRLEVBQUUsSUFBSTt5QkFDZixDQUFDLENBQUE7Ozt3QkFFSixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7Ozs7OztLQUVwQjtJQUVELFFBQVEsRUFBUjtRQUFBLGlCQU9DO1FBTkMsc0JBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFFOUMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7YUFDekIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBSUQsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUtELGFBQWE7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFLRCxpQkFBaUI7UUFDZixPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3JCLElBQUksRUFBRSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7U0FDdkMsQ0FBQTtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGZldGNoSHVwdUltYWdlc1xyXG59IGZyb20gJy4uLy4uL3V0aWxzL2h1cHUnXHJcblxyXG5QYWdlKHtcclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJ2h1cHUnLFxyXG4gICAgaWQ6IDEsXHJcbiAgICBiYWNrZ3JvdW5kOiBbJ2RlbW8tdGV4dC0xJywgJ2RlbW8tdGV4dC0yJywgJ2RlbW8tdGV4dC0zJ10sXHJcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgaW50ZXJ2YWw6IDIwMDAsXHJcbiAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgb2Zmc2V0OiAwLFxyXG4gICAgZmlsZXM6IFtdXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICB3eC5zaG93TG9hZGluZyh7IHRpdGxlOiAn5ou85ZG95Yqg6L295LitLi4uJyB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlczogYW55ID0gYXdhaXQgZmV0Y2hIdXB1SW1hZ2VzKHRoaXMuZGF0YS5vZmZzZXQpXHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXNbJ2RhdGEnXSB8fCBbXTtcclxuICAgICAgdGhpcy5zZXREYXRhISh7IFwiZmlsZXNcIjogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6IFwi5Ye66ZSZ5LqGXCIsXHJcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgfSBcclxuICB9LFxyXG5cclxuICBsb2FkbW9yZSgpIHtcclxuICAgIGZldGNoSHVwdUltYWdlcyh0aGlzLmRhdGEub2Zmc2V0KS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZmlsZXM6IHJlc1snZGF0YSddIHx8IFtdXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5KCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9uUHVsbERvd25SZWZyZXNoXCIpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwib25SZWFjaEJvdHRvbVwiKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IHRoaXMuZGF0YS50aXRsZSxcclxuICAgICAgZGVzYzogdGhpcy5kYXRhLnRpdGxlLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL2l0ZW0/aWQ9JyArIHRoaXMuZGF0YS5pZFxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=