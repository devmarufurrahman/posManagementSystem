import { 
    Col, 
    Row,
    Card,
    Button,
    Input,
    Form
} from 'antd';
import React,{
    useEffect,
    useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Success,
    Warning 
} from '../../utils/Message';
import './index.css'

const Login=()=>{
    const history=useNavigate();
    const handleLogin=(state)=>{
        if(state.userId==="Reporter" && state.password==="1234"){
            localStorage.setItem("token",state.userId);
            localStorage.setItem("role","reporter");
            Success("Login Success.",{},{})
            history('/');
        }else if(state.userId==="Approver" && state.password==="1234"){
            localStorage.setItem("token",state.userId);
            localStorage.setItem("role","approver");
            Success("Login Success.",{},{})
            history('/');
        }else if(state.userId==="Printer" && state.password==="1234"){
            localStorage.setItem("token",state.userId);
            localStorage.setItem("role","printer");
            Success("Login Success.",{},{})
            history('/');
        }else{
            Warning("User Id or Password are wrong",{},{});
        }
    }
    return(
        <>
            <Row
            style={{
                display:'flex'
            }}
            >
                <Col 
                span={24}
                className='login-container'
                >
                   <Card
                   style={{
                    width:'35vw'
                   }}
                   >
                        <Row>
                            <Col span={24}>
                                <Form
                                wrapperCol={{
                                    span:18
                                }}
                                labelCol={{
                                    span:6
                                }}
                                autoComplete="off"
                                onFinish={handleLogin}
                                >
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"User Id"
                                    }}
                                    label="User Id"
                                    labelAlign='left'
                                    name="userId"
                                    rules={[
                                        {
                                            required:'true',
                                            message:"User id is required."
                                        }
                                    ]}
                                    >
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Password"
                                    }}
                                    label="Password"
                                    labelAlign='left'
                                    name="password"
                                    rules={[
                                        {
                                            required:true,
                                            message:"Password is required."
                                        }
                                    ]}
                                    >
                                        <Input.Password/>
                                    </Form.Item>
                                    <Form.Item
                                    wrapperCol={{
                                        offset:18,
                                        span:6
                                    }}
                                    >
                                        <Row>
                                            <Col 
                                            span={24}
                                            style={{
                                                textAlign:'right'
                                            }}
                                            >
                                                <Button
                                                type='primary'
                                                htmlType='submit'
                                                >
                                                    Login
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                   </Card>
                </Col>
            </Row>
        </>
    )
}
export default Login;