// import Footer from "./Components/Layout/Footer";
// import Header from "./Components/Layout/Header";
// import "./globals.scss";
// import "bootstrap/dist/css/bootstrap.min.css";



// export const metadata = {
//   title: "GLOBAL POWER TECH",
//   description: "Professional Technical Services in Middel East",
//   // icons: {
//   icon: "/assets/img/favicon.ico",
//   //   apple: "/apple-touch-icon.png"
//   // },
//   keywords: ["technical service", "maintenance", "plumbing","sam tech Sa","sam tech saudi","sam tech saudi arabia","sam tech","Sam Technical Service"],
//   openGraph: {
//     title: "GLOBAL POWER TECH",
//     description: "Professional Technical Services in Middel East",
//     url: "https://samtechsa.com",
//     siteName: "GLOBAL POWER TECH",
//     type: "website",
//     images: [{ url: "/assets/img/bahrain/powertech_bahrain_one.jpeg", width: 1200, height: 630 }]
//   }
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <div className="pageWrapper">
//         <Header />
//         {children}
//         <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }

import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "GLOBAL POWER TECH",
  description: "Professional Technical Services in Middel East",
  icon: "/assets/img/favicon.ico",
  keywords: [
    "technical service",
    "maintenance",
    "plumbing",
    "sam tech Sa",
    "sam tech saudi",
    "sam tech saudi arabia",
    "sam tech",
    "Sam Technical Service"
  ],
  openGraph: {
    title: "GLOBAL POWER TECH",
    description: "Professional Technical Services in Middel East",
    url: "https://samtechsa.com",
    siteName: "GLOBAL POWER TECH",
    type: "website",
    images: [
      {
        url: "/assets/img/bahrain/powertech_bahrain_one.jpeg",
        width: 1200,
        height: 630
      }
    ]
  }
};

export default function RootLayout({ children }) {
  // const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";
  const isMaintenance = "true";


  if (isMaintenance) {
    return (
      <html lang="en">
        <body>
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>🚧 We'll be back soon</h1>
            <p>Site is under maintenance</p>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <div className="pageWrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}