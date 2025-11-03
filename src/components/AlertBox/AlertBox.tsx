import React from 'react';

import type { AlertBoxProps} from '../../types';

export const AlertBox: React.FC<AlertBoxProps> = ({type, message, onClose, children}) =>{
    const alertStyles= {
        success: 'bg-green-100 border-green-500 text-green-700',
        error: 'bg-red-100 bg-red-500 text-red-700',
        warning: 'bg-yellow-100 bg-yellow-500 text-yellow-700',
        info: 'bg-blue-100 bg-blue-500 text-blue-700',
    };

    return (
        <div className={`p-4 border-l-4 ${alertStyles[type]}`}>
            <div className= "flex justify-between items-center">
                <p>{message}</p>
                {onClose && (<button onClick= {onClose} className="ml-4 text-gray-500 hover:text-gray-700">x</button>)}
            </div>
            <div>{children}</div>
        </div>

    );
};