import React, { useEffect, useRef, useState } from 'react';
import { Container } from './Container';

// TODO: Decide later - should this file/functionality be moved to the external library?

const ddOptions = [
  {
    id: '3r56',
    label: 'First',
    value: '1st'
  },
  {
    id: '7lh0',
    label: 'Second',
    value: '2nd'
  },
  {
    id: 'r89y',
    label: 'Third',
    value: '3rd'
  },
];


export const useDropdown = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {

  });
  return { toggle, setToggle };
}
  // const { toggle, setToggle } = useDropdown();


export interface DropdownProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Dropdown: React.FunctionComponent<DropdownProps> = ({}) => {
  const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const outsideClickHandler = (event: { target: any; }) => {
      if (dropdownRef.current) {
        if (!dropdownRef.current.contains(event.target)) {
          setToggle(false);
        }
      }
    }
    document.addEventListener('click', outsideClickHandler);
    return () => {
      document.removeEventListener('click', outsideClickHandler);
    }
  });

  // const { test } = useDropdown();
  return (
    <>
      <Container 
        bb_function={'position'}
        bb_function_class={'bb-pos-relative'}
        bb_class={''}
      >
        <button 
          className="bb-content-group_toggle bb-toggle"
          type="button"
          ref={dropdownRef}
          onClick={() => setToggle(!toggle)}
        >
          -- Select issue template --
        </button>
        {toggle && (
          <Container 
            bb_function={'position'}
            bb_function_class={'bb-pos-absolute'}
            bb_class={'bb-toggle_option-container'}
          >
            {ddOptions.map((option, index) => {
              {
                console.log(index);
              }
              return (
                <>
                  <button key={option.id} className="bb-content-group_toggle" type="button">
                    {option.label}
                  </button>
                  {index !== ddOptions.length - 1 && <hr className="bb-toggle_hr" />}
                </>
              );
            })}
          </Container>
        )}
      </Container>
    </>
  );
};
