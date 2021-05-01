import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import {
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  RedditIcon,
  PinterestIcon,
  LinkedinIcon,
} from 'react-share';
// import CardMedia from '@material-ui/core/CardMedia';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const handleClick = () => {
  console.info('You clicked the Chip.');
};
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  last: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              還沒想到功能QQ
    </Typography>
            <Button color="inherit">放好玩的</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            登入
          </Typography>
          <CardActionArea>

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                長庚大學
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                長庚大學是一間優質學校
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link
              href="https://www.cgu.edu.tw/"
            >
              Learn more
          </Link>

          </CardActions>
          <span>
            <FacebookShareButton
              quote="長庚大學是一間優質學校"
              hashtag="長庚大學"
              url="https://www.facebook.com/sharer.php?u=https%3A%2F%2Freactjsexample.com%2Fsocial-media-share-buttons-and-share-counts-for-react%2F"
            ><FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton
              url="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Freactjsexample.com%2Fsocial-media-share-buttons-and-share-counts-for-react%2F%26title%3DSocial%2520media%2520share%2520buttons%2520and%2520share%2520counts%2520for%2520React"
              summary="我長大學店在戰100年"
              title="私立台大"
            >
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <PinterestShareButton
              url="https://www.pinterest.com/pin/create/button/?url=https://reactjsexample.com/social-media-share-buttons-and-share-counts-for-react/&media=&description=Social%20media%20share%20buttons%20and%20share%20counts%20for%20React"
              description="長庚大學是一間優質學校"
              media="https://images.app.goo.gl/Ci6ejnXHFE31kvH4A"
            >
              <PinterestIcon size={32} round={true} />
            </PinterestShareButton>
            <TwitterShareButton
              url="https://twitter.com/intent/tweet?url=https://reactjsexample.com/social-media-share-buttons-and-share-counts-for-react/&text=Social%20media%20share%20buttons%20and%20share%20counts%20for%20React"
              title="長庚大學店"
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <RedditShareButton
              url="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Freactjsexample.com%252Fsocial-media-share-buttons-and-share-counts-for-react%252F%26title%3DSocial%2520media%2520share%2520buttons%2520and%2520share%2520counts%2520for%2520React"
              title="這網頁製作人瘋了吧"
            >
              <RedditIcon size={32} round={true} />
            </RedditShareButton>
          </span>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="https://support.google.com/mail/answer/41078?co=GENIE.Platform%3DDesktop&hl=zh-Hant" variant="body2">
                  忘記密碼了嗎?太遜了吧!
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"還沒有帳號?該註冊了吧!"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
        <div className={classes.last}>
      <Chip
        avatar={<Avatar>#</Avatar>}
        label="2330的極限?"
        onClick={handleClick}
        variant="outlined"
        component="a"
        href="https://udn.com/news/story/6839/5176175"
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="M1 ipad pro該買了吧"
        onDelete={handleDelete}
        variant="outlined"
        component="a"
        href="https://www.apple.com/tw/ipad-pro/"
      />
     <Chip
        avatar={<Avatar>#</Avatar>}
        label="傳產業將起飛?"
        onClick={handleClick}
        variant="outlined"
        component="a"
        href="https://news.cnyes.com/news/id/4634766"
      />
      <Chip
        avatar={<Avatar>QQ</Avatar>}
        label="航海王鋼鐵人沒跟到"
        onClick={handleClick}
        variant="outlined"
      />
      <Chip label="這張回壓月均線記得跟" component="a" href="https://tw.stock.yahoo.com/q/bc?s=1905" clickable variant="outlined" />
      <Chip
        avatar={<Avatar>W</Avatar>}
        label="Sam帶你飛"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
    </div>
      </Grid>
    </Grid>
  );
}