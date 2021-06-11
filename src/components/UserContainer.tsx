import React from 'react'
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/tsTypes';
import { getApiUsers, loginUser } from '../redux/user/userTypes';
import { ApiUserDisplayCard } from './ApiUserDisplayCard';


const UserContainer = () => {
  const [user,handleUser] = React.useState({
    name: '',
    password: ''  
  });
  const dispatch = useDispatch();
  const userName = useSelector((state: State) => state.user.userDetails?.name);
  const users = useSelector((state: State) => state.user.apiUsers);  
  return (
    <div>
      <h2>User Login</h2>
      <input type="text" value={user.name} onChange={e => handleUser({...user,name: e.target.value })}/>
      <br/>
      <input type="password" value={user.password} onChange={e => handleUser({...user,password: e.target.value })}/>
      <br/>
      <button onClick={() => dispatch(loginUser(user))}>Login</button>
      <h3 style={{display: userName ? "block" : "none"}}>Hello {userName}</h3>
      <br/>
      <button onClick={() => dispatch(getApiUsers())}>Get Users</button>
      <Grid container xs={12}>
        {users.map(x => { return (
          <ApiUserDisplayCard user={x} />
          )})}
      </Grid>
    </div>
  )
}

export default UserContainer
