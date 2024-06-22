import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const [count, setCount] = useState(0)

  // creates a countdown effect that increases every second
  useEffect(()=>{
    let timer = setTimeout(()=>{
      setCount((count)=>count+1);
    },1000)

    return () => clearTimeout(timer)
  },[]
    )

    // used to update only the color in the 1st usestate object
  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}. {count}
      </p>

      <button onClick={updateColor}>Change</button>


    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);



// function MyForm() {
//     const [input, setInputs] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}))
//       }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert("Name: "+input.username+"\nAge: "+ input.age + "\nMessage:  "+input.message + "\nCar: "+input.car)
//       }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>Enter your name:
//           <input
//             type="text" 
//             name = "username"
//             value={input.username || ""}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <br />
//         <label>Enter your age:
//           <input
//             type="number" 
//             name = "age"
//             value={input.age || ""}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <br />
//         <label>Enter your age:
//           <textarea 
//           value={input.message} 
//           onChange={handleChange}
//           type="textarea" 
//           name = "message"
//           />
//         </label>
//         <br />
//         <br />
//         <select value={input.car} name= "car" onChange={handleChange}>
//         <option value={input.car}>Ford</option>
//         <option value={input.car}>Volvo</option>
//         <option value={input.car}>Fiat</option>
//       </select>
//       <br />
//         <br />
//         <input type="submit" />

//       </form>
//     )
//   }


// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(<MyForm />);
