import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AcademicEducation from '../pages/Home/About Me/AcademicEducation'
import Goal from '../pages/Home/About Me/Goal'
import SkillsAndKnowledge from '../pages/Home/About Me/SkillsAndKnowledge'
import Experience from '../pages/Home/About Me/Experience'
import CasamentoNaleo from '../pages/Home/Projects/CasamentoNaleo'
import DeusdeteStore from '../pages/Home/Projects/DeusdeteStore'
import LinkedIn from '../pages/Home/Social Medias/Linkedin'
import Instagram from '../pages/Home/Social Medias/Instagram'
import WhatsApp from '../pages/Home/Social Medias/WhatsApp'

function Rotas() {
    return (
            <Routes>
                <Route element={<Home/>} exact path='/'>
                </Route>
                <Route element={<AcademicEducation/>} exact path='academic-education'>
                </Route>
                <Route element={<Goal/>} exact path='goal'>
                </Route>
                <Route element={<SkillsAndKnowledge/>} exact path='skills-and-knowledge'>
                </Route>
                <Route element={<Experience/>} exact path='experience'>
                </Route>
                <Route element={<CasamentoNaleo/>} exact path='casamento-naleo'>
                </Route>
                <Route element={<DeusdeteStore/>} exact path='deusdete-store'>
                </Route>
                <Route element={<LinkedIn/>} exact path='linkedin'>
                </Route>
                <Route element={<Instagram/>} exact path='instagram'>
                </Route>
                <Route element={<WhatsApp/>} exact path='whatsapp'>
                </Route>
            </Routes>
    )
}

export default Rotas