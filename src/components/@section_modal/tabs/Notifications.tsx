import React from 'react';

export interface NotificationsProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Notifications: React.FunctionComponent<NotificationsProps> = (props: NotificationsProps) => {
  return (
    <>
      <div>Notifications</div>
    </>
  );
};
