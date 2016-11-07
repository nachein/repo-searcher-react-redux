import React from 'react'
import { browserHistory } from 'react-router';
import { search, fetchRepos } from '../actions/actionCreators';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class RepoSearch extends React.Component {
  componentDidMount() {
    this.setState({ searchTerm: ''});
  }

  render() {
    return (
      <div className="search">
        <h2>Enter user name</h2>
        <TextField
          hintText="User name"
          className="search-box"
          onChange={ (e) => this.handleSearchChange(e)}>
        </TextField>
        <RaisedButton
          className="search-submit"
          onClick={this.handleClick.bind(this)}>
           Search
         </RaisedButton>
      </div>
    )
  }

  handleClick() {
    let userName = this.state.searchTerm;
    if(userName)
      browserHistory.push(`/user/${userName}`);
  }

  handleSearchChange(e) {
    this.setState({ searchTerm: e.target.value});
  }
}
