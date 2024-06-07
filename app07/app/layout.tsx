
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import MenuBar from "./uis/MenuBar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MenuBar appName="NextAppDemo" />
        <div className="container-fluid p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
