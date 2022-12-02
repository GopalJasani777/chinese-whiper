import style from '../ThreadView/AddToChain.module.scss'

export default function AddToChain() {
    return (
        <div className={`${style.addToChainCard} container m-auto py-[30px]`}>
            <p className='text-[#fff] text-[16px] pb-[50px]'>This was the last image added to the thread, try to describe this image in your own words as best you can, and add your generation to this thread. </p>
            <div className='text-center'>
                <button className={`${style.addToChain}`}>Add to chain</button>
            </div>
        </div>
    )
}
