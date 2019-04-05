import React, {Component,Fragment} from 'react';
import {Header,Footer} from './Layouts';
import Exersises from './Exersises';

export default class extends Component {
    render() {
        return <Fragment>
                
                <Header/>
                <Exersises/>
                <Footer/>
                
            </Fragment>
        
    }
}

