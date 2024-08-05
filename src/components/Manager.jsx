
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

function Manager() {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    let passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);
  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("./public/cross.png")) {
      ref.current.src = "./public/eye.png.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "./public/cross.png";
      passwordRef.current.type = "text";
    }
  };

  const savePassword = () => {
    
    setPasswordArray([...passwordArray, {...form,id:uuidv4()}]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id:uuidv4()}]));
    setform({ site: "", username: "", password: "" })
    
  };
  const deletePassword = (id) => {
    console.log("deleted by ",id)
  setPasswordArray(passwordArray.filter(item=>item.id !==id))
  localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
  toast('Password Deleted', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
   
    });
  };
  const editPassword = (id) => {
    console.log("edit by id",id)
    setform(passwordArray.filter(i=>i.id===id)[0])
   setPasswordArray(passwordArray.filter(item=>item.id !==id))
   toast('Password Edited', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
   
    });
    };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText=(text)=>{
    toast('Copy To Clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
     
      });
navigator.clipboard.writeText(text)
  }
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition="Bounce"
/>
{/* Same as */}
<ToastContainer />
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-green bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="p-2 md:p-0 md:mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500"> &lt;</span>
          Pass
          <span className="text-green-500">OP/ &gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your Own Password Manager
        </p>

        <div className=" flex flex-col p-4 text-black gap-8 ">
          <input
            placeholder="Enter Your URL"
            value={form.site}
            onChange={handleChange}
            name="site"
            className="rounded-full border border-green-500 p-4 py-1 outline-none"
            type="text"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-4">
            <input
              placeholder="Enter  Username"
              value={form.username}
              onChange={handleChange}
              name="username"
              className="rounded-full border border-green-500 p-4 py-1 outline-none w-full"
              type="text"
            />
            <div className="relative">
              <input
                placeholder="Enter Your Password"
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                name="password"
                className="rounded-full border border-green-500 p-4 py-1 outline-none w-full"
                type="password"
              />
              <span
                className="absolute right-[3px] top-[2px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  className="p-1"
                  ref={ref}
                  src="./public/eye.png.png"
                  alt=""
                  width={30}
                />
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={savePassword}
              className="flex justify-center items-center bg-green-500 gap-2 rounded-full px-4 py-2 w-fit hover:bg-green-400"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              Save Password
            </button>
          </div>
        </div>
        <div className="password">
          <h2 className="font-bold text-xl ">Your Passwords</h2>
          {passwordArray.length === 0 && <div> No Password to show</div>}
          {passwordArray.length !=0 && (
            <table className="table-auto w-full overflow-hidden rounded-md ">
              <thead className=" bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
              {
 passwordArray.map((item,index) => {
    return (
      <tr key={index}>
        <td className=" text-center py-2">
          <div className=" flex justify-center items-center" onClick={() => copyText(item.site)}>
            <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
            <div className="size-7 cursor-pointer">
              <lord-icon
                style={{
                  width: "25px",
                  height: "25px",
                  "padding-top": "3px",
                }}
                src="https://cdn.lordicon.com/depeqmsz.json"
                trigger="hover"
              ></lord-icon>
            </div>
          </div>
        </td>
        <td className="  justify-center py-2 text-center ">
          <div className=" flex justify-center items-center" onClick={()=>copyText(item.username)}>
            <span>{item.username}</span>
            <div className="size-7 cursor-pointer">
              <lord-icon
                style={{
                  width: "25px",
                  height: "25px",
                  "padding-top": "3px",
                }}
                src="https://cdn.lordicon.com/depeqmsz.json"
                trigger="hover"
              ></lord-icon>
            </div>
          </div>
        </td>
        <td className=" flex justify-center items-center text-center py-2 ">
          <div className=" flex justify-center items-center" onClick={() => copyText(item.password)}>
            <span>{item.password}</span>
            <div className="size-7 cursor-pointer">
              <lord-icon
                style={{
                  width: "25px",
                  height: "25px",
                  "padding-top": "3px",
                }}
                src="https://cdn.lordicon.com/depeqmsz.json"
                trigger="hover"
              ></lord-icon>
            </div>
          </div>
        </td>
        <td className='justify-center text-center py-2'>
          <span className='cursor-pointer mx-2' onClick={() => { editPassword(item.id) }}>
            <lord-icon
              src="https://cdn.lordicon.com/zfzufhzk.json"
              trigger="hover"
              colors="primary:#3a3347,secondary:#ffc738,tertiary:#ebe6ef,quaternary:#f9c9c0,quinary:#3a3347"
              style={{ "width": "25px", "heigth": "25px" }}
            >
            </lord-icon>
          </span>
          <span className='cursor-pointer mx-2 mb-3' onClick={() => { deletePassword(item.id) }}>
            <lord-icon
              src="https://cdn.lordicon.com/skkahier.json"
              trigger="hover"
              style={{ "width": "25px", "height": "25px" }}>
            </lord-icon>
          </span>
        </td>
      </tr>
    );
  })}

              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Manager;
