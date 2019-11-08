# 30 秒面试

> 原文来自：[https://30secondsofinterviews.org/](https://30secondsofinterviews.org/)

## JavaScript

<!-- ### 等号运算符 `==` 和 `===` 的区别是什么呢？ -->
### 等号运算符 `==` 和 `===` 有什么区别呢？<sup style="color: green;">Easy</sup>

三重等号（===）检查是严格相等，意味着符号两边变量的类型和值都必须相同。
双重等号（==）会进行类型的强制转换，因此两个变量的类型都相同后再进行严格的比较。

面试官想听到的：

- 无论什么时候，我们都应该使用三重等号比较两个变量是否相等，因为双重等号会有不直观的结果。
- 提及下 `falsy` 值的比较，如 0 和 false。

<!-- <details>
<summary>改译（通读译文，（按照译文的习惯，所以要学好语文）修改不通顺的地方，利用语法规则）</summary>
</details> -->
<!-- <details>
<summary>展开查看</summary>
上行下效
</details> -->

### React 的元素和组件有什么区别？<sup style="color: green;">Easy</sup>

一个元素是一个纯 JavaScript 对象，用来描述一个 DOM 节点或者一个组件。元素是干净的，从来不会被改变，并且很容易创建。

一个组件就是一个函数或者一个类。组件可以拥有自己的状态 state，以及提供 props 作为输入，并且输出一颗元素树（但是它们可以作为一个普通容器或包裹，而且不需要输出 dom 节点）。组件在初始化生命周期方法时具有副作用<!--在生命周期方法时，组件初始化时具有副作用-->（例如，AJAX 请求，DOM 操作，引入第三方库的接口）并且创造成本比较高。

```js
const Component = () => "Hello"
const componentElement = <Component />
const domNodeElement = <div />
```

好的回答是：
- 元素是不可改变的纯对象，可以用来描述任何你想要渲染的 dom 节点或者组件。
- 组件可以是一个函数或者是一个类，它接受 props 作为输入，以及输出一颗元素树。

<!-- ### 加号运算符后置 `i++` 和 加号运算符前置`++i` 有什么区别？ -->
### 后缀增量运算符 `i++` 和 前缀增量运算符`++i` 有什么区别？<sup style="color: green;">Easy</sup>

两种方式都会使变量的值加1。不同的是它们赋值的时机。

后缀增量运算符会在变量的值被增加前，给变量赋值。
```js
let i = 0
i++ // 0
// i === 1
```

前缀增量运算符会在变量的值被增加后，给变量赋值。
```js
let i = 0
++i // 1
// i === 1
```

### Promise 可以处于几种状态？<sup style="color: green;">Easy</sup>

一个 `Promise` 可以处于这些状态的其中之一：

- pending: 初始状态，既没有完成也没有拒绝。
- fulfilled: 这个状态意味着操作已经成功完成。
- rejected: 这个状态意味着操作失败。

<!-- 一个 `pending` 的 promise 可以被实现返回一个值，或者是被拒绝返回一个原因（错误）。当这些选择之一发生后，相关的处理程序会被这个 promise 的 then 方法依次调用。 -->
一个`pending`状态的 Promise 结果可以是完成附带一个值，或者是拒绝附带一个原因（错误）。当这些选择之一发生后，相关的处理程序会被这个 Promise 的 then 方法依次调用。 


### 在 React 中，什么是一个有状态的组件？<sup style="color: green;">Easy</sup>

一个有状态的组件，它的行为依赖于它自身的状态。这意味着两个独立的组件实例，即使给予相同的 `props` 值，也不一定会给予相同的输出，它跟纯函数组件是不一样的。
```js
// Stateful class component
class App extends Component {
  constructor(props) {
    super(props)
    thsi.state = { count: 0}
  }
  render() {
    // ...
  }
}

// Stateful function component
function App() {
  const [count, setCount] = useState(0)
  return // ...
}
``` 

好的回答：
- 有状态的组件有内部依赖的状态。
- 有状态的组件可以是类组件或者是使用了状态钩子的函数组件。
- 有状态的组件有它们自身的状态，这些状态通过构造函数或 `useState()`初始化。

### 什么是一个无状态的组件<sup style="color: green;">Easy</sup>

一个无状态组件是一个自身行为不依赖它自己的状态 `state`。无状态的组件可以是函数式组件或者是类组件。因为给无状态组件输入相同的 `props` 会保证得到相同的输出，所以它更容易被维护和测试。在你不需要使用生命周期钩子的时候，你应该优先考虑使用无状态的函数式组件。

很高兴听到：

- 无状态组件和它们的状态是独立的。
- 无状态组件可以是类组件或函数式组件。
- 无状态组件完全没有 `this` 上下文。

### 创建一个批处理函数，它返回该批中的能够按照食谱进行烹饪的最多次数。<sup style="color: green;">INTERMEDIATE</sup>

```js
/**
 这个函数接收两个对象作为参数：第一个对象是食谱上要求的成分表，而第二个对象是当前能够使用的成分。每一种成分的值是代表它们的单位数量有多少。
 `batches(recipe, available)`
*/

// 0 batches can be made
batches(
  { milk: 100, butter: 50, flour: 5},
  { milk: 132, butter: 48, flour: 51},
)
batches(
  { milk: 100, flour: 4, sugar: 10, butter: 5 },
  { milk: 1288, flour: 9, sugar: 95 }
)

// 1 batch can be made
batches(
  { milk: 100, butter: 50, cheese: 10 },
  { milk: 198, butter: 52, cheese: 10 },
)

// 2 batches can be made
batches(
  { milk: 2, sugar: 40, butter: 20 },
  { milk: 5, sugar: 120, butter: 500 },
)
```

我们必须保证可以获得食谱上所有的成分，并且数量上大于或等于成分要求的单位数量。**一旦缺失一种成分或数量上不足，我们都不能完成一次处理。**关键入手点在于这里，因此需要找出所有成分的比率值的最小值，才是整个能够按照食谱烹饪的最大值。

<!-- 第一步，使用 `Object.keys()`来处理 recipe 获得一个成分的数组， -->
第一步，使用`Object.keys()`以数组形式返回食谱的成分
然后使用 `Array.prototype.map()` 针对每种可以获得的成分的数量与菜谱上要求的成分数量作比例处理。<!-- 如其中一个菜谱上要求的成分根本不可用， -->只要有一个菜谱上要求的成分不可用，则比率值就等于 `NaN`。因此在这种情况下，需要使用逻辑与符号赋值为0。

第二步，使用展开序列符`...`展开成分的比率值数组，传递给`Math.min()`函数获得最小的比率。最后传递这个比率给`Math.floor()`向上兼容取整获得整个批处理的最大数值。

```js
const batches = (recipe, available) => 
  Math.floor(
    Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0))
  )
```

<!-- ### 创建一个与方法`Function.prototype.bind`功能相同的单例函数 `bind`<sup style="color: green;">INTERMEDIATE</sup> -->
### 创建一个功能上相当于方法`Function.prototype.bind`的单例函数 `bind`<sup style="color: green;">INTERMEDIATE</sup>

```js
function example() {
  console.log(this);
}
const boundExample = bind(example, { a: true });
boundExample.call({b: true }) // logs { a: true }
```

返回一个接收任意数量参数的函数，这些参数通过扩展运算符`...`来获取。从函数上可以看出，它返回通过`Function.prototype.apply`方法接收上下文 context 以及一个数组形式的参数来调用`fn`函数的结果。
```js
const bind = (fn, context) => (...args) => fn.apply(context. args);
```

### 回调函数作为`setState` 的一个参数的目的是什么？

当 `setState` 执行和组件渲染完成后，这个回调函数将会被调用。因为 `setState` 的执行是异步的，所以回调函数可以用在任何一次 post 操作。

```js
setState({ name: "sudheer" }, () => {
  console.log("The name has updated and component re-rendered")
})
```

好的回答：
- 这个回调函数将会在 `setState`执行后被调用，并且可以用在任意一次的 post 动作。
- 建议使用生命周期方法而不是这个 callback 回调函数。

### 什么是回调？你可以举一个例子来说明吗？

回调就是一个函数，作为一个参数被传入另外一个函数中，当一个事件发生后或者一个确定的任务执行后将会被执行，通常被用于异步的代码。回调函数除了可以被一段代码不久后调用外，它也可以在初始化时声明而不被调用。

例如，事件监听器是异步回调的，只有当指定的事件发生时，它才会被执行。
```js
function onClick() {
  console.log("The user clicked on the page.")
}
document.addEventListener("click", onClick);
```

然后，回调也可以是同步的。下面的`map`函数接受一个回调函数，它会被同步调用在每一个循环的迭代（数组元素）。
```js
const map = (arr, callback) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i))
  }
  return result;
}
map([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]
```
很高兴听到
- 函数在 JavaScript 中是一类对象。
- 回调 vs Promise

### 你是怎么使用 JavaScript 拷贝一个对象的？<sup style="color: green;">INTERMEDIATE</sup>

使用对象扩展运算符，可以把该对象自身可枚举的属性拷贝到新的对象中。这种方法实现的是浅拷贝。
```js
const obj = { a: 1, b: 2}
const shallowClone = { ...obj }
```

使用这个方式不会拷贝原型链的东西。另外，嵌套的对象也不被拷贝，相反它们的引用地址会被拷贝，所以嵌套对象仍让跟原对象一样指向相同的对象。深拷贝是一种更复杂的拷贝方式，为了有效地拷贝可能会被嵌入到对象里的任何对象类型（日期、正则表达式、函数、Set等等）。

其他可选的方案包括：
- `JSON.parse(JSON.stringify(obj))` 可以用来深拷贝一个简单的对象，但是它占用CPU资源，并且只能接受有效的 JSON 结构。（因此它排除了函数以及不允许循环引用。）
- `Object.assign({}, obj)` 是另外一种可选方案。
- `Object.keys(obj).reduce((acc, key) => (acc[key], acc), {})` 是另外一种比较冗余的选择，更深入地展示了深拷贝的概念。（这里初始值是一个空对象，之后进行一一拷贝）

很高兴能听到：
- JavaScript 传递对象只是传递引用的地址，这意味着拷贝嵌套的对象只是拷贝它们的引用地址，而不是它们的字面量。
- 相同的方法可以用来合并两个对象。
