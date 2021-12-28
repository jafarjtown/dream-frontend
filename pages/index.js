
import { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Post from '../components/post/Post'
import Story from '../components/story/Story'
export default function Home({ posts }) {
  const [post, setpost] = useState(posts.results)
  useEffect(() => {
    const postBottom = document.querySelector('#last')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(async entry => {
        if (entry.isIntersecting) {
          if (posts.next !== null) {
            const req = await fetch(posts.next)
            const res = await req.json()
            setpost([...post, res.results])
          }
        }
      })
    }, {
      threshold: 1
    })
    observer.observe(postBottom)
  }, [posts.next, post])
  return (
    <>
  
      <div className='stories'>
        {
          [1,1,1,1,1,1].map(( story, key) => {
            return <Story key={key} story={ story }/>
          })
        }
      </div>
      <div>
        {
          post.map((post) => {
            return <Post key={post.id} post={ post }/>
          })
        }
        <div id='last'/>
      </div>

      
    </>
  )
}

export async function getStaticProps() {
  const post = await fetch('http://jafaruidris.pythonanywhere.com/api/post/posts/', {
    method: 'GET',
    headers: {
      'Authorization': `Token 7cecbddec612c49cf423a6126d21bb95a5f9b486`
  }
  })
//   const story = await fetch('http://localhost:8000/api/post/story/', {
//     method: 'GET',
//     headers: {
//       'Authorization': `Token 7cecbddec612c49cf423a6126d21bb95a5f9b486`
//   }
//   })
  const posts = await post.json()
//   const stories = await story.json()
  return {
    props: {
      posts,
//       stories
    }
  }
}
