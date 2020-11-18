import React from "react";


function Portofolio() {
  return (
    <section className="work" id="Portofolio">
      <div className="row">
        <h2>My Portofolio</h2>
        <div className="work__boxes">

          <div className="work__box">
            <div className="work__text">
              <h3>CMS of a restaurant website</h3>
              <p>
                A Content Management Systems app that allows a Restaurant owner to post new dishes 
                to her/his restaurant website so that customers can view and order online.
              </p>
              <ul className="work__list">
                <li>NodeJS</li>
                <li>Express-Handlebars</li>
                <li>Sequelize</li>
                <li>MySQL</li>
              </ul>

              <div className="work__links">
                <a href="https://restaurant-cms-project2.herokuapp.com/blog" target="_blank" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/kevkouadio/Project2" title="View Source Code" target="_blank">
                  <img src="./images/github.svg" className="work__code" alt="GitHub"/>
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src="./images/menu.png" className="work__image" alt="menu page restaurant-cms-project2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
