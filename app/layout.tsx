import '../css/globals.css'
import Nav from "@components/nav"
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
        <Nav/>
        {children}
      </body>
    </html>
  )
}
