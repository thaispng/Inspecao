import React from 'react';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const backgroundColor = getRandomColor();

export default function Avatar({ name, lastName, size = 40 }) {
    const initials = `${name ? name[0] : ''}${lastName ? lastName[0] : ''}`;

    return (
        <div
            className={`flex items-center justify-center rounded-full text-white`}
            style={{ backgroundColor, width: size, height: size, fontSize: size / 2 }}
        >
            {initials}
        </div>
    );
}