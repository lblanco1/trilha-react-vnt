import { Routes, Route } from "react-router-dom"
import { About } from "./Pages/About"
import { Home } from "./Pages/Home"
import { DefaultLayout } from "./layouts/Default.layout"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
}