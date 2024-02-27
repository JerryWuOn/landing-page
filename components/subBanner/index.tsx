import Spline from '@splinetool/react-spline';
export default function SubBanner(){
    return (
        <div className="flex mx-52 justify-between text-black pb-4 w-full h-full">
            <div className="flex flex-row items-center justify-between border-b-4 w-full h-full">
                <div className="flex gap-10 text-black" style={{width: '800px'}}>
                    <a className='text-2xl self-center hover:text-grey '>
                        <Spline scene="https://prod.spline.design/9xhhBKILDVs8m7aM/scene.splinecode"/>
                    </a>
                </div>
                <div className="flex flex-col h-full" style={{width: '580px'}}>
                    <div className="text-3xl" style={{width: '300px'}}>
                        Venture's service stands out with curated listings and a user-friendly platform, ensuring your next move is a confident and enjoyable experience.
                    </div>
                </div>
            </div>
        </div>
    )
}

