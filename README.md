# React Gateway

> Render React DOM into a new context

This can be used to implement various UI components such as modals.
See [`react-modal2`](https://github.com/cloudflare/react-modal2).

## Installation

```sh
$ npm install --save react-gateway
```

## Usage

```js
import React from 'react';
import {
  Gateway,
  GatewayDest,
  GatewayProvider
} from 'react-gateway';

export default class Application extends React.Component {
  render() {
    return (
      <GatewayProvider>
        <h1>React Gateway Universal Example</h1>
        <div className="container">
          <Gateway into="one">
            <div className="item">Item 1</div>
          </Gateway>
          <Gateway into="two">
            <div className="item">Item 2</div>
          </Gateway>
          <Gateway into="one">
            <div className="item">Item 3</div>
          </Gateway>
          <div className="item">Item 4</div>
        </div>
        <GatewayDest name="one" tagName="section" className="hello"/>
        <GatewayDest name="two"/>
      </GatewayProvider>
    );
  }
}
```
