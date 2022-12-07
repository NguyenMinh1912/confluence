
import React, { FC, ReactElement } from "react";
import './GlobalStyle.scss';
import myAlert from '~/utils/myAlert'

interface GlobalStyleProps {
    children: ReactElement;
}

const GlobalStyle: FC<GlobalStyleProps> = ({children}) => {
    return <>
        {children}
    </>
}

export default GlobalStyle;