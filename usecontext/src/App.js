// import React from 'react';

// const MyContext=React.createContext();
// function MyProvider({children}){
//   const value='hello from context';
//   return<MyContext.Provider value={value}>{children}</MyContext.Provider>
// }
//  function ChildComponent(){
//   const contextValue=React.useContext(MyContext);
//   return<p>{contextValue}</p>;
//  }

//  function App(){
//   return(
//     <MyProvider>
//       <ChildComponent/>
//     </MyProvider>
//   );
//  }
//  export default App;
// =========================================================
import React from 'react';
import { MyProvider } from './MyContext';
import ChildComponent from './ChildComponent';
function App(){
  return(
    <MyProvider>
      <ChildComponent/>
    </MyProvider>
  )
}
export default App;