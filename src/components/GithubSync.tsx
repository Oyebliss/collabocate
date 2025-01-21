import React from 'react';
import '../styles/bb-styles.css';

export interface GitHubSyncProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  configOptions: {
    instance_id: string;
  };
}

export const GitHubSync: React.FunctionComponent<GitHubSyncProps> = (props: GitHubSyncProps) => {
  const { configOptions } = props;
  console.log(configOptions);
  if (!configOptions.instance_id) {
    return null;
  }
  return (
    <div className="bb-pos-fixed bb-pos-r30-b30">
      <button className="bb-button bb-pad-s15-tb30" onClick={() => alert("That's all this button does for now.")}>
        {configOptions.instance_id}
      </button>
    </div>
  );
};
