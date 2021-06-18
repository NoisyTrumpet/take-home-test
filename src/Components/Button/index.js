import React from 'react'

const Button = ({to, text, isLink, color, backgroundColor}) => {

    const testingProps = () => {
        console.log(to)
        console.log(text)
        console.log(isLink)
        console.log(color)
        console.log(backgroundColor)
    }
    return (
        <>
            {testingProps()}
        </>
    )
}

export default Button