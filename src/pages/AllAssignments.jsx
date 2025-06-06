import React, { Suspense } from 'react';
import Assignments from './Home/Assignments';

const assignmentsPromise = fetch('http://localhost:3000/assignments').then(res=>res.json());

const AllAssignments = () => {
    return (
        <div>
         <div className='pt-36 bg-gradient-to-r from-purple-500 to-cyan-500'>
         <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
           <Assignments assignmentsPromise={assignmentsPromise}></Assignments> 
        </Suspense>
         </div>  
        </div>
    );
};

export default AllAssignments;