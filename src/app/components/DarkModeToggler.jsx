import { useState } from 'react';
import iconSun from '../../../public/icon-sun.svg'
import iconMoon from '../../../public/icon-moon.svg'
import Image from 'next/image';

function DarkModeToggler() {
 const [isDarkMode, setIsDarkMode] = useState(false);

 const toggleDarkMode = () => {
  setIsDarkMode(prevMode => !prevMode);
  setDarkMode();
 };

 const setDarkMode = () => {
  if (isDarkMode ) {
   document.documentElement.classList.remove('dark');
   document.documentElement.classList.add('light');
  } else {
   document.documentElement.classList.remove('light');
   document.documentElement.classList.add('dark');  }
 }

 return (
  <div className={`dark:bg-gray-900 ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
   <button onClick={toggleDarkMode} className="inline-block bg-[#6BB67F] dark:bg-[#1A3F55] text-white px-4 py-2">
    {isDarkMode ?
     <Image src={iconSun} alt="alt" width={20} height={20} />
     :
     <Image src={iconMoon} alt="alt" width={20} height={20} />
    }
   </button>
  </div>
 );
}

export default DarkModeToggler;
