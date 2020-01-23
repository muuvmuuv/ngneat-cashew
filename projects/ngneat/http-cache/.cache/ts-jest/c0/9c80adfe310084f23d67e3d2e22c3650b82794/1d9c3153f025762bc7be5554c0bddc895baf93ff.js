"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deleteByRegex(pattern, cache) {
    for (var _i = 0, _a = Array.from(cache); _i < _a.length; _i++) {
        var key = _a[_i][0];
        if (pattern.test(key)) {
            cache.delete(key);
            break;
        }
    }
}
exports.deleteByRegex = deleteByRegex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFxJdGF5XFxwcm9qZWN0c1xcb3BlbnNvdXJjZXNcXGh0dHAtY2FjaGVcXHByb2plY3RzXFxuZ25lYXRcXGh0dHAtY2FjaGVcXHNyY1xcbGliXFxkZWxldGVCeVJlZ2V4LnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsU0FBZ0IsYUFBYSxDQUFDLE9BQWUsRUFBRSxLQUFvQjtJQUNqRSxLQUFvQixVQUFpQixFQUFqQixLQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWpCLGNBQWlCLEVBQWpCLElBQWlCLEVBQUU7UUFBM0IsSUFBQSxlQUFHO1FBQ2IsSUFBSyxPQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLE1BQU07U0FDUDtLQUNGO0FBQ0gsQ0FBQztBQVBELHNDQU9DIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSXRheVxccHJvamVjdHNcXG9wZW5zb3VyY2VzXFxodHRwLWNhY2hlXFxwcm9qZWN0c1xcbmduZWF0XFxodHRwLWNhY2hlXFxzcmNcXGxpYlxcZGVsZXRlQnlSZWdleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGVsZXRlQnlSZWdleChwYXR0ZXJuOiBSZWdFeHAsIGNhY2hlOiBNYXA8YW55LCBhbnk+KSB7XG4gIGZvciAoY29uc3QgW2tleV0gb2YgQXJyYXkuZnJvbShjYWNoZSkpIHtcbiAgICBpZiAoKHBhdHRlcm4gYXMgUmVnRXhwKS50ZXN0KGtleSkpIHtcbiAgICAgIGNhY2hlLmRlbGV0ZShrZXkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXSwidmVyc2lvbiI6M30=