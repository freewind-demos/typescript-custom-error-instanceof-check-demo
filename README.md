TypeScript Custom Error "instanceof" Check Demo
===============================================

当typescript的编译目标为es5时，通过`extend Error`生成的自定义Error不能被instanceof正确识别。 如果是新一些的目标，比如es6，则无此问题。

如果使用babel，可能有一些插件可以帮忙处理，但使用普通typescript编译器时要麻烦一些。

有一种做法是在自定义的Error里增加下面这句：

```
Object.setPrototypeOf(this, new.target.prototype);
```

这样可以让instanceof正确识别。

```
npm install
npm run demo
```
