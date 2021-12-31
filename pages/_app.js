import { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import '../styles/globals.css'
import { wrapper } from '../redux/store'
function MyApp({ Component, pageProps }) {
  const Authenticated = ({ Component, pageProps }) =>{
    return <>
      <Header />
      <Component {...pageProps} />
    </>
  }
  const [Token, setToken] = useState(null)
  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
  }, [])
  return <>
    {Token ? <Authenticated Component={Component} pageProps={ pageProps }/> : <Component {...pageProps} />}
  </>
}

export default wrapper.withRedux(MyApp)
