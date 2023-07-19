import { Component } from "react";

class StudentInfoComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {this.props.listStudent.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

// viết function

// function StudentInfoComponent(props){
//     return(
//         <table>
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.listStudent.map((student) => {
//             return (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.age}</td>
//                 <td>{student.address}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     );
// }

export default StudentInfoComponent;
