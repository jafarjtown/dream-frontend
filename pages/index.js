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
  let res = await axios.get('http://localhost:8000/api/post/posts/', {
    headers: {
      'Authorization': 'Token 7cecbddec612c49cf423a6126d21bb95a5f9b486'
    }
  })
  let posts = await res.data
  return {
    props: {
      posts
    }
    
  }
}