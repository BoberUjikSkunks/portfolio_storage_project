import React from 'react';
import classes from "./AchievementCard.module.css";

const AchievementCard = (props: any) => {
    return (
        <div className={classes.AchievementCard}>
            <div className={classes.CardHeader}>
                ICPC 1/4 NERF
            </div>

            <div className={classes.CardContent}>
                <div className={classes.CardContentName}>
                    Год получения:
                </div>
                <div className={classes.CardContentYear}>
                    2023
                </div>
            </div>

            <div className={classes.CardContent}>
                <div className={classes.CardContentName}>
                    Тип достижения:
                </div>
                <div className={classes.CardContentAchievementType}>
                    Спортивное
                </div>
            </div>

            <div className={classes.CardContent}>
                <div className={classes.CardContentName}>
                    Верифицировано:
                </div>
                <div className={
                    props.isVerificated ? classes.CardContentVerificationYes : classes.CardContentVerificationNo
                }>
                    {props.isVerificated ? "Да" : "Нет"}
                </div>
            </div>

            <div className={classes.CardContentFiles}>
                <div className={classes.CardContentName} id="Files">
                    Файлы достижения:
                </div>
                <div className={classes.CardContentAchievementFile}>
                    <div className={classes.CardContentAchievementFileName}>
                        IMG_20230101180051.png
                    </div>
                    <svg id="svg" fill="#979797" stroke="#979797" width="18" height="18" version="1.1"
                         viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
                        <g id="IconSvg_bgCarrier" stroke-width="0"></g>
                        <g id="IconSvg_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                           stroke-width="0">
                            <g xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m321.36 457.58 53.957 71.629 20.199 26.812c2.2461 2.9844 6.7266 2.9844 8.9727 0l20.199-26.812 53.965-71.625 71.867-95.395c2.793-3.7031 0.14453-8.9961-4.4883-8.9961l-61.762-0.007812c-3.1016 0-5.6172-2.5156-5.6172-5.6172v-153.55c0-3.1016-2.5195-5.6172-5.6172-5.6172h-146.06c-3.1016 0-5.6172 2.5156-5.6172 5.6172v153.55c0 3.1016-2.5156 5.6172-5.6172 5.6172h-61.766c-4.6367 0-7.2734 5.2969-4.4883 8.9961z"></path>
                                <path
                                    d="m562.91 566.66h-325.82c-12.41 0-22.469 10.062-22.469 22.469 0 12.41 10.062 22.469 22.469 22.469h325.83c12.41 0 22.469-10.062 22.469-22.469-0.003906-12.414-10.059-22.469-22.473-22.469z"></path>
                            </g>
                        </g>
                        <g id="IconSvg_iconCarrier">
                            <g xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m321.36 457.58 53.957 71.629 20.199 26.812c2.2461 2.9844 6.7266 2.9844 8.9727 0l20.199-26.812 53.965-71.625 71.867-95.395c2.793-3.7031 0.14453-8.9961-4.4883-8.9961l-61.762-0.007812c-3.1016 0-5.6172-2.5156-5.6172-5.6172v-153.55c0-3.1016-2.5195-5.6172-5.6172-5.6172h-146.06c-3.1016 0-5.6172 2.5156-5.6172 5.6172v153.55c0 3.1016-2.5156 5.6172-5.6172 5.6172h-61.766c-4.6367 0-7.2734 5.2969-4.4883 8.9961z"></path>
                                <path
                                    d="m562.91 566.66h-325.82c-12.41 0-22.469 10.062-22.469 22.469 0 12.41 10.062 22.469 22.469 22.469h325.83c12.41 0 22.469-10.062 22.469-22.469-0.003906-12.414-10.059-22.469-22.473-22.469z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default AchievementCard;