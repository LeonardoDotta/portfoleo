import { Divider, Image } from 'antd'
import { WhatsAppOutlined } from '@ant-design/icons'
import Container from '../../../layout/Container'
import Telefone from '../../../imgs/Telefone.png'

function WhatsApp() {
    return (
        <div className='ajuste'>
            <div>
                <Divider>
                    <p className='divider'>WhatsApp</p>
                </Divider>
            </div>
            <div style={{ fontSize: '30px', textAlign: 'center', paddingBottom: '40px' }}>
                <WhatsAppOutlined />
            </div>
            <Container>
                <p>Click on the
                    <a href='https://wa.me/5516997899080?text=Ol%C3%A1!'
                        target='_blank'
                        style={{color:"#0000ff"}}> WhatsApp
                    </a> link to talk to me!
                </p>
                <div className='div_imagem'>
                    <Image
                        src={Telefone}
                    />
                </div>

            </Container>
        </div>
    )
}

export default WhatsApp