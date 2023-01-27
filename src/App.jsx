import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import "./App.css";
import { Home } from "./pages";


const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Layout>
    )
}

export default App;