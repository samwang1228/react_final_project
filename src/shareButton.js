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
export default function shareButton()
{
    //const classes = useStyles();
    return(
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
    )
}