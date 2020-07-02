import { HttpCacheRequest } from './types';

const filterKeys = ['ttl$', 'cache$', 'key$', 'bucket$', 'parameterCodec$'];

export function filterParams(request: HttpCacheRequest) {
  return request.params.keys().reduce((acc, key) => {
    if (filterKeys.includes(key) === false) {
      acc[key] = request.params.getAll(key);
    }

    return acc;
  }, {});
}
