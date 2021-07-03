import React from 'react';
import { withStyles } from '@material-ui/core/styles';

var GRAY_1 = '#202225';
var GRAY_2 = '#2F3136';
var GRAY_3 = '#36393F';
var GRAY_WORD = '#999B9F';

const useStyles = (theme) => ({
    serverChannel:{
        height:'75vh',
    },
});

class ServerPage extends React.Component{
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
        <div className={classes.serverChannel}>
            <div className='serverChannelItem'>
                <typography variant="caption" display="block" gutterBottom
                    style={{color: GRAY_WORD,position:'relative',margin:'15pt 15pt'}}
                    >v 文字頻道
                </typography>
                <br/>
                <div className='serverChannelRoom'>
                    <typography
                        component="h3" 
                        variant="h3"
                        style={{color:'white',margin:'15pt 15pt'}}
                        > <strong># 幹話R你各位</strong>
                    </typography>
                </div>
                <br/>                
            </div>            
            <div className='serverChannelItem'>
                <typography variant="caption" display="block" gutterBottom
                    style={{color: GRAY_WORD,position:'relative',margin:'15pt 15pt'}}
                    >v 語音頻道
                </typography>
                <br/>

                <div className='serverChannelRoom'>
                    <typography
                        component="h3" 
                        variant="h3"
                        style={{color: GRAY_WORD,margin:'15pt 15pt'}}
                        ># 一般
                    </typography>
                </div> 
                <br/>               
            </div>
        </div>
      );
    }
}
  
export default withStyles(useStyles)(ServerPage)