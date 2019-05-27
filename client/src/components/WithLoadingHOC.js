import React from "react";
import { PulseLoader } from "react-spinners";


export function WithLoading(Component) {
    return function WihLoadingComponent({ isLoading, ...props }) {
      if (!isLoading) return (<Component {...props} />);
      return (<PulseLoader
        sizeUnit={"px"}
        size={10}
        color={"#EF522A"}
        loading={isLoading}
      />);
    }
  }