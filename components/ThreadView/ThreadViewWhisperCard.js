import style from '../ThreadView/ThreadViewWhisperCard.module.scss'

export default function ThreadViewWhisperCard() {
  return (
    <div className='container m-auto flex justify-around'>
      <div className={`py-[30px] mt-[30px] ${style.AddWhisperCard} ${style.viewchainCard}`} >
        <div className='flex justify-between px-[20px]'>
          <div>
            <img src='' />
            <p className='text-[#fff]'>Floyd Miles</p>
            <p className='text-[#fff]'>Floyd.lens</p>
          </div>
          <div>
            <p className='text-[white] font-[800]'>2:20 pm</p>
          </div>
        </div>

        {/* <p className='text-[white] font-[800] text-[20px] flex justify-center'>Click to view the chain</p> */}
      </div>
    </div>
  )
}
