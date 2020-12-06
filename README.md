# vue-thousandth-input
vue-thousandth-input component for Vue.js / 基于vue的一个千分位输入表单组件

## Installation / 下载

### npm
```
npm install vue-thousandth-input
```
### yarn
```
yarn add vue-thousandth-input
```
### Register the plugin as a global component / 全局注册组件
```
import Vue from 'vue'
import VuethousandthInput from 'vue-thousandth-input'

Vue.use(VuethousandthInput)
```

### Add a component / 局部注册组件

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

### Then you need to register it:

```
Vue.component('vue-thousandth-input')
```

## Props / 参数

| Property | Type | Default value | Description |
| -------- | ---- | ------------- | ----------- |
| `value` | `String`|`Number` | v-model Default value / v-model默认值 |
| `decimalPoint` | `Number` | 3 | Keep a few decimal places / 保留几位小数点 |
| `class-set` | `String` | `''` | Add class / 添加自定义class |
| `style-set` | `String` | `''` | Add style / 添加自定义style |
| `placeholder` | `String` | `''` | placeholder for the input |

### event / 事件
| Event | Arguments | Description |
| ----- | --------- | ----------- | ----- |
| `change` | `Object` | Fires when the input changes with the argument is the object includes `{ event, changeValue, value }`  / 输入事件返回的值 |
