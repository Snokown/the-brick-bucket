import './globals.css'
import Image from 'next/image'
import Head from 'next/head'

export const metadata = {
  title: 'The Brick Bucket',
  description: 'Something big is coming soon. Sign up to be the first to know!',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/vgk8kap.css"></link>
      </Head>
      <body>
      <nav className='p-2 px-8 border-b-2 drop-shadow-sm sticky bg-white top-0 z-20'>
        <div className="container desktop:px-12 mx-auto">
        <Image
          src="/logo.svg"
          alt="The Brick Bucket Logo"
          width={100}
          height={100}
        />
        </div>
      </nav>
        {children}
      </body>
    </html>
  )
}
