import { Button, Form, Input, Radio } from 'antd'
import React, { useState } from 'react'
import AnswerAdd from '../AnswerAdd/AnswerAdd';

const QuestionAdd = () => {

    const [answerCount, setAnswerCount] = useState(0);
    const handleAddAnswer = () => {
        setAnswerCount(answerCount + 1);
    };
    const formItems = Array.from({ length: answerCount }, (_, index) => (
        <Form.Item
            key={index}
            label={`${index + 1}`}
            name={`answer${index}`}
            rules={[
                {
                    required: true,
                    message: 'Lütfen boş bırakmayınız!',
                },
            ]}
        >
            <ol>
                <AnswerAdd />
            </ol>
        </Form.Item>
    ));

    return (
        <div>


            <Input placeholder='Soru'></Input>
            {formItems}
            <Button onClick={handleAddAnswer}>Cevap ekle</Button>



        </div>
    )
}

export default QuestionAdd