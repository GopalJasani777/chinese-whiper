import style from '../HomePage/AddWhisperCard.module.scss'

export default function AddWhisperCard() {
  return (
    <div className='container m-auto flex justify-around'>
      <div className={`py-[30px] ${style.AddWhisperCard} ${style.viewchainCard}`} >
        <div className=''>
          <div className=''>
            <img src='' />
            <p>Floyd Miles</p>
            <p>Floyd.lens</p>
          </div>
          <div>
            <p className='text-[white] font-[800]'>2:20 pm</p>
          </div>
        </div>

        <p className='text-[white] font-[800] '>Click to view the chain</p>
      </div>

      <div className={`py-[30px] ${style.AddWhisperCard}`}>
        <div className={`${style.ActionRequireCard}`}>
          <p className='font-bold text-[16px] text-[#fff] pb-[10px]'>Action required</p>
          <p className='text-[16px] text-[#fff] pb-[10px]'>You can enable dispatcher to interact with Lenster without signing any of your transactions.</p>
          <p className='flex'>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span className='font-bold text-[16px] text-[#E8DBFF] ml-[10px]'>Enable dispatcher</span>
          </p>
        </div>
        <div className='p-[80px]'>
          <p className='text-[white]'>Hey there 👋,</p>
          <p className='text-[white] pb-[25px]'>Welcome to <span className='text-[bold]'>Whisper Chain.</span> This is our take on chinese whisper. You’re on the homepage where you will see daily chains that are started by us</p>
          <p className='text-[white] pb-[25px]'>Try to recreate the last whisper you see as best as you can and add it to the chain.</p>
          <p className='text-[white] pb-[25px]'>Go ahead, give it a try?</p>
          <div className='text-center pt-[20px]'>
            <button className={` ${style.AddWhisperButton}`}>Add whisper to chain</button>
          </div>
        </div>
      </div>
    </div>
  )
}
