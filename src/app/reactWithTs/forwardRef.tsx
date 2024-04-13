import { forwardRef } from "react";

type Props = {
  children?: React.ReactNode;
  type: "submit" | "button";
};

type Ref = HTMLButtonElement;

export const fancyButton = forwardRef<Ref, Props>((props, ref) => (
  <button ref={ref} type={props.type}>
    {props.children}
  </button>
));

//Generic forward ref

type PropsType<T> = {
  item: T[];
};

const Component = <T,>(props: PropsType<T>) => {
  return;
};
