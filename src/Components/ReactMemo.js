import React from 'react'

const ReactMemo = () => {
    return (
        <div className='theme'>
            <div className='theme__title'></div>
            <div className='theme__text text'>
                <p className='text__item'></p>
                <p className='text__item'></p>
                <p className='text__item'></p>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'></p>
                <pre className='code__item'>
                    <code>{``}
                    </code>
                </pre>
            </div>
        </div>

    )
}

export default ReactMemo;