// import { Inject, Injectable } from '@angular/core';
// import { HTTP_CACHE_CONFIG, HttpCacheConfig } from './httpCacheConfig';
// import { deleteByRegex } from './deleteByRegex';
//
// export abstract class TTLManager {
//   abstract isValid(key: string): boolean;
//   abstract set(key: string, ttl?: number): void;
//   abstract delete(key: string | RegExp): void;
// }
//
// @Injectable()
// export class DefaultTTLManager {
//   private cache = new Map<string, number>();
//
//   constructor(@Inject(HTTP_CACHE_CONFIG) private config: HttpCacheConfig) {}
//
//   isValid(key: string): boolean {
//     return this.cache.get(key) > new Date().getTime();
//   }
//
//   set(key: string, ttl?: number): void {
//     let resolveTTL = ttl || this.config.ttl.default;
//
//     this.cache.set(key, new Date().setMilliseconds(resolveTTL));
//   }
//
//   delete(key?: string | RegExp): void {
//     if (!key) {
//       this.cache.clear();
//       return;
//     }
//
//     if (typeof key === 'string') {
//       this.cache.delete(key as string);
//       return;
//     }
//
//     deleteByRegex(key as RegExp, this.cache);
//   }
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFxJdGF5XFxwcm9qZWN0c1xcb3BlbnNvdXJjZXNcXGh0dHAtY2FjaGVcXHByb2plY3RzXFxuZ25lYXRcXGh0dHAtY2FjaGVcXHNyY1xcbGliXFx0ZXN0XFx0dGxNYW5hZ2VyLnNwZWMudHMiLCJtYXBwaW5ncyI6IkFBQUEsc0RBQXNEO0FBQ3RELDBFQUEwRTtBQUMxRSxtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHFDQUFxQztBQUNyQyw0Q0FBNEM7QUFDNUMsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUNqRCxJQUFJO0FBQ0osRUFBRTtBQUNGLGdCQUFnQjtBQUNoQixtQ0FBbUM7QUFDbkMsK0NBQStDO0FBQy9DLEVBQUU7QUFDRiwrRUFBK0U7QUFDL0UsRUFBRTtBQUNGLG9DQUFvQztBQUNwQyx5REFBeUQ7QUFDekQsTUFBTTtBQUNOLEVBQUU7QUFDRiwyQ0FBMkM7QUFDM0MsdURBQXVEO0FBQ3ZELEVBQUU7QUFDRixtRUFBbUU7QUFDbkUsTUFBTTtBQUNOLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QixnQkFBZ0I7QUFDaEIsUUFBUTtBQUNSLEVBQUU7QUFDRixxQ0FBcUM7QUFDckMsMENBQTBDO0FBQzFDLGdCQUFnQjtBQUNoQixRQUFRO0FBQ1IsRUFBRTtBQUNGLGdEQUFnRDtBQUNoRCxNQUFNO0FBQ04sSUFBSSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXEl0YXlcXHByb2plY3RzXFxvcGVuc291cmNlc1xcaHR0cC1jYWNoZVxccHJvamVjdHNcXG5nbmVhdFxcaHR0cC1jYWNoZVxcc3JjXFxsaWJcXHRlc3RcXHR0bE1hbmFnZXIuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEhUVFBfQ0FDSEVfQ09ORklHLCBIdHRwQ2FjaGVDb25maWcgfSBmcm9tICcuL2h0dHBDYWNoZUNvbmZpZyc7XG4vLyBpbXBvcnQgeyBkZWxldGVCeVJlZ2V4IH0gZnJvbSAnLi9kZWxldGVCeVJlZ2V4Jztcbi8vXG4vLyBleHBvcnQgYWJzdHJhY3QgY2xhc3MgVFRMTWFuYWdlciB7XG4vLyAgIGFic3RyYWN0IGlzVmFsaWQoa2V5OiBzdHJpbmcpOiBib29sZWFuO1xuLy8gICBhYnN0cmFjdCBzZXQoa2V5OiBzdHJpbmcsIHR0bD86IG51bWJlcik6IHZvaWQ7XG4vLyAgIGFic3RyYWN0IGRlbGV0ZShrZXk6IHN0cmluZyB8IFJlZ0V4cCk6IHZvaWQ7XG4vLyB9XG4vL1xuLy8gQEluamVjdGFibGUoKVxuLy8gZXhwb3J0IGNsYXNzIERlZmF1bHRUVExNYW5hZ2VyIHtcbi8vICAgcHJpdmF0ZSBjYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4vL1xuLy8gICBjb25zdHJ1Y3RvcihASW5qZWN0KEhUVFBfQ0FDSEVfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogSHR0cENhY2hlQ29uZmlnKSB7fVxuLy9cbi8vICAgaXNWYWxpZChrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuLy8gICAgIHJldHVybiB0aGlzLmNhY2hlLmdldChrZXkpID4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4vLyAgIH1cbi8vXG4vLyAgIHNldChrZXk6IHN0cmluZywgdHRsPzogbnVtYmVyKTogdm9pZCB7XG4vLyAgICAgbGV0IHJlc29sdmVUVEwgPSB0dGwgfHwgdGhpcy5jb25maWcudHRsLmRlZmF1bHQ7XG4vL1xuLy8gICAgIHRoaXMuY2FjaGUuc2V0KGtleSwgbmV3IERhdGUoKS5zZXRNaWxsaXNlY29uZHMocmVzb2x2ZVRUTCkpO1xuLy8gICB9XG4vL1xuLy8gICBkZWxldGUoa2V5Pzogc3RyaW5nIHwgUmVnRXhwKTogdm9pZCB7XG4vLyAgICAgaWYgKCFrZXkpIHtcbi8vICAgICAgIHRoaXMuY2FjaGUuY2xlYXIoKTtcbi8vICAgICAgIHJldHVybjtcbi8vICAgICB9XG4vL1xuLy8gICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuLy8gICAgICAgdGhpcy5jYWNoZS5kZWxldGUoa2V5IGFzIHN0cmluZyk7XG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgfVxuLy9cbi8vICAgICBkZWxldGVCeVJlZ2V4KGtleSBhcyBSZWdFeHAsIHRoaXMuY2FjaGUpO1xuLy8gICB9XG4vLyB9XG4iXSwidmVyc2lvbiI6M30=