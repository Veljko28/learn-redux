import {useSelector, useDispatch} from 'react-redux';
import { postCount } from '../redux/post/actionTypes';

const PostList = () => {

  const posts = useSelector(state => (state as any).posts)
  const dispatch = useDispatch()
  return (
    <div>
      Post List
      <div>Number of posts {posts}</div>
      <button onClick={() => dispatch(postCount)}>Remove post</button>
    </div>
  )
}

export default PostList
