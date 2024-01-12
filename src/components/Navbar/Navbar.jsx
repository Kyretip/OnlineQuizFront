import { Button, Flex, Menu } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccessAction } from '../../redux/app/actions';

const Navbar = () => {

    const { isLoggedIn, username } = useSelector((store) => {
        return {
            isLoggedIn: store.isLoggedIn,
            username: store.username
        }
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(logoutSuccessAction());
        navigate("/login");
    }
    return (
        <Menu mode="horizontal" style={{ background: '#5179B7' }}>

            <h2 className='navbar-text' onClick={() => { 

                if(isLoggedIn) {
                    navigate('/home') 
                }else {
                    navigate('/login')
                }

                }
                
                }>ÇEVRİMİÇİ SINAV SİSTEMİ</h2>

            <div className="right-menu">

                {!isLoggedIn ?
                    <>
                        <Button className='button-login' onClick={() => {
                            navigate("/login");
                        }}>
                            Giriş yap
                        </Button>
                        <Button className='button-login' onClick={() => {
                            navigate("/register");
                        }}>
                            Kayıt ol
                        </Button>
                    </>

                    :
                    <Flex>
                        <Button className='button-login' onClick={() => {navigate("/my-profile")}}>
                            Profilim
                        </Button>
                        <Button className='button-login' onClick={onLogout}>
                            Çıkış yap
                        </Button>
                    </Flex>
                }
            </div>
        </Menu>
    )
}

export default Navbar