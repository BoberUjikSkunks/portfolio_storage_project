import React from 'react';
import classes from './SidePanel.module.css'
import ProfileSection from '../ProfileSection/ProfileSection';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const SidePanel = () => {
    return (
        <div className={classes.SidePanel}>
            <ProfileSection></ProfileSection>
            <NavigationMenu></NavigationMenu>
            
            {/* типо футер, надо подумать где он должен лежать */}
            <div>footer</div>
        </div>
    );
};

export default SidePanel;