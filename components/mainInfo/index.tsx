import Spline from '@splinetool/react-spline';
export default function MainInfo(){
    return (
        <div className="flex mx-52 justify-between text-black pb-4 w-full h-full">
            <div className="flex flex-row items-center justify-between border-b-4 w-full h-full">
                <div className="flex flex-col h-full" style={{width: '580px'}}>
                    <b className="text-3xl">
                        Find Your Dream Stay in Metro Vancouver
                    </b>
                    <div>
                        Discover the perfect place to call home in the vibrant cities in Metro Vancouver. Whether you're captivated by urban energy or seeking tranquility in a suburban haven, your dream home awaits. Make your next move with confidence and start your journey towards a life you'll love.
                    </div>
                    <div style={{display:"flex"}}>
                        <div style={{border: '2px', backgroundColor:'#008E6F', padding: '20px', borderRadius: '10px', width: '180px', color:'white', marginTop: '40px'}}>
                            <div className="self-center items-center" style={{justifyContent:'center'}}>Learn More</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 text-black" style={{width: '800px'}}>
                    <a className='text-2xl self-center hover:text-grey '>
                    <Spline scene="https://prod.spline.design/9Fzsh616Xh3kgUR1/scene.splinecode" />
                    </a>
                </div>
            </div>
        </div>
    )
}

