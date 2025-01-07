// 2. Create Functional Component saying "EmployeeF" and understand it's code structure.
// 3. Create Functional Component saying "Employee":-
//   3.1. Add table with following columns: Id, Name, Mobile, Gender, Designation, Address
//   3.2. Example for How we can declare variable in react-component (eg. array-of-object for employee with this properties(id, name, mobile, gender, designation, address) (approx. 5-10 records).

 import React from 'react'

function Taskfunc() {

//     const employees = [
//         { id: 1, name: 'Xyz', mobile: '1234567890', gender: 'Male', designation: 'Manager', address: 'Valsad' },
//         { id: 2, name: 'Abc', mobile: '9876543210', gender: 'Female', designation: 'Developer', address: 'Vapi' },
//         { id: 3, name: 'Pqr', mobile: '7894561230', gender: 'Female', designation: 'Designer', address: 'Pardi' },
//         { id: 4, name: 'Mno', mobile: '4561237890', gender: 'Male', designation: 'Tester', address: 'Vadodara' },
//         { id: 5, name: 'Uvw', mobile: '4561237890', gender: 'Male', designation: 'Tester', address: 'Surat' },
    
//     ];


  return (
//     <div>
          
//         <h1>Employee(function)</h1>
//         <p>This is a simple React class component.</p>
    


//       <h1>Employee Table</h1>
//       <table class="table table-bordered  width: 100%; text-align: center; margin: 20px 0;">
//       <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Mobile</th>
//             <th>Gender</th>
//             <th>Designation</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr key={employee.id}>
//               <td>{employee.id}</td>
//               <td>{employee.name}</td>
//               <td>{employee.mobile}</td>
//               <td>{employee.gender}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
// );
// }
  
//   4. Create Example for How we can use Props in react-component (eg.'userName' as prop).

      <div>
        <Name userName="Chintan" />
      </div>
    );
  }
  function Name(props) {
    return <h4>My name is , {props.userName}</h4>;
  }
        
export default Taskfunc