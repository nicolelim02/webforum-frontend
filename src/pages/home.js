import React from "react";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";

function Home() {
    return (
        <div className="home-wrapper">
            <Header />
            <div className="home-container">
                <Sidebar />
            </div>
        </div>
    )
}

export default Home;