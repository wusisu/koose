# koose
<p align="center">
  <a href="https://circleci.com/gh/wusisu/koose/tree/master"><img src="https://img.shields.io/circleci/project/wusisu/koose/master.svg" alt="Build Status"></a>
  <a href="https://codecov.io/gh/wusisu/koose"><img src="https://img.shields.io/codecov/c/github/wusisu/koose.svg" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/@wusisu/koose"><img src="https://img.shields.io/npm/dt/@wusisu/koose.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@wusisu/koose"><img src="https://img.shields.io/npm/v/@wusisu/koose.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@wusisu/koose"><img src="https://img.shields.io/npm/l/@wusisu/koose.svg" alt="License"></a>
</p>

A library try to simplify building data-oriented-api, based on koa and mongoose.


## why
Here is what a SPA in my company likes.

```
+--------------+               +--------------------+
|    client    |               |       server       |
+--------------+               +--------------------+
  H                              H
  H                              H
  v                              v
+--------------+  similar to   +--------------------+             +-------------+
|   db:vuex    | ............> |      business      | ----------> | db:mongoose |
+--------------+               +--------------------+             +-------------+
  |                              ^                                  ^
  |                              |                                  :
  v                              |                                  :
+--------------+  p2p to       +--------------------+  act like     :
|  api module  | ............> |      rest api      | ...............
+--------------+               +--------------------+
  |                              ^
  |                              |
  v                              |
+--------------+               +--------------------+
| vue-resource |               | http-service:koa@2 |
+--------------+               +--------------------+
  |                              ^
  |                              |
  v                              |
+--------------+               +--------------------+
| net(client)  | ~~~~~~~~~~~~> |    net(server)     |
+--------------+               +--------------------+
```

I have to say that there are lots of similarities among designs in "vuex, client api module, rest api, business, mongoose".
I hope I can find a way to cut down repeated work, a tool to generate these functions.
That why I start.
