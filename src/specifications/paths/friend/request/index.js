import { post } from './post/index.js';
import { get } from './get/index.js';
import { del } from './delete/index.js';

export const friendRequest = {
    post,
    get,
    delete: del
  };