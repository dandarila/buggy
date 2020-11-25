import React from 'react';

// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GoIcons from 'react-icons/go';
import * as GrIcons from 'react-icons/gr';
import * as FcIcons from 'react-icons/fc';


export const SidebarData = [
  {
    title: 'Home', 
    path: '/', 
    icon: <AiIcons.AiFillHome />, 
    cName: 'nav-text'
  }, 
  {
    title: 'Report', 
    path: '/report', 
    icon: <GoIcons.GoReport />, 
    cName: 'nav-text'
  }, 
  {
    title: 'GoodPractice', 
    path: '/goodpractice', 
    icon: <GrIcons.GrStatusGood />, 
    cName: 'nav-text'
  }, 
  {
    title: 'About', 
    path: '/about', 
    icon: <FcIcons.FcAbout />, 
    cName: 'nav-text'
  }, 
  {
    title: 'Team', 
    path: '/team', 
    icon: <IoIcons.IoMdPeople />, 
    cName: 'nav-text'
  }, 
  {
    title: 'Support', 
    path: '/support', 
    icon: <IoIcons.IoMdHelpCircle />, 
    cName: 'nav-text'
  }
];