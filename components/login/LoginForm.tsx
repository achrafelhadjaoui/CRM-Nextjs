"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {

    const [data, setData] = useState<LoginFormData>({
        email: '',
        password: ''
    })

    const router = useRouter()

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()

        router.push('/dashboard/clients')

    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target

       setData((prev)=>({
        ...prev,
        [name] :  value
       }))
    }

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="w-full  max-w-sm bg-white shadow-md rounded flex flex-col gap-6 p-4">
                <h2 className="text-2xl font-bold mx-auto">Login</h2>
                <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-0.5">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="enter your email"
                        onChange={handleChange} 
                        className="w-full h-full outline-none bg-slate-100 p-2 rounded"
                        required/>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="enter your password"
                        onChange={handleChange}  
                        className="w-full h-full outline-none bg-slate-100 p-2 rounded"
                        required/>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-full rounded hover:scale-101 transition-all mx-auto  mt-6 ">
              Login
            </button>
                </form>
            </div>

        </div>
    )
}

export default LoginForm