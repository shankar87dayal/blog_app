import { CardBody, CardHeader, Container, Card, Form, FormGroup, Label, Input, Button, Row, Col, } from "reactstrap";
import Base from "../components/Base";

const Signup = () => {
    return (
        <Base>
        

            <Container>



               <Row className="mt-4">
                
                <Col sm={{size: 6, offset:3}}>
                
                  <Card color="dark" inverse>

                    <CardHeader>


                         <h3>Fill Information to Register !!</h3>

                    </CardHeader>

                    <CardBody>


                        {/* creating form */}

                        <Form>
                                     {/* name field */}
                            <FormGroup>

                                <Label for="name">Enter Your Name</Label>
                                <Input
                                type="text"
                                placeholder="Enter here"
                                id="name"
                                />
                                


                            </FormGroup>
                                     {/* Email field */}
                            <FormGroup>

                                <Label for="email">Enter Your Email</Label>
                                <Input
                                type="email"
                                placeholder="Enter here"
                                id="email"
                                />
                                


                            </FormGroup>
                                     {/* password field */}
                            <FormGroup>

                                <Label for="password">Enter Your password</Label>
                                <Input
                                type="password"
                                placeholder="Enter here"
                                id="password"
                                />
                                


                            </FormGroup>
                                     {/* About field */}
                            <FormGroup>

                                <Label for="about">Enter about yourself</Label>
                                <Input
                                type="textarea"
                                placeholder="Enter here"
                                id="about"
                                style={{height:"100px"}}
                                />
                                


                            </FormGroup>

                                 {/* button */}
                            <Container className="text-center">
                                <Button color="light" outline>Register</Button>
                                <Button color="danger" className="ms-2" type="reset">Reset</Button>
                            </Container>
                        </Form>

                        
                    </CardBody>

                 </Card> 
                
                </Col>
                
                </Row> 


                

                
            </Container>

        </Base>
    );
}

export default Signup