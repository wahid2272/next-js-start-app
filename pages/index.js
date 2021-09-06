import Link from 'next/link'
import {Fragment} from 'react';

function HomePage() {
    return (
       <Fragment>
           <h1>Welcome to Home the Page</h1>
            <ul>
                <Link href="/news/test-case">Click Me</Link>
            </ul>
       </Fragment> 

    )
    
}

export default HomePage;
