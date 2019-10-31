"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = function (requestMethod, url, data) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            data: data,
            method: requestMethod,
            header: {
                'content-type': 'application/json'
            },
            dataType: 'json',
            success: resolve,
            fail: reject,
            complete: requestComplete
        });
    });
};
var httpGet = function (url, data) {
    return request('GET', url, data);
};
exports.httpGet = httpGet;
var httpPost = function (url, data) {
    return request('POST', url, data);
};
exports.httpPost = httpPost;
var requestComplete = function () {
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLE9BQU8sR0FBRyxVQUFDLGFBQTZCLEVBQUUsR0FBVyxFQUFFLElBQVM7SUFDcEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVksRUFBRSxNQUFXO1FBQzNDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQUUsYUFBYTtZQUNyQixNQUFNLEVBQUU7Z0JBQ04sY0FBYyxFQUFFLGtCQUFrQjthQUNuQztZQUNELFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLGVBQWU7U0FDMUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFFRCxJQUFNLE9BQU8sR0FBRyxVQUFDLEdBQVcsRUFBRSxJQUFTO0lBQ3JDLE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDbEMsQ0FBQyxDQUFBO0FBWUMsMEJBQU87QUFWVCxJQUFNLFFBQVEsR0FBRyxVQUFDLEdBQVcsRUFBRSxJQUFTO0lBQ3RDLE9BQU8sT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDbkMsQ0FBQyxDQUFBO0FBU0MsNEJBQVE7QUFOVixJQUFNLGVBQWUsR0FBRztBQUV4QixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0ID0gKHJlcXVlc3RNZXRob2Q6ICdHRVQnIHwgJ1BPU1QnLCB1cmw6IHN0cmluZywgZGF0YTogYW55KSA9PntcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+e1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybCwgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcclxuICAgICAgZGF0YSxcclxuICAgICAgbWV0aG9kOiByZXF1ZXN0TWV0aG9kLFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICBmYWlsOiByZWplY3QsXHJcbiAgICAgIGNvbXBsZXRlOiByZXF1ZXN0Q29tcGxldGVcclxuICAgIH0pIFxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGh0dHBHZXQgPSAodXJsOiBzdHJpbmcsIGRhdGE6IGFueSkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCwgZGF0YSlcclxufVxyXG5cclxuY29uc3QgaHR0cFBvc3QgPSAodXJsOiBzdHJpbmcsIGRhdGE6IGFueSkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3QoJ1BPU1QnLCB1cmwsIGRhdGEpXHJcbn1cclxuXHJcbi8vIOivt+axguWujOaIkOS6i+S7tlxyXG5jb25zdCByZXF1ZXN0Q29tcGxldGUgPSAoKSA9PiB7XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGh0dHBHZXQsXHJcbiAgaHR0cFBvc3RcclxufSJdfQ==