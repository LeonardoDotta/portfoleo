import { Divider, Image } from 'antd'
import { ThunderboltOutlined } from '@ant-design/icons'
import Container from '../../../layout/Container'
import Conhecimento from '../../../imgs/Conhecimento.webp'

function SkillsAndKnowledge () {
    return (
        <div className='ajuste'> 
            <div>
                <Divider>
                    <p className='divider'>Skills And Knowledge</p>
                </Divider>
            </div>
            <div>
                <div style={{fontSize: '30px', textAlign: 'center', paddingBottom: '40px'}}> 
                    <ThunderboltOutlined />
                </div>
                <Container>
                    <p className='container'>I have ease in learning new things, skills in the area of 
                    communication with others, submission and leadership, as well as organization. 
                    This last aspect I take with me in all matters. I have an advanced level in English, 
                    legal and computer knowledge in general.
                    </p>
                    <div className='div_imagem'>
                        <Image
                            src={Conhecimento}
                        />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default SkillsAndKnowledge