import Sidebar from "@/components/dashboard/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex">
        <Sidebar/>
       <main className="ml-60 p-4 w-full">
            {children}
       </main>
    </div>   
  );
}
