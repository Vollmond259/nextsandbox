import Link from 'next/link';
export default function Hello(){
  return(
    <>
    <h2>hello motherfucker</h2>
    <Link href="/users">
    <p>go to users</p>
    </Link>
    <Link href="/auth/signin">
    <p>go to loogin</p>
    </Link>
    </>
  )
}