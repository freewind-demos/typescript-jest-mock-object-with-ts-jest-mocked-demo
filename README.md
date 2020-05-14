TypeScript Jest Mock Class with "ts-jest" "mocked" Demo
===========================

在typescript使用jest来mock class在类型上有很多不方便的地方，所以引入了ts-jest中的utils

注意：如果class中有private字段，生成的mock实例在类型上会有问题，还未解决

有一个办法就是利用`Pick<T, keyof T>`来为一个class定义一个接口：

https://stackoverflow.com/questions/61798914/how-to-understand-property-name-is-private-in-type-user-in-typescript

```
npm install
npm test
```
