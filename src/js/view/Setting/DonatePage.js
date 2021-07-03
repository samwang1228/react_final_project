import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
const useStyles = (theme) => ({
    '@global': {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
      },
      toolbar: {
        flexWrap: 'wrap',
      },
      center: {
        display: 'flex',
        justifyContent: 'center',
        color:'white',
    //   justifyContent: 'center',
      alignItems: 'center',
      },
      link: {
        margin: theme.spacing(1, 2),
        display:'inline',
        color:'white',
      },
      cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
      },
      footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(6),
        },
      },
    });
    
    const tiers = [
      {
        title: 'Free',
        price: '0',
        description: [
            '免費體驗', 
            '不太好吧', 
            '體諒大學生', 
            '拜託了'],
        buttonText: '請別案這裡',
        buttonVariant: 'outlined',
      },
      {
        title: 'Pro',
        subheader: 'Most popular',
        price: '150',
        description: [
          '這學期',
          '功課有夠多',
          '一直寫程式',
          '精疲力盡',
          '隨時想睡',
          '需要提神',
          '',
        ],
        buttonText: '請我們喝杯咖啡',
        buttonVariant: 'outlined',
      },
      {
        title: 'Enterprise',
        price: '999',
        description: [
          '乾爹的支持',
          '是我們動力',
          '未來一定有',
          '更棒的作品',
        ],
        buttonText: '謝謝乾爹',
        buttonVariant: 'outlined',
      },
    ];
    const footers = [
      {
        title: 'Teams',
        description: ['第4組' ],
      },
      {
        title: 'frontend',
        description: ['React'],
      },
      {
        title: 'Backend',
        description: ['Postsql','Django'],
      },
      {
        title: 'component',
        description: ['Materia-ui', 'Axios', 'Router'],
      },
    ];
class DonatePage extends React.Component{
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
          <div className='donatePage'>                       
             <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="static" color="default" elevation={0} className={classes.appBar}> */}
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" color="inherit" noWrap className={classes.link}>
            長庚大學
          </Typography>
          <nav>
            <Typography variant="h5" color="white" noWrap className={classes.link}>
              資訊工程學系
            </Typography>
            <Typography variant="h5" color="textPrimary" className={classes.link}>
              葉季儒
            </Typography>
            <Typography variant="h5" className={classes.link}>
              王紹丞
            </Typography>
          </nav>
         
        </Toolbar>
        <h2 className={classes.center}>
              Donate
            </h2>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
            
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
            
              <Card>
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}> {/*xs=6,sm=3對下面介紹切版*/}
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
         
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
          </div>   
      );
    }
}
  
export default withStyles(useStyles)(DonatePage);