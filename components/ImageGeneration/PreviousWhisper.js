import style from '../ImageGeneration/PreviousWhisper.module.scss'

export default function PreviousWhisper() {
    return (
        <div className='container flex m-auto py-[30px]'>
            <div className='pr-[80px]'>
                <p className='text-[white] font-bold text-[16px] pb-[10px]'>Previous whisper</p>
                <p className='text-[white] opacity-50 pb-[10px]'>This was the last whisper added to the chain, try to <br /> describe this whisper as best you can.</p>
                <img src='https://static.plgworks.com/assets/images/hon/vespa.jpg' className='w-[256px] h-[256px] rounded-[30px]' />

                <div>
                    <p>Enter prompt</p>
                    <textarea className={`${style.PromptTextarea} w-[320px] mb-[10px]`} id="w3review" name="w3review" rows="4" cols="40">
                        Enter your prompt here to generate your very own whisper
                    </textarea>
                    <p className='text-[white] font-bold text-[16px] pb-[10px]'>Filter</p>
                    <p className='text-[white] opacity-50 pb-[10px]'>Select different styles that you can apply to your <br /> whisper</p>
                    <div className='pb-[30px]'>
                        <label class={`${style.dropdown}`}>
                            <div class={`${style.ddButton} w-[320px]`}>
                                Style
                            </div>
                            <input type="checkbox" class={`${style.ddInput}`} id="test" />
                            <ul class={`${style.ddMenu}`}>
                                <li>Action</li>
                                <li>Another action</li>
                                <li>Something else here</li>
                            </ul>
                        </label>
                    </div>
                    <div>
                        <button className={`${style.GenerateButton} w-[320px]`}>
                            <span>Generate</span>
                            <span>0 tries left</span>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4268 2.42666L13.5734 1.57332C13.4984 1.49753 13.4091 1.43737 13.3107 1.39631C13.2123 1.35525 13.1067 1.33411 13.0001 1.33411C12.8935 1.33411 12.7879 1.35525 12.6895 1.39631C12.5911 1.43737 12.5018 1.49753 12.4268 1.57332L1.57344 12.4267C1.49766 12.5017 1.43749 12.591 1.39643 12.6894C1.35537 12.7878 1.33423 12.8934 1.33423 13C1.33423 13.1066 1.35537 13.2122 1.39643 13.3106C1.43749 13.409 1.49766 13.4983 1.57344 13.5733L2.42678 14.4267C2.50133 14.5033 2.59047 14.5642 2.68894 14.6057C2.78741 14.6473 2.89322 14.6687 3.00011 14.6687C3.107 14.6687 3.21281 14.6473 3.31128 14.6057C3.40975 14.5642 3.4989 14.5033 3.57344 14.4267L14.4268 3.57332C14.5034 3.49878 14.5643 3.40963 14.6058 3.31116C14.6474 3.21269 14.6688 3.10688 14.6688 2.99999C14.6688 2.8931 14.6474 2.78729 14.6058 2.68882C14.5643 2.59035 14.5034 2.5012 14.4268 2.42666V2.42666Z" stroke="#353000" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${style.YourGeneration} `}>
                <p className='text-center text-[#fff] py-[10px] font-bold text-[16px]'>Your generations</p>
                <p className='text-center text-[#fff]'>To add a whisper to the chain, hover over it.</p>
                <div className={`flex align-center bg-black m-[30px] pt-[30px] rounded-[30px] justify-around ${style.YourGenWrapper}`}>
                    <div>
                        <img src='https://static.plgworks.com/assets/images/hon/vespa.jpg' className='w-[388px] h-[388px] rounded-[30px]' />
                        <div className='flex justify-center relative top-[-60px]'>
                            <button className={`${style.AddToChain} flex`}>
                                <span>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4004 5.53607V19.5361" stroke="#FFE11A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.40137 12.536H19.4014" stroke="#FFE11A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </span>
                                Add to chain</button>
                        </div>
                    </div>
                    <div>
                        <img src='https://static.plgworks.com/assets/images/hon/vespa.jpg' className='w-[388px] h-[388px] rounded-[30px]' />
                        <div className='flex justify-center relative top-[-60px]'>
                            <button className={`${style.AddToChain} flex`}>
                                <span>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4004 5.53607V19.5361" stroke="#FFE11A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.40137 12.536H19.4014" stroke="#FFE11A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </span>
                                Add to chain</button>
                        </div>
                    </div>
                </div>
                <div className={`flex align-center bg-black m-[30px] pt-[30px] rounded-[30px] justify-around ${style.YourGenWrapper}`}>
                    <div>
                        <img src='https://static.plgworks.com/assets/images/hon/vespa.jpg' className='w-[388px] h-[388px] rounded-[30px]' />
                        <div className='flex justify-center relative top-[-60px]'>
                            <button className={`${style.AddToChain} flex`}>
                                <span>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4004 5.53607V19.5361" stroke="#FFE11A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.40137 12.536H19.4014" stroke="#FFE11A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </span>
                                Add to chain</button>
                        </div>
                    </div>
                    <div>
                        <img src='https://static.plgworks.com/assets/images/hon/vespa.jpg' className='w-[388px] h-[388px] rounded-[30px]' />
                        <div className='flex justify-center relative top-[-60px]'>
                            <button className={`${style.AddToChain} flex`}>
                                <span>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4004 5.53607V19.5361" stroke="#FFE11A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.40137 12.536H19.4014" stroke="#FFE11A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </span>
                                Add to chain</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
