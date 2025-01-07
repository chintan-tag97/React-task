import React from 'react'


 function Taskclick() {

    // const shoot = (a) => {
    //     alert(a);
    //   }
    
    //   return (
    //     <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    //   );
    // }
    
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<Taskclick />);



   
        const handleClick = () => alert('Button Clicked!');
        return (
          <div>
            <h1>React Event Example</h1>
            <button
              onClick={handleClick} className="btn btn-primary"> Click Me</button>
          </div>
        );
      }
      

    
      export default Taskclick;
  