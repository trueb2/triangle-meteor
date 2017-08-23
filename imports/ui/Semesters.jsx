import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = {};

class Semesters extends Component {
  state = {};

  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12} md={4}>
            <h1>Semesters</h1>
          </Grid>
          <Grid item xs={12} md={8}>
            <h1>Semester Wizard</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Semesters);

