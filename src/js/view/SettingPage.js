import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import DonatePage from './Setting/DonatePage';
import AccountSetting from './Setting/AccountSetting';

var GRAY_1 = '#202225';
var GRAY_2 = '#2F3136';
var GRAY_3 = '#36393F';

var WHITE_2 = '#323D42';

const useStyles = (theme) => ({
  settingPage:{
    display:'flex',
  },
  settingOutside:{
    
  },
  settingLeft:{
    'background-color': GRAY_2,
    height:'100vh',
    width:'27vw',
  },
  settingRight:{
    'background-color': GRAY_3,
    height:'100vh',
    width:'73vw',
    display:'flex',
  },
  settingLeftBox:{
    margin:'10vh 10vw',
    width:'15vw',
  },
  settingRightBox:{
    margin:'10vh',
    width:'40vw',
  },
  colorWhite:{
    color:'white',
  },
  settingListItem:{
    height:'30px',  
  },
  serverHR:{
    'border-color':WHITE_2,    
    height:'0pt',
  },
  settingExit:{
    margin:'10vh',
  }
});

class SettingPage extends React.Component{
    // initialize
    constructor(props){
        super(props);
        this.state={
          settingPage:'normal',
        }
        this.onExitButtonClick = this.onExitButtonClick.bind(this);
        this.setSettingPage = this.setSettingPage.bind(this);
        this.settingPageProvider = this.settingPageProvider.bind(this);
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    onExitButtonClick(){
      this.props.returnLastPage();
    }

    setSettingPage(page){
      this.setState({settingPage:page})
    }

    settingPageProvider(){
      switch(this.state.settingPage){
        case 'normal':
          return (<AccountSetting getUserData={this.props.getUserData}/>);
        case 'donate':
         return (<DonatePage/>);
        default:
          return (<h1>Error Happened!</h1>);
      }
    }

    render(){
      const classes = this.props.classes;
      return(
        <div className={classes.settingPage}>
            <div className={classes.settingLeft}>
              <div className={classes.settingLeftBox}>
                <List component="nav">
                  <ListItem button className={classes.settingListItem}>
                    <ListItemText className={classes.colorWhite} onClick={e=>{this.setSettingPage('normal');}}>我的帳號</ListItemText>
                  </ListItem>
                  <ListItem button className={classes.settingListItem}>
                    <ListItemText className={classes.colorWhite} onClick={e=>{this.setSettingPage('donate');}}>關於我們</ListItemText>
                  </ListItem>
                  <ListItem button className={classes.settingListItem}>
                    <ListItemText className={classes.colorWhite}>已授權的應用程式</ListItemText>
                  </ListItem>
                  <ListItem button className={classes.settingListItem}>
                    <ListItemText className={classes.colorWhite}>連接</ListItemText>
                  </ListItem>
                  <hr className={classes.serverHR}/>
                </List>
              </div>
            </div>
            <div className={classes.settingRight}>
              <div className={classes.settingRightBox}>
                {this.settingPageProvider()}
              </div>
              <div className={classes.settingExit}>
                <IconButton className={classes.serverIcon}
                            onClick={this.onExitButtonClick}
                >
                  <HighlightOffIcon style={{color:'white'}} fontSize="large"/>
                </IconButton>
              </div>              
            </div>            
        </div>   
      );
    }
}
  
export default withStyles(useStyles)(SettingPage)