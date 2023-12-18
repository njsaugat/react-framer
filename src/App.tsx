import "./App.css";
import AnimateDOM from "./Components/AnimateDOM";
import BounceKeyFrame from "./Components/BounceKeyFrame";
import Drag from "./Components/Drag";
import DragObjects from "./Components/DragObjects";
import Keyframes from "./Components/Keyframes";
import Navbar from "./Components/Navbar";
import Scroll from "./Components/Scroll";
import Stagger from "./Components/Stagger";
import Text from "./Components/Text";
import TopScrollBar from "./Components/TopScrollBar";
import Transition from "./Components/Transition";
import { Variant } from "./Components/Variants";
import VariantsInherit from "./Components/VariantsInherit";

function App() {
  return (
    <>
      <div className="w-screen font-mono overflow-x-hidden min-h-[90vh] flex flex-col space-y-6 justify-center items-center">
        <TopScrollBar />
        <Transition />
        <Variant />
        <AnimateDOM />
        <Stagger />
        <Text />
        <Navbar />
        <DragObjects />
        <Keyframes />
        <Drag />
        <VariantsInherit />
        <BounceKeyFrame />
        <Scroll />
      </div>
    </>
  );
}

export default App;
