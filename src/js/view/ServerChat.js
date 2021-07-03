import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ServerPage from './Server/ServerPage';
import ServerListPage from './ServerListPage';

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
});

class ServerChat extends React.Component{
    // initialize
    constructor(props){
        super(props);
        this.state={
          channel:[],
          current_channel:{},
        }
        this.getAllChannel = this.getAllChannel.bind(this);
        this.getCurrentChannel = this.getCurrentChannel.bind(this);
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}   

    getAllChannel(){
      return this.state.channel;
    }

    getCurrentChannel(){
      return this.state.current_channel;
    }

    render(){
      const classes = this.props.classes;
      return(
        <div className={classes.mainPage}>
                      
          <ServerListPage getChannel={this.getAllChannel}/>

          <ServerPage getCurrentChannel={this.getCurrentChannel}
                      setCurrentPage={this.props.setCurrentPage}
                      getUserData={this.props.getUserData}
          />  

        </div>
      );
    }
}
  
export default withStyles(useStyles)(ServerChat)