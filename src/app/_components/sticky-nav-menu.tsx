'use client'
import React, { FC, useEffect, useState } from "react";
// import '../styles/StickyNavMenu.scss'
import type { IMenu } from '../../interfaces/stickyNav';

const StickyNavMenu: FC<{  }> = (props) => {
    // const { menus } = props;
    const menus: IMenu[] = [{
        key: '1',
        name: '1'
    },{
        key: '2',
        name: '2'
    },{
        key: '3',
        name: '3'
    }];
    console.log('menus: ', menus)
    // const { menus } = props;
    const [navCls, setnavCls] = useState('')
    const [ulTop, setulTop] = useState(160)
    const [showMenu, setshowMenu] = useState(false)
    function onScroll() {
        const windowTop = window.screenTop;
        if (windowTop > 100) {
            setnavCls('navShadow')
            setulTop(100)
        } else {
            setnavCls('')
            setulTop(160)
        }
    }
    function menuToggle() {
        setshowMenu(!showMenu)
    }
    function ulClick() {
        setshowMenu(!showMenu)
    }
    
    useEffect(() => {
      const menuTog = document.querySelector('#menu-toggle');
      const ul = document.querySelector('#menu-ul');
      window.addEventListener('scroll', onScroll)
      menuTog?.addEventListener('click', menuToggle)
      ul?.addEventListener('click', ulClick)
      return () => {
        window.removeEventListener('scroll', onScroll)
        menuTog?.removeEventListener('click', menuToggle)
        ul?.removeEventListener('click', ulClick)

      }
    }, [])
    return ( 
        <>
        <header id="menu-header">
            <nav id="menu-nav" className={navCls}>
                <a id="brand">
                    <img id="logo" className="logo" src="" alt="logo"/>
                    <span id="word-mark" className="logo-txt"></span>
                </a>
                <div id="menu">
                    <div id="menu-toggle" className={showMenu ? 'closeMenu' : ''}>
                        <div id="menu-icon">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <ul id="menu-ul" className={showMenu ? 'showMenu' : ''} style={{ top: `${ulTop}px` }}>
                        {
                            menus?.map((item, idx) => (
                                <li key={item.key || idx}>
                                    <a href={item.href || `#${item.name}`}>{
                                        item.name
                                    }
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
            {/* <div id="hero-section">
                <div id="head-line"></div>
            </div> */}
        </header>
        {/* <section className="section" id="section01"></section>
        <section className="section" id="section02"></section>
        <section className="section" id="section03"></section>
        <section className="section" id="section04"></section> */}
        </>
    );
};

export default StickyNavMenu;