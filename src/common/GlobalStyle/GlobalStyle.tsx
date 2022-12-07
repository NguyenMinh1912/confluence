
import React, { FC, ReactElement } from "react";
import './GlobalStyle.scss';

interface GlobalStyleProps {
    children: ReactElement;
}

const GlobalStyle: FC<GlobalStyleProps> = ({children}) => {
    return <>
        {children}
    </>
}

export default GlobalStyle;