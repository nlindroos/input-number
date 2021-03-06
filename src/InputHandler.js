import React, { Component } from 'react';
import classNames from 'classnames';
import touchableFeedback from './touchableFeedback';

class InputHandler extends Component {
  static defaultProps = {
    prefixCls: 'am-stepper',
  };

  render() {
    const props = { ...this.props };
    const prefixCls = props.prefixCls;
    const wrapCls = classNames({
      [`${props.className}`]: true,
      [`${prefixCls}-handler-active`]: !props.disabled && props.touchFeedback,
    });
    ['prefixCls', 'touchFeedback'].forEach(prop => {
      if (props.hasOwnProperty(prop)) {
        delete props[prop];
      }
    });

    return (<span {...props} className={wrapCls}>{props.children}</span>);
  }
}

export default touchableFeedback(InputHandler, 'InputHandler');
