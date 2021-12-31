import axios from "axios";
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Institution.module.css'
const Institution = ({ institution }) => {
    return (
        <Link href={`institutions/${institution.id}/`} passHref>
            <div className={styles.institution}>
            <Image src={institution.logo} loading="lazy" alt="null" width={ 250} height={150} objectFit="contain" />
            <div className={styles.info}>
                <p>{institution.name}</p>
                <small>{institution.slogan}</small>
                <small>Active { institution.tutors.length} Tutors</small>
                <a href={institution.website_url}>visit url</a>
            </div>
        </div>
        </Link>
        
    )
}
export default function index({ institutions }) {
    return (
        <div className={styles.home}>
            {/* institutions */}
            <div className={styles.institutions}>
                {
                    institutions.results.map(inst => <Institution institution={inst} key={inst.id}/>)
               }
            </div>

        </div>
    )
}

export const getServerSideProps = async (context) => {
    const data = await axios.get('http://jafaruidris.pythonanywhere.com/api/institution/institutions', {
        headers: {
            'Authorization': 'Token 832cb1cd014c37a04327a0b12ee29086e930df14'
        }
    })
    const result = await data.data || []

    return {
        props: {
            institutions: result
        }
    }
}
