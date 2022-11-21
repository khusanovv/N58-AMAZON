import Routes from "./routes/Routes";
import Header from "./components/header/Header";
import { BackToTop, Overlay } from "./utils";
import Sidebar from "./components/sidebar/Sidebar";
import { useEffect, useState } from "react";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if(isSidebarOpen === true){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen])

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Routes/>
      <BackToTop/>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      { isSidebarOpen && <Overlay setIsSidebarOpen={setIsSidebarOpen}/>}
    </>
  );
}

export default App;
