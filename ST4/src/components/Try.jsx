import React, {useEffect, useState} from 'react'
// import Nav from './Nav';
import {robot} from "../assets";
import axios from 'axios';
// import '../index.css'
// import './Try.css';
// import bootstrap from bootstrap;
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap";
const Try = () => {
    const [data, setData]=useState([{}]);
    useEffect(()=>{
        getUser();
    }, []);
    const getUser=async()=>{
        await axios.get('http://localhost:3000/posts').then(res=>setData(res.data));
    };

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        address:"",
        phone:"",
    });

    const [updateData,setUpdateData]=useState({
      name:"",
      email:"",
      address:"",
      phone:"",
  });

    const handleFormSubmit=async(e)=>{
        let response=await axios.post('http://localhost:3000/posts',formData)
        if(response){
            alert("Data submitted successfully")
        }
        setFormData({
            name:"",
            email:"",
            address:"",
            phone:"",
        });
        getUser();
    };
    const handleDelete=async(id)=>{
        await axios.delete('http://localhost:3000/posts/' + id).then(alert('Data deleted successfully'));
        getUser();
    };
    const handleUpdate=async()=>{
      await axios.put(`http://localhost:3000/posts/${updateData.id}`, updateData).then((res)=> {alert("Data updated successfully"); getUser()});
    }
    
    const [showModal, setShowModal] = React.useState(false);

    return(
    <div id="addclient" className="bg-dark w-full h-full">
  <div className="bg-primary px-6 h-full text-gray-800">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <a href="/home"><img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /></a>
      </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form>
          
          {/* <!-- Name input --> */}
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e)=> setFormData({...formData,name:e.target.value})}
            />
          </div>

          {/* <!-- Email input --> */}
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Email address"
              value={formData.email}
              onChange={(e)=> setFormData({...formData,email:e.target.value})}
            />
          </div>

          {/* <!-- Address input --> */}
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Residential address"
              value={formData.address}
              onChange={(e)=> setFormData({...formData,address:e.target.value})}
            />
          </div>

          {/* <!-- Phone input --> */}
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Mobile No."
              value={formData.phone}
              onChange={(e)=> setFormData({...formData,phone:e.target.value})}
            />
          </div>

          <div className="text-center lg:text-left">
            <button
              type="button"
              className="inline-block px-7 py-3 bg-emerald-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-emerald-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={handleFormSubmit}
            >
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <table className="w-full text-base text-left text-white dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-500 hover:text-white">
            <tr>
                {/* <th scope="col" className="py-3 px-6">
                    ID
                </th> */}
                <th scope="col" className="py-3 px-6 text-center">
                    Name
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                    Email
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                    Address
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                    Mobile
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data && data.map(user=>(
                    <tr className="bg-slate-800 hover:bg-teal-300 hover:text-black border-b dark:bg-gray-900 dark:border-gray-700">
                {/* <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.id}
                </th> */}
                <td className="py-4 px-6 text-center">
                    {user.name}
                </td>
                <td className="py-4 px-6 text-center">
                    {user.email}
                </td>
                <td className="py-4 px-6 text-center">
                    {user.address}
                </td>
                <td className="py-4 px-6 text-center">
                    {user.phone}
                </td>
                {/* <td className="py-4 px-6">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> */}
                <td className="py-4 px-6 text-center" style={{display: "flex", justifyContent: "space-between"}}>
                    <button className="font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700" onClick={() => {setShowModal(true); setUpdateData({
                      name:user.name,
                      email:user.email,
                      address:user.address,
                      phone:user.phone,
                      id:user.id,
                    })}}>
                        Edit
                    </button>
                    <button className="font-bold py-2 px-4 rounded bg-red-500 text-white hover:bg-red-700" onClick={()=>handleDelete(user.id)}>
                        Delete
                    </button>
                </td>
            </tr>
                ))
            }
        </tbody>
    </table>
    
    {showModal ? (
        <>
          <div
            className="justify-center bg-white bg-opacity-70 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="bg-primary flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">
                    Update existing details of user &emsp;
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-black text-white w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="bg-primary relative p-6 flex-auto">
                  <div className="my-4 text-slate-500 text-lg leading-relaxed">
                  <form>
          
          {/* <!-- Name input --> */}
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Full Name"
              value={updateData.name}
              onChange={(e)=> setUpdateData({...updateData,name:e.target.value})}
            />
          </div>

          {/* <!-- Email input --> */}
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Email address"
              value={updateData.email}
              onChange={(e)=> setUpdateData({...updateData,email:e.target.value})}
            />
          </div>

          {/* <!-- Address input --> */}
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Residential address"
              value={updateData.address}
              onChange={(e)=> setUpdateData({...updateData,address:e.target.value})}
            />
          </div>

          {/* <!-- Phone input --> */}
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Mobile No."
              value={updateData.phone}
              onChange={(e)=> setUpdateData({...updateData,phone:e.target.value})}
            />
          </div>
          </form>
                  </div>
                </div>
                {/*footer*/}
                <div className="bg-primary flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {setShowModal(false); handleUpdate()}}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

  </div>
);
}

export default Try;