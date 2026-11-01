import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY, SITE_URL } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Concrete Contractor in Toronto & GTA | Masters Concrete", template: "%s | Masters Concrete" },
  description: "Masters Concrete provides concrete construction, foundations, excavation, underpinning and repair services across Toronto and the Greater Toronto Area. Request a project estimate.",
  alternates: { canonical: "/" },
  openGraph: { type:"website", locale:"en_CA", siteName:COMPANY.name, title:"Masters Concrete | Toronto & GTA Concrete Contractor", description:COMPANY.description, url:SITE_URL },
  robots: { index:true, follow:true }
};
export default function RootLayout({children}:{children:React.ReactNode}){const jsonLd={"@context":"https://schema.org","@type":"GeneralContractor","name":COMPANY.name,"url":SITE_URL,"telephone":[COMPANY.phone,COMPANY.phoneAlt],"email":COMPANY.email,"areaServed":["Toronto","Greater Toronto Area","Ontario"],"description":COMPANY.description,"priceRange":"$$"};return <html lang="en-CA"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><Header/><main>{children}</main><Footer/></body></html>}
