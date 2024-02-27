import Spline from '@splinetool/react-spline';
export default function Pricing() {

  return (
    <main className='flex min-h-screen flex-col bg-white w-full'>
    <div className=" flex flex-col justify-center">
        <div className="flex flex-col items-center">

            <div className="flex flex-row gap-10 justify-center">
                    <div style={{textAlign:'center', border: '4px solid black', padding: '10px', borderRadius: '10px', width: '300px', height:'600px'}}>
                        <div>
                            <div className="mb-2" style={{width: '100%', height:'200px'}}>
                                <Spline scene="https://prod.spline.design/qqWIwE1VhzPMjKNh/scene.splinecode" />
                            </div>
                        </div>

                    <div className="text-4xl font-raleway mb-2 font-semibold" style={{fontSize: '2em', marginBottom: '20px'}}>Free</div>
                    <div className=" font-raleway text-sm">
                        With free users are given limited access to features.
                    </div>
                    <div className="text-md text-sm " style={{ marginBottom: '20px'}}>
                        Free
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <div style={{border: '2px', backgroundColor:'#008E6F', padding: '2px', borderRadius: '10px', width: '180px', color:'white'}}>
                            <div className="self-center">Learn More</div>
                        </div>
                    </div>
                    </div>

                    <div style={{textAlign:'center', border: '4px solid black', padding: '10px', borderRadius: '10px', width: '300px', height:'600px'}}>
                        <div>
                            <div className="mb-2" style={{width: '100%', height:'200px', padding: '30px'}}>
                                <Spline scene="https://prod.spline.design/DVe5P2PbcvnijMiD/scene.splinecode" />
                            </div>
                        </div>
                        <div className="text-4xl font-raleway mb-2 xl:text-3xl font-semibold" style={{fontSize: '2em', marginBottom: '20px'}} >Standard</div>
                    <div className="text-xl font-raleway text-md">
                        With Standard users are given standard access to most features.
                    </div>
                    <div className="text-md text-sm " style={{ marginBottom: '20px'}}>
                        $5/month
                    </div>
                    
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <div style={{border: '2px', backgroundColor:'#008E6F', padding: '2px', borderRadius: '10px', width: '180px', color:'white'}}>
                            <div className="self-center">Sign Up</div>
                        </div>
                    </div>
                    </div>

                    <div style={{textAlign:'center', border: '4px solid black', padding: '10px', borderRadius: '10px', width: '300px', height:'600px'}}>
                    <div>
                            <div className="mb-2" style={{width: '100%', height:'200px', padding: '30px'}}>
                                <Spline scene="https://prod.spline.design/pG9OMG2Sf00o8IJX/scene.splinecode" />
                            </div>
                        </div>
                        <div className="text-4xl font-raleway mb-2 xl:text-3xl font-semibold"  style={{fontSize: '2em', marginBottom: '20px'}}>Premium</div>
                    <div className="text-xl font-raleway text-md">
                        With premium users are given exclusive access to everything.
                    </div>
                    <div className="text-md text-sm " style={{ marginBottom: '20px'}}>
                        $10/month
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <div style={{border: '2px', backgroundColor:'#008E6F', padding: '2px', borderRadius: '10px', width: '180px', color:'white'}}>
                            <div className="self-center">Sign Up</div>
                        </div>
                    </div>
                    </div>
        </div>
        </div>
    </div>
    </main>
);
}