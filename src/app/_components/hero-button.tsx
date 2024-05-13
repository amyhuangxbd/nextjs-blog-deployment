import '@/app/styles/button.css';
const HeroButton = () => {
    return ( <button className="hero-button">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Submit
  </button> );
};

export default HeroButton;

// import '@/app/styles/button.scss';
// const HeroButton = props => {
//     return ( <div className="hero-button opacity-100 transition-border-color border-gray-50 p-3 rounded-full">
//         <div className="transition-translate0.5s transform-scaleX p-1 rounded-full glowingborder">
//             <button className="relative pt-0 pl-8 pr-8 pb-0 h-10 w-full flex justify-center items-center bg-white text-gray-800 overflow-hidden text-sm font-bold leading-5 rounded-full tracking-wide glowingborder ">
//                 <div className="relative w-full h-full flex justify-center items-center">
//                     <span className="relative z-0">
//                         TRY NOW
//                     </span>
//                     <span aria-hidden className=" absolute left-0 top-0 w-full h-full justify-center items-center opacity-0 text-gray-800 " style={{ transform: 'scale(1.2) translateZ(0px)' }}>
//                         TRY NOW
//                     </span>
//                 </div>
//             </button>
//         </div>
//     </div> );
// };

// export default HeroButton;