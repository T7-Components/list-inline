# @t7/list-inline

Create a React horizontal in-line list from an unordered list

## Installation
```js
npm install @t7/list-inline --save
```

## Usage
```js
import ListInline from '@t7/list-inline'
import '@t7/list-inline/dist/index.css'
```
```js
/* create your list as a single logical grouping */
<ListInline>
  <li>
    List Item 1
  </li>
  <li>
    List Item 2
  </li>
  <li>
    List Item 3
  </li>
</ListInline>
```
&nbsp;
&nbsp;

### Note regarding the use of the _required_ CSS
_*if your build process will not resolve the CSS in a module copy the file `@t7/list-inline/dist/index.css` from the node_modules folder and reference the copy with an HTML link *_

```html
e.g.
<link rel="stylesheet" href="<your stylesheet folder>/@t7/list-inline/dist/index.css">
```


Demo page:

https://t7-components.github.io/list-inline/build/
