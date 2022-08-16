import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "next-themes"
import { useRouter } from 'next/router'
import {useState, useEffect} from 'react'

function Loading () {
  const router = useRouter()
const[loading, setLoading] = useState<boolean>(false)


useEffect(() => {
  const handleStart = (url:string) => (url !== router.asPath) && setLoading(true)
  const haandleComplete = (url:string)=>(url === router.asPath) && setLoading(false)
  router.events.on("routeChangeStart", handleStart)
  router.events.on("routeChangeComplete", haandleComplete)
  router.events.on("routeChangeError", haandleComplete)

 return () => {
    router.events.off("routeChangeStart", handleStart)
    router.events.off("routeChangeComplete", haandleComplete)
    router.events.off("routeChangeError", haandleComplete)
 }
})

return loading && <div className="spinner-wrapper h-screen w-screen flex justify-center items-center fixed top-0 left-0 bg-white z-10">
  <div className="spinner absolute left-1/2 top-1/2 h-[100px] w-[100px] my-0 mx-auto animate-bounce"/>
</div>

}

function MyApp({ Component, pageProps }: AppProps) {

  return (
  <>
  {/* <Loading/> */}
  <ThemeProvider attribute='class'>
  <Component {...pageProps} />
    </ThemeProvider>
  </>

  )
}

export default MyApp
