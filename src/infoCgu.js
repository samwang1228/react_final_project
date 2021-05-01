import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
export default function infoCgu()
{
    //const classes = useStyles();
    return(
        <div>
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
      </div>
    )
}