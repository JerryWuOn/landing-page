
export default function Footer(){
    return (
        <div className="flex mx-52 justify-between text-black pb-4 w-full">
            <div className="flex items-center justify-between border-b-4 w-full">
                <div className="flex">
                    <div>
                        © Jerry On
                    </div>
                </div>
                <div className="flex gap-10 text-black">
                    <a href="https://github.com/JerryWuOn/landing-page" className='text-2xl self-center hover:text-grey'>
                        Github
                    </a>
                </div>
            </div>
        </div>
    )
}
