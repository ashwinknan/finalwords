import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import './App.css'
 
function App() {
 
  return (
    <div>
      <div className="centeredContent">
      <SignedOut>
          <h1>A Final Note</h1>
          <p>Learnings and Expressions of Gratitude</p>
          <h5>You will need to sign in to view this</h5>
          <SignInButton />   
      </SignedOut>
      </div>
      <SignedIn>
      <div className="centeredContent">
        <p>This is work in progress. Come back after a few daya</p>
        <SignOutButton />
      </div>
      </SignedIn>
    </div>
  )
}
 
export default App
