import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width:'100vh',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ResultCard(props) {
  const { weChatID, reportedTimes, isSpammer, action } = props
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {weChatID} <br />查询结果
        </Typography>
        <Typography variant="h5" component="h2">
          {
              isSpammer?
                <div>
                    「有嫌疑」
                </div>:
                <div>
                    「无嫌疑」
                </div>
          }
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          此人已经被举报 {reportedTimes} 次
        </Typography>
      </CardContent>
      {action}
      <CardActions>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
            已有?人参与举报
        </Typography> */}
      </CardActions>
    </Card>
  );
}
