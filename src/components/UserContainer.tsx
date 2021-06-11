import React from 'react'
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { State, User } from '../redux/tsTypes';
import { getApiUsers, addUser, handleUser } from '../redux/user/userTypes';
import { ApiUserDisplayCard } from './ApiUserDisplayCard';
import { v4 } from 'uuid';


const UserContainer = () => {
  const dispatch = useDispatch();
  const user: User = useSelector((state: State) => state.user.userDetails)!;
  const users = useSelector((state: State) => state.user.apiUsers);  
  return (
    <div>
      <h2>User Add</h2>
      <input type="text" value={user.name} onChange={e => dispatch(handleUser({...user,name: e.target.value }))}
      placeholder="Real Name"/>
      <br/>
      <input type="text" value={user.username} onChange={e => dispatch(handleUser({...user,username: e.target.value })) }
      placeholder="Username"/>
      <br/>
      <input type="text" value={user.company.name} onChange={e => dispatch(handleUser({...user,company: {
        name: e.target.value
      }}))
      }
      placeholder="Company"/>
      <br/>
      <button onClick={() => dispatch(addUser(user))}>Add User</button>
      <br/>
      <button onClick={() => dispatch(getApiUsers())}>Get Users</button>
      <Grid container >
        {users.map(x => { return (
          <ApiUserDisplayCard user={x} key={v4()} />
          )})}
      </Grid>
    </div>
  )
}

export default UserContainer
