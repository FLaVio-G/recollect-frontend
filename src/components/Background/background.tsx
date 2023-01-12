import React, { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}

const Background = ({ children }: Props) => (
  <div
    style={{
      backgroundImage: `url(${require("../../assets/imgs/morro-2.png")})`,
      backgroundRepeat: "no-repeat",
      width: '100vw',
      minHeight: '100vh',
      backgroundSize: 'cover',
    }}
  >
    {children}
  </div>
);

export default Background;
