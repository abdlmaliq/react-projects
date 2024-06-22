import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function handleUtility(length) {
    return Math.floor(Math.random() * length);

  }
  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";

    for (let i = 0; i < 6; i++) {
      hexcolor += hex[handleUtility(hex.length)];
    }

    console.log(hexcolor);
    setColor(hexcolor)
  }

  function handleCreateRandomRGBColor() {
    let r = handleUtility(256);
    let g = handleUtility(256);
    let b = handleUtility(256);

    let rgbColor = "RGB("+r+","+g+","+b+")";
    console.log(rgbColor);
    setColor(rgbColor);
  }

  useEffect(()=>{
    typeOfColor === "rgb" ? handleCreateRandomRGBColor() : handleCreateRandomHexColor();
  },[typeOfColor]);

  return (
    <div style={{ height: "100vh", width: "100vw", background: color }}>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRGBColor
        }
      >
        Generate Random Color
      </button>
      <div style={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center", gap:"20px"}}>
        <h1>{typeOfColor === "rgb" ? "RGB COLOR":"HEX COLOR"}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
