import { Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row,Button } from "reactstrap";
import Base from "../components/Base";

const Login = () => {
    return (
        <Base>
         
          <Container>

            <Row className="mt-4">

                <Col sm={{size: 6, offset:3}}>
                
                   <Card color="secondary" inverse>

                    <CardHeader>
                        <h3>Login Here</h3>
                    </CardHeader>
                    <CardBody>

                        <Form>
                            {/* username (email id) fields */}
                            <FormGroup>

                                <Label for="username">Enter Username</Label>
                                <Input 
                                type="email"
                                placeholder="enter your username"
                                id="username"
                                />
                            </FormGroup>
                            {/* password fields */}
                            <FormGroup>

                                <Label for="password">Enter your password</Label>
                                <Input 
                                type="password"
                                placeholder="enter your password"
                                id="password"
                                />
                            </FormGroup>

                             {/* button */}
                             <Container className="text-center">
                                <Button color="light" outline>Login</Button>
                                <Button color="light" outline className="ms-2" type="reset">Reset</Button>
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

export default Login