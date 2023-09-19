import { BarsOutlined, LaptopOutlined, CommentOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function MostrarSideBar() {

  const mobile = [
    {
      icon: React.createElement(BarsOutlined),
      label: `Home`, key: '/'
    }
  ]

  const items = [
    {
      icon: React.createElement(HomeOutlined),
      label: `Home`, key: '/',
      children: []
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

  const [clicou, setClicou] = useState(false)
  const [clicou2, setClicou2] = useState(null)
  const navigate = useNavigate()
 
  useEffect(() => {
    if (clicou == false) {
      setClicou2(null)
    }
  }, [clicou])

  return (
    <div className=
      {
        clicou ?
          'opened_sidebar_mobile'
        :
          'closed_sidebar_mobile'
      }
    >
      <button className='menu_btn'
        onClick={() => {
            setClicou(!clicou)
          }
        }>
          {mobile[0].icon}
      </button>
      <div className='categories_btns'>
        {clicou && (
          items.map((item, indice) =>
            <div>
              <button className='categorie_btn'
                onClick={() => { 
                  if (item.children.length == 0) {
                    navigate('/')
                  } 
                  else {
                    setClicou2(indice) 
                  }
                }}>
                  {item.icon}{item.label}
              </button>
              {clicou2 == indice && (
                <div className='children_btn'>
                  {items[clicou2].children.map((child) =>
                    <button className='child_btn'
                      onClick={() => {
                        item.label == `Home` ?
                        navigate('/')
                        :
                        navigate(child.key)
                      }}>
                      {child.label}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default MostrarSideBar