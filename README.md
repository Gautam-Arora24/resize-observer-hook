# resize-observer-hook

<img src="https://user-images.githubusercontent.com/74927578/132028559-afdb6cd7-dc32-4d44-a91e-bf129f985b07.gif" height="400px"></img>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

> A hook that uses Resize Observer API to monitor changes in the size of an element.

[![NPM](https://img.shields.io/npm/v/resize-observer-hook.svg)](https://www.npmjs.com/package/resize-observer-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install resize-observer-hook
```

## Usage

```jsx
import React from 'react'

import useResizeObserver from 'resize-observer-hook'

const App = () => {
  const [ref, width, height] = useResizeObserver()

  return (
    <div ref={ref}>
      {width} X {height}
    </div>
  )
}
```

You can add multiple `ResizeObserverBoxOptions` to the useResizeObserver like this ->

```
const [ref,width,height] = useResizeObserver("borderBoxSize");
```

`ResizeObserverBoxOptions` that are supported currently in the library ->

- **borderBoxSize**
- **contentBoxSize**
- **contentRect**

Note ⚠️ - Some options aren't supported in some broswers so if you provide any option that is not being supported in your current browser, it will automatically use `contentRect` to calculate height and width of the observed element.

See more details over here -> https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry

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
    <td align="center"><a href="https://github.com/mehanalavimajd"><img src="https://avatars.githubusercontent.com/u/74927578?v=4?s=100" width="100px;" alt=""/><br /><sub><b>mehan</b></sub></a><br /><a href="#design-mehanalavimajd" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/nikhilmaske-2001"><img src="https://avatars.githubusercontent.com/u/59444243?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nikhil Maske</b></sub></a><br /><a href="https://github.com/Gautam-Arora24/resize-observer-hook/commits?author=nikhilmaske-2001" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sarthakvaishnav09"><img src="https://avatars.githubusercontent.com/u/61916071?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Batman09</b></sub></a><br /><a href="https://github.com/Gautam-Arora24/resize-observer-hook/commits?author=sarthakvaishnav09" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
