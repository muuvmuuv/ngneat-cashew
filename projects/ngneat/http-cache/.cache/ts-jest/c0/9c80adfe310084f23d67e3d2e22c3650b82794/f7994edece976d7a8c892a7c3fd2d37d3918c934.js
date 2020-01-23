"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var httpCacheConfig_1 = require("./httpCacheConfig");
var httpCacheStorage_1 = require("./httpCacheStorage");
var ttlManager_1 = require("./ttlManager");
var httpCacheGuard_1 = require("./httpCacheGuard");
var requestsQueue_1 = require("./requestsQueue");
var cacheBucket_1 = require("./cacheBucket");
var HttpCacheManager = /** @class */ (function () {
    function HttpCacheManager(queue, storage, guard, ttlManager, config) {
        this.queue = queue;
        this.storage = storage;
        this.guard = guard;
        this.ttlManager = ttlManager;
        this.config = config;
    }
    HttpCacheManager.prototype.validate = function (key) {
        var has = this.storage.has(key);
        var isValid = this.ttlManager.isValid(key);
        if (has && isValid)
            return true;
        this.storage.delete(key);
        return false;
    };
    HttpCacheManager.prototype.get = function (key) {
        return this.storage.get(key);
    };
    HttpCacheManager.prototype.has = function (key) {
        return this.storage.has(key);
    };
    HttpCacheManager.prototype.add = function (key, body, _a) {
        var _b = _a === void 0 ? {} : _a, ttl = _b.ttl, bucket = _b.bucket;
        var response = body;
        if (!(body instanceof http_1.HttpResponse)) {
            response = new http_1.HttpResponse({
                body: body,
                status: 200,
                url: key
            });
        }
        this._set(key, response, ttl);
        bucket && bucket.add(key);
    };
    HttpCacheManager.prototype.delete = function (key) {
        var _this = this;
        if (key instanceof cacheBucket_1.CacheBucket) {
            key.forEach(function (value) { return _this.delete(value); });
            key.clear();
            return;
        }
        this.storage.delete(key);
        this.ttlManager.delete(key);
    };
    //TODO: add types
    HttpCacheManager.prototype._isCacheable = function (canActivate, cache) {
        var strategy = this.config.strategy;
        if (strategy === 'explicit') {
            return cache;
        }
        if (canActivate && strategy === 'implicit') {
            return cache !== false;
        }
        return false;
    };
    HttpCacheManager.prototype._set = function (key, response, ttl) {
        this.storage.set(key, response);
        this.ttlManager.set(key, ttl);
        //TODO: I would move it out to the interceptor
        this.queue.delete(key);
    };
    HttpCacheManager.prototype._canActivate = function (request) {
        return this.guard.canActivate(request);
    };
    HttpCacheManager = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(4, core_1.Inject(httpCacheConfig_1.HTTP_CACHE_CONFIG)),
        tslib_1.__metadata("design:paramtypes", [requestsQueue_1.RequestsQueue,
            httpCacheStorage_1.HttpCacheStorage,
            httpCacheGuard_1.HttpCacheGuard,
            ttlManager_1.TTLManager, Object])
    ], HttpCacheManager);
    return HttpCacheManager;
}());
exports.HttpCacheManager = HttpCacheManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFxJdGF5XFxwcm9qZWN0c1xcb3BlbnNvdXJjZXNcXGh0dHAtY2FjaGVcXHByb2plY3RzXFxuZ25lYXRcXGh0dHAtY2FjaGVcXHNyY1xcbGliXFxodHRwQ2FjaGVNYW5hZ2VyLnNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQW9EO0FBQ3BELHNDQUFtRDtBQUNuRCxxREFBdUU7QUFDdkUsdURBQXNEO0FBQ3RELDJDQUEwQztBQUMxQyxtREFBa0Q7QUFDbEQsaURBQWdEO0FBRWhELDZDQUE0QztBQUc1QztJQUNFLDBCQUNVLEtBQW9CLEVBQ3BCLE9BQXlCLEVBQ3pCLEtBQXFCLEVBQ3JCLFVBQXNCLEVBQ0ssTUFBdUI7UUFKbEQsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ0ssV0FBTSxHQUFOLE1BQU0sQ0FBaUI7SUFDekQsQ0FBQztJQUVKLG1DQUFRLEdBQVIsVUFBUyxHQUFXO1FBQ2xCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLElBQUksR0FBRyxJQUFJLE9BQU87WUFBRSxPQUFPLElBQUksQ0FBQztRQUVoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCw4QkFBRyxHQUFILFVBQUksR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDhCQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsOEJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxJQUE2QixFQUFFLEVBQTREO1lBQTVELDRCQUE0RCxFQUExRCxZQUFHLEVBQUUsa0JBQU07UUFDM0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXBCLElBQUksQ0FBQyxDQUFDLElBQUksWUFBWSxtQkFBWSxDQUFDLEVBQUU7WUFDbkMsUUFBUSxHQUFHLElBQUksbUJBQVksQ0FBQztnQkFDMUIsSUFBSSxNQUFBO2dCQUNKLE1BQU0sRUFBRSxHQUFHO2dCQUNYLEdBQUcsRUFBRSxHQUFHO2FBQ1QsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUIsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxHQUFtQztRQUExQyxpQkFTQztRQVJDLElBQUksR0FBRyxZQUFZLHlCQUFXLEVBQUU7WUFDOUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUN6QyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLHVDQUFZLEdBQVosVUFBYSxXQUFvQixFQUFFLEtBQVU7UUFDM0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQzNCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLFdBQVcsSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQzFDLE9BQU8sS0FBSyxLQUFLLEtBQUssQ0FBQztTQUN4QjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELCtCQUFJLEdBQUosVUFBSyxHQUFXLEVBQUUsUUFBMkIsRUFBRSxHQUFXO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUIsOENBQThDO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsT0FBeUI7UUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBM0VVLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO1FBT1IsbUJBQUEsYUFBTSxDQUFDLG1DQUFpQixDQUFDLENBQUE7aURBSlgsNkJBQWE7WUFDWCxtQ0FBZ0I7WUFDbEIsK0JBQWM7WUFDVCx1QkFBVTtPQUxyQixnQkFBZ0IsQ0E0RTVCO0lBQUQsdUJBQUM7Q0FBQSxBQTVFRCxJQTRFQztBQTVFWSw0Q0FBZ0IiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxJdGF5XFxwcm9qZWN0c1xcb3BlbnNvdXJjZXNcXGh0dHAtY2FjaGVcXHByb2plY3RzXFxuZ25lYXRcXGh0dHAtY2FjaGVcXHNyY1xcbGliXFxodHRwQ2FjaGVNYW5hZ2VyLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX0NBQ0hFX0NPTkZJRywgSHR0cENhY2hlQ29uZmlnIH0gZnJvbSAnLi9odHRwQ2FjaGVDb25maWcnO1xuaW1wb3J0IHsgSHR0cENhY2hlU3RvcmFnZSB9IGZyb20gJy4vaHR0cENhY2hlU3RvcmFnZSc7XG5pbXBvcnQgeyBUVExNYW5hZ2VyIH0gZnJvbSAnLi90dGxNYW5hZ2VyJztcbmltcG9ydCB7IEh0dHBDYWNoZUd1YXJkIH0gZnJvbSAnLi9odHRwQ2FjaGVHdWFyZCc7XG5pbXBvcnQgeyBSZXF1ZXN0c1F1ZXVlIH0gZnJvbSAnLi9yZXF1ZXN0c1F1ZXVlJztcbmltcG9ydCB7IEh0dHBDYWNoZVJlcXVlc3QgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IENhY2hlQnVja2V0IH0gZnJvbSAnLi9jYWNoZUJ1Y2tldCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwQ2FjaGVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBxdWV1ZTogUmVxdWVzdHNRdWV1ZSxcbiAgICBwcml2YXRlIHN0b3JhZ2U6IEh0dHBDYWNoZVN0b3JhZ2UsXG4gICAgcHJpdmF0ZSBndWFyZDogSHR0cENhY2hlR3VhcmQsXG4gICAgcHJpdmF0ZSB0dGxNYW5hZ2VyOiBUVExNYW5hZ2VyLFxuICAgIEBJbmplY3QoSFRUUF9DQUNIRV9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBIdHRwQ2FjaGVDb25maWdcbiAgKSB7fVxuXG4gIHZhbGlkYXRlKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgaGFzID0gdGhpcy5zdG9yYWdlLmhhcyhrZXkpO1xuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnR0bE1hbmFnZXIuaXNWYWxpZChrZXkpO1xuICAgIGlmIChoYXMgJiYgaXNWYWxpZCkgcmV0dXJuIHRydWU7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZGVsZXRlKGtleSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQoa2V5KTtcbiAgfVxuXG4gIGhhcyhrZXk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuaGFzKGtleSk7XG4gIH1cblxuICBhZGQoa2V5OiBzdHJpbmcsIGJvZHk6IEh0dHBSZXNwb25zZTxhbnk+IHwgYW55LCB7IHR0bCwgYnVja2V0IH06IHsgdHRsPzogbnVtYmVyOyBidWNrZXQ/OiBDYWNoZUJ1Y2tldCB9ID0ge30pIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBib2R5O1xuXG4gICAgaWYgKCEoYm9keSBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkpIHtcbiAgICAgIHJlc3BvbnNlID0gbmV3IEh0dHBSZXNwb25zZSh7XG4gICAgICAgIGJvZHksXG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICB1cmw6IGtleVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0KGtleSwgcmVzcG9uc2UsIHR0bCk7XG4gICAgYnVja2V0ICYmIGJ1Y2tldC5hZGQoa2V5KTtcbiAgfVxuXG4gIGRlbGV0ZShrZXk/OiBzdHJpbmcgfCBSZWdFeHAgfCBDYWNoZUJ1Y2tldCk6IHZvaWQge1xuICAgIGlmIChrZXkgaW5zdGFuY2VvZiBDYWNoZUJ1Y2tldCkge1xuICAgICAga2V5LmZvckVhY2godmFsdWUgPT4gdGhpcy5kZWxldGUodmFsdWUpKTtcbiAgICAgIGtleS5jbGVhcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmFnZS5kZWxldGUoa2V5KTtcbiAgICB0aGlzLnR0bE1hbmFnZXIuZGVsZXRlKGtleSk7XG4gIH1cblxuICAvL1RPRE86IGFkZCB0eXBlc1xuICBfaXNDYWNoZWFibGUoY2FuQWN0aXZhdGU6IGJvb2xlYW4sIGNhY2hlOiBhbnkpIHtcbiAgICBjb25zdCBzdHJhdGVneSA9IHRoaXMuY29uZmlnLnN0cmF0ZWd5O1xuICAgIGlmIChzdHJhdGVneSA9PT0gJ2V4cGxpY2l0Jykge1xuICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH1cblxuICAgIGlmIChjYW5BY3RpdmF0ZSAmJiBzdHJhdGVneSA9PT0gJ2ltcGxpY2l0Jykge1xuICAgICAgcmV0dXJuIGNhY2hlICE9PSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBfc2V0KGtleTogc3RyaW5nLCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4sIHR0bDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChrZXksIHJlc3BvbnNlKTtcbiAgICB0aGlzLnR0bE1hbmFnZXIuc2V0KGtleSwgdHRsKTtcbiAgICAvL1RPRE86IEkgd291bGQgbW92ZSBpdCBvdXQgdG8gdGhlIGludGVyY2VwdG9yXG4gICAgdGhpcy5xdWV1ZS5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIF9jYW5BY3RpdmF0ZShyZXF1ZXN0OiBIdHRwQ2FjaGVSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ3VhcmQuY2FuQWN0aXZhdGUocmVxdWVzdCk7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==