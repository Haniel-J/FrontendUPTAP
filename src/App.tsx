import { Routes, Route } from "react-router-dom";

import ClickSpark from "@/components/reactbits/ClickSpark";
import TopBar from "@/components/Header/TopBar";

import Home from "./pages/Home";


function App() {
  return (
    <ClickSpark
      sparkColor="#722064"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
    >
      <TopBar />
      {/* Rutas principales de la aplicación */}
      <Routes>
      
        <Route path="/" element={<Home />} />
      </Routes>
    </ClickSpark>
  );
}

export default App;