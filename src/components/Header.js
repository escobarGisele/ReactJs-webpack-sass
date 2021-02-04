import React from 'react';

const Header = ({title}) => {
    return (
        <div className="container">
            <div className="content">
                <h1 className= "title"> {title}</h1>
                <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam laudantium doloremque optio accusantium cupiditate et officiis nobis illum distinctio nulla, veritatis neque soluta eius facere delectus, id iusto repellat.
                </p>
            </div>
        </div>
    );
};

export default Header;