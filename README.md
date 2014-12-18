vueui-transitions ```v0.1.0```
================================

Use Semantic-UI transitions as v-transition in Vue.js

### Installation
```bash
npm install --save vueui-transitions
```

### Usage
```js
var Vue = require('vue');
var transitions = require('vueui-transitions');

Vue.use(transitions, {
    duration: 700 // The duration of each animation, Default is 700ms
})
```

In your HTML you can use them like:
```html
<div class="page" v-show="isVisible" v-transition="slide-up">
    <h1>Welcome to the home page</h1>
</div>
```

### Animations

This is the full list of all the available in-out animations:
```
var emphasis = [
    'flash',
    'shake',
    'pulse',
    'tada',
    'bounce'
]

var appearance = [
    'slide-up',
    'slide-down',
    'vertical-flip',
    'horizontal-flip',
    'fade',
    'fade-up',
    'fade-down',
    'scale',
    'drop',
    'browse'
]
```

See the [example](/example) for a full example with more animations and Webpack as the build tool.