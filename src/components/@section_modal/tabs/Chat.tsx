import React from 'react';

export interface ChatProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Chat: React.FunctionComponent<ChatProps> = (props: ChatProps) => {
  return (
    <>
      <div>Chat</div>
    </>
  );
};
