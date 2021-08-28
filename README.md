# resize-observer-hook

> A hook that uses Resize Observer API to monitor changes in the size of an element.

[![NPM](https://img.shields.io/npm/v/resize-observer-hook.svg)](https://www.npmjs.com/package/resize-observer-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save resize-observer-hook
```

## Usage

```jsx
import React, { useRef } from 'react'

import useResizeObserver from 'resize-observer-hook'

const App = () => {
  const ref = useRef()
  const [width, height] = useResizeObserver(ref)

  return (
    <div ref={ref}>
      {width} X {height}
    </div>
  )
}
```

## Contributing

[You can help this library to grow by contributing here](https://github.com/Gautam-Arora24/resize-observer-hook/issues). Pick any issue or open one. Let us know what you are working on and ask your questions in the issues itself :)

The package is made up of 1 main folders:

- /src contains all the resize-observer-hook code

To setup and run a local copy:

1.  Clone this repo with `https://github.com/Gautam-Arora24/resize-observer-hook.git`
2.  Run `npm install` in the root folder
3.  In seperate terminal windows, run `npm start` in the root.

When you're done working on your changes, submit a PR with the details and include a screenshot if you've changed anything visually.

## License

MIT © [Gautam-Arora24](https://github.com/Gautam-Arora24), and [the contributors](https://github.com/Gautam-Arora24/resize-observer-hook/graphs/contributors).
