import React from "react";

const PortfolioModal = () => {
  return (
    <div
      className="modal fade"
      id="portfolio-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="portfolio-modal"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <PortfolioModalCard
            dataName="site1"
            title="Product Shopping Website 1"
            description="This a product shopping website with custom design and 5 major pages. It has a search, category as well as product detail page. All pages are completely responsive and highly optimized. This website also has a custom blog website associated with it."
            stack="HTML, CSS, Javascript, JQuery, CakePHP | Blog: Wordpress"
            date="March, 2018"
            imgPaths={[
              "website1-cover.PNG",
              "website1-1.PNG",
              "website1-2.PNG",
              "website1-3.PNG",
              "website1-4.PNG",
              "website1-5.PNG",
            ]}
          />
          <PortfolioModalCard
            dataName="site2"
            title="Product Shopping Website 2"
            description="This a product shopping website with custom design and 5 major pages. It has a search, category as well as product detail page. All pages are completely responsive and highly optimized. This website also has a custom blog website associated with it."
            stack="HTML, CSS, Javascript, JQuery, CakePHP | Blog: Wordpress"
            date="August, 2019"
            imgPaths={[
              "website2-cover.PNG",
              "website2-1.PNG",
              "website2-2.PNG",
              "website2-3.PNG",
              "website2-4.PNG",
              "website2-5.PNG",
            ]}
          />

          <PortfolioModalCard
            dataName="site3"
            title="Health Product Website 1"
            description="This a product shopping website with custom design and 5 major pages. It has a search, category as well as product detail page. All pages are completely responsive and highly optimized. This website also has a custom blog website associated with it."
            stack="HTML, CSS, Javascript, JQuery, CakePHP | Blog: Wordpress"
            date="August, 2019"
            imgPaths={[
              "website3-cover.PNG",
              "website3-1.PNG",
              "website3-2.PNG",
              "website3-3.PNG",
              "website3-4.PNG",
              "website3-5.PNG",
            ]}
          />
          <PortfolioModalCard
            dataName="site4"
            title="Shopping Website 3"
            description="This a product shopping website with custom design and 5 major pages. It has a search, category as well as product detail page. All pages are completely responsive and highly optimized. This website also has a custom blog website associated with it."
            stack="HTML, CSS, Javascript, JQuery, CakePHP | Blog: Wordpress"
            date="August, 2019"
            imgPaths={[
              "website4-cover.PNG",
              "website4-1.PNG",
              "website4-2.PNG",
              "website4-3.PNG",
              "website4-4.PNG",
              "website4-5.PNG",
            ]}
          />

          <PortfolioModalCard
            dataName="site5"
            title="Shopping Website 4"
            description="This a product shopping website with custom design and 5 major pages. It has a search, category as well as product detail page. All pages are completely responsive and highly optimized. This website also has a custom blog website associated with it."
            stack="HTML, CSS, Javascript, JQuery, CakePHP | Blog: Wordpress"
            date="August, 2019"
            imgPaths={[
              "website5-cover.PNG",
              "website5-1.PNG",
              "website5-2.PNG",
              "website5-3.PNG",
              "website5-4.PNG",
              "website5-5.PNG",
            ]}
          />

          <PortfolioModalCard
            dataName="site6"
            title="Shopping Site 5"
            description="This a product shopping website with custom design and 5 major pages. It has a search, category as well as product detail page. All pages are completely responsive and highly optimized. This website also has a custom blog website associated with it."
            stack="HTML, CSS, Javascript, JQuery, CakePHP | Blog: Wordpress"
            date="August, 2019"
            imgPaths={[
              "website6-cover.PNG",
              "website6-1.PNG",
              "website6-2.PNG",
              "website6-3.PNG",
              "website6-4.PNG",
              "website6-5.PNG",
            ]}
          />

          <PortfolioModalCard
            dataName="site7"
            title="Health Blog Site"
            description="This a product shopping website with custom design and 5 major pages. It has a search, category as well as product detail page. All pages are completely responsive and highly optimized. This website also has a custom blog website associated with it."
            stack="HTML, CSS, Javascript, JQuery, CakePHP | Blog: Wordpress"
            date="August, 2019"
            imgPaths={[
              "website7-cover.PNG",
              "website7-1.PNG",
              "website7-2.PNG",
              "website7-3.PNG",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const PortfolioModalCard = ({
  dataName,
  title,
  description,
  stack,
  date,
  imgPaths,
}) => {
  return (
    <div className="modal-body" data-name={dataName}>
      <div className="modal-title">
        <h1>
          <span className="point">{title}</span>
        </h1>
      </div>
      <div className="modal-description">
        <p>{description}</p>
      </div>
      <div className="about-me-info">
        <p>
          <span className="span-title">Stack</span>
          <span>{stack}</span>
        </p>
        <p>
          <span className="span-title">Date</span>
          <span>{date}</span>
        </p>
      </div>
      <div id={"carousel-" + dataName} className="carousel slide">
        <ol className="carousel-indicators">
          {imgPaths.map((img, index) => {
            return (
              <li
                data-target={"#carousel-" + dataName}
                data-slide-to={index}
                className={`${index === 0 ? "active" : ""}`}
                key={img}
              ></li>
            );
          })}
        </ol>

        <div className="carousel-inner">
          {imgPaths.map((img, index) => {
            return (
              <div
                className={`${index === 0 ? "item active" : "item"}`}
                key={img}
              >
                <img
                  src={require("../assets/images/" + img)}
                  alt={title}
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}
        </div>

        <a
          className="left carousel-control"
          href={"#carousel-" + dataName}
          data-slide="prev"
        >
          <span className="mdi fonts-icons modal-icon mdi-arrow-left-bold-circle-outline"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href={"#carousel-" + dataName}
          data-slide="next"
        >
          <span className="mdi fonts-icons modal-icon mdi-arrow-right-bold-circle-outline"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="about-btns">
        <a href="#" className="site-btn" data-dismiss="modal">
          BACK TO CV
        </a>
      </div>
    </div>
  );
};

export default PortfolioModal;
