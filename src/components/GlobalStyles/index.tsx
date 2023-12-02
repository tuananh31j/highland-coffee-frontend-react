import React from "react";
import './GlobalStyles.scss'

type GlobalStylesProps = {
    children: React.ReactElement;
}

const GlobalStyles:React.FC<GlobalStylesProps> = ({children}) => {
    return children;
}

export default GlobalStyles;