import { Button, Divider, Input, Radio, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { TryQuizEnter } from '../../api/api'

const Quiz = () => {
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState();
    const { quizId } = useParams();
    const { userID } = useSelector((store) => {
        return {
            userID: store.userID
        }
    });

    async function getQuiz() {
        const data = {
            quizId: quizId,
            userId: userID
        }
        try {
            const response = await TryQuizEnter(data);
            setQuiz(response.data.data);

        } catch (error) {

        }

    }
    useEffect(() => {
        getQuiz();
    }, [quizId])


    return (
        <>
            {quiz &&
                <div>
                    <h1>{quiz.name}</h1>
                    <Divider />
                    {quiz.questions && quiz.questions.map((question) => {
                        return (
                            <div>
                                <h3>{question.name + ` (${question.point} puan)`}</h3>
                                {question.answerType === true ?
                                    <Radio.Group>
                                        <Space direction="vertical">

                                            {question.answers && question.answers.map((answer) => {
                                                return (
                                                    <Radio value={answer.id}>{answer.text}</Radio>
                                                )
                                            })}
                                        </Space>
                                    </Radio.Group>
                                    : <Input placeholder='Cevabı Buraya yazın.' style={{
                                        width: '50%',
                                        height: '60px'
                                    }} ></Input>
                                }

                            </div>
                        )
                    })}
                    <div><Button style={{
                        background: 'blue',
                        width: '300px',
                        height: '50px',
                        color: 'white',
                    }} onClick={() => {
                        alert("Sınavınız gönderilmiştir!");
                        navigate("/home");
                    }}> Sınavı Bitir</Button></div>
                </div>
            }



        </>


    )
}

export default Quiz