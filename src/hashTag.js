import Chip from '@material-ui/core/Chip';
// import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Avatar from '@material-ui/core/Avatar';
const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
export default function hashtag()
{
    return(
        <div >
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
    )
}