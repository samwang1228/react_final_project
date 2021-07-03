import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';

import ServerMemberPage from './ServerMemberPage';
import ServerChannel from './ServerChannel';
import ServerTalkArea from './ServerTalkArea';
import PersonStatus from '../PersonStatus';

import Doge from '../../../img/doge.png';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { apiGetMessage, apiSendMessage , apiGetMember } from '../Api/API';

var GRAY_1 = '#202225';
var GRAY_2 = '#2F3136';
var GRAY_3 = '#36393F';

const useStyles = (theme) => ({
  serverContent:{
    display:'flex',
    height:'100vh',
  },
  serverHR:{
    'border-color':GRAY_1,    
    height:'0pt',
  },
  serverInfo:{
    'background-color': GRAY_2, 
    width : '160pt',
    // display: 'grid',
  },  
});

class ServerPage extends React.Component{
    // initialize
    constructor(props){
        super(props);
        // this.state = {date:new Date()};
        this.state={
          member:[
            {rank:'lvl1',
              member:[
                // {userid:1,avater:'avater',nick:'nick',state:'state',online:true},
                // {userid:2,avater:'avater',nick:'nick2',state:'state',online:true},
                // {userid:2,avater:'avater',nick:'nick3',state:'state',online:true},
              ]
            }
          ],
          message:[{
            group:'文字頻道',rooms:[{
              room:'幹話R你各位',type:'text',chat:[
                // {time:'2021-06-14',userid:1,nick:'nick',message:'message'},
                // {time:'2021-06-15',userid:1,nick:'nick',message:'message'},
                // {time:'2021-06-16',userid:1,nick:'nick',message:'message'},
                // {time:'2021-06-17',userid:1,nick:'nick',message:'message'},
                // {time:'2021-06-18',userid:1,nick:'nick',message:'message'},            
              ]
            }
            ]            
          }
          ]
        }
        this.getMember = this.getMember.bind(this);
        this.getMessage = this.getMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

        this.loadMember = this.loadMember.bind(this);
        this.loadMessage = this.loadMessage.bind(this);
    }
    // mount component(render to DOM), only once
    componentDidMount(){
      this.loadMessage();
      this.loadMember();
    }      
    // unmount component, only once
    componentWillUnmount(){}    

    loadMember(){
      apiGetMember().then(result => {
        if(result.status!==200){
            console.log('Load Message Failed');
            return;
        }
        // console.log(result);
        this.state.member[0]['member'].length=0;
        for(let i=0;i<result.data.data.length;i++){
          this.state.member[0]['member'].push({
            userid:result.data.data[i]['id'],
            avater:'avater',
            nick:result.data.data[i]['nickname'],
            state:'',
            online:result.data.data[i]['login_check'],
          });          
        }
        console.log(this.state.member);
        this.setState({member:this.state.member});        
      });
    }

    getMember(){
      return this.state.member;
    }

    loadMessage(){
      apiGetMessage().then(result => {
        if(result.status!==200){
            console.log('Load Message Failed');
            return;
        }
        console.log(result);
        this.state.message[0]['rooms'][0]['chat'].length=0;
        for(let i=0;i<result.data.length;i++){
          this.state.message[0]['rooms'][0]['chat'].push({
            time:result.data[i]['date'],
            userid:result.data[i]['id'],
            nick:result.data[i]['nickname'],
            message:result.data[i]['cotent'],
          });          
        }

        this.setState({message:this.state.message});
        
      });
    }

    getMessage(){
      return this.state.message;
    }

    sendMessage(message){
      let userid = this.props.getUserData()['userid'];
      let userName = this.props.getUserData()['userName'];
      apiSendMessage(userid,userName,message).then(result => {
        if(result.status!==200){
            console.log('Send Message Failed');
            return;
        }
        console.log('Send',message); 
        this.loadMessage();       
      });      
    }

    render(){
      const classes = this.props.classes;
      return(
        <div className='serverTalk'>
          <div className={classes.serverContent}>
            <div className={classes.serverInfo}>
                <div className='serverName'
                    style={{display:'flex',height:'50px'}}
                >
                    <typography
                    component="h4" 
                    variant="h4"
                    style={{color:'white',margin:'12pt 17pt'}}
                    > <strong>Dogeeeee</strong>
                    </typography>                    
                    <IconButton style={{margin:'12pt 0pt 0pt 20pt',height:'20pt'}}>
                        <SettingsIcon color="action" />
                    </IconButton>                    
                </div>  
                <hr className={classes.serverHR} style={{'width':'160pt'}}/>   
                <ServerChannel/>
                <hr className={classes.serverHR} style={{'width':'160pt'}}/> 
                <PersonStatus setCurrentPage={this.props.setCurrentPage}
                              getUserData={this.props.getUserData}
                />
            </div>            
            <div class={classes.serverTalk}>
              <div className='serverChannelName' style={{height:'50px',display:'flex'}}>
                  <typography
                  component="h4" 
                  variant="h4"
                  style={{color:'white',margin:'12pt 15pt'}}
                  > <strong># {this.state.message[0]['rooms'][0]['room']}</strong>
                  </typography>                  
              </div>
              <hr className={classes.serverHR} style={{'width':'62vw'}}/> 
              <ServerTalkArea getMessage={this.getMessage}
                              sendMessage={this.sendMessage}
              />
            </div>
            <ServerMemberPage getMember={this.getMember}/>
          </div>
        </div>
      );
    }
}
  
export default withStyles(useStyles)(ServerPage)