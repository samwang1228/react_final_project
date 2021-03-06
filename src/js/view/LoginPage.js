import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import firepot from '../../img/firepot.png';
import login_bg from '../../img/login_bg.jpg'
// import login_bg from '../../img/mainpage.jpg'

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
    margin:'20pt 0pt 0pt 0pt',
    width:'30vw',
    'background-color':'#303339',
  },
  loginButton:{
    width:'30vw',
    margin:'20pt 0pt 0pt 0pt',
  },
  registerButton:{
    color:'#999B9F',
    margin:'0 0 0 25vw',
  }
});

class LoginPage extends React.Component{
    // initialize
    constructor(props){
        super(props);
        this.state={
          inputUsername:'',
          inputPassword:'',
        }
        this.onRegisterButtonClick = this.onRegisterButtonClick.bind(this);
        this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    onRegisterButtonClick(){
      this.props.setCurrentPage('register');
    }

    onUsernameChange(e){
      this.setState({inputUsername:e.target.value})
    }

    onPasswordChange(e){
      this.setState({inputPassword:e.target.value})
    }

    onLoginButtonClick(e){
      if(this.state.inputUsername==='' || this.state.inputPassword===''){
        return;
      }
      this.props.Login(this.state.inputUsername,this.state.inputPassword);
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
              >???????????????
              </Typography>
              <Typography className={classes.text}
                        component="h6" 
                        variant="h6"
                        style={{top:'6vh',color:'#999B9F',margin:'5pt 0pt 0pt 0pt'}}
              >?????????????????????????????????
              </Typography>
              <TextField
                className={[classes.inputText,classes.textField].join(' ')}
                InputProps={{
                  className: classes.multilineColor
                }}
                style={{}}
                variant="outlined"
                required
                id="email"
                label="???????????????????????????"
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
                label="??????"
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
                      onClick={this.onLoginButtonClick}                 
              >
                ??????
              </Button>
              <br/>
              <Button className={classes.registerButton} onClick={this.onRegisterButtonClick}>
                ????????????                
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
              >??????QR Code??????
              </Typography>
              <Typography className={classes.text}
                        component="body1" 
                        variant="body1"
                        style={{color:'#999B9F',position:'relative',margin:'10pt 0pt 0pt 25pt'}}
              >??? <strong>CJcord ??????????????????</strong>
              </Typography>
              <br/>
              <Typography className={classes.text}
                        component="body1" 
                        variant="body1"
                        style={{color:'#999B9F',position:'relative',margin:'10pt 0pt 0pt 25pt'}}
              >?????????????????????????????????
              </Typography>
            </div>
          </div>
        </div>
      );
    }
}
  
export default withStyles(useStyles)(LoginPage)