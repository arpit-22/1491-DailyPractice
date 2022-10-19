import React, {useEffect, useState} from 'react'
import Nav from './Nav';
import {robot} from "../assets";
import axios from 'axios';
const AddClient = () => {
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
    return(
    <div id="addclient" className="bg-primary w-full h-full">
      {/* <Nav/> */}
  <div className="bg-primary px-6 h-full text-gray-800">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
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
  <table className="w-full text-base text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200">
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
                    <tr className="bg-teal-50 hover:bg-teal-100 border-b dark:bg-gray-900 dark:border-gray-700">
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
                    <button className="font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700">
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
    
    </div>
);
}

export default AddClient;