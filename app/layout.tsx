import '../css/globals.css'
import { Courgette } from 'next/font/google'
const courgette = Courgette({
  weight: '400',
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
        <link rel="shortcut icon" href="media/n.ico" type="image/x-icon" />
        <title>Narutoverse</title>
      </head>
      <body>
        <nav className="menu-wrapper">
        <h1 className='logo'><a href="./">Narutoverse</a></h1>
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="/characters">Characters</a></li>
            <li><a>Clans</a></li>
            <li className='other'>
              {/* <div className='other'>
                <p>Other</p>
                <div className='other-list'>
                  <p>Tailed Beasts</p>
                  <p>Teams</p>
                  <p>Villages</p>
                  <p>Kekkeigenkai</p>
                </div>
              </div> */}
              <p>Other</p>
              <ul className="other-list">
                <li>Tailed Beasts</li>
                <li>Teams</li>
                <li>Villages</li>
                <li>Kekkeigenkai</li> 
              </ul>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
