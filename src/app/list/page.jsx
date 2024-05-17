import Image from "next/image"

export default function List(){
    return (
        <>
        <div className="main w-full flex flex-col justify-center items-center py-20 gap-y-16">
            <div className="card p-4 border-[3px] border-second rounded-2xl w-[80%] flex flex-col justify-center items-center text-second gap-y-3">
                <h1 className="text-2xl font-bold">Taeyong</h1>
                <Image src="/taeyong.jpg" alt="taeyong" width="500" height="500"/>
            </div>
            <div className="card p-4 border-[3px] border-second rounded-2xl w-[80%] flex flex-col justify-center items-center text-second gap-y-3">
                <h1 className="text-2xl font-bold">Taeyong</h1>
                <Image src="/jehyun.jpg" alt="taeyong" width="500" height="500"/>
            </div>
          
        </div>
        </>
    )
}