
export default function Newsletter(){
    return (
        <div className="flex mx-52 justify-between text-black pb-4 w-full">
            <div className="flex items-center justify-center border-b-4 w-full" style={{gap:'30px'}}>
                <div className="flex">
                    <div>
                        Subscribe To Newsletter
                    </div>
                </div>
                <div className="flex gap-10 text-black">
                <input type="text" placeholder="Your Email"/>
                </div>
            </div>
        </div>
    )
}

