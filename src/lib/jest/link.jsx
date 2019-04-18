import React from 'react';

export default class Link extends React.Component {
  render() {
    return (
      <a className="foo" href={this.props.page || '#'}>
        {this.props.children}
      </a>
    );
  }
}
