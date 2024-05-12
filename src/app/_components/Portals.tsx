'use client'
import { useState, useEffect } from "react";
import { createPortal } from "react-dom"; 

const Portal = props => {
    function onclick(e) {
        console.log('12e: ', e)
      }
    return ( props.visible && (
        <div onClick={onclick}>
            <p>加载中。。。</p>
            <button onClick={e => props.closePortal()}>关闭这招</button>
        </div>
    ) );
};

const Portals = () => {
    const [visible, setvisible] = useState(false)
    const [domVisible, setdomVisible] = useState(false);
    useEffect(() => {
      if (document.querySelector('#portal-test')) {
        setdomVisible(true)
      }
    
      
    }, [])

    function onclick(e) {
        console.log('1e: ', e)
      }
      
    
    if (domVisible) {
        return ( 
            <div>
        <div onClick={onclick}>
            <div>sss</div>
            <main className="main-container"></main>
            {createPortal(<Portal visible={visible} closePortal={ () => setvisible(false) } />, document.querySelector('#portal-test')!)}
            <button onClick={e => setvisible(true)}>开启</button>
        </div></div> );
    }
    return <div>sfsfsdfsdf</div>
    // return ReactDOM.createPortal(<ul><li key={1}>11</li></ul>, document.querySelector('.main-container'))
    
};

export default Portals;