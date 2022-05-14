import {useRouter} from "next/router"
import PropTypes from 'prop-types';
function User({user}){
    const {query}=useRouter()
    console.log(query)
    return(
        <>
        <h2>hello User id {query.id} </h2>
        <h3>name of usr {user.name}</h3>
        <h2>mail user {user.email}</h2>
        </>
    )
}


export async function getServerSideProps({params}) {
    const response =await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`) 
    const user= await response.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
  }


  User.propTypes={
      user:PropTypes.shape({
          name:PropTypes.string,
          email:PropTypes.string
      })
  }
export default User