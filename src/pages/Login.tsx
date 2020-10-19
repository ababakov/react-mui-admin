import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

export const Login: React.FC = () => {
  const classes = useStyles()

  return (
    <Container>
      <Card className={classes.root}>
        <CardContent>
          <TextField label="Login" />
          <TextField label="Password" type="password" />
        </CardContent>
        <CardActions>
          <Button>Sign In</Button>
        </CardActions>
      </Card>
    </Container>
  )
}
