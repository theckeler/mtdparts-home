import MenuMainSearch from "../elements/Search";
import Button from "../elements/Button";
import IconTitleBlock from "../elements/Blocks/IconTitle";
import ImgTitleBlock from "../elements/Blocks/ImgTitle";

import "./scss/home.scss";

import { ReactComponent as IconArrowUp } from "../images/arrow-up.svg";
import { ReactComponent as IconArrowDown } from "../images/arrow-down.svg";
import { ReactComponent as logoYardMan } from "../images/logo-yard-man.svg";
import { ReactComponent as logoRemington } from "../images/logo-remington.svg";
import { ReactComponent as logoWhiteOutdoor } from "../images/logo-white.svg";
import { ReactComponent as logoYardMachines } from "../images/logo-yard-machines.svg";
import { ReactComponent as logoCraftsman } from "../images/logo-craftsman.svg";
import { ReactComponent as logoTroyBilt } from "../images/logo-troy-bilt.svg";
import { ReactComponent as logoBolens } from "../images/logo-bolens.svg";
import { ReactComponent as logoRobomow } from "../images/logo-robomow.svg";

import tabsData from "../data/tabs.json";
import homeData from "./data/home.json";

const Home = () => {
  const LogoMap = {
    logoYardMan: logoYardMan,
    logoRemington: logoRemington,
    logoWhiteOutdoor: logoWhiteOutdoor,
    logoYardMachines: logoYardMachines,
    logoCraftsman: logoCraftsman,
    logoTroyBilt: logoTroyBilt,
    logoBolens: logoBolens,
    logoRobomow: logoRobomow,
  };

  const changeTab = (e) => {
    document.querySelectorAll(".tabs .tab").forEach(function (e) {
      e.classList.add("d-none");
    });

    document.querySelectorAll(".arrow-up").forEach(function (e) {
      e.classList.remove("d-block");
      e.classList.add("d-none");
    });
    document.querySelectorAll(".arrow-down").forEach(function (e) {
      e.classList.remove("d-none");
      e.classList.add("d-block");
    });
    document.querySelectorAll(".nav-tabs button").forEach(function (e) {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    e.target.querySelector(".arrow-up").classList.remove("d-none");
    e.target.querySelector(".arrow-up").classList.add("d-block");
    e.target.querySelector(".arrow-down").classList.remove("d-block");
    e.target.querySelector(".arrow-down").classList.add("d-none");

    document.querySelector(`#tab-${e.target.id}`).classList.remove("d-none");
  };

  const moreHelp = (e) => {
    document.querySelector(`#more-info`).classList.toggle("d-none");
  };

  return (
    <>
      <h1 className="visually-hidden">MTD Parts</h1>

      {/* Small text block */}
      <section className="py-1" style={{ backgroundColor: "#000" }}>
        <div className="container-xxl">
          <p className="text-white text-center text-uppercase fs-7 mb-0">
            Free Shipping on Parts Orders Over $45
          </p>
        </div>
      </section>

      {/* Parts finder/diagrams */}
      <section
        className="border-bottom"
        style={{ backgroundColor: "rgb(232,232,232)" }}
      >
        <ul className="list-unstyled container-xxl g-0 d-flex flex-wrap mb-0 no-gutters p-0">
          <li
            className="order-0 col-12 col-md-6 text-white p-4 py-md-4 px-md-3"
            style={{ backgroundColor: "rgb(6,101,58)" }}
          >
            <h2 className="fs-4 text-center text-uppercase">Part Finder</h2>
            <p className="fs-8 text-center w-md-75 mx-auto">
              Search for parts using your model number, or the part number you
              are replacing.
            </p>
            <MenuMainSearch addClass="mb-2" />
            <p className="fs-8 text-center mb-0 d-md-none">
              <button
                className="border-0 bg-transparent text-white min-h-48"
                onClick={moreHelp}
              >
                Don’t know your model number? Click here for help.
              </button>
            </p>
          </li>

          <li className="order-2 order-md-1 col-12 col-md-6 bg-secondary text-white p-4 py-md-4 px-md-3">
            <h2 className="fs-4 text-center text-uppercase">Parts Diagrams</h2>
            <p className="fs-8 text-center w-md-75 mx-auto">
              Browse illustrated parts diagrams to find the part you need.
            </p>
            <Button
              copy="Search Diagrams"
              url="https://www.mtdparts.com/en_US/ari-partstream.html"
              addClass="bg-white min-h-48 max-h-48"
            />
            <p className="fs-8 text-center mb-0 mt-2">
              For equipment 1995-present
            </p>
          </li>

          <li className="order-1 order-md-2 col-12">
            {/* More info */}
            <div
              className="p-1 d-none d-md-block border-left border-right bg-white"
              id="more-info"
              // style={{ backgroundColor: "rgb(232,232,232)" }}
            >
              <div className="container-xxl g-0 d-flex flex-column">
                <ul className="d-flex flex-column flex-md-row list-unstyled mb-0">
                  <li className="col-12 col-md-6 col-xl-3 p-3">
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <img
                        src="https://mtdproducts.secure.force.com/ProductRegistration/resource/1619086108000/CmsTemp/ProductRegistration/img/cub-cadet-US-model-plate.jpg"
                        alt=""
                        className="w-100"
                        style={{ maxWidth: "24rem" }}
                      />
                    </div>
                  </li>
                  <li className="col-12 col-md-6 col-xl-9 p-3">
                    <div className="d-flex flex-column align-items-start">
                      <h2
                        className="h2 text-uppercase mb-0 border-bottom w-100 pb-1"
                        style={{ fontSize: "1.25rem" }}
                      >
                        Model Number Example:
                      </h2>
                      <p className="fs-7 mb-0 mt-2">
                        Your machine’s serial number is essential to
                        establishing extended warranty eligibility status for
                        your outdoor power equipment. The serial number is
                        eleven characters printed on the left side of the
                        Product Identification Label. Characters can include
                        numbers, letters or hyphens.
                      </p>
                      <Button
                        copy="Need More Help?"
                        url="https://www.mtdparts.com/en_US/how-to-find-model-number.html"
                        addClass="bg-white border mt-2 d-md-inline-flex w-auto px-4 min-h-48"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* SHOP BY */}
      <section>
        <div className="container-xxl g-0 d-flex flex-column py-3">
          <h2 className="text-uppercase text-center">{homeData.tabs.h2}</h2>
        </div>

        <div className="container-xxl g-0 d-flex flex-column p-0">
          <ul className="nav nav-tabs no-gutters list-unstyled">
            {homeData.tabs.blocks.map((block, i) => {
              return (
                <li className="col-4" key={i}>
                  <button
                    className={`d-flex justify-content-center align-items-center nav-link w-100 text-uppercase p-2 p-lg-3 min-h-48 max-h-48 border-bottom rounded-0 ${
                      block.active && "active"
                    }`}
                    aria-current="page"
                    href="#top"
                    onClick={changeTab}
                    id={block.title.toLowerCase().replace(/\s/g, "-")}
                    style={{
                      backgroundColor: block.active
                        ? "rgb(224,244,237)"
                        : "transparent",
                      // borderColor: block.active ? "rgb(6,101,58)" : "",
                    }}
                  >
                    <div className="tab-arrows pe-none max-w-25">
                      <span
                        className={`arrow-up ${
                          block.active ? "d-block" : "d-none"
                        }`}
                      >
                        <IconArrowUp aria-disabled="true" className="" />
                      </span>
                      <span
                        className={`arrow-down ${
                          block.active ? "d-none" : "d-block"
                        }`}
                      >
                        <IconArrowDown aria-disabled="true" className="" />
                      </span>
                    </div>
                    {block.title}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="tabs">
            <div className="tab" id="tab-brand">
              <ul className="d-flex flex-wrap list-unstyled">
                {tabsData.brands.map((brand, i) => {
                  let ComponentName = LogoMap[`${brand.img}`];

                  return (
                    <li className="col-6 col-md-3 p-2" key={i}>
                      <a
                        href="#top"
                        className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                      >
                        <div
                          className="d-flex p-2 p-md-3"
                          style={{ minHeight: "170px" }}
                        >
                          <ComponentName
                            style={{
                              width: "100%",
                            }}
                          />
                        </div>
                        <div
                          className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                          style={{ backgroundColor: "rgb(232,232,232)" }}
                        >
                          {brand.title}
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="px-3 pb-2">
                <Button
                  copy="View All"
                  url="#top"
                  addClass="bg-secondary text-white"
                  darkTheme={true}
                />
                <p className="mb-0 mt-3 fs-7 text-center">
                  For other brands, use our{" "}
                  <a href="#top">Parts Diagrams & Lookup tool</a>.
                </p>
              </div>
            </div>

            <div className="tab d-none" id="tab-part-type">
              <ul className="d-flex flex-wrap list-unstyled">
                {tabsData.partType.map((brand, i) => {
                  return (
                    <li className="col-6 col-md-3 p-2" key={i}>
                      <a
                        href="#top"
                        className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                      >
                        <div className="d-flex justify-content-center p-2 p-md-3">
                          <img src={brand.img} alt="" />
                        </div>
                        <div
                          className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                          style={{ backgroundColor: "rgb(232,232,232)" }}
                        >
                          {brand.title}
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="px-3 pb-2">
                <Button
                  copy="View All"
                  url="#top"
                  addClass="bg-secondary text-white"
                  darkTheme={true}
                />
              </div>
            </div>

            <div className="tab d-none" id="tab-machine-type">
              <ul className="d-flex flex-wrap list-unstyled">
                {tabsData.machineType.map((brand, i) => {
                  return (
                    <li className="col-6 col-md-3 p-2" key={i}>
                      <a
                        href="#top"
                        className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                      >
                        <div className="d-flex justify-content-center p-2 p-md-3">
                          <img src={brand.img} alt="" />
                        </div>
                        <div
                          className="p-1 text-uppercase fs-7 text-black border-top mt-auto"
                          style={{ backgroundColor: "rgb(232,232,232)" }}
                        >
                          {brand.title}
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="px-3 pb-2">
                <Button
                  copy="View All"
                  url="#top"
                  addClass="bg-secondary text-white"
                  darkTheme={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP WITH CONFIDENCE */}
      <section
        className="px-3 py-5 mt-3"
        style={{ backgroundColor: "rgb(232,232,232)" }}
      >
        <div className="container-xxl g-0 d-flex flex-column">
          <h2 className="text-uppercase text-center">{homeData.shop.h2}</h2>
          <p className="mb-0 fs-7 text-center">{homeData.shop.copy}</p>
          <ul className="d-flex flex-wrap list-unstyled mt-lg-4 mb-0">
            {homeData.shop.blocks.map((block, i) => {
              const colBreak = "lg";

              return (
                <li className={`col-12 col-${colBreak}-4`} key={i}>
                  <IconTitleBlock
                    {...{
                      block,
                      curCount: i,
                      blockLength: homeData.shop.blocks.length,
                      colBreak: colBreak,
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* How to guides */}
      <section className="px-3 py-3 mt-3">
        <div className="container-xxl g-0 d-flex flex-column">
          <h2 className="text-uppercase text-center">
            {homeData.howToGuides.h2}
          </h2>
          <p className="mb-0 fs-7 text-center">{homeData.howToGuides.copy}</p>
          <ul className="d-flex flex-wrap list-unstyled mb-0 no-gutters">
            {homeData.howToGuides.blocks.map((block, i) => {
              const colBreak = "md";

              return (
                <li className={`col-12 col-md-6 col-xl-3`} key={i}>
                  <ImgTitleBlock
                    {...{
                      block,
                      curCount: i,
                      blockLength: homeData.howToGuides.blocks.length,
                      colBreak: colBreak,
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* support links */}
      <section
        className="px-3 py-5 mt-3"
        style={{ backgroundColor: "rgb(232,232,232)" }}
      >
        <div className="container-xxl g-0 d-flex flex-column">
          <h2 className="text-uppercase text-center">
            {homeData.supportLinks.h2}
          </h2>
          <p className="mb-0 fs-7 text-center">{homeData.supportLinks.copy}</p>
          <ul className="d-flex flex-wrap list-unstyled p-2 no-gutters">
            {homeData.supportLinks.blocks.map((block, i) => {
              const colBreak = "lg";
              return (
                <li className={`col-12 col-${colBreak}-4`} key={i}>
                  <IconTitleBlock
                    {...{
                      block,
                      curCount: i,
                      blockLength: homeData.supportLinks.blocks.length,
                      colBreak: colBreak,
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
