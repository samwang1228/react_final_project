import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';

import Doge from '../../img/doge.png';


var GRAY_1 = '#202225';
var GRAY_2 = '#2F3136';
var GRAY_3 = '#36393F';
var WHITE_1 = '#6F6D74';

const useStyles = (theme) => ({
    chatItemName:{
        color:'white',
    },
    chatItemText:{
        color:'white',    
    },
    chatItemTime:{
        color:WHITE_1,
    },
    chatItemTextPart:{
        margin:'0 10pt',
    },
    personStatusBox:{
        display:'flex',
        margin:'7px 10px',
    },
});

class PersonStatus extends React.Component{
    // initialize
    constructor(props){
        super(props);
        this.onPersonSettingClick = this.onPersonSettingClick.bind(this);
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    onPersonSettingClick(e){
        this.props.setCurrentPage('personSetting');
    }

    render(){
      const classes = this.props.classes;
      return(
          <div className='personStatus'>
            <div className={classes.personStatusBox}>
                <Avatar className={classes.serverMemberIcon} 
                            alt="Doge"
                            src={Doge}
                />
                <div className={classes.chatItemTextPart}>                    
                    <typography className={classes.chatItemName}
                                component="h3" 
                                variant="h3"
                    > <strong>{this.props.getUserData()['userName']}</strong>
                    </typography> 
                    <br/>
                    <typography className={classes.chatItemText}
                                component="h5" 
                                variant="h5"
                    >#1234
                    </typography> 
                </div>
                <IconButton style={{margin:'5pt 0pt 0pt 20pt',height:'20pt'}}
                            onClick={this.onPersonSettingClick}
                >
                    <SettingsIcon color="action" />
                </IconButton>  
            </div>               
          </div>
      );
    }
}
  
export default withStyles(useStyles)(PersonStatus)