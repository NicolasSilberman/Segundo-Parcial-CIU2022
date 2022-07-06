import React from 'react';

const Footer = () => {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a href="#">
                <img src="https://i.postimg.cc/9MScnzD0/medias.png" width="110" height="25" className="d-inline-block align-text-top"></img>
             </a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div>
                    <h5 className="text-white">/masterfoodok</h5>
                </div>
            </div>
            <div className="d-flex">
                <h5 className="text-white">© Copyright Master Food 2022</h5>
            </div>
        </div>
    </nav>
    );
}

export default Footer