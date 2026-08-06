import { motion } from "framer-motion";
import "./component.css"
function WatchAssembleBg() {
  return (
    <div className="watch-bg-container">
      <motion.img
        src="/images/watch-strap-left.png"
        className="watch-part"
        initial={{ x: -300, opacity: 0, rotate: -30 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.img
        src="/images/watch-strap-right.png"
        className="watch-part"
        initial={{ x: 300, opacity: 0, rotate: 30 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />
      <motion.img
        src="/images/watch-face.png"
        className="watch-part"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.img
        src="/images/watch-hands.png"
        className="watch-part"
        initial={{ rotate: 180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
      <motion.img
        src="/images/watch-glass.png"
        className="watch-part"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
    </div>
  );
}

export default WatchAssembleBg;