import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import './App.css';
import PostList from './components/PostList';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PostList />
      <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
