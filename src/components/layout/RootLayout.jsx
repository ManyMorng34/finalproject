import React from 'react'
import { NavBarComponent } from './NavBarCmponent'
import { Outlet } from 'react-router-dom'
import { FooterComponent } from './FooterComponent'


export default function RootLayout() {
  return (
    <>
    <header>
        <NavBarComponent></NavBarComponent>
    </header>
    <Outlet/>
    <FooterComponent/>
    
    </>
  )
}
