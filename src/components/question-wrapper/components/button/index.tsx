import React, { memo } from "react";
import s from "./index.module.scss";

type PropsType = {
  text: string;
}

export const Button = memo(({text}:PropsType) => {
  return (
    <button className={s.button}>{text}</button>
  );
});
