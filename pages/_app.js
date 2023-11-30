import '@/styles/globals.css';
import Head from 'next/head';
import MobileNav from 'components/MobileNav';
import VideoBG from 'components/VideoBG';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Promos | NoReset</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={`GitHub repositories for test`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-full h-screen min-h-[100vh] max-h-[100vh]">
        <div className="w-full h-full text-white md:block grid grid-rows-[1fr_3rem]">
          <Component {...pageProps} />
          <MobileNav />
        </div>
        <VideoBG />
      </div>
    </div>
  )
}
