import { FaXmark } from "react-icons/fa6";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { TbBriefcaseFilled } from "react-icons/tb";
import { TbDatabaseDollar } from "react-icons/tb";
function App() {
 
  return (
    
  
   <nav className="overflow-auto">
    <div className="flex py-4 w-full bg-gray-100 justify-between items-center">
      <div className="flex ml-96 font-semibold text-sm tracking-tight items-center">
        <h3 className=" text-[15px]">Alison's New App is now available on iOS and Android!</h3>
        <button className="ml-4 bg-green-700 bg-opacity-80 hover:bg-green-600 hover:text-green-950 py-1 px-3 text-gray-100 rounded">Download Now</button>
      </div>   
      <div className=" text-lime-700 text-md p-2 cursor-pointer bg-lime-600 bg-opacity-30 mr-4 rounded-full">
      <FaXmark  className=" font-thin"/>
      </div>
    </div>
    <div className="flex h-16 py-4 w-full bg-white shadow-md justify-between items-center">
     <div className=" flex w-full items-center">
     <img className=" ml-4 h-12 w-42" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Mask_Group_121227_222.png" alt="" />
      <div className="flex items-center ml-4 border border-gray-700 border-opacity-50 rounded">
      <input className="ml-1 text-sm w-60 outline-none border-none" type="text" placeholder="What do you want to learn?" />
     <div className="bg-gray-600 h-8 w-8 flex items-center justify-center cursor-pointer">
     <IoIosSearch  className=" text-white"/>
     </div>
      </div>
     <div className=" flex items-center hover:font-bold cursor-pointer text-gray-600 tracking-tighter justify-center ml-4">
      <p className=" text-nowrap mr-1">Explore Courses</p>
      <IoIosArrowDown />
     </div>
     <div className=" flex items-center hover:font-bold cursor-pointer text-gray-600 tracking-tighter justify-center ml-3">
      <p className=" text-nowrap mr-1">Discover Careers</p>
      <IoIosArrowDown />
     </div>
     <div className=" flex items-center hover:font-bold cursor-pointer text-gray-600 tracking-tighter justify-center ml-3">
      <p className=" text-nowrap mr-1">More</p>
      <IoIosArrowDown />
     </div>
     <div className="flex items-center py-1 border-l border-r border-black border-opacity-30 ml-2">
      <div className=" ml-5 leading-none text-[12px] font-semibold tracking-wide py-[3px] px-[10px] bg-sky-100 bg-opacity-40 border border-gray-500 border-opacity-50 border-solid rounded-md ">
        FREE <p className=" font-roboto font-extrabold">LMS</p>
      </div>
      <div className=" ml-4 mr-4 p-2 rounded-full text-white bg-orange-400 ">
      <FaDollarSign />
      </div>
     </div>
     <div className="flex items-center ml-52">
      <p className=" text-nowrap mr-4 text-green-600 font-bold tracking-tighter text-sm">Log In</p>
      <button className=" text-nowrap mr-6 py-[10px] px-5 bg-green-600 hover:bg-green-700 hover:transition-all text-sm rounded-lg tracking-tight font-bold text-gray-100">Sign Up</button>
      <div className="p-2 border border-gray-800 border-opacity-65 text-nowrap relative rounded">
      <MdLanguage className="text-xl text-gray-800 text-opacity-65"/> 
      <span className=" bg-black text-white text-[10px] rounded-full absolute top-0 right-0">en</span>
      </div>
     </div>
     </div>
    </div>
     <div className="flex items-center  mt-6 justify-center">
      <div className="bg-gray-100 flex items-center py-2 w-[55%] rounded-3xl">
        <div className="flex items-center justify-center cursor-pointer font-semibold px-8 rounded-3xl h-10 ml-2 bg-green-700 text-white">
          <HiOutlineBookOpen className=" mr-2"/>
          <span>Learn & Get Certificate</span>
        </div>
        <div className="flex items-center justify-center ml-8 cursor-pointer font-semibold px-8 hover:text-green-700">
        <TbBriefcaseFilled  className=" mr-2"/>
        <span>Build Your Career</span>
        </div>
        <div className="flex items-center justify-center ml-4 cursor-pointer font-semibold px-8 hover:text-green-700">
        <TbDatabaseDollar  className=" mr-2"/>
        <span>Earn On Alison</span>
        </div>
      </div>
     </div>
   </nav>
 
  )
}

export default App
