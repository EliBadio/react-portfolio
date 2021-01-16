import React from 'react';

import Card from '../components/Card';

import tvshows from "../assets/images/tvshows.jpg";
import EntSolutions from "../assets/images/EntSolutions.jpg";
import weatherApp from "../assets/images/weatherApp.png";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';


class Carousel extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                id:0,
                title: 'BoxOffice Movies Project',
                subTitle: 'Bring all fans in one Site',
                imgSrc:tvshows,
                link: 'https://0216johnsoneric.github.io/Boxoffice-Movies/',
                selected: false
                },

                {
                id:1,
                title:'Enterprise Solutions Project',
                subTitle: 'Small Business Inventory Management',
                imgSrc:EntSolutions,
                link:'https://gentle-retreat-04355.herokuapp.com/ ',
                selected: false
                },

                {
                id:2,
                title:"Weather Dashboard",
                subTitle:' View the current weather near your City',
                imgSrc:weatherApp,
                link:'https://elibadio.github.io/Weather-Dashboard.HW6.io/',
                selected: false
                },


            ]


        }
    }

    handleCardClick = (id, card) => {
        //console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item= {item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />

        })
    }

 render() {

    return (
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
        
    )
 }
}

export default Carousel;