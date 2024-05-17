'use client'

import Link from "next/link"
import {motion} from "framer-motion"

export default function Home() {
  return (
    <motion.div className="main h-[100vh] w-full flex flex-col justify-center items-center text-second"
    initial={{ y:100, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition ={{ delay: 0.5, duration: 0.5 }}
    >
      <h1 className="text-xl relative top-4">Welcome</h1>
      <h1 className="text-[72px] font-bold tracking-tight">Zenith</h1>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition ={{ delay: 1.5, duration: 0.7 }}>

        <Link href="/list" className="border-2 border-second px-5 py-1 font-semibold relative top-[-10px] hover:bg-second hover:text-primary transition-all">List Pacar Zenith</Link>

      </motion.div>
    </motion.div>
  );
}
