import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SectionContainer from '@/components/SectionContainer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header>
        <SectionContainer>
          <Header />
          <Hero />
        </SectionContainer>
      </header>
    </>
  )
}

// To deploy the nextjs app on my own server, do i just copy paste the .next folder on the server?
// No, you should build the app on the server. You can use the following command to build the app:
// npm run build
// This command will create a .next folder in the root directory of your project. You can then copy this folder to your server and run the following command to start the server:
// npm run start
// This will start the server and your app will be live on the server.
