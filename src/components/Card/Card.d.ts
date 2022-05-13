import React, { HTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  Icon: IconType;
  title: string;
  to: string;
}

export type CardElement = JSX.Element