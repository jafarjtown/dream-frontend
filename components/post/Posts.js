import React from 'react'
import Post from './Post'
import styles from '../../styles/Post.module.css'
export default function Posts({ posts }) {
    return (
        <div className={styles.posts}>
            {
                posts.map((item, key) => <Post post={item} key={key} />)
            }
        </div>
    )
}
