import Navbar from '../components/HomePage/Navbar'
import LastImageButton from '../components/ThreadView/LastImageButton'
import AddToChain from '../components/ThreadView/AddToChain'
import DateTime from '../components/HomePage/Date_time'
import ThreadViewWhisperCard from '../components/ThreadView/ThreadViewWhisperCard'
import Footer from '../components/HomePage/Footer'

export default function ThreadView() {
  return (
    <div>
      <Navbar />
      <DateTime />
      <div className='relative top-[-120px]'>
      <LastImageButton />
      <AddToChain />
      <ThreadViewWhisperCard />
      <Footer />
      </div>
    </div>
  )
}
