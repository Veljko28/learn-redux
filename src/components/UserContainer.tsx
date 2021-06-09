import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/tsTypes';
import { loginUser } from '../redux/user/userTypes';

const UserContainer = () => {
  const [user,handleUser] = React.useState({
    name: '',
    password: ''  
  });
  const dispatch = useDispatch();
  const userName = useSelector((state: State) => (state as any).user.userDetails?.name);
  return (
    <div>
      <h2>User Login</h2>
      <input type="text" value={user.name} onChange={e => handleUser({...user,name: e.target.value })}/>
      <br/>
      <input type="password" value={user.password} onChange={e => handleUser({...user,password: e.target.value })}/>
      <br/>
      <button onClick={() => dispatch(loginUser(user))}>Login</button>
      <h3 style={{display: userName ? "block" : "none"}}>Hello {userName}</h3>
    </div>
  )
}

export default UserContainer
