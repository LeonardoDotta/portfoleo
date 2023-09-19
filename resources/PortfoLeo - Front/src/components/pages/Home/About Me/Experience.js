import { Divider, Image } from 'antd'
import { IdcardOutlined }from '@ant-design/icons'
import Container from '../../../layout/Container'
import Programacao from '../../../imgs/Programação.png'

function Experience () {
    return (
        <div className='ajuste'>
            <div>
                <Divider>
                    <p className='divider'>Experience</p>
                </Divider>
            </div>
            <div>
                <div style={{fontSize: '30px', textAlign: 'center', paddingBottom: '40px'}}> 
                    <IdcardOutlined />
                </div>
                <Container>
                    <p className='container'>I did an internship at 
                    the Special Civil Court in the district of my city, working on behalf of the population 
                    in opening cases that could resolve their disputes.
                    Currently, I started my studies in Systems Analysis and Development and work 
                    on my own projects using React (JavaScript language), together with Git, producing websites 
                    for various purposes. In addition, I use HTML and CSS to increase the utilities 
                    of the applications I develop.
                    </p>
                    <div className='div_imagem'>
                        <Image
                            src={Programacao}
                        />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Experience