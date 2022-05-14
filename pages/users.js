import Link from "next/link";
// eslint-disable-next-line no-unused-vars
import map from "lodash";
import PropTypes from 'prop-types';

function Users({users}){



    return(
        <>
        <h3>users</h3>
        <Link href="/">
            <p>go back</p>
        </Link>
        <ul>
            {users.map((user,key)=>
            <li key={key}>
                <Link href={`/users/${user.id}`}>
                <p>{user.name}</p>
                </Link>
              
            </li>
                )}
        </ul>
        </>
    )
}


export async function getStaticProps(context) {
    const response =await fetch('https://jsonplaceholder.typicode.com/users')
    const users =await response.json()
    console.log(context)
   
    return {
      props: {users}, // will be passed to the page component as props
    }
  }

Users.propTypes={
    users:PropTypes.array
}

  export default Users