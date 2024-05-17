import Image from "next/image"

export default function List(){
    const gambar = [
        { alt: 'Taeyong', src: '/taeyong.jpg'},
        { alt: 'Jaehyun', src: '/jehyun.jpg'},
        { alt: 'Doyoung', src: '/doyoung.jpg'},
        { alt: 'Winwin', src: '/winwin.jpeg'},
        { alt: 'Jungwoo', src: '/junwoo.jpg'},
        { alt: 'Yuta', src: '/yuta.jpg'},
        { alt: 'Renjun', src: '/renjun.png'},
        { alt: 'Jeno', src: '/jeno.jpg'},
        { alt: 'Jaemin', src: '/jaemin.jpg'},
        { alt: 'Chenlee', src: '/chenlee.jpg'},
        { alt: 'Jisung', src: '/jisung.jpg'},
        { alt: 'Mark', src: '/mark.jpg'},
        { alt: 'Haechan', src: '/haechan.jpg'},
        { alt: 'Johnny', src: '/johnny.jpg'},
        { alt: 'Taeil', src: '/taeil.jpg'},
        { alt: 'Ten', src: '/ten.png'},
        { alt: 'Shotaro', src: '/shotaro.jpg'},
        { alt: 'Sakuya', src: '/sakuya.jpg'},
        { alt: 'Sungchan', src: '/sungchan.jpg'},
        { alt: 'Sion', src: '/sion.jpg'},
        { alt: 'Yangyang', src: '/yangyang.jpg'},
        { alt: 'Xiaojun', src: '/xiaojun.jpg'},
        { alt: 'Hendery', src: '/hendery.jpg'},
        { alt: 'Rikuu', src: '/rikuu.jpg'},
        { alt: 'Ryo', src: '/ryo.jpg'},
        { alt: 'Jaehee', src: '/jaehee.jpg'},
        { alt: 'Kun', src: '/kun.jpg'},
        { alt: 'Jungmin', src: '/jungmin.jpeg'},
        { alt: 'Winwin Asli', src: '/winwin.jpg'},
        { alt: 'DPR IAN', src: '/dprian.jpg'},
        { alt: 'DPR IAN', src: '/ian.jpg'},
        { alt: 'DPR IAN', src: '/iyan.jpg'},
    ]

    let setGambar = gambar.map((g, index)=>{
        return (
            <>
                <div className="card p-4 border-[3px] border-second rounded-2xl w-[80%] flex flex-col justify-center items-center text-second gap-y-3" key={index}>
                    <h1 className="text-2xl font-bold">{g.alt}</h1>
                    <Image src={g.src} alt={g.alt} width="500" height="100"/>
                </div>
            </>
        )
    })


    return (
        <>
        <div className="main w-full flex flex-col justify-center items-center py-20 gap-y-16">
            <h1 className="text-[40px] font-bold text-second">List Pacar Zenith</h1>
            {setGambar}
        </div>
        </>
    )
}