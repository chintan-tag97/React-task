import React from 'react'

function Dop() {
// const data = [
//     { id: 1, name: "Xyz" },
//     { id: 2, name: "Abc" },
//     { id: 3, name: "Mno" },
//   ];

// const handleSelect = (event) => {
// console.log("Selected ID:", event.target.value);
//   };

//   return (
//     <div>
//       <label >Choose  </label>
//       <select id="dropdown" onChange={handleSelect}>
//         <option value="" disabled>Select</option>
//         {data.map((item) => (
//           <option key={item.id} value={item.id}>{item.name}</option>
//         ))}
//       </select>
//       </div>
//     );
// };



const handleSelect = (event) => {
console.log("Selected ID:", event.target.value);
  };

  return (
    <div>
      <select className="form-select"aria-label="Default select example"onChange={handleSelect}>
        <option value="" disabled selected>
          Open this select menu
        </option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}





export default Dop