import styles from '../../styles/Header.module.css'
import { IoApps, IoCartOutline, IoHomeOutline, IoNotificationsOutline, IoSchoolOutline, IoSearch, IoTrashBinOutline } from 'react-icons/io5'
import Link from 'next/link'
export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.right}>
				<div className={styles.site_name}>
					Dream
				</div>
				<div className={styles.search_div}>
					<input type='text' name='search_text' />
					<button>
						<IoSearch />
					</button>
				</div>
			</div>
			<div className={styles.left}>
				<div className={styles.subs}>
					Subscribers 100+
				</div>
				<div className={styles.navs}>
					<Link href='/' passHref>
						<IoHomeOutline />
					</Link>
					<Link href={'/trash'} passHref>
						<IoTrashBinOutline />
					</Link>
					<Link href={'/notifications'} passHref>
						<IoNotificationsOutline />
					</Link>
					<Link href={'/cart'} passHref>
						<IoCartOutline />
					</Link>
					<Link href={'/institutions'} passHref>
						<IoSchoolOutline />
					</Link>
				</div>
				<div className={styles.user}>
					<div className={styles.apps}>
						<Link href={'/apps'} passHref>
							<IoApps />
						</Link>
					</div>
					<div className={styles.avatar}>
						<img className={styles.img} src='' alt='' loading='lazy'/>
					</div>
				</div>
			</div>
		</div>
	);
}
