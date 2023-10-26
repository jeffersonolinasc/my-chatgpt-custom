"use client"
import IconAddOutline from '@/icons/IconAddOutline'
import IconArrowUpShort from '@/icons/IconArrowUpShort'
import IconSearch from '@/icons/IconSearch'
import IconSettingsOutline from '@/icons/IconSettingsOutline'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [search, setSearch] = useState<string>('');

  const [textArea, setTextArea] = useState<string>('');
  return (
    <main className="flex h-screen justify-center items-center border border-red-500">
      <div className="container-app rounded-3xl flex w-[1440px] h-[800px]">
        <div className="sidebar p-5 bg-slate-50/80 w-96 rounded-s-3xl  border flex flex-col">
          <div className="topo flex">
            <div className="icons flex items-center">
              <span className=' bg-red-700 rounded-full h-2 w-2 p-2'></span>
              <span className=' bg-yellow-300 rounded-full h-2 w-2 p-2 ml-2'></span>
              <span className=' bg-green-500 rounded-full h-2 w-2 p-2 ml-2'></span>
            </div>
            <div className="title ml-4 font-bold">JChat GPT</div>
          </div>

          <div className='flex my-5 items-center justify-between'>
            <h1 className='font-extrabold text-2xl '>Chats</h1>

            <div className='h-10 w-10 bg-slate-50 border border-gray-500/30  rounded-full flex justify-center items-center'>
              <IconSettingsOutline width={22} height={22} />
            </div>
          </div>


          {/* SEARCH */}

          <div className='flex items-center bg-slate-50 border p-2 mb-6 rounded-3xl border-gray-50/10'>
            <div>
              <IconSearch width={24} height={24} className={`${!search.length ? 'opacity-20' : 'opacity-100'} pl-1`} />
            </div>
            <div className='w-full flex-1 bg-black'>
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='outline-none w-full px-4 bg-slate-50' />
            </div>
          </div>


          <div className='flex items-center bg-black p-4 rounded-3xl text-white cursor-pointer hover:opacity-75'>
            <div className='rounded-full h-5 w-5 flex items-center justify-center border border-white'>
              <IconAddOutline width={24} height={24} />
            </div>
            <div className='font-medium pl-4'>
              New Chat
            </div>
          </div>
        </div>


        <div className="container-conversation rounded-e-3xl bg-slate-200  flex-1 ">
          <header className="flex h-20 p-5 bg-slate-50 border-b  border-b-gray-500/30 rounded-tr-3xl">
            aqui o header do meu sidebar
          </header>

          <div className='h-[80%]  overflow-y-auto '>


            <div className="messages p-5">
              <div className='flex w-full justify-center'>
                <span className='px-2 py-1 text-xs bg-gray-400 text-gray-100 rounded-3xl'>Today</span>
              </div>
            </div>



            <div className='flex p-7'>
              <div className='flex self-end mx-5 h-12 w-12 rounded-3xl'><img className='rounded-xl' src="perfil.jpeg" alt="" /></div>
              <div className='bg-white/80 h-32 w-96 rounded-3xl rounded-bl-none flex items-center justify-center p-5'>
                <div>ola {textArea}</div>
              </div>
            </div>

            <div className='flex p-7 flex-row-reverse'>
              <div className='flex self-end mx-5 h-12 w-12 rounded-3xl'><img className='rounded-xl' src="perfil.jpeg" alt="" /></div>
              <div className='bg-white/80 h-32 w-60 rounded-3xl rounded-bl-none flex items-center justify-center p-5'>
                <div>Ola isso é um teste</div>
              </div>
            </div>

            <div className='flex p-7'>
              <div className='flex self-end mx-5 h-12 w-12 rounded-3xl'><img className='rounded-xl' src="perfil.jpeg" alt="" /></div>
              <div className='bg-white/80 h-32 w-96 rounded-3xl rounded-bl-none flex items-center justify-center p-5'>
                <div>Ola isso é um teste</div>
              </div>
            </div>


          </div>


          <div className='flex self-end bg-slate-50 rounded-3xl items-center  mx-10 p-2'>
            <div className='px-5 flex flex-1 text-center'>
              <textarea name="message" value={textArea} onChange={(e) => setTextArea(e.target.value)} className='outline-none w-full pt-1 h-8 text-gray-600 bg-transparent' id="message" placeholder='Message'></textarea>
            </div>
            <div className={`h-8 flex cursor-pointer items-center justify-center w-8 bg-green-500 rounded-full ${!textArea.length ? 'opacity-20' : 'opacity-100'}`}>
              <IconArrowUpShort width={24} height={24} className={`text-slate-50 font-bold'}`} />
            </div>
          </div>




        </div>
      </div>


    </main>
  )
}
