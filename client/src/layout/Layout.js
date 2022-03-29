// This for global layout 

import { Outlet } from "react-router-dom"
export default function Layout() {
    return (
        <main>
            <Outlet/>
        </main>
    )
}


// implements in App.js