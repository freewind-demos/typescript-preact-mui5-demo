TypeScript React "material-ui" Demo
===================================

如何使用TypeScript来写"material-ui"

```
npm install
npm run demo
```

It will open <http://localhost:8080/> automatically.

![demo](./images/demo.jpg)

坑
---

### `tsconfig.json`

- "moduleResolution": "node"

这里必须为"node"，否则`import List from '@material-ui/core/List'`会报找不到模块的错误。

