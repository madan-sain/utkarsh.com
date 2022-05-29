import React from 'react'
import { AppBar, Tabs, Toolbar, Tab, useMediaQuery, useTheme, Typography } from '@mui/material'
import { NavLink } from "react-router-dom"
import Drover from './Drover'

// const  = ["Home", "About Us", "Courses", "Blog", "Student Support", "Offline Admission", "Contact Us"]
const Header = () => {
    const them = useTheme();
    console.log(useTheme)
    const isMatch = useMediaQuery(them.breakpoints.down('lg'))

        ; return (
            <div className='navbar  home mt-2 p-2'>
                <React.Fragment>
                    <AppBar sx={{ background: " white", textColor: "red" }}>
                        <Toolbar >

                            <img src='https://utkarsh.com/assets/images/logo.svg' class="logo" />

                            {
                                isMatch ? (
                                    <>  <Typography >

                                        <Drover />
                                    </Typography>
                                    </>
                                ) : (
                                    <>
                                        <Tabs sx={{ color: '#0000' }}  >
                                            {
                                                //  pagges.Map((page, index) => (
                                                //      <Tab key={index} label ={page}/>
                                                //  ))
                                            }

                                            <NavLink to="/HOME">                  <Tab label="Home" /></NavLink>
                                            <NavLink to="/About">                 <Tab label="About Us" /></NavLink>
                                            <NavLink to="/Courses">                 <Tab label="Courses" /></NavLink>
                                            <NavLink to="/Bloge">  <Tab label="Blog" /></NavLink>
                                          <NavLink to = "Studentspt"><Tab label="Student Support" /></NavLink>
                                          <NavLink to = "Admission">    <Tab label="Online Admission" /></NavLink>
                                          <NavLink to = "Contact">       <Tab label="Contact Us" /> </NavLink>
                                        </Tabs>
                                        <Tabs sx={{ marginLeft: "auto", color: '#0000' }} >
                                            <a href="tel:+8302774885" class="phone"> +918302774885</a>
                                            <a href="mailto:btp.madansain@gmail.com" class="mail">gmail</a>

                                        </Tabs>
                                    </>
                                )
                            }


                        </Toolbar>

                    </AppBar>
                </React.Fragment>


            </div>
        )
}

export default Header