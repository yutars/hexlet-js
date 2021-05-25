#!/usr/bin/env node
// @ts-check
import getFunction from '../src/function.js';

const get = getFunction();
//console.log(get({'hello': 'world'},null,null));
// BEGIN (write your solution here)
console.log(get({ hello: 'world' }, 'hello')); // world
console.log(get({ hello: 'world' }, 'hello', 'kitty')); // 'world'
console.log(get({}, 'hello', 'kitty')); // 'kitty'
// END

