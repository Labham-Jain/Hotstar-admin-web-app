import {MdOutlineAdminPanelSettings} from 'react-icons/md';
import { RiVideoUploadLine } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineBoxPlot } from 'react-icons/ai';
import Card from '../../components/Card';
import Cards from '../../components/Cards';
import Section from '../../components/Section';
import './home.css';
const Home = () => {
  return (
    <Section title='Admin Control Panel'>
        <div className='cards-container'>
          <Cards>
            <Card Icon={RiVideoUploadLine} title="Upload video" to='/upload' />
            <Card Icon={FiUser} title="All users" to='/list-users' />
            <Card Icon={BiCategory} title="Edit Categories" to='/edit-categories' />
            <Card Icon={AiOutlineBoxPlot} title="Edit Banner" to='/edit-banner' />
          </Cards>
        </div>
    </Section>
  )
}

export default Home