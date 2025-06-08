import React, { Suspense, useState } from 'react';
import Assignments from './Home/Assignments';
import { useLoaderData } from 'react-router';


const AllAssignments = () => {
 const loadedAssignments = useLoaderData();
 const [assignments, setAssignments] = useState(loadedAssignments);
    return (
        <div>
         <div className='pt-36 bg-gradient-to-r from-purple-500 to-cyan-500'>
          <Assignments assignments={assignments}
          setAssignments={setAssignments}
          >

</Assignments>
         </div>  
        </div>
    );
};

export default AllAssignments;