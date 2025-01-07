
import React, { Component } from 'react'

export default class Funcpage extends Component {

    
//   render() {
//     return (
//       <div className="main text-center d-flex  justify-content-center " >
        
//         <div className="card-body">
//           <h5 className="card-title">React</h5>
//           <p className="card-text">
           
//             React is a JavaScript library ,open source
//             used for single page application
//           </p>
//           <a href="" className="btn btn-primary">
//             Learn More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

    render(){
        return (
            <div>
                <First/>
                <Second/>
            </div>
        );
    }
}

class First extends Component {
    render(){
        return (
            <div>
                <h1>JavaTpoint</h1>
            </div>
        );
    }
}

class Second extends Component {

    constructor() {
        super();
        // this.state = '';
    }
    render(){
        return (
            <div>
                <h2>www.javapoint.com</h2>
                <p>This website contains the java</p>
            </div>
        );
    }
}

   
//  render() {  
//     return (  
//        <div>  
//           <StudentName/>  
//           <ul>            
//               {this.state.data.map((item) => <List data = {item} />)}           
//           </ul>  
//        </div>  
//     );  
//  }  
// }  
// class StudentName extends React.Component {  
//  render() {  
//     return (  
//        <div>  
//           <h1>Student Name Detail</h1>  
//        </div>  
//     );  
//  }  
// }  
// class List extends React.Component {  
//  render() {  
//     return (  
//        <ul>            
//           <li>{this.props1.data.name}</li>   
//        </ul>  
//     );  
//  }  
// }  