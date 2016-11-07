import React from 'react';
import Repo from './Repo';
import LinearProgress from 'material-ui/LinearProgress';

export default class RepoList extends React.Component {

  componentDidMount() {
      this.props.search(this.props.params.userName);
  }

  render() {

    const { loading, items, error } = this.props.repos;

    if(this.props.repos.loading) {
      return (
        <LinearProgress
         mode="indeterminate"
         className="loading-bar"/>
      )
    }
    if(error) {
      return (<p className="error-msg"> There was an error: {error} </p>)
    }

    if(items.length == 0) {
      return (<p className="empty-msg"> {this.props.params.userName} has no repos </p>);
    }

    return (
        <div className="repo-list">
            <h2> {this.props.params.userName} has {this.props.repos.items.length} repos: </h2>
            {this.props.repos.items.map((repo, i) => <Repo {...this.props} key={i} i={i} repo={repo} />)}
        </div>
      )



  }
};
