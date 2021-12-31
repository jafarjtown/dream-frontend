import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Institution.module.css";
import { IoLinkOutline } from 'react-icons/io5'
import Posts from '../../components/post/Posts'
import { GiTeacher, GiHelp } from 'react-icons/gi'
import {  FaBlog, FaEllipsisV } from 'react-icons/fa'
import Link from 'next/link'
export default function Index() {
	const [Institution, setInstitution] = useState(null);
	const [posts, setPosts] = useState(null);
    const router = useRouter();
	useEffect(() => {
		const { id } = router.query;
        const fetchData = async () => {
            if (id !== undefined) {
                const res = await axios.get(
                    `http://localhost:8000/api/institution/institutions/${id}`,
                    {
                        headers: {
                            Authorization: "Token 7cecbddec612c49cf423a6126d21bb95a5f9b486",
                        },
                    }
                );
                
                const data = await res.data;

                setInstitution(data)
                const postres = await axios.get(`http://localhost:8000/api/institution/institutionsblogs/${id}`,{
                    headers: {
                        Authorization: "Token 7cecbddec612c49cf423a6126d21bb95a5f9b486",
                    },
                })
                const posts = await postres.data.blogs
                setPosts(posts)
                console.log(posts)
            }
        };
        
		(fetchData());
	}, []);
	return (
        <div className={styles.inst}>{
            Institution &&<>
        
            <div className={styles.header}>
                <img
                    className={styles.cover_img}
                    alt=""
                    src={Institution?.cover_img}
                    
                />
                <img
                    src={Institution?.logo}
                    alt=""
                    className={styles.logo_img}
                    
                />
            </div>
            <div className={styles.name}>
                    {Institution.name}<br/>
                    <small>{ Institution.slogan} <button>Subscribe</button></small>
                </div>
                <div className={styles.nav}>
                    <a href={Institution.website_url} target={'_blank'} rel="noreferrer" title={'Institution website address'}>Link <IoLinkOutline /></a>
                    <Link href={`institutions/${Institution.id}/blogs`} passHref>
                        <div>
                            Blog <FaBlog />
                        </div>
                    </Link>
                    <Link href={''} passHref>
                        <div>
                            Tutors <GiTeacher />
                        </div>
                    </Link>
                    <Link href={''} passHref>
                        <div>
                            help <GiHelp />
                        </div>
                    </Link>
                    <Link href={''} passHref>
                        <div>
                            more <FaEllipsisV />
                        </div>
                    </Link>
                </div>
                <div className={styles.body}>
                    {posts && <Posts posts={posts} />}
                </div>
        </>}
		</div>
	);
}
