Tailwindcss Nth Child Variants Plugin
--
This repository is a plug in for [Tailwindcss](https://github.com/tailwindlabs/tailwindcss) 

 Installation
--
Install the plugin via npm:

    npm install tailwindcss-nth-child

tailwind.config.js
--
Create an instance like this.
``` js
const Nth =  require('tailwindcss-nth-child');
const <name_suffix> =  new  Nth('<name_suffix>','<nth-value>')
module.exports = {
// ...
variants: {
    // extend the backgroundColor variants
    extend:{
      backgroundColor: ['nth-child-<name_suffix>'],
    }
},
plugins: [
    <name_suffix>.nthChild() // add-plugin
],
}
```

> Extending the variants is important.

Value of <nth-value\>
--
You need to give **nth-value** in constructor method. Check the below examples.


Examples
--
tailwind.config.js
```jsx
const Nth = require('tailwindcss-nth-child')
const nth3n =  new  Nth('3n','3n+0') // Sub-elements that are multiples of 3
const nth2n =  new  Nth('2n','2n+0') // Sub-elements that are multiples of 2  === new  Nth('even','even')
const nth5 =  new  Nth('5','-n+5') // The first five child elements
const nth4 =  new  Nth('4','-n+4') // The first four child elements

module.exports = {
// ...
variants: {
    // extend the backgroundColor variants
    extend:{
      borderWidth: [
        'nth-child-2n',
        'nth-child-3n',
        'nth-child-4',
        'nth-child-5',
      ],
    }
},
plugins: [
    nth2n.nthChild(),
    nth3n.nthChild(),
    nth4.nthChild(),
    nth5.nthChild(),
  ],
}
```

xxx.tsx
```html
<div 
    className='flex flex-wrap
        nth-child-2n:border-r-0 
        sm:nth-child-2n:border-r 
        sm:nth-child-3n:border-r-0 
        lg:nth-child-3n:border-r  
        lg:nth-child-4:border-t 
        xl:nth-child-5:border-t'
>
    // ...
</div>

```
