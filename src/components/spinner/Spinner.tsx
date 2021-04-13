import React, { FC, memo } from "react";
import style from "./index.module.scss";
import classnames from 'classnames';

const cn = classnames.bind(style);

const Spinner: FC = () => (
  <div className={cn(style.spinner)} data-name="Spinner">
    <div
      className={cn(style.spinnerCircular)}
    />
  </div>
)

export default memo(Spinner);
