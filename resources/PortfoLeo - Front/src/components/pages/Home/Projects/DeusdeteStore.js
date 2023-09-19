import { Carousel } from 'antd'
import '../../../layout/Container.css'
import img1 from '../../../imgs/1.jpg'
import img2 from '../../../imgs/2.jpg'
import img3 from '../../../imgs/3.jpg'
import img4 from '../../../imgs/4.jpg'
import { Image, Divider, Button } from 'antd'
import { ScissorOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons'
import { useState, useRef } from 'react'

const contentStyle = {
  margin: 0,
  height: '60vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius: '20px'
};



function DeusdeteStore() {

  const [slide, setSlide] = useState(0);

  const slider = useRef();

  return (
    <div className='ajuste'>
      <Divider>
        <div className='divider'>
          Lima - Tudo para salão
        </div>
      </Divider>
      <div style={{ fontSize: '30px', textAlign: 'center', paddingBottom: '40px' }}>
        <ScissorOutlined />
      </div>
      <div className='container'>
        The project consists of a website for selling items for beauty salons in general. It is a simple
        but usual application, as the customer can navigate through the items page and, when choosing one,
        is directed to the seller's WhatsApp to be able to order. In the future I intend to increase tools
        to automate the purchase process.
      </div>
      <div className='casamento_e_deusdete'>
        <div className='div_buttons'>
          <Button type="primary"
            onClick={() => {
              if (slide != 0) {
                setSlide(slide - 1);
                slider.current.goTo(slide - 1);
              }
            }}
            min={0}
            max={4}
            value={slide}
          >
            <LeftOutlined />
          </Button>
          <Button type="primary"
            onClick={() => {
              if (slide != 2) {
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
            src={img1}
          />
          <Image
            className='imgs'
            src={img2}
          />
          <Image
            className='imgs'
            src={img3}
          />
        </Carousel>
      </div>
    </div>
  )
}

export default DeusdeteStore