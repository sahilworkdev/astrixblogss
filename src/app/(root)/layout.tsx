import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` min-h-screen`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
