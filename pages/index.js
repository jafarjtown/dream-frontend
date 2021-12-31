import axios from "axios";
import Posts from "../components/post/Posts";

export default function Home({ posts }) {
	return (
    <div className='body'>
      <Posts posts={posts.results} />
    </div>
	);
}

export const getServerSideProps = async (context) => {
  let res = await axios.get('http://jafaruidris.pythonanywhere.com/api/post/posts/', {
    headers: {
      'Authorization': 'Token 832cb1cd014c37a04327a0b12ee29086e930df14'
    }
  })
  let posts = await res.data
  return {
    props: {
      posts
    }
    
  }
}
