import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import './App.css'
 
function App() {
 
  return (
    <div>
      <div className="centeredContent">
      <SignedOut>
          <h1>A Final Note</h1>
          <p>Reflections & Thank Yous</p>
          <h5>You will need to sign in to view this</h5>
          <SignInButton />   
      </SignedOut>
      </div>
      <SignedIn>
      <div className="centeredContent" style={{textAlign: 'left', margin: '50px'}}>
        <p>Hi,</p>
        <br />
        <p>Today is my last working day at Narayana. The last two years have been nothing short of an amazing journey. When I met the founder on October 3, 2022 - I had one question - how serious are you about this?</p>
        <br />
        <p>And in typical founder style, he never responded, but showed up with intensity in the first six months and drove us to accomplish what normally takes years. We built a 250+ team in less than 4 months in the middle of COVID when people just wrote us off as also-rans. This is an experience I will forever remember. I also enjoyed working at the uppermost levels of the board with Puneet - and it gave me a first hand account of how things operate at the highest levels in a multi-thousand crore revenue company. This is an experience I would never regret. </p>
        <br />
        <p>I also want to take this moment to thank all those who were the first 70-80 odd people to join - you are the people who showed real courage and really gave comfort to everyone who joined later no matter how senior they were. <i>If it were not for you, many of the later joiners would not even have had the guts to join.</i> Anyone joining after that took a relatively safe choice - you didn’t.  You joined and paved the way for others - <i>if that isn’t leadership, I don’t know what is.</i> </p>
        <br />
        <p>Especially <strong>Devika, Abhishek, Reet, Nitin, Kirti, Parv, Prachi, Naruttam, Kalyani, Divya, Debashis, Stuti, Rahul, Shalini Marar, Rambabu </strong> - I know you joined because you really believed in us.</p>
        <p>Not to forget the OGs<strong>Sridhar, Mahesh and Sujatha</strong>, people who have worked (usefully) on this longer than I and Manjeet have.</p>
        <br />
        <p>And we also brought in a few people who really changed the organisation for good. <strong>Shrey & Prudhvi</strong> from tech, <strong>Sarthak</strong> in Product, <strong>Suhas </strong> who joined much later and turned around the team really well. </p>
        <br />
        <p>And of course <strong>Manjeet</strong> - honestly the type of person who you would want as a co-founder.  </p>
        <br />
        <p>I chose to specifically mention the above people because I have worked with them directly. There are many like this who I may not have worked with directly. But more importantly, I know that they <strong>chose</strong> to join here, <i>despite having other options in life</i> and not merely becaause of a salary hike or a way out of their current company. And that is why I will be rooting for all the above people  wherever they are. Having worked with you all, I am confident that you all will have immense opportunities for success irrespective of where you work and would gradually endorse you anywhere. </p>
        <br />
        <p>As for me, having spent 12 years in education - I am moving on to a sector in an early stage company that I am personally super excited about - <strong>gaming</strong>. The past 3 months of speaking to Narayana kids has convinced me that <i>games are the way children learn best </i>. Gaming is a behemoth industry worth 20x the ed-tech industry and 5x the entertainment industry. I have always wanted to work at the cutting edge of tech - something that gaming offers really well. </p>
        <br />
        <p>The amazing thing is that I got access to this <i>from a person I hired into Narayana</i> - so in retrospect, coming here is one of the best decisions I have made. Also reinforces something I have always know , the world is a very small place and professional relationships matter. <i>Be nice to people not only above you but also those who come under you.</i> It pays off.</p>
        <p>Thank you everyone once again. I am at <strong>ashwinknan[at]gmail.com </strong> and <strong>(+91)-9757341650</strong> - so if any of you want to chat up - you know how to reach me. I am still in Koramangala and will always be up for a quick coffee chat (for everyone, not just the people I have mentioned here). </p>
        <br />
        <p style={{textAlign: 'right'}}>Signing Off, </p>
        <br />
        <p style={{textAlign: 'right'}}>Ashwin</p>
        <SignOutButton />
      </div>
      </SignedIn>
    </div>
  )
}
 
export default App
