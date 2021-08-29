# resize-observer-hook

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

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
  const [ref, width, height] = useResizeObserver(ref)

  return (
    <div ref={ref}>
      {width} X {height}
    </div>
  )
}
```

<img src='./media/example.gif'></img>

## Contributing

[You can help this library to grow by contributing here](https://github.com/Gautam-Arora24/resize-observer-hook/issues). Pick any issue or open one. Let us know what you are working on and ask your questions in the issues itself :)

The package is made up of 2 main folders:

- /src contains all the resize-observer-hook code
- /example is our create-react-app based demo website

To setup and run a local copy:

1.  Clone this repo with `https://github.com/Gautam-Arora24/resize-observer-hook.git`
2.  Run `npm install` in the root folder
3.  Run `npm install` in the example folder
4.  In seperate terminal window, run `npm start` in the root.
5.  In seperate terminal window, run `npm start` in the example folder.

When you're done working on your changes, submit a PR with the details and include a screenshot if you've changed anything visually.

## License

MIT © [Gautam-Arora24](https://github.com/Gautam-Arora24), and [the contributors](https://github.com/Gautam-Arora24/resize-observer-hook/graphs/contributors).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.youtube.com/channel/UCEGSSc70uT-SFH-7EdbzT2w"><img src="https://avatars.githubusercontent.com/u/53913514?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gautam Arora</b></sub></a><br /><a href="https://github.com/Gautam-Arora24/resize-observer-hook/commits?author=Gautam-Arora24" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
