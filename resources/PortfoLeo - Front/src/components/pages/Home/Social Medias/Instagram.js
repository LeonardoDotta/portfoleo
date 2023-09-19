import { Divider } from 'antd'
import { InstagramOutlined }from '@ant-design/icons'
import Container from '../../../layout/Container'
import { Image } from 'antd'
import InstagramImage from '../../../imgs/Instagram.jpg'

function Instagram () {
    return (
            <div className='ajuste'>
                <div>
                    <Divider>
                        <p className='divider'>Instagram</p>
                    </Divider>
                </div>
                <div style={{fontSize: '30px', textAlign: 'center', marginBottom: '80px'}}> 
                    <InstagramOutlined />    
                </div>
                <Container>
                    <p className='social_medias'>Click on the 
                        <a href='https://www.instagram.com/leo_dotta26'
                        target='_blank'
                        body='hello world'
                        rel='noopener noreferrer'> Instagram
                        </a> link to see my perfil!
                    </p>
                    <div className='div_imagem'>
                        <Image
                            src={InstagramImage}
                        />
                    </div>
                </Container>
            </div>
    )
}

export default Instagram