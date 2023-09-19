import { Divider, Image } from 'antd'
import { PushpinOutlined }from '@ant-design/icons'
import Container from '../../../layout/Container'
import Grafico from '../../../imgs/Gráfico.jpg'

function Goal () {
    return (
        <div className='ajuste'>
            <div>
                <Divider>
                    <p className='divider'>Goal</p>
                </Divider>
            </div>
            <div>
                <div style={{fontSize: '30px', textAlign: 'center', paddingBottom: '40px'}}> 
                    <PushpinOutlined />
                </div>
                <Container>
                    <p className='container'>I seek to work and commit myself to a company that can teach me 
                    lessons and experience while I dedicate myself to the maximum to insert my knowledge 
                    and skills with the company, always in search of learning, improvements and success. 
                    I aim to help make the company I work for more successful every day.
                    </p>
                    <div className='div_imagem'>
                        <Image
                            src={Grafico}
                        />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Goal