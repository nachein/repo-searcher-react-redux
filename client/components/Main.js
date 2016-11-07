import React from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Main = React.createClass({
  render() {
    return (
      <div>
        <AppBar
          title="Repo Search"
          showMenuIconButton={false}
          onTitleTouchTap={this.goHome}
          titleStyle={{cursor: 'pointer'}}
        />
        <div className="app-body">
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  },

  goHome() {
    browserHistory.push('/');
  }
});

export default Main;
