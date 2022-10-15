import React from "react";

export const PrimaryButton = (props: {
  children: React.ReactNode;
  onClick(): Promise<void> | void;
}): JSX.Element => {
  return <button onClick={props.onClick} className='primary-button'>{props.children}</button>;
};
