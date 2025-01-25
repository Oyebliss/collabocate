import React from 'react';

export interface ReportFormProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const ReportForm: React.FunctionComponent<ReportFormProps> = (props: ReportFormProps) => {
  return (
    <>
      <div>ReportForm</div>
    </>
  );
};