import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { CardBody, CardHeader, Container, Card, Form, FormGroup, Label, Input, Button, Row, Col, } from "reactstrap";
import Base from "../components/Base";
import { signUp } from "../services/user-service";

const Signup = () => {


   



    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        about: '',

    })

    useState({
        errors:{},
        isError:false
    })

    //  useEffect(()=>{
    //     console.log(data);

    //  },[data]) // use for show the data on console

     //handle change
    const handleChange =(event,property)=>{
        // console.log("name change");
        //     console.log(event.target.value);

           //dynamic setting the values
            setData({...data , [property]:event.target.value})
           

    }



    //resetting the form
    const resetData = () =>{
        setData({
            name: '',
            email: '',
            password: '',
            about: '',
        })
    }

    //submit form
    const submitForm = (event) =>{
       event.preventDefault()

        console.log(data);

        //data validation

        //call server api for sending the data 
        signUp(data).then((resp) =>{
            console.log(resp);
            console.log("success  log");
            toast.success("User is register successfully !!")
            setData({
                name: '',
                email: '',
                password: '',
                about: '',
            })
        }).catch((error) =>{
            console.log(error);
            console.log("Error log");

        });

    };

    return (
        <Base>
        

            <Container>

            {JSON.stringify(data)}

               <Row className="mt-4">

                
                
                <Col sm={{size: 6, offset:3}}>
                
                  <Card color="dark" inverse>

                    <CardHeader>


                         <h3>Fill Information to Register !!</h3>

                    </CardHeader>

                    <CardBody>


                        {/* creating form */}

                        <Form onSubmit={submitForm}>
                                     {/* name field */}
                            <FormGroup>

                                <Label for="name">Enter Your Name</Label>
                                <Input
                                type="text"
                                placeholder="Enter here"
                                id="name"
                                onChange={(e)=>handleChange(e,'name')}
                                value={data.name}

                                />
                                


                            </FormGroup>
                                     {/* Email field */}
                            <FormGroup>

                                <Label for="email">Enter Your Email</Label>
                                <Input
                                type="email"
                                placeholder="Enter here"
                                id="email"
                                onChange={(e)=>handleChange(e,'email')}
                                value={data.email}
                                />
                                


                            </FormGroup>
                                     {/* password field */}
                            <FormGroup>

                                <Label for="password">Enter Your password</Label>
                                <Input
                                type="password"
                                placeholder="Enter here"
                                id="password"
                                onChange={(e)=>handleChange(e,'password')}
                                value={data.password}
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
                                onChange={(e)=>handleChange(e,'about')}
                                value ={data.about}
                                />
                                


                            </FormGroup>

                                 {/* button */}
                            <Container className="text-center">
                                <Button color="light" outline>Register</Button>
                                <Button onClick={resetData} color="danger" className="ms-2" type="reset">Reset</Button>
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