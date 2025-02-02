import { useEffect, useRef, useState } from 'react';

export const useDropdown = () => {
  const [toggle, setToggle] = useState(false);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const outsideClickHandler = (event: { target: any; }) => {
        if (dropdownContainerRef.current) {
          if (!dropdownContainerRef.current.contains(event.target)) {
            setToggle(false);
          }
        }
      }
      document.addEventListener('click', outsideClickHandler);
      return () => {
        document.removeEventListener('click', outsideClickHandler);
      }
    });
  return { toggle, setToggle, dropdownContainerRef };
};
