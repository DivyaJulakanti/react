import React from 'react';
import { useMyContext } from './MyContext';
function ChildComponent(){
    const contextValue=useMyContext();
    return <p>{contextValue}</p>
}
export default ChildComponent;