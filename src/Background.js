import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from 'react-bootstrap/Image'
import Form from "react-bootstrap/Form"

export default function BackGround(){
    return(
        <div>
            <Row style={{backgroundColor: "rgb(223, 238, 214)", display: "flex"}}>
                <Col lg={9} style={{paddingTop: "10vh"}}>
                    <h1>Order groceries for delivery or pickup today</h1>
                    <h5>Whatever you want from local stores, brought right to your door.</h5>
                    <Form style={{paddingTop: "5vh"}}>
                        <Form.Group className="mb-3" controlId="addressForm">
                            <Form.Control type="text" placeholder="Enter address"/>
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="align-content-right" ><Image src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="background"></Image></Col>
            </Row>
        </div>
    )
}