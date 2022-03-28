import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from 'react-bootstrap/Image'

export default function StoreListing(){
    return(
        <div style={{marginTop: "5vh"}}>
            <h1>Browse stores in NYC</h1>
            <Container style={{marginTop: "5vh"}} fluid>
                <Row style={{paddingBottom: "2vh"}}>
                    <Col style={{textAlign: "right"}}>
                        <Image style={{border: "1px solid blue" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                    </Col>
                    <Col style={{textAlign: "left"}}>
                        <h2>ALDI</h2>
                        <p>Delivery or pickup</p>
                    </Col>
                </Row>
                <Row style={{paddingBottom: "2vh"}}>
                    <Col style={{textAlign: "right"}}>
                        <Image src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle />
                    </Col>
                    <Col style={{textAlign: "left"}}>
                        <h2>Sprouts Farmers Market</h2>
                        <p>Delivery or pickup</p>
                    </Col>
                </Row>
                <Row style={{paddingBottom: "2vh"}}>
                    <Col style={{textAlign: "right"}}>
                        <Image style={{ border: "1px solid red" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/45/d10d0f4b-1fca-4b84-bc19-bbf492c040da.png" roundedCircle />
                    </Col>
                    <Col style={{textAlign: "left"}}>
                        <h2>Kroger</h2>
                        <p>Delivery or pickup</p>
                    </Col>
                </Row>                   
            </Container>
        </div>
    )
}