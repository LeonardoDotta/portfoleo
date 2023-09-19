import { Divider, Image } from 'antd'
import { TrophyOutlined } from '@ant-design/icons'
import Container from '../../../layout/Container'
import Diploma from '../../../imgs/Diploma.jpg'

function AcademicEducation() {
    return (
        <div className='ajuste'>
            <div>
                <Divider>
                    <p className='divider'>Academic Education</p>
                </Divider>
            </div>
            <div>
                <div style={{ fontSize: '30px', textAlign: 'center', paddingBottom: '40px' }}>
                    <TrophyOutlined />
                </div>
                <Container>
                    <p className='container'>I studied law for 2 years at UNICEP-Centro Universitário Central Paulista.
                        During this period, I was able to learn several questions about the laws that govern
                        society. However, I realized that I would like to pursue a profession in another area.
                        Therefore, I started the ADS - Systems Analysis and Development course at
                        Estácio, a course that helps me to carry out my projects.
                    </p>
                    <div className='div_imagem'>
                        <Image
                            src={Diploma}
                        />
                    </div>
                </Container>

            </div>
        </div>
    )
}

export default AcademicEducation