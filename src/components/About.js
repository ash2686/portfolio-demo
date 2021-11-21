import React from 'react';
import './About.css'
import leo from '../mypics/pic1.png'
import matrix from '../assets/mtrxBg.jpg'

const About = () => {
    return (
        <div className='about-main'>
            <div className="about-content">
                <div className="top-text">
                    <h2>About</h2>
                    <div className="line"></div>
                </div>
                <div className="center-area">
                    <h2 className='about-left'> Lorem ipsum dolor hello sit amet consectetur, adipisicing elit. Saepe magni consequatur inventore fuga hic nesciunt totam asperiores, minima, sapiente veniam, incidunt tenetur labore odit eligendi modi. Culpa perspiciatis blanditiis possimus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore excepturi, fuga et consequuntur a molestias nemo perspiciatis ratione.
                    </h2>
                    <p className='about-right'><img src={leo} alt="Pineapple" style={{width:'170px',height:'170px',marginRight:'10px'}} />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempore rem nostrum, dicta consectetur eveniet nobis fugiat illo quia! Velit doloremque obcaecati quod. Recusandae nihil ullam accu samus repre henderit volup tatibus vero illo fuga explicabo repellat quod maiores nam atque quo optio neque natus provident voluptatum max ime corporis possimus, rem blanditiis corrupti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Conse ctetur provident id velit cupiditate saepe culpa commodi pariatur quo beatae! Natus molestiae incidunt rem nostrum iure quasi aliquam atque sed autem.
                    Veniam, corporis quaerat odit id, illum voluptates nesciunt rem assumenda saepe omnis fugit praesentium. Doloribus delectus necessitatibus, quod quam blanditiis ipsa minus quidem sequi quisquam fugit voluptate quis placeat non?
                    Inventore illo sequi suscipit fuga id iste tempora accusamus! Nisi deleniti quis dolore voluptatum dolor recusandae maiores libero nemo non eius! Minus impedit accusamus, ipsa mollitia in porro optio aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro sunt ex blanditiis repellat ad corporis reiciendis! Aspernatur omnis repudiandae corporis earum officiis dolor a, odio ad eos temporibus modi!
                    Distinctio quisquam corrupti sit temporibus velit ab blanditiis eligendi, voluptate maiores fugit labore reiciendis libero dolor consectetur aliquam odio adipisci eveniet in tenetur quibusdam aspernatur quos amet quod aliquid! Itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi similique quod nobis voluptate asperiores laborum cupiditate aperiam esse cumque? Aspernatur vel recusandae dolores corporis libero commodi doloribus sit consectetur!  Aspernatur vel recusandae dolores corporis libero commodi doloribus sit consectetur!
                    
                    </p>
                </div>

                <div className="image-container">
                    <img src={matrix} alt="Image Path not found" />
                </div>
            </div>
        </div>
    );
};



export default About;