import React from 'react';
import image1 from '../../../../assets/1.jpg'
import image2 from '../../../../assets/2.jpg'
import image3 from '../../../../assets/3.jpg'
import image4 from '../../../../assets/4.jpg'
import image5 from '../../../../assets/5.jpg'
import image6 from '../../../../assets/6.jpg'
import image7 from '../../../../assets/7.jpg'
import image8 from '../../../../assets/8.jpg'
import image9 from '../../../../assets/9.jpg'
import image10 from '../../../../assets/10.jpg'
import image11 from '../../../../assets/11.jpg'
import s from './Content.module.scss'
const Content = () => {
    const arr = [
        {
            id:1,
            src:image1,
            description:'Стандартные перила из круглой нержавеющей трубы'
        },
        {
            id:2,
            src:image2,
            description:'Изготовление и монтаж входных групп магазинов из разнопрофильной и круглой нержавеющей трубы'
        },
        {
            id:3,
            src:image3,
            description:'Изготовление и монтаж входных групп магазинов из разнопрофильной и круглой нержавеющей трубы'
        },
        {
            id:4,
            src:image4,
            description:'Уличное ограждение из профильной трубы'
        },
        {
            id:5,
            src:image5,
            description:'Велопарковки у торговых объектов'
        },
        {
            id:6,
            src:image6,
            description: 'Ограждение балконов'
        },
        {
            id:7,
            src:image7,
            description: 'Технологические конструкции для объектов пищевой и перерабатывающей отрасли'
        },
        {
            id:8,
            src:image8,
            description: 'Перила из нержавеющей стали со стеклом'
        },
        {
            id:9,
            src:image9,
            description: 'Делители и перила для улиц'
        },
        {
            id:10,
            src:image10,
            description: 'Делители и перила для улиц'
        },
        {
            id:11,
            src:image11,
            description: 'Делители и перила для улиц'
        },

    ]
    return (
        <div className={s.wrapperImg}>
            {arr.map((m)=>{
                return <div> <img className={s.img} src={m.src} key={m.id}/><div className={s.description}>{m.description}</div> </div>
            })}
        </div>
    );
};

export default Content;