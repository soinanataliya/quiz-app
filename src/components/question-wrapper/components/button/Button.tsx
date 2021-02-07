import React, { FC, memo } from "react";
import s from "./index.module.scss";

type PropsType = {
  text: string;
};

const Button: FC<PropsType> = ({ text }) => {
  return (
    <button className={s.button}>{text}</button>
  );
};

export default memo(Button);
