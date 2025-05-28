import React from 'react'

interface Props {
    name: string,
    size?: number,
    width?: number,
    height?: number,
    className?: string,
}

function Icon({
    name,
    size,
    width,
    height,
    className
}: Props) {
    return (
        <svg className={className} width={size || width} height={size || height}>
            <use href={`/sprite.svg#icon-${name}`}></use>
        </svg>
    )
}

export default Icon