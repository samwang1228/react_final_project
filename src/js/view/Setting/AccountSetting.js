import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Doge from '../../../img/doge.png';
import Button from '@material-ui/core/Button';

var GRAY_2 = '#2F3136';
var WHITE_2 = '#323D42';

const useStyles = (theme) => ({
  settingTitleText:{
    color:'white',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin:'20px',
  },
  chatItemName:{
    color:'white',
  },
  chatItemText:{
      color:'white',    
  },
  personInfoContainer:{
    display:'flex',
    'background-color': GRAY_2,
    height:'100px',
  },
  chatItemTextPart:{
    margin:'25px 0px',
  },
  serverHR:{
    'border-color':WHITE_2,    
    height:'0pt',
  },
});

class AccountSetting extends React.Component{
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
          <div className='accountSetting'>   
            <div className='myAccount'>
              <typography className={classes.settingTitleText}
                                component="h2" 
                                variant="h2"
              > <strong>我的帳號</strong>
              </typography>
              <br/><br/>
              <div className={classes.personInfoContainer}>
                <Avatar className={classes.large} 
                                alt="Doge"
                                src={Doge}                            
                />
                <div className={classes.chatItemTextPart}>                    
                    <typography className={classes.chatItemName}
                                component="h2" 
                                variant="h2"
                    > <strong>{this.props.getUserData()['userName']}</strong>
                    </typography>
                    <typography className={classes.chatItemText}
                                component="h4" 
                                variant="h4"
                    >#1234
                    </typography> 
                </div>
              </div>
            </div>                   
            <br/>   
            <hr className={classes.serverHR}/>
            <br/>
            <div className='changePassword'>              
              <typography className={classes.settingTitleText}
                                component="h2" 
                                variant="h2"
              > <strong>密碼與驗證</strong>
              </typography>
              <br/><br/>
              <Button variant="contained" color="primary">
              更改密碼
              </Button>
            </div>       
            <br/>   
            <hr className={classes.serverHR}/>
            <br/>
            <div className='deleteData'>
              <typography className={classes.settingTitleText}
                                component="h2" 
                                variant="h2"
              > <strong>移除帳號</strong>
              </typography>
              <br/><br/>
              <Button variant="contained" color="secondary">
               停用帳號
              </Button>
              <Button variant="outlined" color="secondary" style={{margin:'0 20px'}}>
               刪除帳號
              </Button>
            </div>
          </div>   
      );
    }
}
  
export default withStyles(useStyles)(AccountSetting);