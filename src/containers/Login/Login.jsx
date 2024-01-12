import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { TryLogin } from '../../api/api';
import { Row, Col } from 'antd'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginHandler } from '../../redux/app/actions';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onFinish = async (values) => {
        try{
            const data = {
                email: values.email,
                password: values.password,
            }
            const response = await dispatch(loginHandler(data))
            navigate('/home');
        }
        catch{
            console.log("Hatalı Giriş");
        }

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const textStyle = {
        fontSize: '36px',
        color: '#2a52be',
        marginLeft: 145

      };

    return (
        <div>
            <Row>
                <Col md={12}>
                    <div style={{marginTop: 100}}>
                        <img width={700} src={require("../../assets/image1.jpg")}/>
                    </div>
                </Col>
                <Col md={12}>
                    <div>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                                width: 600, 
                                margin: '100px auto'
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            
                            <img src={require("../../assets/logo.png")}  style={{width: 400, marginLeft: 200, marginBottom: 40}} />
                            <p style={textStyle}>    Giriş Yapın</p>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Giriş yap
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Login