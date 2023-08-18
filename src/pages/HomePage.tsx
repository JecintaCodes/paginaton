import { useEffect, useState } from "react";
import pix from "../assets/373.jpg";
import { getData } from "../api/authApi";
import ReactPaginate from "react-paginate";
import { BsArrow90DegRight, BsArrow90DegLeft } from "react-icons/bs";

const HomePage = () => {
  const [data, setData] = useState<Array<any>>(Array);
  const [page, setPage] = useState<number>(9);
  const [view, setView] = useState<number>(12);

  const lastPage = page * view;
  const firstPage = lastPage - view;
  const myState = data.slice(firstPage, lastPage);

  let pagination: number[] = [];
  for (let i = 1; i <= Math.ceil(data.length / view); i++) {
    pagination.push(i);
  }

  useEffect(() => {
    getData().then((res: any) => {
      setData([...data, ...res]);
    });
  }, []);
  return (
    <div className="font-[main] text-[15px]">
      <div className="w-full p-4 flex flex-wrap ">
        {/* box */}

        {myState?.map((props: any) => (
          <div
            className="w-[250px] min-h-[200px] border-[2px] mr-[20px]"
            style={{ boxShadow: "rgba(0,0,0,0,0.24) 0px 3px 8px" }}
          >
            <img
              className="w-full h-[150px] object-cover rounded-"
              src={pix}
              alt="pix"
            />
            <div className="mt-4 pl-2 text-[12px]">
              <p>ID:{props.id}</p>
              <p>Name:</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full p-4 flex flex-wrap justify-center">
        {/* { */}
        {/* pagination?.map((el: any)=>( */}

        <ReactPaginate
          pageCount={Math.ceil(data.length / view)}
          breakLabel={<div className="ml-10"></div>}
          nextLabel={
            <div
              className={`bg-red-500  py-2 px-4 m-1 rounded  hover:cursor-pointer`}
            >
              <BsArrow90DegRight  className=" text-white"/>
            </div>
          }
          previousLabel={
            <div className={`bg-red-500  py-2 px-4 m-1 rounded  hover:cursor-pointer`}><BsArrow90DegLeft/></div>
          }

          pageLabelBuilder={(page)=>(
            // <div className="h-10 rounded px-5 text-slate-600 transition-colors duration-150 flex items-center focus:shadow-outline hover:bg-green-100">{page}</div>
            <button className="bg-red bg-green-300 py-2 px-4 m-1 rounded hover:cusor-pointer w-[50px] h-[40px] text-white font-bold">
          {page}
        </button> 

          )}

          onPageChange={({selected})=>{selected +1}}
          activeClassName="active"
          containerClassName="pagination"
          pageRangeDisplayed={5}
          className="flex min-w-[500px] items-center"
                    renderOnZeroPageCount={null}
        />
        {/* <button className="bg-red bg-[green] py-2 px-4 m-1 rounded hover:cusor-pointer w-[50px] h-[40px]">
          {page}
        </button> */}
        {/* )) */}

        {/* } */}
      </div>
    </div>
  );
};

export default HomePage;

// <div className="w-full p-4 flex flex-wrap justify-center">
//         {/* {pagination?.map((el: any) => { */}
//         <div className="flex w-full justify-center items-center">
//           <ReactPaginate
//             pageCount={Math.ceil(data.length / view)}
//             breakLabel={<div className="ml-10"></div>}
//             nextLabel={
//               <div
//                 className={` bg-red-500  py-2 px-4 m-1 rounded  hover:cursor-pointer`}
//               >
//                 <BsArrow90DegRight />
//               </div>
//             }
//             previousLabel={
//               <div
//                 className={` bg-red-500  py-2 px-4 m-1 rounded  hover:cursor-pointer`}
//               >
//                 <BsArrow90DegLeft />
//               </div>
//             }
//             pageLabelBuilder={(page) => (
//               <div className="h-10 rounded px-5 text-slate-600 transition-colors duration-150 flex items-center focus:shadow-outline hover:bg-green-100">{page}</div>
//             )}
//             onPageChange={({ selected }) => setPage(selected + 1)}
//             activeClassName="active"
//             containerClassName="pagination"
//             pageRangeDisplayed={5}
//             className="flex min-w-[500px] items-center border-[1px] border-[silver]"
//             renderOnZeroPageCount={null}
//           />
//         </div>
