"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
var fetchHupuImages = function (offset) {
    return http_1.httpGet('https://www.popochiu.com/hupu/getMobileImages', {
        offset: offset
    });
};
exports.fetchHupuImages = fetchHupuImages;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVwdS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh1cHUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFFZTtBQUNmLElBQU0sZUFBZSxHQUFHLFVBQUMsTUFBYztJQUNyQyxPQUFPLGNBQU8sQ0FBQywrQ0FBK0MsRUFBRTtRQUM5RCxNQUFNLFFBQUE7S0FDUCxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFHQywwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuaW1wb3J0IHtcclxuICBodHRwR2V0IFxyXG59IGZyb20gJy4vaHR0cCdcclxuY29uc3QgZmV0Y2hIdXB1SW1hZ2VzID0gKG9mZnNldDogbnVtYmVyKSA9PntcclxuICByZXR1cm4gaHR0cEdldCgnaHR0cHM6Ly93d3cucG9wb2NoaXUuY29tL2h1cHUvZ2V0TW9iaWxlSW1hZ2VzJywge1xyXG4gICAgb2Zmc2V0XHJcbiAgfSkgXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZmV0Y2hIdXB1SW1hZ2VzXHJcbn0iXX0=