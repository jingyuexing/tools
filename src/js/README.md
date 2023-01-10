# JS version

JavaScript implementation of some tools

- [parser Cookie or Query parameter](./parserCookieOrQuery) You can use it to serialize and deserialize Cookie or url query

```js
// you can use it parse cookies, like this:
let s = new Serialization("a=1;b=2;c=4;Q=19");
s.serialization // { Q: "19",a: "1",b: "2",c: "4" }
s.setOne("Q","$");
s+""; // 'a=1;b=2;c=4;Q=$'

// or, use it parse url query params
let q = new Serialization("a=23&v=40&c=44","=","&")
s.serialization // {a: "23",c: "44",v: "40"}

```
