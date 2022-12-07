import { FC, ReactElement } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";

interface DefaultLayoutProps {
    children: ReactElement
}

const DefaultLayout: FC<DefaultLayoutProps> = ({children}) => {
    return <div>
        <Header/>
        <div className="container">
            <SideBar/>
            <div className="content">
                { children }
            </div>
        </div>
    </div>
}

export default DefaultLayout;