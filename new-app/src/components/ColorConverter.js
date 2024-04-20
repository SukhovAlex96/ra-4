import React, { useState } from 'react';

function ColorConverter() {
    const [backColor, setBackColor] = useState('#000000');
    const [rgbColor, setRgbColor] = useState('');

    function HexToRgb(c) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    const handlerConvert = (value) => {
        // try {
        // setBackColor('#000000');
        // setRgbColor('');
        if (value.length === 7 && value[0] === '#') {
            let rgbMassiv = HexToRgb(value)
            if (rgbMassiv !== null) {
                let resultColor = `rgb(${rgbMassiv.r}, ${rgbMassiv.g}, ${rgbMassiv.b})`;
                setRgbColor(resultColor);
                setBackColor(resultColor);
                // console.log(resultColor, backColor)
                return
            }
            setRgbColor('Ошибка!')
        }
        // } catch (error) {
        //     console.error(error);
        // }
    }

    return (
        <div className="converter"
             style = {{
                 backgroundColor: backColor,
             }}>
            <input
                type="text"
                placeholder="Введите цвет в формате HEX"
                className="converter_color"
                maxLength="7"
                onChange={(event) => handlerConvert(event.target.value)} />
            <div className="converter_text">{rgbColor}</div>
        </div >
    );
}

export default ColorConverter;