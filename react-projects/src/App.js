import "./App.css";
// import ImageSlider from "./components/image-slider";
// import LoadMOreData from "./components/load-more-data";
import TreeView from "./components/tree-view-menu";
// import Accordion from './components/accordion';
// import RandomColor from './components/random-color';
// import StarsRating from './components/star-rating';
import menus from "./components/tree-view-menu/data";

function App() {
  return (
    // <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={4} />
    <TreeView menu={menus}/>
  );
}

export default App;
