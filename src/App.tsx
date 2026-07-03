import Home from "./pages/Home";

import ClickSpark from "@/components/reactbits/ClickSpark";

import TopBar from "@/components/Header/TopBar";



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
      <Home />

    </ClickSpark>
  );
}

export default App;