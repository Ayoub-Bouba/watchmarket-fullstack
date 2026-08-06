import { useEffect, useRef, useState } from "react";
import "./home.css"
import WatchAssembleBg from "../../component/WatchAssembleBg";
function Home() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-hero">
      <WatchAssembleBg/>
    </div>
  );
}

export default Home;