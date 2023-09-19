import { Divider } from 'antd'
import { LinkedinOutlined }from '@ant-design/icons'
import Container from '../../../layout/Container'
import { Image } from 'antd'
import LinkedinImage from '../../../imgs/Linkedin.jpg'

function LinkedIn () {
    return (
            <div className='ajuste'>
                <div>
                    <Divider>
                        <p className='divider'>LinkedIn</p>
                    </Divider>
                </div>
                <div style={{fontSize: '30px', textAlign: 'center', marginBottom: '80px'}}> 
                    <LinkedinOutlined />    
                </div>
                <Container>
                    <p className='social_medias'>Click on  the 
                        <a href='https://www.linkedin.com/in/leonardo-dotta-7b4176262/'
                        target='_blank'
                        body='hello world'
                        rel='noopener noreferrer'> LinkedIn
                        </a> link to see my perfil!
                    </p>
                    <div className='div_imagem'>
                        <Image
                            src={LinkedinImage}
                        />
                    </div>
                </Container>
            </div>
    )
}

export default LinkedIn