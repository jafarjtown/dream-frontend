import React from 'react'
import { IoChatboxEllipsesOutline, IoEllipsisVertical, IoMoon, IoSchoolOutline, IoShareOutline, IoStar, IoThumbsUpOutline } from 'react-icons/io5'
import { GiGroundSprout, Gi3DGlasses, GiAbacus} from 'react-icons/gi'
import styles from '../../styles/Post.module.css'
import Link from 'next/link'
const AuthorInfo = ({user, post}) => {
	console.log(user)
	return (
		<div className={styles.wrapper}>
			<div className={styles.avatar_user}>
				<img alt='' src={ user.avatar }/>
			</div>
			<div className={styles.name_user}>
				{ user.first_name !== '' ? user.first_name + ' ' + user.last_name : user.username}
			</div>
			<div className={styles.badge}>
				{
					user.is_teacher && <Gi3DGlasses />
					
				}
				{
					user.is_student &&  <GiAbacus />
				}
				
			</div>
			{
				post.related_to === 'group' && <div className={styles.related}>
				<img alt='' src={post.group[0].logo} />
					<span>{ post.group[0].name} <GiGroundSprout /></span>
				</div>
			
			}
			{
				post.related_to === 'institution' && <div className={styles.related}>
				<img alt={post.institution[0].name} src={post.institution[0].logo} />
					<span>{ post.institution[0].name} <IoSchoolOutline /></span>
				</div>
			
			}
			
		</div>
	)
}
const DisplayOneFile = ({ url }) => {
	let type = url[0].file.split('.')
	let medias = {
		videos: [
			'mp4'
		],
		music: [
			'mp3'
		],
		image: [
			'png', 'jpg', 'jpeg'
		]
	}
	if (medias.videos.includes(type[type.length - 1])) return <video src={url[0].file} className={styles.media} preload='metadata' title='media' controls/>
	return 'yes'
}
const DisplayFile = ({ files }) => {
	if(files.length < 1) return null
	if (files.length > 1) {
		return (
			<></>
		)
	}
	return <DisplayOneFile url={files} />
}
export default function Post({ post }) {
	return (
		<Link href={`/post/${post.id}`} passHref>
		<div className={styles.post}>
			<div className={styles.header}>
				<AuthorInfo user={post.author} post={post} />
				<button>
						<IoEllipsisVertical />
				</button>
			</div>
			<div className={styles.body}>
				<div className={styles.files}>
					<DisplayFile  files={post.files}/>
				</div>
				<p className={styles.paragraph}>
					{post.status}
				</p>
			</div>
			<div className={styles.footer}>
				<button>
					<IoThumbsUpOutline /> 50+
				</button>
				<Link href={`/post/${post.id}`} passHref>
					<button>
						<IoChatboxEllipsesOutline /> comments 50+
					</button>
				</Link>
				<button>
					<IoShareOutline /> share
				</button>
			</div>

			
			</div>
			</Link>
	)
}
