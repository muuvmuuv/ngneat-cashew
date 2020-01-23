"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CacheBucket = /** @class */ (function () {
    function CacheBucket() {
        // TODO: add Type.
        this.keys = new Set();
    }
    CacheBucket.prototype.add = function (key) {
        this.keys.add(key);
    };
    CacheBucket.prototype.has = function (key) {
        return this.keys.has(key);
    };
    CacheBucket.prototype.forEach = function (cb) {
        this.keys.forEach(cb);
    };
    CacheBucket.prototype.delete = function (key) {
        this.keys.delete(key);
    };
    CacheBucket.prototype.clear = function () {
        this.keys.clear();
    };
    return CacheBucket;
}());
exports.CacheBucket = CacheBucket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFxJdGF5XFxwcm9qZWN0c1xcb3BlbnNvdXJjZXNcXGh0dHAtY2FjaGVcXHByb2plY3RzXFxuZ25lYXRcXGh0dHAtY2FjaGVcXHNyY1xcbGliXFxjYWNoZUJ1Y2tldC50cyIsIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7UUFDRSxrQkFBa0I7UUFDVixTQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQXFCM0IsQ0FBQztJQW5CQyx5QkFBRyxHQUFILFVBQUksR0FBVztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5QkFBRyxHQUFILFVBQUksR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLGtDQUFXIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSXRheVxccHJvamVjdHNcXG9wZW5zb3VyY2VzXFxodHRwLWNhY2hlXFxwcm9qZWN0c1xcbmduZWF0XFxodHRwLWNhY2hlXFxzcmNcXGxpYlxcY2FjaGVCdWNrZXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhY2hlQnVja2V0IHtcbiAgLy8gVE9ETzogYWRkIFR5cGUuXG4gIHByaXZhdGUga2V5cyA9IG5ldyBTZXQoKTtcblxuICBhZGQoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmtleXMuYWRkKGtleSk7XG4gIH1cblxuICBoYXMoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5rZXlzLmhhcyhrZXkpO1xuICB9XG5cbiAgZm9yRWFjaChjYikge1xuICAgIHRoaXMua2V5cy5mb3JFYWNoKGNiKTtcbiAgfVxuXG4gIGRlbGV0ZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMua2V5cy5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMua2V5cy5jbGVhcigpO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=