import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import AboutUs from "./sections/aboutus.jsx";
import Diabetes from "./sections/diabetes.jsx";
import PagePagination from "./sections/pagination.jsx";
import Images from "./sections/images.jsx";
import PageTable from "./sections/table.jsx";
import JsComponents from "./sections/js-components.jsx";
import CallToAction from "../../components/call-to-action/CallToAction"



const Components = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <AboutUs />
                    <Diabetes />
                    <PagePagination />
                    <Images />                    
                    <PageTable />
                    <JsComponents />
                    <CallToAction />
                </div>
            </div>
            <Footer />
        </div>
    );
}

Components.propTypes = {
    classes: PropTypes.object
};

export default Components;
