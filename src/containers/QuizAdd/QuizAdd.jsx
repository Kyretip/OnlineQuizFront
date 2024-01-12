import { Button, DatePicker, Form, Input } from 'antd';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { TryQuizAdd } from '../../api/api';
import QuestionAdd from '../../components/QuestionAdd/QuestionAdd';

const QuizAdd = () => {

    const { lessonId } = useParams();
    const [questionCount, setQuestionCount] = useState(0);
    const handleAddQuestion = () => {
        setQuestionCount(questionCount + 1);
    };
    const formItems = Array.from({ length: questionCount }, (_, index) => (
        <Form.Item
            key={index}
            label={`Soru ${index + 1}`}
            name={`question${index}`} // You might want to adjust the name dynamically
            rules={[
                {
                    required: true,
                    message: 'Lütfen boş bırakmayınız!',
                },
            ]}
        >
            <QuestionAdd />
        </Form.Item>
    ));

    const onFinish = async (values) => {
        try {
            const data = {
                name: values.name,
                lessonId: lessonId,
                startDate: values.date[0].$d,
                dueDate: values.date[1].$d,
                isFinalized: false,
                return: false
            }
            //await TryQuizAdd(data);
        }
        catch {
        }

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
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



                <Form.Item
                    label="Sınav adı"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Tarih"
                    name="date"
                    rules={[
                        {
                            required: true,
                            message: 'Lütfen boş bırakmayınız!',
                        },
                    ]}
                >
                    <DatePicker.RangePicker placeholder={["Başlangıç tarihi", "Bitiş tarihi"]} />
                </Form.Item>

                {questionCount > 0 &&
                    formItems
                }

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button onClick={handleAddQuestion}>Soru ekle</Button>
                </Form.Item>
               


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Sınav ekle
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default QuizAdd