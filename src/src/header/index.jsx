import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Menu} from 'antd';
import {ReadOutlined, VideoCameraOutlined, WechatOutlined} from '@ant-design/icons';

import './index.less';

class Header extends Component {
  static propTypes = {
    history: PropTypes.object
  }

  static contextTypes = {
    history: PropTypes.object
  }

  state = {
    current: '/blog',
  };

  handleClick = e => {
    const {history} = this.context;

    history.push(e.key);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <header className="header">
        <div className="logo">预留位置</div>
        <div className="nav">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="/blog">
              <ReadOutlined />
              博客
            </Menu.Item>
            <Menu.Item key="/video">
              <VideoCameraOutlined />
              视频
            </Menu.Item>
            <Menu.Item key="/about">
              <WechatOutlined />
              关于我
            </Menu.Item>
          </Menu>
        </div>
      </header>
    );
  }
}

export default Header;
