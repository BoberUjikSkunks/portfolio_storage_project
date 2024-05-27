import React from 'react';
import classes from './ProfileSection.module.css'

const ProfileSection = () => {
    return(
        <div className={classes.ProfileSection}>
            <div className='classes.AvatarImage'>
                
            </div>
            <div className={classes.Initials}>
                Иванов Иан Иванович
            </div>
        </div>
    );
};

export default ProfileSection;