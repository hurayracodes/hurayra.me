"use client"
import React from 'react'
import Dock from '../ui/Dock'
import { Home, Archive, Contact, Settings } from 'lucide-react';

function Links() {
    const items = [
    { icon: <Home size={14} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <Archive size={14} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <Contact size={14} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <Settings size={14} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];
  return (
    <div className='w-3xl  h-screen flex items-center justify-center text-amber-50'>
      
  <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />
    </div>
  )
}

export default Links
