import { JSX } from "react";
import { Loader } from "../ui/Loader";

interface Props {
  condition: boolean;
  children: JSX.Element;
}

export const LoaderRenderWithCondition = ({ condition, children }: Props) => {
  if (!condition) {
    return <Loader />;
  }

  return children;
};
