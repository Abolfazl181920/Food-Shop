import  React, { useState, useEffect } from 'react';

export const DateTime = () => {

    const [ date, setDate ] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);

        function cleanUp() {
            clearInterval(timer);
        }
    });

    return(
        <div className="flex text-gray-400 font-bold py-1 px-32 py-20 absolute gap-2">
            <p>{date.toLocaleTimeString()}</p> &
            <p>{date.toLocaleDateString()}</p>
        </div>
    );
}

export default DateTime;