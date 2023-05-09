import React from 'react'
import { Fragment } from "react";
import { DescriptionPage, IphoneItems, ContactUs, SamsungItems } from '../components/items';
import NavBar from './NavBar';
import About from './About';
import TechnoItem from '../components/items/TechnoItems';
import { TechnoProvider } from '../components/items/TechnoContext';

function HomePage() {
  return (
   <TechnoProvider>
    <Fragment>
      <NavBar/>
    <DescriptionPage/>
    <section id="company_posts" className="mt-5">
        <div className="container-fluid px-3">
            <div className="row">
                <div className="col-sm-12">
                    <h2><strong>iPhones</strong></h2>
                    <hr/>
                    <div className="row mt-4">
                        <IphoneItems/>
                        </div>
                    </div>
                    <div className="col-sm-12">
                    <h2><strong>Samsungs</strong></h2>
                    <hr/>
                    <div className="row mt-4">
                        <SamsungItems/>
                        </div>
                    <div className="col-sm-12">
                    <h2><strong>Technos</strong></h2>
                    <hr/>
                    <div className="row mt-4">
                         <TechnoItem/> 
                        </div> 
                        </div>  
                    </div>
                    </div>
                    </div>
                    </section>
 
     <ContactUs/>
     <About/>
    </Fragment>
    </TechnoProvider>
  
)}

export default HomePage
