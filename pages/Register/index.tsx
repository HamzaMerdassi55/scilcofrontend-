import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import "../../app/globals.css"
import Navbar from '@/components/Navbar';
import IndianStudent from '../../public/indian-kid-books.png'
import Image from 'next/image'
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';



interface RegisterResponse {
  message: string;

}
const baseUrl="http://localhost:8080"


export default function Register() {
  const router = useRouter();
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [error, setError] = useState<string | null>(null);
  const [passwordError,setPasswordError]=useState<string | null>(null)

  useEffect(()=>{
    const token = Cookies.get('jwtToken');
    if(token){
      router.push('/');
    }
  },[])


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        setError('Password must contain at least one letter and one number, and at least 8 characters alpha-numeric');
        return;
      }
      // const name=firstName+" "+lastName
      const response = await axios.post(`${baseUrl}/api/register`, {first_name: firstName, last_name: lastName,email, password,phone });
      if (response.status === 201) {
        const data: RegisterResponse = response.data;
        router.push('/Login'); // Redirect to dashboard or protected route
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };


  return (
    <>
    <Navbar />
      <div className="grid justify-items-center grid-cols-2 justify-between ">
        <div className='justify-center pt-8 ml-24 '>
          <div className="grid  max-w-screen-xl p-5 m-5 justify-start">
            <span className='text-red-100  mt-8  '> Start  For Free!</span>
            <h1 className='font-bold lg:text-5xl text-white '>
             
              <span className="text-pink-10  justify-center">Create</span> New <span className="text-orange-10">  Account  </span>
            </h1>
            <span className='text-red-100 '>
            Already A Member?
                <Link href="/Register" className='text-blue-500'> Log In </Link> </span>
          </div>


          <div className=" p-6 pt-10 justify-center rounded shadow-md w-100 h-50 ml-16 ">
          
      <form onSubmit={handleSubmit}>
     <input
         type="text"
         className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
         placeholder="FirstName"
         required
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}

       />
         <input
         type="text"
         className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
         placeholder="Last Name"
         required
         value={lastName}
         onChange={(e) => setLastName(e.target.value)}
       />
       <input
         type="text"
         className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
         placeholder="Email"
         required
         value={email}
         onChange={(e) => setEmail(e.target.value)}
       />
       <input
         type="password"
         className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
         placeholder="Password"
         required
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
       />
              {passwordError && <p className="text-red-500">{passwordError}</p>}

             <input
         type="text"
         className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
         placeholder="Phone Number"
         required
         value={phone}
         onChange={(e) => setPhone(e.target.value)}
       />

       {error && <p className="text-red-500">{error}</p>}

        <div className=' bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500   hover:to-purple-400'>
                <button
                  type="submit"
                  className="w-full text-white py-2 rounded-full "
                >
                  Sign In
                </button>
              </div>
     </form>
     <div className="text-center text-gray-500 mt-4">- OR -</div>
     <Link
       className="block text-center text-blue-500 hover:underline mt-2"
       href="/Login"
     >
       Login with an existing account
     </Link>
        </div>
        
        </div>

        <div className=' flex flex-1 items-start '>
          <div className='h-full w-full relative z-20 flex-col gap-8 rounded-3xl px-2 py-8 '>
            <Image
              src={IndianStudent}
              alt="Indian Student"
              width={600}
              height={800}
            />
          </div>
        </div>
        <div></div>



      </div>
    
    </>
 
     
    )
  
}
