import React, { FC, memo } from "react";
import style from "./index.module.scss";
import classnames from 'classnames';

const cn = classnames.bind(style);

type PropsType = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: FC<PropsType> = ({ text, disabled, onClick }) => {
  return (
    <button
      className={cn(style.button,
        { [style.buttonDisabled]: disabled }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default memo(Button);
