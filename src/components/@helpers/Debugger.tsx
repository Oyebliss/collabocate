import React from 'react';

// TODO: Decide later - should this file/functionality be moved to the external library?

export interface DebuggerProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  message: string;
  bb_function: 'position';
  bb_function_class: string;
  bb_class: string;
}

export const Debugger: React.FunctionComponent<DebuggerProps> = ({ message, bb_function, bb_function_class, bb_class }) => {
  // TODO: Fix debugger logic, component, message etc. Make it better reusable.
  if (bb_function) {
    return (
      <>
        <div className={`${bb_function_class} ${bb_class} bb-debugger`}>{message}</div>
      </>
    );
  }
};
