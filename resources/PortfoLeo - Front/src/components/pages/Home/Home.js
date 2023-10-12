import { useState } from 'react'
import { Rate } from 'antd'
import { Divider } from 'antd'
import Container from '../../layout/Container'
import { SmileOutlined } from '@ant-design/icons'
import ImagemSetup from '../../imgs/Setup.jpg'
import { Image, Button, Checkbox, Form, Input } from 'antd'
import { loadRatings, sendRating } from './Ratings.Requests'
import { useEffect } from 'react'

const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful']

function Home() {

    const [mostrar, setMostrar] = useState(false)

    const onFinish = (values) => {
        console.log('Success:', values);

        sendRating(
            {
                'name': values.username,
                'rating': value

            }
        )

        setMostrar(!mostrar)

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [value, setValue] = useState(3)

    const [clicou, setClicou] = useState(false)

    const [cumprimentar, setCumprimentar] = useState('')

    useEffect(() => {
        if (clicou) {
            setTimeout(() => {
                setCumprimentar('hi, Leonardo');
            }, 3000)
        }
    }, [clicou])

    useEffect(() => {
        loadRatings()
    }, [])

    return (
        <div className='ajuste'>
            <div>
                <div>
                    <Divider>
                        <p className='divider'>Welcome to my portfolio</p>
                    </Divider>
                </div>
                <div>
                    <div style={{ fontSize: '30px', textAlign: 'center', paddingBottom: '40px' }}>
                        <SmileOutlined />
                    </div>
                    <Container>
                        <p className='p_home'>Hello, my name is Leonardo, but you can call me Leo. I'm 20 years old. I always liked technology,
                            internet and devices where I could spend my time. Since I was very young I stayed in front of
                            the computer playing and learning new things. I recently discovered a profession that does
                            exactly what I like: it uses the computer to develop new things. That profession is
                            programming! Therefore, I deepened myself in this area, studying and practicing as much as I
                            can and I always aim to continue developing myself more and more!
                        </p>
                        <div className='div_imagem'>
                            <Image
                                src={ImagemSetup}
                                alt='My Setup'
                            />
                        </div>
                    </Container>
                </div>
                {/* <div>
                    {
                        clicou ?
                            null
                            :
                            <button onClick={() => setClicou(true)}>
                                Click to say hi
                            </button>
                    }
                    {cumprimentar}
                </div> */}
            </div>
            <div className='div_form'>
                {
                    mostrar == true ?
                        'Thanks for rating!'
                        :
                        'Please, rate my website!'
                }
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        // maxWidth: 600,
                        paddingTop: 15
                    }}
                    initialValues={{
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username to rate!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <div className='div_rate_and_button'>
                        <Form.Item
                            className='ratings'
                        >
                            <Rate tooltips={desc} onChange={setValue} value={value} />
                            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className='button_home' disabled={mostrar}>
                                Submit
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Home