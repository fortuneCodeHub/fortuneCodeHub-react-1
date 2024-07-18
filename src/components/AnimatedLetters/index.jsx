import React from 'react'
import './index.scss'

const AnimatedLetters = (props) => {

    const stringArr = props.stringArr
    const letterClass = props.letterClass
    const idx = props.idx
    return (
        <span>
            {
                stringArr.map((char, i) => {
                    return (
                        <span key={char + i} className={`${letterClass} _${i + 15}`}>
                            {char}
                        </span>
                    )
                })
            }
        </span>
    )

}

export default AnimatedLetters

