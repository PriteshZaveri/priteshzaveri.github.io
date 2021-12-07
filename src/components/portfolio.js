import React from "react";
import LazyLoad from "react-lazyload";
import PortfolioModal from "./portfolio-modal";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="section section-small-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title wow slideInLeft">
                <h2>
                  <span className="point">Portfolio</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio-sort wow slideInLeft">
                <ul className="list-inline">
                  <li
                    className="colored-link"
                    data-mixitup-control
                    data-filter="all"
                  >
                    All projects
                  </li>
                  <li
                    className="colored-link"
                    data-mixitup-control
                    data-filter=".shopping-sites"
                  >
                    Shopping &amp; Health
                  </li>
                  <li
                    className="colored-link"
                    data-mixitup-control
                    data-filter=".compare-sites"
                  >
                    Product Compare
                  </li>
                  <li
                    className="colored-link"
                    data-mixitup-control
                    data-filter=".brand"
                  >
                    Brand &amp; Engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio">
                <div className="row">

                  <PortFolioList
                    colClass="brand"
                    dataName="site15"
                    title="Engaging Content Website"
                    imgPath="website15-cover.PNG"
                    date="January, 2020"
                  />

                  <PortFolioList
                    colClass="brand"
                    dataName="site16"
                    title="Celeb News &amp; Info Website"
                    imgPath="website16-cover.PNG"
                    date="February, 2021"
                  />

                  <PortFolioList
                    colClass="brand"
                    dataName="site17"
                    title="Vow Gold Investment"
                    imgPath="website17-cover.PNG"
                    date="November, 2020"
                  />

                  <PortFolioList
                    colClass="brand"
                    dataName="site18"
                    title="Vow Collections"
                    imgPath="website18-cover.PNG"
                    date="March, 2021"
                  />

                  <PortFolioList
                    colClass="shopping-sites"
                    dataName="site1"
                    title="Shopping Site 1"
                    imgPath="website1-cover.PNG"
                    date="March, 2018"
                  />
                  <PortFolioList
                    colClass="shopping-sites"
                    dataName="site2"
                    title="Shopping Site 2"
                    imgPath="website2-cover.PNG"
                    date="August, 2019"
                  />

                  <PortFolioList
                    colClass="shopping-sites"
                    dataName="site3"
                    title="Health Site 1"
                    imgPath="website3-cover.PNG"
                    date="September, 2019"
                  />

                  <PortFolioList
                    colClass="shopping-sites"
                    dataName="site4"
                    title="Shopping Site 3"
                    imgPath="website4-cover.PNG"
                    date="August, 2020"
                  />

                  <PortFolioList
                    colClass="shopping-sites"
                    dataName="site5"
                    title="Shopping Site 4"
                    imgPath="website5-cover.PNG"
                    date="October, 2019"
                  />

                  <PortFolioList
                    colClass="shopping-sites"
                    dataName="site6"
                    title="Shopping Site 5"
                    imgPath="website6-cover.PNG"
                    date="September, 2019"
                  />

                  <PortFolioList
                    colClass="shopping-sites"
                    dataName="site7"
                    title="Health Blog Site"
                    imgPath="website7-cover.PNG"
                    date="September, 2020"
                  />

                  <PortFolioList
                    colClass="shopping-sites"
                    dataName="site8"
                    title="Shopping Site 6"
                    imgPath="website8-cover.PNG"
                    date="February, 2018"
                  />

                  <PortFolioList
                    colClass="compare-sites"
                    dataName="site9"
                    title="Cellphones Compare Site"
                    imgPath="website9-cover.PNG"
                    date="November, 2018"
                  />

                  <PortFolioList
                    colClass="compare-sites"
                    dataName="site10"
                    title="Product Compare Site 2"
                    imgPath="website10-cover.PNG"
                    date="December, 2019"
                  />

                  <PortFolioList
                    colClass="compare-sites"
                    dataName="site11"
                    title="Product Compare Site 3"
                    imgPath="website11-cover.PNG"
                    date="January, 2020"
                  />

                  <PortFolioList
                    colClass="compare-sites"
                    dataName="site12"
                    title="College Compare Site 1"
                    imgPath="website12-cover.PNG"
                    date="July, 2018"
                  />

                  <PortFolioList
                    colClass="compare-sites"
                    dataName="site13"
                    title="College Compare Site 2"
                    imgPath="website13-cover.PNG"
                    date="July, 2019"
                  />

                  <PortFolioList
                    colClass="compare-sites"
                    dataName="site14"
                    title="Credit Card Compare Site"
                    imgPath="website14-cover.PNG"
                    date="August, 2018"
                  />

                  {/* <PortFolioList
                    colClass="ui-ux-design"
                    dataName="site19"
                    title="Health Site 1"
                    imgPath="website1-cover.PNG"
                    date="September, 2019"
                  />

                  <PortFolioList
                    colClass="ui-ux-design"
                    dataName="site20"
                    title="Health Site 1"
                    imgPath="website1-cover.PNG"
                    date="September, 2019"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PortfolioModal />
    </>
  );
};

const PortFolioList = ({ colClass, dataName, title, date, imgPath }) => {
  return (
    <div className={`col-md-3 col-sm-6 col-xs-6 mix ${colClass} wow flipInX`}>
      <a
        data-toggle="modal"
        data-target="#portfolio-modal"
        data-name={dataName}
        title={title}
        href="#"
        className="portfolio-box"
      >
        <div className="portfolio-img">
          <LazyLoad once>
          <img src={require("../assets/images/" + imgPath)} alt={title} />
          </LazyLoad>
        </div>
        <div className="portfolio-name">
          <span>{title}</span>
        </div>
        <div className="portfolio-date">
          <span>{date}</span>
        </div>
      </a>
    </div>
  );
};

export default Portfolio;
