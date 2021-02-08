import React from 'react';
import TEDx from '../assets/tedx.png'
import Airgate from '../assets/images/airgate-black.png'
import SCESOC from '../assets/images/scesoc.png'
import Valerian from '../assets/images/valerian.png'
import Banner from '../assets/images/banner.png'

const Companies = () =>    {
    return(
        <section className="bg-gray-50 py-8 w-full flex hidden lg:block" id="more">
        <div className="mx-auto flex justify-between w-full max-w-5xl">
          {/* SCESoc + TEDxCarletonU + Valerian School + BannerPublish */}
          <img src={TEDx} className="h-6 my-auto w-auto"/>
          <img src={Airgate} className="h-8 my-auto w-auto"/>
          <img src={SCESOC} className="h-16 my-auto w-auto"/>
          <img src={Valerian} className="h-10 my-auto w-auto"/>
          <img src={Banner} className="h-8 my-auto w-auto"/>
        </div> 
      </section>
);
}

export default Companies;
