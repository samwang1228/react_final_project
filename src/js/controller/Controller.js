import { ContactsOutlined, ThreeSixtySharp, TrendingUpOutlined } from '@material-ui/icons';
import React from 'react';
import LoginPage from '../view/LoginPage';
import ServerChat from '../view/ServerChat';
import SettingPage from '../view/SettingPage';
import RegisterPage from '../view/RegisterPage';
import MainPage from '../view/MainPage';
import { apiLogin, apiRegister } from '../view/Api/API';
import {initGA,logPageView} from '../google_analysis/ga';

class Controller extends React.Component{    
    constructor(props){
        super(props);
        this.state={
            isLogin:false,
            user:{
                userid:'1',
                userName:'Toby',
                userIcon:'',
            },
            currentPage:'mainpage',
            lastPage:'',
        }
        this.isLogin = this.isLogin.bind(this);
        this.changeLogin = this.changeLogin(this);
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.Login = this.Login.bind(this);
        this.Register = this.Register.bind(this);
        this.returnLastPage = this.returnLastPage.bind(this);
        this.getUserData = this.getUserData.bind(this);
    }

    componentDidMount(){
        // initGA();
    }
    componentWillUnmount(){}

    isLogin(){
        return this.state.isLogin;
    }

    changeLogin(){
        this.setState(
            {isLogin:!this.state.isLogin}
        );
    }

    Login(username,password){
        apiLogin(username,password).then(result => {
            if(result.status!==200){
                console.log('Login Failed');
                return;
            }
            this.state.user['userid']=result.data.id;
            this.state.user['userName']=result.data.nickname;
            this.setState(
                {   isLogin:true,
                    user:this.state.user,
                }
            );
            this.setCurrentPage('serverChat');
            console.log(this.state.user);
        });
    }

    Register(username,nickname,password){
        apiRegister(username,nickname,password).then(result => {
            if(result.status!==200){
                console.log('Login Failed');
                return;
            }
            console.log('Login Success');
            this.setCurrentPage('login');
        });
    }

    setCurrentPage(page){
        // logPageView(page);
        this.setState(
            {lastPage:this.state.currentPage,
             currentPage:page
            }
        );
    }

    returnLastPage(){
        // logPageView(this.state.lastPage);
        this.setState(
            {currentPage:this.state.lastPage}
        );
    }

    getUserData(){
        return this.state.user;
    }

    render(){
        if(!this.state.isLogin){
            switch(this.state.currentPage){
                case 'mainpage':
                    return(<MainPage setCurrentPage={this.setCurrentPage}
                            />);
                case 'login':
                    return(<LoginPage 
                                setCurrentPage={this.setCurrentPage}
                                Login={this.Login}
                            />);
                case 'register':
                    return(<RegisterPage
                                setCurrentPage={this.setCurrentPage}
                                Register={this.Register}
                           />);
                default:
                    return (<h1>Error Happened!</h1>);
            }
            
        }

        switch(this.state.currentPage){
            case 'serverChat':
                return(<ServerChat
                            setCurrentPage={this.setCurrentPage}
                            getUserData={this.getUserData}
                        />
                );
            case 'personSetting':
                return (<SettingPage
                            returnLastPage={this.returnLastPage}
                            getUserData={this.getUserData}
                        />                    
                );
            default:
                return (<h1>Error Happened!</h1>);
        }
    }
}

export default Controller