### react-slick

There are so many of issue opened in the original [repo](https://github.com/akiran/react-slick) and the prs was too slow to [merge](https://github.com/akiran/react-slick/pulls), that I finally decide to maintain one by myself. Feel free to make a pr.Happy coding :tada::tada::tada:

## [Documentation](http://react-slick.neostack.com)

### Installation

**npm**

```bash
npm install @helkyle/react-slick
```

**yarn**

```bash
yarn add @helkyle/react-slick
```

### Example

```js
import React from "react";
import Slider from "@helkyle/react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    );
  }
}
```
