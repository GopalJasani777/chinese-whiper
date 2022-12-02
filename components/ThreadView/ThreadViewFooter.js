// import style from '../ThreadView/ThreadViewFooter.module.scss'

// export default function ThreadViewFooter() {
//     return (
//         <div className='container flex items-center justify-between m-auto'>
//             <div>
//                 <p className='text-[#fff]'>23rd November 2022</p>
//                 <p className='text-[#fff]'>Ended</p>
//             </div>
//             <div className={`${style.footerBtn} flex items-center justify-center`}>
//                 <a>
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10 13C10.4295 13.5741 10.9774 14.0492 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59699 21.9548 8.33397 21.9434 7.02299C21.932 5.71201 21.4061 4.45794 20.4791 3.5309C19.5521 2.60386 18.298 2.07802 16.987 2.06663C15.676 2.05523 14.413 2.55921 13.47 3.47L11.75 5.18" stroke="#F6D11E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                         <path d="M14 11C13.5705 10.4259 13.0226 9.95083 12.3934 9.60707C11.7642 9.26331 11.0684 9.05889 10.3533 9.00768C9.63816 8.95646 8.92037 9.05964 8.24861 9.31023C7.57685 9.56082 6.96684 9.95294 6.45996 10.46L3.45996 13.46C2.54917 14.403 2.04519 15.666 2.05659 16.977C2.06798 18.288 2.59382 19.5421 3.52086 20.4691C4.4479 21.3961 5.70197 21.922 7.01295 21.9334C8.32393 21.9448 9.58694 21.4408 10.53 20.53L12.24 18.82" stroke="#F6D11E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                     </svg>
//                 </a>
//                 <a className='mt-[15px]'>
//                     <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <g filter="url(#filter0_dii_93_14186)">
//                             <rect x="32" y="24" width="40" height="40" rx="20" fill="url(#paint0_radial_93_14186)" shape-rendering="crispEdges" />
//                             <path d="M43 41.9782C43 41.361 43.2849 40.7784 43.7721 40.3995L50.7721 34.955C51.4943 34.3933 52.5057 34.3933 53.2279 34.955L60.2279 40.3995C60.7151 40.7784 61 41.361 61 41.9782V52C61 52.5304 60.7893 53.0391 60.4142 53.4142C60.0391 53.7893 59.5304 54 59 54H45C44.4696 54 43.9609 53.7893 43.5858 53.4142C43.2107 53.0391 43 52.5304 43 52V41.9782Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                             <path d="M49 52V45C49 44.4477 49.4477 44 50 44H54C54.5523 44 55 44.4477 55 45V52" fill="#F6D11E" />
//                             <path d="M49 52H48V53H49V52ZM55 52V53H56V52H55ZM50 52V45H48V52H50ZM50 45H54V43H50V45ZM54 45V52H56V45H54ZM49 53H55V51H49V53ZM54 45H56C56 43.8954 55.1046 43 54 43V45ZM50 45V43C48.8954 43 48 43.8954 48 45H50Z" fill="#F6D11E" />
//                         </g>
//                         <defs>
//                             <filter id="filter0_dii_93_14186" x="0" y="0" width="104" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//                                 <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                                 <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
//                                 <feOffset dy="8" />
//                                 <feGaussianBlur stdDeviation="16" />
//                                 <feComposite in2="hardAlpha" operator="out" />
//                                 <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.914118 0 0 0 0 0.176471 0 0 0 0.32 0" />
//                                 <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_93_14186" />
//                                 <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_93_14186" result="shape" />
//                                 <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
//                                 <feOffset dy="-8" />
//                                 <feGaussianBlur stdDeviation="8" />
//                                 <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
//                                 <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.7445 0 0 0 0 0.0875 0 0 0 1 0" />
//                                 <feBlend mode="normal" in2="shape" result="effect2_innerShadow_93_14186" />
//                                 <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
//                                 <feOffset dy="-4" />
//                                 <feGaussianBlur stdDeviation="4" />
//                                 <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
//                                 <feColorMatrix type="matrix" values="0 0 0 0 0.466667 0 0 0 0 0.405531 0 0 0 0 0 0 0 0 0.6 0" />
//                                 <feBlend mode="normal" in2="effect2_innerShadow_93_14186" result="effect3_innerShadow_93_14186" />
//                             </filter>
//                             <radialGradient id="paint0_radial_93_14186" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52 56.381) rotate(-90) scale(42.8571)">
//                                 <stop stop-color="#FFE431" />
//                                 <stop offset="1" stop-color="#FFE11A" />
//                             </radialGradient>
//                         </defs>
//                     </svg>

//                 </a>
//                 <a>
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M21.64 3.64001L20.36 2.36001C20.2475 2.24633 20.1136 2.15608 19.966 2.09449C19.8184 2.0329 19.66 2.00119 19.5 2.00119C19.3401 2.00119 19.1817 2.0329 19.0341 2.09449C18.8865 2.15608 18.7526 2.24633 18.64 2.36001L2.36004 18.64C2.24636 18.7525 2.15612 18.8865 2.09452 19.0341C2.03293 19.1817 2.00122 19.3401 2.00122 19.5C2.00122 19.66 2.03293 19.8183 2.09452 19.9659C2.15612 20.1136 2.24636 20.2475 2.36004 20.36L3.64005 21.64C3.75187 21.7549 3.88558 21.8463 4.03329 21.9086C4.181 21.971 4.33971 22.0031 4.50005 22.0031C4.66038 22.0031 4.81909 21.971 4.9668 21.9086C5.11451 21.8463 5.24822 21.7549 5.36005 21.64L21.64 5.36001C21.755 5.24819 21.8463 5.11448 21.9087 4.96677C21.971 4.81906 22.0031 4.66035 22.0031 4.50001C22.0031 4.33968 21.971 4.18097 21.9087 4.03326C21.8463 3.88555 21.755 3.75184 21.64 3.64001V3.64001Z" stroke="#F6D11E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                         <path d="M14 7L17 10" stroke="#F6D11E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                         <path d="M5 6V10" stroke="#F6D11E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                         <path d="M19 14V18" stroke="#F6D11E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                         <path d="M10 2V4" stroke="#F6D11E" stroke-linecap="round" stroke-linejoin="round" />
//                         <path d="M7 8H3" stroke="#F6D11E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                         <path d="M21 16H17" stroke="#F6D11E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                         <path d="M11 3H9" stroke="#F6D11E" stroke-linecap="round" stroke-linejoin="round" />
//                     </svg>

//                 </a>
//             </div>
//             <div>
//                 <p className='text-[#fff]'>made with 💜 by PLG</p>
//             </div>
//         </div>
//     )
// }
