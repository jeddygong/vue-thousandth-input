# vue-thousandth-input

vue-thousandth-input component for Vue.js / 基于vue的一个千分位输入表单组件

<p align="center">
  <img src="demo.gif" width="100%" alt="Logo"/>
</p>

## Install / 下载

### npm

```
npm install vue-thousandth-input
```

### yarn

```
yarn add vue-thousandth-input
```

### Example 1: Register the plugin as a global component / 全局注册组件

```
import Vue from 'vue'
import VuethousandthInput from 'vue-thousandth-input'

Vue.use(VuethousandthInput)
```

#### Then use it in a component / 然后在组件中这么使用

```import Vue from 'vue'
<template>
 <vue-thousandth-input v-model="value"></vue-thousandth-input>
</template>
```

### Example 2: Add a component / 局部注册组件

```
<template>
 <vue-thousandth-input v-model="value"></vue-thousandth-input>
</template>

<script>
  import { VueThousandthInput } from 'vue-thousandth-input';

  export default {
    name: 'VueThousandthInput',
    components: {
      VueThousandthInput
    },
    data () {
     return {
      value
     }
    }
  };
</script>
```

### CDN

```
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-thousandth-input"></script>
```

### Then you need to register it

```
Vue.component('vue-thousandth-input')
```

## Props / 参数

| Property | Type | Default value | Description |
| -------- | ---- | ------------- | ----------- |
| `value` | `String`|`''`  | v-model Default value / v-model默认值 |
| `decimalPoint` | `Number` |  | Keep a few decimal places / 保留几位小数点 |
| `id-set` | `String` | `''` | Add id / 添加自定义id / Available from v0.1.2 |
| `class-set` | `String` | `''` | Add class / 添加自定义class |
| `style-set` | `String` | `''` | Add style / 添加自定义style |
| `placeholder` | `String` | `''` | placeholder for the input |

### event / 事件

| Event | Arguments | Description | Notes |
| ----- | --------- | ----------- | ----- |
| `change` | `Object` | Fires when the input changes with the argument is the object includes `{ event, changeValue, value }`  / 输入事件返回的值 | onInput |
| `focus` | `Object` | Fires when the focus with the argument is the object includes `{ event, changeValue, value }`  / 获取焦点事件返回的值 | onFocus Available from v0.1.2 / v0.1.2版本支持 |
| `blur` | `Object` | Fires when the blur with the argument is the object includes `{ event, changeValue, value }`  / 失去焦点返回的值 | onBlur Available from v0.1.2 / v0.1.2版本支持 |
