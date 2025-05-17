// // src/components/common/StatsCounter.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import '../../styles/components/statsCounter.css'; // Create this file

// const StatsCounter = ({ items }) => {
//     // items: array of objects like { icon, endValue, label, suffix: '+' }

//     const CountUp = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
//         const [count, setCount] = useState(0);
//         const ref = useRef(null);
//         const [isVisible, setIsVisible] = useState(false);

//         useEffect(() => {
//             const observer = new IntersectionObserver(
//                 ([entry]) => {
//                     if (entry.isIntersecting) {
//                         setIsVisible(true);
//                         observer.unobserve(entry.target); // Stop observing once visible
//                     }
//                 },
//                 { threshold: 0.1 } // Trigger when 10% of the element is visible
//             );

//             if (ref.current) {
//                 observer.observe(ref.current);
//             }

//             return () => {
//                 if (ref.current) {
//                     // eslint-disable-next-line react-hooks/exhaustive-deps
//                     observer.unobserve(ref.current);
//                 }
//             };
//         }, []);


//         useEffect(() => {
//             if (!isVisible) return;

//             let start = 0;
//             const endValue = parseInt(end, 10);
//             if (start === endValue) return;

//             const incrementTime = (duration / endValue) * (endValue > 100 ? 10 : 1); // Adjust for smoother animation on larger numbers

//             const timer = setInterval(() => {
//                 start += (endValue > 100 ? Math.ceil(endValue / (duration / 100)) : 1); // Make bigger jumps for larger numbers
//                 if (start >= endValue) {
//                     setCount(endValue);
//                     clearInterval(timer);
//                 } else {
//                     setCount(start);
//                 }
//             }, incrementTime > 0 ? incrementTime : 1); // Ensure incrementTime is at least 1

//             return () => clearInterval(timer);
//         }, [end, duration, isVisible]);

//         return (
//             <span className="stat-value">
//                 {prefix}{count.toLocaleString()}{suffix}
//             </span>
//         );
//     };

//     if (!items || items.length === 0) {
//         return null;
//     }

//     return (
//         <div className="stats-counter-container" ref={CountUp({}).ref}> {/* Pass ref to trigger observer on container */}
//             {items.map((item, index) => (
//                 <div key={index} className="stat-item">
//                     {item.icon && <div className="stat-icon">{item.icon}</div>}
//                     <div className="stat-number">
//                         <CountUp end={item.value} duration={item.duration || 2000} suffix={item.suffix} prefix={item.prefix} />
//                     </div>
//                     <div className="stat-label">{item.label}</div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default StatsCounter;

// src/components/common/StatsCounter.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../../styles/components/statsCounter.css';

const StatsCounter = ({ items }) => {
    // CountUp sub-component
    const CountUp = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
        const [count, setCount] = useState(0);
        const countUpRef = useRef(null); // Give it a more specific name
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                },
                { threshold: 0.1 } // Trigger when 10% of the element is visible
            );

            if (countUpRef.current) { // Check if the ref is attached
                observer.observe(countUpRef.current);
            }

            return () => {
                if (countUpRef.current) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer.unobserve(countUpRef.current);
                }
            };
        }, []); // Empty dependency array, run once to set up observer

        useEffect(() => {
            if (!isVisible) return; // Only count if visible

            let start = 0;
            const endValue = parseInt(end, 10);

            // Handle cases where endValue might be 0 or NaN to prevent infinite loops or errors
            if (isNaN(endValue) || endValue === 0) {
                setCount(endValue || 0); // Set to endValue (or 0 if NaN) and return
                return;
            }
            if (start === endValue && endValue !== 0) return; // Already at end and not 0

            // Dynamic increment time calculation
            let incrementTime = Math.max(1, Math.floor(duration / endValue));
            if (endValue > 500) incrementTime = Math.max(1, Math.floor(duration / (endValue / 10))); // Faster jumps for large numbers

            const timer = setInterval(() => {
                start += Math.ceil(endValue / (duration / Math.max(10, incrementTime))); // Adjust increment step

                if (start >= endValue) {
                    setCount(endValue);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }, [end, duration, isVisible]); // Re-run if these change (though 'end' and 'duration' usually don't after init)

        return (
            // Attach the ref HERE to the span you want to observe
            <span className="stat-value" ref={countUpRef}>
                {prefix}{count.toLocaleString()}{suffix}
            </span>
        );
    };

    if (!items || items.length === 0) {
        return null;
    }

    return (
        // The ref on the container was incorrect, remove it or use it for a different purpose if needed.
        // Each CountUp instance will manage its own visibility.
        <div className="stats-counter-container">
            {items.map((item, index) => (
                <div key={index} className="stat-item">
                    {item.icon && <div className="stat-icon">{item.icon}</div>}
                    <div className="stat-number">
                        <CountUp end={item.value} duration={item.duration || 2000} suffix={item.suffix} prefix={item.prefix} />
                    </div>
                    <div className="stat-label">{item.label}</div>
                </div>
            ))}
        </div>
    );
};

export default StatsCounter;