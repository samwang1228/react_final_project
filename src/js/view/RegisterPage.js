import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import firepot from '../../img/firepot.png';
import login_bg from '../../img/login_bg.jpg'

const useStyles = (theme) => ({
  loginPage:{
    height:'100vh',
    width:'100vw',
    display:'grid',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    'backgroundImage':'url('+login_bg+')',
  },
  cardOutside:{
    height:'70vh',
    width:'60vw',
    margin:'13vh 20vw', //top left
    display:'flex',
    'background-color': '#36393F',
  },
  cardLeft:{
    margin:'0vh 3vw',
  },
  text:{

  },
  multilineColor:{
    color:'white',
  },
  textField:{
    color:'white',
    margin:'10pt 0pt 0pt 0pt',
    width:'30vw',
    'background-color':'#303339',
  },
  loginButton:{
    width:'30vw',
    margin:'20pt 0pt 0pt 0pt',
  }
});

class RegisterPage extends React.Component{
    // initialize
    constructor(props){
        super(props);
        this.state={
          inputUsername:'',
          inputPassword:'',
          inputNickName:'',
        }
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onNicknameChange = this.onNicknameChange.bind(this);
        this.onRegisterButtonClick = this.onRegisterButtonClick.bind(this);
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    onUsernameChange(e){
      this.setState({inputUsername:e.target.value})
    }

    onPasswordChange(e){
      this.setState({inputPassword:e.target.value})
    }

    onNicknameChange(e){
      this.setState({inputNickname:e.target.value})
    }

    onRegisterButtonClick(e){
      if(this.state.inputUsername==='' || this.state.inputPassword==='' || this.state.inputNickname===''){
        return;
      }
      this.props.Register(this.state.inputUsername,this.state.inputNickname,this.state.inputPassword);
    }

    render(){
      const classes = this.props.classes;
      return(
        <div className={classes.loginPage}>
          <div className={classes.cardOutside}>
            <div className={classes.cardLeft}>
              <Typography className={classes.text}
                        component="h5" 
                        variant="h5"
                        style={{color:'white',position:'relative',margin:'20pt 0pt 0pt 0pt'}}
              >歡迎回來！
              </Typography>
              <Typography className={classes.text}
                        component="h6" 
                        variant="h6"
                        style={{top:'6vh',color:'#999B9F',margin:'5pt 0pt 0pt 0pt'}}
              >我們很高興又見到您了！
              </Typography>
              <TextField
                className={[classes.inputText,classes.textField].join(' ')}
                InputProps={{
                  className: classes.multilineColor
                }}
                style={{}}
                variant="outlined"
                required
                id="nick"
                label="暱稱"
                name="nick"
                autoFocus
                onChange={this.onNicknameChange}
              />
              <br/>
              <TextField
                className={[classes.inputText,classes.textField].join(' ')}
                InputProps={{
                  className: classes.multilineColor
                }}
                style={{}}
                variant="outlined"
                required
                id="email"
                label="電子郵件或電話號碼"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.onUsernameChange}
              />
              <br/>
              <TextField
                className={[classes.inputText,classes.normalDistance,classes.textField].join(' ')}
                InputProps={{
                  className: classes.multilineColor
                }}
                variant="outlined"
                required
                name="password"
                label="密碼"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.onPasswordChange}
              />
              <br/>
              <Button className={classes.loginButton}
                      type="submit"
                      variant="contained"
                      color="primary"
                      style={{}}    
                      onClick={this.onRegisterButtonClick}                
              >
                註冊
              </Button>
            </div>
            <div className='CardRight'>
              <img src={firepot}
                   style={{margin:'45pt 0pt 0pt 25pt'}}
              />
              <Typography className={classes.text}
                        component="h5" 
                        variant="h5"
                        style={{color:'white',position:'relative',margin:'10pt 0pt 0pt 25pt'}}
              >使用QR Code登入
              </Typography>
              <Typography className={classes.text}
                        component="body1" 
                        variant="body1"
                        style={{color:'#999B9F',position:'relative',margin:'10pt 0pt 0pt 25pt'}}
              >用 <strong>CJcord 行動應用程式</strong>
              </Typography>
              <br/>
              <Typography className={classes.text}
                        component="body1" 
                        variant="body1"
                        style={{color:'#999B9F',position:'relative',margin:'10pt 0pt 0pt 25pt'}}
              >對此掃描就能立即登入。
              </Typography>
            </div>
          </div>
        </div>
      );
    }
}
  
export default withStyles(useStyles)(RegisterPage)