import { useEffect, useRef, useState } from 'react';

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const outsideClickHandler = (event: { target: any; }) => {
        if (dropdownContainerRef.current) {
          if (!dropdownContainerRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        }
      }
      document.addEventListener('click', outsideClickHandler);
      return () => {
        document.removeEventListener('click', outsideClickHandler);
      }
    });
  return { isOpen, setIsOpen, dropdownContainerRef };
};
