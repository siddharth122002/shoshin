import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <div>
      <div className="flex">
        <Sidebar/>
        <div className="w-full">
          <div className=" w-full md:pt-0 pt-3">
            <Navbar/>
            <div className="border-b-[1px] border-[#F1F1F1] md:ml-8 pt-4 md:pt-0"></div>
          </div>
          <div>
            <Main/>
          </div>
        </div>
      </div>
    </div>
  );
}
