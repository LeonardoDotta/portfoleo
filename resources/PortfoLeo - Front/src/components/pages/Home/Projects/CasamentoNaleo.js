import { Carousel } from 'antd'
import '../../../layout/Container.css'
import home from '../../../imgs/home.jpg'
import couples from '../../../imgs/couples.jpg'
import local from '../../../imgs/local.jpg'
import gifts from '../../../imgs/gifts.jpg'
import messages from '../../../imgs/messages.jpg'
import { Image, Divider, Button } from 'antd'
import { HeartOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons'
import { useState, useRef } from 'react'

const contentStyle2 = {
  margin: 0,
  height: '60vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'gray',
  borderRadius: '20px'
};

function CasamentoNaleo() {

  const [slide, setSlide] = useState(0);

  const slider = useRef();

  return (
    <div className='ajuste'>
      <Divider>
        <div className='divider'>
          Casamento Naleo
        </div>
      </Divider>
      <div style={{ fontSize: '30px', textAlign: 'center', paddingBottom: '40px' }}>
        <HeartOutlined />
      </div>
      <div className='container'>
        The project consists of a wedding website that I made for when my girlfriend and I get married.
        The site has information about the couple, shows the witnesses, the location of the place that
        will be defined for the ceremony, a page with gifts that directs the guest to the site to buy a
        certain item, in addition to a specific place to leave messages for the couple.
      </div>
      <div className='casamento_e_deusdete'>
        <div className='div_buttons'>
          <Button
            type="primary"
            onClick={() => {
              if (slide != 0) {
                setSlide(slide - 1);
                slider.current.goTo(slide - 1);
              }
            }}
            min={0}
            max={5}
            value={slide}
          >
            <LeftOutlined />
          </Button>
          <Button
            type="primary"
            onClick={() => {
              if (slide != 4) {
                setSlide(slide + 1);
                slider.current.goTo(slide + 1);
              }
            }}
          >
            <RightOutlined />
          </Button>
        </div>
        <Carousel
          dots={false}
          ref={ref => {
            console.log(ref);
            slider.current = ref;
          }}
        >
          <Image 
            className='imgs'
            src={home}
          />
          <Image
            className='imgs'
            src={couples}
          />
           <Image
            className='imgs'
            src={local}
          />
           <Image
            className='imgs'
            src={gifts}
          />
           <Image
            className='imgs'
            src={messages}
          />
        </Carousel>
      </div>
    </div>
  )
}

export default CasamentoNaleo

