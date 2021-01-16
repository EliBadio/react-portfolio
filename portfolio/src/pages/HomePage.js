import React from "react";
import Portfolio from "../components/Portfolio";
import Carousel from '../components/Carousel'

function HomePage(props) {
return(
    <div>

    <Portfolio title={props.title} subTitle={props.subTitle} text={props.text} />
    <Carousel/>

    </div>
)

}


export default HomePage;