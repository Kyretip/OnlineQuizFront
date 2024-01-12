import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { GetAllLessonByUserId, GetAllQuizByUserId } from '../../api/api';
import { Button, Card, Divider, Flex, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const [quizes, setQuizes] = useState([]);
  const [lessons, setLessons] = useState([]);
  const { userID, userrole } = useSelector((store) => {
    return {
      userID: store.userID,
      userrole: store.userrole
    }
  });

  async function GetAllQuiz() {
    try {
      const response = await GetAllQuizByUserId(userID);
      setQuizes(response.data.data);

    } catch (error) {
      console.log(error);
    }
  }

  async function getLessons() {
    try {
      const response = await GetAllLessonByUserId(userID);
      setLessons(response.data.data);
    } catch (error) {

    }
  }
  useEffect(() => {
    if (userrole === 1) {
      GetAllQuiz();
    }
    else {
      getLessons();
    }
  }, [])



  return (
    <div>
      {userrole === 1 ?
        <>
          <h2>Sınavlar</h2>
          <Flex>
            {quizes && quizes.map((quiz) => {
              return (
                <Card
                  title={quiz.name}
                  bordered={false}
                  style={{
                    backgroundColor: "#1E90FF",
                    margin: 50,
                    width: 300,
                  }}
                >
                  <p>{"başlangıç ; " + quiz.startDate}</p>
                  <p>{"bitiş ; " + quiz.dueDate}</p>
                  {quiz.return === false ?
                    <Button onClick={() => navigate(`/quiz/${quiz.id}`)}>Sınava gir</Button>
                    :
                    <p style={{ fontSize: 16, color: 'white' }}>Sınava girildi</p>
                  }
                </Card>
              )
            })}
          </Flex>
        </>

        :

        <>
        <Divider style={{marginTop: 50}}>Dersler</Divider>
          <Space style={{marginTop: 50}}>

            {lessons && lessons.map((lesson) => {
              return (
                <Card style={{
                  width: 300,
                  background: '#5179B7'
                }}>
                  <h3 style={{color: 'white'}}>{lesson.name}</h3>
                  <Button onClick={() => navigate(`/quizadd/${lesson.id}`)}>Sınav oluştur</Button>
                </Card>
              )
            })}

          </Space>
        </>

      }


    </div>
  )
}

export default Home