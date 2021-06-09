import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import './App.css';
import PostList from './componets/PostList';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PostList />
    </div>
    </Provider>
  );
}

export default App;
