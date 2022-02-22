import React from 'react'
import logo from './logo.svg';
import './App.css';
import Thumbnail from './components/Thumbnail';
import Display from './components/Display';
import Message from './Tutorials/Messge'
import Couter from './Tutorials/Couter';
import ClassProps from './Tutorials/ClassProps';
import Eventbind from './Tutorials/Eventbind';
import ChildToParent from './Tutorials/ChildToParent';
import Styles from './Tutorials/Styles';
import FRparent from './Tutorials/FRparent';
import ClassCounte from './Tutorials/ClassCounte';
import MouseEventClass from './Tutorials/MouseEventClass';
import MouseEventFunction from './Tutorials/MouseEventFunction';
import MouseContainer from './Tutorials/MouseContainer';
import InteralCouterClass from './Tutorials/InteralCouterClass';
import IntervalHookCouter from './Tutorials/IntervalHookCouter';
import ComponentC from './Tutorials/ComponentC';
import CouterOne from './Tutorials/CouterOne';
import CouterTwo from './Tutorials/CounterTwo';






export const userContext = React.createContext();
export const channelContext = React.createContext();


function App() {
  return (
    <div className="App">
      {/* <Thumbnail/>
      <Display/> 
      <Message/>
      <Couter/>
      <ClassProps name="okoko"/> 
      <Eventbind/> 
       <ChildToParent/>
      <Styles  primary={true}/>
      <FRparent/> 
      <ClassCounte/> 
      <MouseEventClass/>
      <MouseEventFunction/> */}
      {/* <MouseContainer/> */}
      {/* <InteralCouterClass/>
      <IntervalHookCouter/> */}

      {/* <userContext.Provider value={"Tobe"}>
        <channelContext.Provider  value={"Writing"}>
           <ComponentC/>
        </channelContext.Provider>
      </userContext.Provider> */}
      {/* <CouterOne/> */}
      <CouterTwo/>
    </div>
  );
}

export default App;
