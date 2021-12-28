import Link from 'next/link'
export default function Story({ story }) {
    return (
        <Link href={'/story/3'} passHref>
            <div  className='story'>
                <div></div>
            <div></div>
            <div className='avatar'></div>
            </div>
            
        </Link>
    )
}
