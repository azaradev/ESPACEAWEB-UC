"use client"
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import SideBar from './SideBar';
function HeaderVarticlePortfolio() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <>
                {/* header three area start */}
                <header className="header-three five nav-color-white" style={{ zIndex: 10 }}>
                    <a href="/" className="logo-area">
                        <img src="assets/images/logo/03.svg" alt="logo" />
                    </a>
                    <div className="header-right">
                        <Nav/>
                        <div className="action-area" id="menu-btn" onClick={toggleSidebar}>
                            <div className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={16}
                                    viewBox="0 0 24 16"
                                    fill="none"
                                >
                                    <rect x={6} width={18} height={2} fill="#D9D9D9" />
                                    <rect x={10} y={14} width={14} height={2} fill="#D9D9D9" />
                                    <rect y={7} width={24} height={2} fill="#D9D9D9" />
                                </svg>
                            </div>
                            <span>Menu</span>
                        </div>
                    </div>
                </header>
                {/* header three area end */}
                <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </>

        </div>
    )
}

export default HeaderVarticlePortfolio