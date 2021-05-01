import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
export default function forget()
{
    //const classes = useStyles();
    return(
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
    )
}