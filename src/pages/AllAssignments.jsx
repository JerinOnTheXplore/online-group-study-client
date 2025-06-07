import React, { Suspense } from 'react';
import Assignments from './Home/Assignments';
import { useLoaderData } from 'react-router';


const AllAssignments = () => {
 const assignments = useLoaderData();
    return (
        <div>
         <div className='pt-36 bg-gradient-to-r from-purple-500 to-cyan-500'>
          <Assignments assignments={assignments}>
          </Assignments>
         </div>  
        </div>
    );
};

export default AllAssignments;