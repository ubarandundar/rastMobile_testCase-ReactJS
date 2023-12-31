import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import classes from './Navbar.module.css';
import './Navbar.css';
import RastMobileImage from '../../assets/rast-mobile.png';
import YoutubeImage from '../../assets/youtube.png';
import InstagramImage from '../../assets/instagram.png';
import BehanceImage from '../../assets/behance.png';
import LinkedInImage from '../../assets/linkedin.png';


function Navbar() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const handleBurgerMenuClick = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const burgerMenu = (
        <Menu 
            width={400}
            right={true}
            isOpen={false}
            onStateChange={handleBurgerMenuClick}>
                <div className='d-flex flex-column'>
                <a href='www.google.com' className={classes.navbarMenu}>
                    Hakkımızda
                </a>
                <a href='www.google.com' className={classes.navbarMenu}>
                    Jüri - Yarışma Yazılımı
                </a>
                <a href='www.google.com' className={classes.navbarMenu}>
                    Word Ninja
                </a>
                <a href='www.google.com'className={classes.navbarMenu}>
                    Word Pyramids
                </a>
                </div>
                <div>
                <a href='www.google.com' >
                    <img className={classes.socialMediaLogo} src={YoutubeImage} alt='youtube' />
                </a>
                <a href='www.google.com' >
                    <img className={classes.socialMediaLogo} src={InstagramImage} alt='instagram' />
                </a>
                <a href='www.google.com' >
                    <img className={classes.socialMediaLogo} src={BehanceImage} alt='behance' />
                </a>
                <a href='www.google.com' >
                <img className={classes.socialMediaLogo} src={LinkedInImage} alt='linkedin' />
                </a>
            </div>
        </Menu>
        );

        const normalMenu = (
            <>
            <div className='d-flex flex-row'>
                <a href='www.google.com' className={classes.navbarMenu}>
                    Hakkımızda
                </a>
                <a href='www.google.com' className={classes.navbarMenu}>
                    Jüri - Yarışma Yazılımı
                </a>
                <a href='www.google.com' className={classes.navbarMenu}>
                    Word Ninja
                </a>
                <a href='www.google.com'className={classes.navbarMenu}>
                    Word Pyramids
                </a>
            </div>
            <div>
                <a href='www.google.com' >
                    <img className={classes.socialMediaLogo} src={YoutubeImage} alt='youtube' />
                </a>
                <a href='www.google.com' >
                    <img className={classes.socialMediaLogo} src={InstagramImage} alt='instagram' />
                </a>
                <a href='www.google.com' >
                    <img className={classes.socialMediaLogo} src={BehanceImage} alt='behance' />
                </a>
                <a href='www.google.com' >
                <img className={classes.socialMediaLogo} src={LinkedInImage} alt='linkedin' />
                </a>
            </div>
            </>
        );

    const menuBurger = windowWidth <= 1200 ? burgerMenu : '';
    const menuDefault = windowWidth > 1200 ? normalMenu : '';

  return (
    <>
    <div className='container'>
        <nav className={classes.navbar}>
            <div>
                <img src={RastMobileImage} alt='rast-mobile' />
            </div>
            {menuDefault}
        </nav>
    </div>
    <div className='container position-relative'>
    {menuBurger}
    </div>
    </>
  )
}

export default Navbar;