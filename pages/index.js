import Navbar from '../components/HomePage/Navbar'
import DateTime from '../components/HomePage/Date_time'
import AddWhisperCard from '../components/HomePage/AddWhisperCard'
import Footer from '../components/HomePage/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <DateTime />
      <AddWhisperCard />
      <Footer />
    </div>
  )
}
