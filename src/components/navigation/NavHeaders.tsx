
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { Fragment, useState } from 'react';
import Amikoo1 from '/boomslag-black.png'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader'
import PacmanLoader from 'react-spinners/PacmanLoader';
const navigation = [
    { id: 'VideoSection', title: 'Cases', to: '/', current: true },
    { id: 'CellAmiko', title: 'Services', to: '/', current: false },
    { id: 'QuestionAmiko', title: 'About Us', to: '/', current: false },
    { id: 'ListaBeneficios', title: 'Careers', to: '/', current: false },
    { id: 'Price', title: 'Blog', current: false },
    { id: 'Presentecion', title: 'Contact', to: '/', current: false },

]
function classNames(...classes: (string | boolean)[]): string {
    return classes.filter(Boolean).join(' ')
}
function NavHeaders() {
    const [loading, setLoading] = useState<any>(true)
    // const $header = document.querySelector('#Navheader') as HTMLElement
    // const  colorHeader={
    //   root:null,
    //   rootMargin:'0px',
    //   threshold:0.90

    // }

    // const  color = new IntersectionObserver(entries=>{
    //   entries.forEach(entry=>{
    //    const {isIntersecting}=entry
    //   if(isIntersecting){
    //      const color1=entry.target.getAttribute('data-header-color')
    //      $header.style.color = color1
    //   }

    //   })
    // })
    return (

        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>

                    <header id='Navheader' className='py-3 px-10 flex items-center fixed top-0 w-full justify- z-40 text-white  bg-[#09171af2]   border-b-[3px] border-[#aa46d8]  '>

                        <div className='flex flex-grow basis-0'>

                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <img className='h-11 w-28 flex flex-col object-cover rounded-full' src='https://img.freepik.com/vector-gratis/diseno-logotipo-centro-dibujado-mano_23-2149857667.jpg?w=740&t=st=1715229946~exp=1715230546~hmac=00a2e0e74ce5e4e3a96a482db83f158fef9bf83b1344a323679697c60b44a14d' />
                        </div>
                        <nav className=' hidden  sm:ml-6 sm:block'>

                            <ul className='flex  text-xl [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2   '>
                                <li>
                                    <Link to='/Cases' className="text-sm font-semibold leading-6 text-white border-b-2 border-white hover:border-[#77ff68] hover:text-[#77ff68] transition duration-300 ease-in-out">Cases</Link>
                                    <Link to='/services' className="text-sm font-semibold leading-6 text-white border-b-2 border-white hover:border-[#f161d9] hover:text-[#f161d9] transition duration-300 ease-in-out">Services </Link>
                                    <Link to='/about' className="text-sm font-semibold leading-6 text-white border-b-2 border-white hover:border-[#fff959] hover:text-[#fff959] transition duration-300 ease-in-out">About Us</Link>
                                    <Link to='/price' className="text-sm font-semibold leading-6 text-white border-b-2 border-white hover:border-[#fff959] hover:text-[#fff959] transition duration-300 ease-in-out">Price</Link>

                                     <Link to='/careers' className="text-sm font-semibold leading-6 text-white border-b-2 border-white hover:border-[#f66580] hover:text-[#f66580] transition duration-300 ease-in-out">Careers </Link>
                                    <Link to='/blog' className="text-sm font-semibold leading-6 text-white border-b-2 border-white hover:border-[#a55ee3] hover:text-[#a55ee3] transition duration-300 ease-in-out">Blog </Link>
                                    <Link to='/contac' className="text-sm font-semibold leading-6 text-white border-b-2 border-white hover:border-[#5feee7] hover:text-[#5feee7] transition duration-300 ease-in-out">Contact </Link> 

                                </li>

                            </ul>
                        </nav>

                        <nav className='flex flex-grow justify-end basis-0'>
                            <ul className='flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2' >
                                {/* <button className="p-[3px] relative">

                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">

                                        Hire US

                                    </div>


                                </button> */}

                            </ul>
                        </nav>

                    </header>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-400"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 mt-16    fixed top-0 w-full justify- z-40  bg-gray-900">

                                {navigation.map((item) => (
                                    // <Disclosure.Button
                                    //     key={item.title}
                                    //     as="a"
                                    //     href={`#${item.to}`}
                                    //     className={classNames(
                                    //         item.current ? '  text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    //         'block rounded-md px-3 py-2 text-base font-medium'
                                    //     )}
                                    //     aria-current={item.current ? 'page' : undefined}
                                    // >
                                    //     {item.title}

                                    // </Disclosure.Button>

                                    <Link to='' className={classNames(
                                        item.current ? '  text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </Disclosure.Panel>


                    </Transition>



                </>
            )}
        </Disclosure>


    )
}

const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {

})(NavHeaders)