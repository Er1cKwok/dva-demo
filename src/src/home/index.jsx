import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../header';

import './index.less';

class Home extends Component {
  static propTypes = {
    history: PropTypes.object,
  }

  static childContextTypes = {
    history: PropTypes.object
  }

  getChildContext() {
    return {
      history: this.props.history
    }
  }

  render() {
    const {children} = this.props;

    return (
      <div className="home">
        <Header />
        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}

export default Home;
