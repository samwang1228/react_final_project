import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Doge from '../../../img/doge.png';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';

var GRAY_1 = '#202225';
var GRAY_2 = '#2F3136';
var GRAY_3 = '#36393F';
var WHITE_1 = '#6F6D74';

const useStyles = (theme) => ({
  serverTalk:{
    width : '62vw',
  },
  chatItem:{
    display : 'flex',
  },
  generalTalkText:{

  },
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
  serverHR:{
    'border-color':GRAY_1,    
    height:'0pt',
    // position:'absolute',
    // margin:'50px 0',
  },
  textField:{
    width:'50vw',
    margin:'0 20px',
  },
  multilineColor:{
    color:'white',
  },
});

class ServerTalkArea extends React.Component{
    // initialize
    constructor(props){
        super(props);
        this.state={
          inputTalkText:'',
        }
        this.onTalkInputKeyDown = this.onTalkInputKeyDown.bind(this);
        this.onTalkInputChange = this.onTalkInputChange.bind(this);
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    onTalkInputKeyDown(e){
      if(e.which === 13){
        this.setState({inputTalkText:e.target.value});
        this.props.sendMessage(this.state.inputTalkText);
      }
    }

    onTalkInputChange(e){
      this.setState({inputTalkText:e.target.value});
    }

    talkItemProvider(){
      const classes = this.props.classes;
      let MsgArray = [];
      for(let i=0;i<this.props.getMessage()[0]['rooms'][0]['chat'].length;i++){
        MsgArray.push((
          <ListItem className={classes.chatItem}>
            <Avatar className={classes.serverMemberIcon} 
                        alt="Doge"
                        src={Doge}
            />
            <div className={classes.chatItemTextPart}>                    
                <typography className={classes.chatItemName}
                            component="h3" 
                            variant="h3"
                > <strong>{this.props.getMessage()[0]['rooms'][0]['chat'][i]['nick']}</strong>
                </typography> 
                <typography className={classes.chatItemTime}
                            component="title1" 
                            variant="title1"
                > <strong>{this.props.getMessage()[0]['rooms'][0]['chat'][i]['time']}</strong>
                </typography> 
                <br/>
                <typography className={classes.chatItemText}
                            component="h5" 
                            variant="h5"
                >{this.props.getMessage()[0]['rooms'][0]['chat'][i]['message']}
                </typography> 
            </div>    
            </ListItem>
        ));
      }      
      
      return MsgArray;
    }

    render(){
      const classes = this.props.classes;
      return(
        <div className='serverTalk'>   
          <div className='serverTalkArea' style={{height:'75vh'}}>
            <List className='serverTalkList'>
                {this.talkItemProvider()}
            </List> 
          </div>   
          <hr className={classes.serverHR} style={{'width':'62vw'}}/>
          <div className='serverTalkInputArea'>
            <TextField className={classes.textField} 
                       label="Filled" 
                       variant="filled" 
                       size='small'
                       InputProps={{
                         className: classes.multilineColor
                       }}
                       onKeyDown={this.onTalkInputKeyDown}
                       onChange={this.onTalkInputChange}
            />
          </div>
        </div>  
      );
    }
}
  
export default withStyles(useStyles)(ServerTalkArea)