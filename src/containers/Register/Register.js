import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import './Register.css';

import { TryRegister } from '../../api/api.js';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();

    const onfinish = async (values) => {
        try {
            const data = {
                email: values.email,
                password: values.password,
                name: values.name,
                userTypeId: 1
            }
            const response = await TryRegister(data);
            alert("Kayıt Başarılı");
            navigate("/login");

        }
        catch(e){
            alert("Kullanıcı zaten mevcut");
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log("butona basılmadı", errorInfo);
    }
    return (
        <div style={{
            marginTop: '10%',
            marginLeft: '30%',
            marginRight: '30%'
        }}>
            <div>
                <h1 style={{
                    color: 'blue',
                }}>Kayıt Ol</h1>
                <Form layout='vertical' onFinish={onfinish}>
                    <Form.Item label="Email     "
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen bir e-mail girin!',
                            },
                        ]}>
                        <Input className="blueBorder" placeholder='E-Mail Giriniz.' />
                    </Form.Item>
                    <Form.Item label="Şifre     "
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen bir şifre girin!',
                            },
                        ]}>
                        <Input.Password className="blueBorder" placeholder='Şifre Girin' />
                    </Form.Item >

                    <Form.Item label="İsim Soyisim"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Adınızı ve Soyadınızı girin!',
                            },
                        ]}>
                        <Input className="blueBorder" placeholder='Adınızı ve Soyadınızı girin.' />
                    </Form.Item>

                    <Button htmlType='submit' type="primary" block>
                        Kayıt ol.
                    </Button>

                </Form>
            </div>
        </div>
    )
}

export default Register