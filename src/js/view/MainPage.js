import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
// import firepot from '../../img/firepot.png';
import mainPage from '../../img/mainpage.jpg'
import { Link } from '@material-ui/core';
const useStyles = (theme) => ({
    loginPage:{
    height:'100vh',
    width:'100vw',
    display:'grid',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    'backgroundImage':'url('+mainPage+')',
  },
  appBar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    background: 'transparent',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 0.5,
  },
  button :{
      position: 'absolute', 
      right: 0,
      background:'white',
      color:'black',
      borderRadius: 20,
  },
  link: {
    margin: theme.spacing(1,2.5),
    color: 'white',
  },
});

class MainPage extends React.Component{
    // initialize
    constructor(props){
        super(props);
        this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    onLoginButtonClick(e){
      this.props.setCurrentPage('login');
    }

    render(){
      const classes = this.props.classes;
      return(
        <div className={classes.loginPage}>
         <AppBar  className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6"  className={classes.toolbarTitle}>
            Discord
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Download
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Nitro
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
             safety
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.button} onClick={this.onLoginButtonClick}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
        </div>
      );
    }
}
  
export default withStyles(useStyles)(MainPage)