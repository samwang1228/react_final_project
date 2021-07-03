import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import DiscordIcon from '../../img/discord.png';
import Doge from '../../img/doge.png';
import AddIcon from '@material-ui/icons/Add';
import ExploreIcon from '@material-ui/icons/Explore';
import IconButton from '@material-ui/core/IconButton';


var GRAY_1 = '#202225';
var GRAY_2 = '#2F3136';
var GRAY_3 = '#36393F';

const useStyles = (theme) => ({
  mainPage:{
    display:'flex',
    height:'100vh',
    width:'100vw',
    'background-color': GRAY_3,
  },
  serverList:{
    'background-color': GRAY_1, 
    width : '50pt',   
  },
  serverIcon:{
    margin : '0 auto',
    width : '40pt',
    height : '40pt',
  },
});

class ServerChat extends React.Component{
    // initialize
    constructor(props){
        super(props);
        // this.state = {date:new Date()};
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    render(){
      const classes = this.props.classes;
      return(
          <div className={classes.serverList}>
            <IconButton className={classes.serverIcon}>
                <Avatar  
                    alt="Discord"
                    src={DiscordIcon}
                />
            </IconButton>
            <IconButton className={classes.serverIcon} >
                <Avatar 
                    alt="Doge"
                    src={Doge}
                />
            </IconButton>
            <IconButton className={classes.serverIcon} >
                <Avatar 
                    alt="Add"
                    style={{'background-color' : GRAY_3}}
                >
                <AddIcon color="primary" style={{'background-color': GRAY_3}}/>    
                </Avatar>
            </IconButton>            
            <IconButton className={classes.serverIcon} >
                <Avatar 
                    alt="Add"
                    style={{'background-color' : GRAY_3}}
                >
                <ExploreIcon color="primary" style={{'background-color': GRAY_3}}/>    
                </Avatar>
            </IconButton>            
            
          </div>   
      );
    }
}
  
export default withStyles(useStyles)(ServerChat)