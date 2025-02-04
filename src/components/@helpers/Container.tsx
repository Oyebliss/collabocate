import React, { forwardRef, LegacyRef, ReactNode } from 'react';
import { Debugger } from './Debugger';

// TODO: Decide later - should this file/functionality be moved to the external library?

export interface ContainerProps {
  children: ReactNode;
  bb_function: 'position' | 'display';
  bb_function_class: string;
  bb_class: string;
  ref?: LegacyRef<HTMLDivElement> | undefined;
}

export const Container: React.FunctionComponent<ContainerProps> = forwardRef(({ children, bb_function, bb_function_class, bb_class }, ref) => {
  // TODO: Fix debugger logic, component, message etc. Make it better reusable.
  // TODO: Fix debugger - prevent e.g. 'bb-pos-' from being used in bb_class. We only want to use that kind of prefix in bb_function_class.
  if (bb_function === 'position' && !bb_function_class.includes('bb-pos-')) {
    bb_function_class = bb_function_class.replace('', 'bb-pos-').replace(' ', ' bb-pos-');
    return (
      <>
        <Debugger message="DEBUGGER: bb_function_class(es) must start with 'bb-pos-'." 
          bb_function="position" 
          bb_function_class="bb-pos-fixed bb-pos-r30-b20" bb_class="bb-collabocate_container" 
        />
      </>
    );
  }
  return (
    <>
      <div ref={ref} className={`${bb_function_class} ${bb_class}`}>{children}</div>
    </>
  );
});
