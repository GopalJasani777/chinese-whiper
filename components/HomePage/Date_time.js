import style from '../HomePage/Date_time.module.scss'

export default function DateTime() {
    return (
        <div className='container m-auto py-[30px]'>
          <h2 className=' text-[#DDDDDD] text-[16px] fomt-[bold] pb-[10px]'>24th November 2022</h2>
          <button className={`${style.timerButton}`}>24 h</button>
          <span className='text-[white] m-[10px]'>:</span>
          <button className={`${style.timerButton}`}>50 m</button>
          <span className='text-[#DDDDDD] mx-[10px] border-2 text-[12px] rounded-[40px] px-[8px] py-[3px]'>i</span>
        </div>
    )
}
