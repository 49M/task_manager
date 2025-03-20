import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head className={"flex flex-col justify-between items-center w-full"}>
          <div>
              <Link
          </div>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
