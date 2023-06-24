import '../css/globals.css'
import {Courgette} from 'next/font/google'
const courgette = Courgette({
  weight:'400',
  subsets: ["latin"]
}
); 
export const metadata = {
  title: 'Narutoverse',
  description: 'Get all informations about Narutoverse',
  other: {
    keywords: "naruto, naruto info, narutoverse, naruto shippuden"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <nav className="menu-wrapper">
          <ul>
            <li className='logo'>Narutoverse</li>
            <a><li>Home</li></a>
            <a><li>Characters</li></a>
            <a><li>Clans</li></a>
            <div className='other'>
              <p>Other</p>
              <div className='other-list'>
                <p>Tailed Beasts</p>
                <p>Teams</p>
                <p>Villages</p>
                <p>Kekkeigenkai</p>
              </div>
            </div>
            {/* <ul className="other-list">
              <li>Tailed Beasts</li>
              <li>Teams</li>
              <li>Villages</li>
              <li>Kekkeigenkai</li> 
            </ul>*/}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
