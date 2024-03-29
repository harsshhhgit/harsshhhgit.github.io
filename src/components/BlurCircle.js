import clsx from 'clsx'
import React from 'react'

const BlurCircle = ({position, color}) => {
    return (
        <div className={clsx({
            'fixed -z-10 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full': true,
            [`${color} blur-[150px] md:blur-[350px] opacity-50`]: true,
            'left-0 top-0': position === 'top',
            'right-0 bottom-0': position === 'bottom',
        })}></div>
    )
}

export default BlurCircle