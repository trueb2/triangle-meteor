import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

const styles = {};

class Semesters extends Component {
  state = {};

  render() {
    return (
      <div className={this.props.classes.root}>
        <h1>Semesters</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Semesters);

