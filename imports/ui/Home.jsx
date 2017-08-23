import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {Button, Divider, Grid, List, ListItem, ListItemText, ListSubheader, Paper, Typography} from "material-ui";
import {Transition} from "react-transition-group";

// const styles = {
//   root: {
//     flexGrow: 1,
//   }
// };

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  aboutPaper: theme.mixins.gutters({
    padding: '1em',
  }),
  aboutBody: theme.mixins.gutters({
    padding: '1em',
  }),
  headline: theme.mixins.gutters({
    padding: '1em',
  }),
});

class Home extends Component {
  state = {
    in: false,
  };

  togglePurpose = () => this.setState({in: !this.state.in});

  render() {
    const classes = this.props.classes;
    const defaultStyle = {
      transition: `all 500ms ease-in-out`,
      flex: 0.000001,
    };

    const transitionStyles = {
      entering: {flex: 1},
      entered: {flex: 1},
    };

    return (
      <div className={classes.root}>
        <Typography
          className={classes.headline}
          align="center"
          type="headline">About Triangle</Typography>
        <Grid container
              spacing={24}
              direction="row"
              justify="center"
              align="stretch">
          <Grid item sm={6}>
            <Paper className={classes.aboutPaper} elevation={4}>
              <Typography className={classes.aboutBody}>
                For over 100 years, Triangle Fraternity has provided an environment which fosters personal growth and
                professional success. Triangle is a brotherhood where undergraduates in engineering, architecture and
                science can develop long-lasting friendships and connections with a nationwide network of
                alumni.</Typography>

              <Typography className={classes.aboutBody}>
                Triangle is active in both the Greek and STEM community on campus. In the Greek community, we host
                social exchanges with sororities, participate in community service events, spearhead our own philanthropy
                fundraisers, and have brotherhood membership events such as an annual brotherhood retreat. Within the
                STEM community, we participate in EOH and other engineering competitions, network with organizations
                through Engineering Council, host dinners with professors and co-host recruitment events and
                informational
                sessions with companies.
              </Typography>

              <Button onClick={this.togglePurpose}>
                Expand Purpose
              </Button>
            </Paper>
          </Grid>

          <Transition in={this.state.in} timeout={1000}>
            {(state) => (
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}>
                <Grid item sm={6}>
                  {this.state.in ?
                    <List
                      dense={false}
                      subheader={<ListSubheader>Purpose of Triangle</ListSubheader>}>
                      <ListItem>
                        <ListItemText
                          primary="To help develop the highest standards of personal integrity and character"/>
                      </ListItem>
                      <Divider/>
                      <ListItem>
                        <ListItemText primary="To foster and provide an intellectual, mature environment for its members
                  through individual and group effort and through the mutual companionship of men with similar
                  professional interests and goals"/>
                      </ListItem>
                      <Divider/>
                      <ListItem>
                        <ListItemText primary="To foster and provide the broadening experience of fraternity living with its
                   social and moral challenges and responsibilities for the individual and the chapter"/>
                      </ListItem>
                      <Divider/>
                      <ListItem>
                        <ListItemText primary="To recognize and support the objectives and goals of the alma mater and
                  those of the community through responsible participation and action"/>
                      </ListItem>
                      <Divider/>
                      <ListItem>
                        <ListItemText primary="To help bridge the gap between undergraduate study and the vocation of
                  the individual in industry, the academic world or government"/>
                      </ListItem>
                      <Divider/>
                      <ListItem>
                        <ListItemText primary="To foster and maintain a bond of fraternal brotherhood through a continuing
                   program of activity for the alumni"/>
                      </ListItem>
                      <Divider/>
                      <ListItem>
                        <ListItemText
                          primary="To bring into focus the elements of planned progress for the betterment of mankind"/>
                      </ListItem>
                    </List> : ''}
                </Grid>
              </div>
            )}
          </Transition>
        </Grid>

        <Grid container spacing={24}>
          <Grid item xs={12}>
            Events
          </Grid>

          <Grid item xs={12}>
            Contact info
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

