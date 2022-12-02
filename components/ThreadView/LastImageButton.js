import style from '../ThreadView/LastImageButton.module.scss'

export default function LastImageButton() {
    return (
        <div className='container m-auto flex justify-center'>
            <div className=' py-[30px]'>
            <button className={`${style.lastButton} flex items-center`}>
                <span>
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7.42401L7 1.42401L13 7.42401" stroke="#FFE11A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <span className='ml-[10px]'> Go to Last image</span>
            </button>
        </div>
        </div>
    )
}
