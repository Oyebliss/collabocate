import React from 'react';
import { Container } from '../Container';
import { api_dummy_response } from './dummy_api';
import { useDropdown } from './useDropdown';

// TODO: Decide later - should this file/functionality be moved to the external library?

export interface DropdownProps {}

export const Dropdown: React.FunctionComponent<DropdownProps> = ({}) => {
  const {toggle, setToggle, dropdownContainerRef } = useDropdown();

  return (
    <>
      <Container 
        bb_function={'position'}
        bb_function_class={'bb-pos-relative'}
        bb_class={''}
        ref={dropdownContainerRef}
      >
        <button 
          className="bb-content-group_toggle bb-toggle"
          type="button"
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
            {api_dummy_response.map((option, index) => {
              return (
                <>
                  <button 
                    key={option.id}
                    className="bb-content-group_toggle" type="button"
                    onClick={() => console.log('Change the text of bb-toggle button above, and populate the issue body with selected issue template content.')}
                  >
                    {option.label}
                  </button>
                  {index !== api_dummy_response.length - 1 && <hr className="bb-toggle_hr" />}
                </>
              );
            })}
          </Container>
        )}
      </Container>
    </>
  );
};
