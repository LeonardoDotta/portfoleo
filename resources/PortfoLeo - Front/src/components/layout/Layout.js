import { LaptopOutlined, CommentOutlined, UserOutlined, HomeOutlined, BarsOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import React from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'
import Routes from '../Routes/Routes'
import { useNavigate } from 'react-router-dom'
import { Divider } from 'antd'
import SideBarMobile from './SideBarMobile'

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    icon: React.createElement(HomeOutlined),
    label: `Home`, key: '/'
  },
  {
    icon: React.createElement(UserOutlined),
    label: `About me`,
    children: [
      { label: `Academic Education`, key: 'academic-education' },
      { label: `Goal`, key: 'goal' },
      { label: `Skills and knowledge`, key: 'skills-and-knowledge' },
      { label: `Experience`, key: 'experience' }
    ]
  },
  {
    icon: React.createElement(LaptopOutlined),
    label: `Projects`,
    children: [
      { label: `Casamento Naleo`, key: 'casamento-naleo' },
      { label: `Deusdete Store`, key: 'deusdete-store' }
    ]
  },
  {
    icon: React.createElement(CommentOutlined),
    label: `Social Medias`,
    children: [
      { label: `LinkedIn`, key: 'linkedin' },
      { label: `Instagram`, key: 'instagram' },
      { label: `WhatsApp`, key: 'whatsapp' },
    ]
  }
]

const LayoutGeral = () => {

  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        className='header'
      >
        <div className="demo-logo"/>
        <h1>PortfoLeo</h1>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} />
      </Header>
      <Content
        className='content'
      >
        <Divider
          className='divider'
        />
        <Layout
          className='layout'
          style={{
            background: colorBgContainer,
          }}
        >
          
          <Sider
            className='sider'
          >
            <Menu
              mode="inline"
              style={{
                height: '100%',
              }}
              items={items}
              onClick={
                (item) => {
                  navigate(item.key)
                }
              }
            />
          </Sider>
          <Content
            className='content'
          >
            <SideBarMobile/>
            <Routes />
          </Content>
        </Layout>
      </Content>
      <Footer className='footer'
      >
        <ul className='social_list'>
          <a href='https://www.linkedin.com/in/leonardo-dotta-7b4176262/'
            target='blank'
            body='hello world'
            rel='noopener noreferrer'>
            <li><FaLinkedin /></li>
          </a>
          <a href='https://www.instagram.com/leo_dotta26'
            target='blank'
            body='hello world'
            rel='noopener noreferrer'>
            <li><FaInstagram /></li>
          </a>
          <a href='https://wa.me/5516997899080?text=Ol%C3%A1!'
            target='_blank'
            body='hello world'
            rel='noopener noreferrer'>
            <li><FaWhatsapp /></li>
          </a>
        </ul>
        <p className='copy_right'><span>PortfoLeo</span> &copy; 2023</p>
      </Footer>
    </Layout>
  )
}

export default LayoutGeral;




