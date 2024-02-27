import Image from "next/image"
import Logo from "../../public/ventureLogo.png"

export default function Header(){
    return (
        <div className="flex mx-52 justify-between text-black pb-4 w-full">
            <div className="flex items-center justify-between border-b-4 w-full h-full">
                <div className="flex">
                    <div>
                        <Image className="flex w-14" width={200} src={Logo} alt='logo'/>
                    </div>
                </div>
                <div className="flex gap-10 text-black">
                    <div className='text-2xl self-center hover:text-grey'>
                        Home
                        </div>
                    <div className='text-2xl self-center  hover:text-grey'>
                        About
                    </div>
                    <button style={{border: '2px', backgroundColor:'#008E6F', padding: '2px', borderRadius: '10px', width: '100px', color:'white'}}className="flex mt-24 border border-black rounded-xl cursor-pointer text-2xl h-20 justify-center">
                        <div className="self-center">Sign Up</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

