import React from 'react';
import s from './Header.module.css'
import Icon from '../../assets/phone.png'

const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.headerTitle}>ООО «Альтаир Холод»</div>
            <div>
                <img className={s.headerTelIcon} src={Icon}/>
                <a className={s.headerTel} href={"tel:+375336032254"}>+375 (33) 603-22-54</a>
            </div>
        </div>
    );
};

export default Header;