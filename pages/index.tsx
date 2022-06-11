import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Notetal</title>
        <meta name="description" content="Portal for note taking as well as reading" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className="py-5">
        <section className='text-center h-60 my-11'>
            <h1>Welcome to <span className="text-indigo-400">Notetal</span></h1>
            <p>
              Complete portal for all the notes you are ever looking for.
            </p>
            <button className="py-2 px-5 w-64 bg-indigo-400 rounded-full mt-10">
              Get Started
            </button>
        </section>
        <section className="my-10">
          <h3 className="text-center">Features</h3>
          <div className="flex justify-between items-center gap-4">
            <Image src="/editor.png" alt="powerful editor" width="500" height="500" />
            <div className="w-1/2">
              <h4>Powerful Editor</h4>
              <p>
                With the inbuilt powerful editor not only for normal notes but also
                for mathematical equations take notes in seconds.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center flex-row-reverse gap-4">
            <Image src="/something.png" alt="powerful editor" width="500" height="500" />
            <div className="w-1/2">
              <h4>Some features</h4>
              <p>
                With the inbuilt powerful editor not only for normal notes but also
                for mathematical equations take notes in seconds.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <Image src="/mobileUI.png" alt="powerful editor" width="500" height="500" />
            <div className="w-1/2">
              <h4>Mobile friendly</h4>
              <p>
                Want to read outside, on bed, while waiting for someone. With the mobile
                friendly UI of notetal you can read and write anywhere and anytime.
              </p>
            </div>
          </div>
        </section>
        <section></section>
      </article>
    </div>
  )
}

export default Home
