import React from 'react';
import s from './Main2.module.css'
import Content from "./content/Content";
import icon from '../../../assets/hren-removebg-preview.png'
import IconTel from '../../../assets/phone.png'

const Main2 = () => {
    return (
        <div className={s.wrapperContainer}>
            <div className={s.wrapper}>
                <div className={s.title}>Наши работы</div>
            </div>
            <div>
                <Content/>
            </div>
            <div className={s.ourWrapper}>
                <div className={s.ourPlus}>Наши возможности</div>
                <div className={s.ourDescription}>Изготовление и монтаж: ограждений для лоджий, отбойников для
                    холодильной мебели, ёмкостей для хранения жидких продуктов, лестниц и поручней
                    из нержавеющей стали, шлифовка и полировка существующих изделий из нержавеющей стали, ремонт мебели
                    из нержавеющей стали на объектах заказчика. Возможны работы как с частным клиентом, так и
                    организациями
                </div>
            </div>
            <div className={s.footer}>
                <div>
                    <img className={s.icon} src={icon}/>
                    <a className={s.mail} href="mailto:a.karabuhin@mail.ru">a.karabuhin@mail.ru</a>
                </div>
                <div className={s.tel}>
                    <img className={s.iconTel} src={IconTel}/>
                    <div>
                        <div>
                            <a className={s.mail} href="tel:+375336032254">+375 (33) 603-22-54</a>
                        </div>
                        <div>
                            <a className={s.mail} href="tel:+375293742036">+375 (29) 374-20-36</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main2;