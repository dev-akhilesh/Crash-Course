// import React, { useState, useMemo } from 'react';


// const HeavyComputationComponent = ({ items }) => {
//     const [filterTerm, setFilterTerm] = useState('');

//     const filteredItems = useMemo(() => {
//         return items.filter(item =>
//             item.toLowerCase().includes(filterTerm.toLowerCase())
//         );
//     }, [items, filterTerm]);

//     return (
//         <div className="container">
//             <input
//                 className="input-field"
//                 type="text"
//                 placeholder="Filter items..."
//                 value={filterTerm}
//                 onChange={e => setFilterTerm(e.target.value)}
//             />
//             <ul>
//                 {filteredItems.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default HeavyComputationComponent;



import React, { useState, useMemo, useRef } from 'react';

const HeavyComputationComponent = ({ items }) => {
    const [filterTerm, setFilterTerm] = useState('');
    const [executionTime, setExecutionTime] = useState(0);
    const computationStartTimeRef = useRef(0);

    const filteredItems = useMemo(() => {
        computationStartTimeRef.current = performance.now();
        const result = items.filter(item =>
            item.toLowerCase().includes(filterTerm.toLowerCase())
        );
        setExecutionTime(performance.now() - computationStartTimeRef.current);
        return result;
    }, [items, filterTerm]);

    return (
        <div className="container">
            <input
                className="input-field"
                type="text"
                placeholder="Filter items..."
                value={filterTerm}
                onChange={e => setFilterTerm(e.target.value)}
            />
            <p>Execution Time: {executionTime.toFixed(2)} milliseconds</p>
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default HeavyComputationComponent;

