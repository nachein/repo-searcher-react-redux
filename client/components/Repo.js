import React from 'react';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Repo = React.createClass({
  render() {
    const { repo } = this.props;

    return (
      <Link to={repo.html_url} target="_blank">
        <Card className="repo">
          <CardHeader title={repo.name}/>
          <CardText>
            <span> {repo.forks} forks </span>
            <span> {repo.stars} stars </span>
            <span> {repo.watchers} watchers </span>
          </CardText>
        </Card>
      </Link>
    )
  }
});

export default Repo;
