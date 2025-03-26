import "./globals.css";
import Link from "next/link";

function TopNav() {
    return (
        <nav className={"font-white flex flex-row space-x-5 p-4 border-1 mb-3"}>
            <div>
                <Link href={"f1"}>Form 1</Link>
            </div>
            <div>
                <Link href={"f2"}>Form 2</Link>
            </div>
        </nav>
    )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
