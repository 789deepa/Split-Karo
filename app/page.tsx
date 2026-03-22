import { getServerSession } from "next-auth"
import Link from "next/link"

export default async function Home() {
  const session = await getServerSession();

  return (
    <div >
      <h1>SplitKaro</h1>
      {
        session ? (
          <p>Welcome, {session.user?.name}</p>
        ) : (
          <Link href="/api/auth/signin" >Login with Google</Link>
        )}
    </div>
  )
}