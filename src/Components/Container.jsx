import React, { useContext, useState } from 'react';
import './Container.scss';
import Middle from './Middle/Middle';
import Model from './Model/Model';
import Swatch from './Swatch/Swatch';
import Loading from './Loading/Loading';
import { LoadingContext } from '../Context/LoadingContext';
import { PageStepContext } from '../Context/PageStepContext';

const Container = () => {
    const {loading} = useContext(LoadingContext);
    const {pageStep} = useContext(PageStepContext);

    if(loading){
        return (<Loading/>);
    }else{
        if(pageStep === 1){
            return (
                <div className="container">
                    <Swatch />
                </div>
            );
        }else if(pageStep === 2){
            return (
                <div className="container">
                    <Model />
                </div>
            );
        }else if(pageStep === 3){
            return (
                <div className="container">
                    <Middle />
                </div>
            );
        }else{
            return (
                <React.Fragment>
                    <div className="container">
                        <Model />
                        <Middle />
                        <Swatch />
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default Container;