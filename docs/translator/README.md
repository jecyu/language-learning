# 30 秒面试

> 原文来自：[https://30secondsofinterviews.org/](https://30secondsofinterviews.org/)

## JavaScript

### 等号运算符 `==` 和 `===` 的区别是什么呢？

三重等号（===）检查是严格相等，意味着符号两边变量的类型和值都必须相同。
双重等号（==）会进行类型的强制转换，因此两个变量的类型都相同后再进行严格的比较。

面试官想听到的：

- 无论什么时候，我们都应该使用三重等号比较两个变量是否相等，因为双重等号会有不直观的结果。
- 提及下 `falsy` 值的比较，如 0 和 false。

<!-- <details>
<summary>改译（通读译文，修改不通顺的地方，利用语法规则）</summary>
</details> -->
<!-- <details>
<summary>展开查看</summary>
上行下效
</details> -->
