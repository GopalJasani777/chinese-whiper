import style from '../HomePage/Navbar.module.scss'

export default function Navbar() {
    return (
      <div>
        <div className='container m-auto flex item-center py-[15px]'>
        <a className={`${style.logo}`}>
            <span className={`${style.logoYellow}`}>Whisper</span> 
            <span className={`${style.logoGrey}`}>.xyz</span>
        </a>
        <button className={`${style.connectButton}`}>Connect wallet</button>
      </div>
      </div>
    )
  }
  