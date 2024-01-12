import { Card, Divider, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { GetAllLessonByUserId } from '../../api/api';

const MyProfile = () => {

    const [lessons, setLessons] = useState([]);

    const { username, userID, userrole } = useSelector((store) => {
        return {
            userID: store.userID,
            username: store.username,
            userrole: store.userrole
        }
    });

    async function getLessons() {
        try {
            const response = await GetAllLessonByUserId(userID);
            setLessons(response.data.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        getLessons();
    }, []);



    return (
        <div>
            <h3 style={{ margin: 50 }}>{userrole === 1 ? 'Öğrenci' : 'Eğitmen'} adı: {username}</h3>

            <Divider style={{ marginBottom: 50 }}>{userrole === 1 ? 'Alınan' : 'Verilen'} Dersler</Divider>

            <Space>

                {lessons && lessons.map((lesson) => {
                    return (
                        <Card style={{
                            width: 300,
                            borderTop: '3px solid orange'
                        }}>
                            <p>{lesson.name}</p>
                        </Card>
                    )
                })}

            </Space>



        </div>
    )
}

export default MyProfile