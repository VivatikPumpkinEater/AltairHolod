import React from 'react';
import s from './Main.module.css'
import Header from "../header/Header";
import Description from "./description/Description";
import MainFooter from "./mainFooter/MainFooter";
import Main2 from "../main2/mainFooter/Main2";

const Main = () => {
    return (
        <div className={s.mainWrapper}>
            <Header/>
            <Description/>
            <MainFooter/>
            <Main2/>
        </div>
    );
};

export default Main;