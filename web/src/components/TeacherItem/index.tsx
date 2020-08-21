import React from 'react';


import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){

    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/15328753?s=460&u=003d0c7f37588e4b9966bb4c4c7f99fa68fa36b6&v=4" alt="Larissa"/>
                <div>
                    <strong>Larissa Arruda</strong>
                    <span>Português</span>
                </div>
            </header>
            <p>
                Gaia está chorando horrores pq quer passear porém está chovendo e eu queria aproveitar da oportunidade para terminar o bendito do curso.
                <br/>
                Essa primeira aula é longa e vc tem que ser rápido pra digitar pq olha, é rápido.
            </p>
            <footer>
                <p>
                    Preço/hora <strong>R$ 20,00 </strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Whatsapp" /> Entrar em contato
                </button>
            </footer>
        </article>
    )
};


export default TeacherItem;