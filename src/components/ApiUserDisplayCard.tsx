import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // maxWidth: 500,
    margin: 15,
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


export const ApiUserDisplayCard = (props: any) => {
  const classes = useStyles();
  const {user} = props;
  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {user.id}
        </Typography>
        <Typography variant="h5" component="h2">
          {user.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {user.username}
        </Typography>
        <Typography variant="body2" component="p">
          Hello I work for {user.company.name}
        </Typography>
      </CardContent>
      </Card>
    </Grid>
  )
}
