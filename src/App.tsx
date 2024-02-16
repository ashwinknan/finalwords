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
        <p>Today is my last working day at Narayana. The last two years have been nothing short of an amazing journey. When I met the founder on October 3, 2021 - I had one question - how serious are you about this?</p>
        <br />
        <p>And in typical founder style, he never responded, but showed up with intensity in the first six months and drove us to accomplish what normally takes years. We built a 250+ team in less than 4 months in the middle of COVID when people just wrote us off as also-rans. This is an experience I will forever remember. I also enjoyed working at the uppermost levels of the board with Puneet - and it gave me a first hand account of how things operate at the highest levels in a multi-thousand crore revenue company. This is an experience I would always be thankful to them for. I now know how difficult it is to balance expectations at the top, no matter how trivial it may seem to you and me. </p>
        <br />
        <p>I also want to take this moment to thank all those who were the first 70-80 odd people to join - you are the people who showed real courage and really gave comfort to everyone who joined later no matter how senior they were. <em>If it were not for you, many of the later joiners would not even have had the guts to join.</em> Anyone joining after that took a relatively safe choice - you didn’t.  You joined and paved the way for others - <em>if that isn’t leadership, I don’t know what is.</em> </p>
        <br />
        <p> I especially would like to thank some specific people: </p>
        <br />
          <ul>
            <li><strong>Content Team</strong>: 
              <ul>
                <li><em>Devika and Stuti</em> for dealing with a challenging (and inexplicable) 'circumstances' in their team both above and below and still doing work relentlessly.</li>
                <li><em>Reet and Nitin</em> for making Physics fun with Sridhar, Manish, Arnold and Ninad and for dealing with my hard demands.</li>
                <li><em>Vishnu and Abhishek</em> for being hyper-competitive and pushing everyone and for directly dealing with the epitome of unreasonableness.</li>
                <li><em>Prachi</em> for doing the real work of managing the team and keeping everyone motivated.</li>
                <li><em>Suhas</em> for turning around the team (and pushing me a lot with questions) & Kirti for setting everything up.</li>
                <li><em>Parv</em> for maintaining calm and accelerating despite being on the receiving end on almost every BAU meeting. <em>Shalini and Rahul Marar</em> too for carrying on with quality work. And for bringing up new leaders into the team. And <em>Naruttam</em> for helping set it all up in the early days.</li>
              </ul>
            </li>
            <li><strong>The Entire Storyboarding Team</strong>: They did amazingly well despite lots of misdirection initially.</li>
            <li><strong>Media Team</strong>: <em>Dipin, Kishor, Arpit, Nidhin (and the sound team), Rajashekar sir & JP Sir </em> (the only two people who deserved the salutation 'Sir') for dealing with all the leadership randomness in media</li>
            <li><strong>Tech & Product Team</strong>: Shrey and Prudhvi in particular for bringing (read: trying to bring) tech thinking into a legacy system.</li>
            <li><strong>PMO</strong>: Divya, Rambabu, Kalyani, for prioritizing <em>actual work</em> over optics of work and pulling in extra effort for other inefficiencies and incompetencies in their team without complaining and more importantly <em>never fudging numbers</em>. With Manjeet - you never could have anyway. And Manvendra - for dealing all vendors. Phew! </li>
            <li><strong>Presenters</strong>: Aashay, Lekshmi, Tania, Sriram, Thanushree & Asmita for doing professional work despite the initial uncertainties and actually producing amazing work. I know it is not easy standing and delivering without complaining.</li>
          </ul>

        <p>And also,<em> Jyotsna</em>, <em>Premm</em> & teams, who ensured the flow of <em>people</em>, <em>snacks</em>, <em>travel bookings</em> and <em>money</em>.</p>
        <br />
        <p>Finally, how can I forget <strong>Manjeet</strong> - the type of person who you would want not as an employee but as a co-founder.  </p>
        <br />
        <p>I chose to specifically mention the above people because I have worked with them directly. There are many like this who I may not have worked with directly. But more importantly, I know that they <strong>chose</strong> to join here, <em>despite having other options in life</em> and not merely because of a salary hike or a way out of their current company. And that is why I will be rooting for all the above people  wherever they are. Having worked with you all, I am confident that all you people will have amazing opportunities and destined for big things and would gladly endorse you anywhere. (You just have to ask)</p>
        <br />
        <p>As for me, having spent 12 years in education - I am moving on to a sector in an early stage company that I am personally super excited about - <strong>gaming</strong>. The past 3 months of speaking to Narayana kids has convinced me that <em>games are the way children learn best </em>. Gaming is a behemoth industry worth 20x the ed-tech industry and 5x the entertainment industry. I have always wanted to work at the cutting edge of tech - something that gaming offers really well. </p>
        <br />
        <p>The amazing thing is that I got access to this <em>from a person I hired into Narayana</em> - so in retrospect, coming here is one of the best decisions I have made. Also reinforces something I have always known , the world is a very small place and professional relationships matter. <em>Being nice to deserving people under you always pays off.</em></p>
        <br />
        <p>Thank you everyone once again. I can be reached at <strong>ashwinknan[at]gmail.com </strong> and <strong>(+91)-9757341650</strong> - so if any of you want to chat up - you know how to reach me. I am still in Koramangala and will always be up for a quick coffee chat (for everyone, not just the people I have mentioned here). I am now creating a group called the <a href="https://chat.whatsapp.com/L8eWGUWUj8r0czmQ9tUJHr">GTET Mafia</a> - an alumni group for us to be in touch. </p>
        <br />
        <p style={{textAlign: 'right'}}>Signing Off, </p>
        <p style={{textAlign: 'right'}}><strong>Ashwin</strong></p>
        <SignOutButton />
      </div>
      </SignedIn>
    </div>
  )
}
 
export default App
