import React from 'react';
import GatewayRegistry from './GatewayRegistry';

export default class GatewayDest extends React.Component {
  static contextTypes = {
    gatewayRegistry: React.PropTypes.instanceOf(GatewayRegistry).isRequired
  };

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    tagName: React.PropTypes.string
  };

  static defaultProps = {
    tagName: 'div'
  };

  constructor(props, context) {
    super(props, context);
    this.gatewayRegistry = context.gatewayRegistry;
  }

  state = {
    children: []
  };

  componentWillMount() {
    this.gatewayRegistry.addContainer(this.props.name, this);
  }

  componentWillUnmount() {
    this.gatewayRegistry.removeContainer(this.props.name, this);
  }

  render() {
    const { tagName, ...attrs } = this.props;
    delete attrs.name;
    return React.createElement(tagName, attrs, this.state.children);
  }
}
