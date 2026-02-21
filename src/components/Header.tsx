'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { themeChange } from 'theme-change'

export default function Header() {
    const [darkMode, setDarkMode] = useState(true)
    const pathname = usePathname();

    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <div className="navbar max-w-6xl z-10 px-5 md:mt-5 flex-col space-y-10 md:space-x-5 md:space-y-0 md:flex-row">
            <div className="lg:navbar-start w-full justify-center">
                {pathname === '/' ?
                    <Link href="/" className="btn normal-case text-xl bg-base-200 border-0 rounded-lg">
                        Omar Ebaid
                    </Link>
                    :
                    <Link href="/" className="normal-case text-xl">
                        <div className="avatar online">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <Image src="/portrait.jpg" alt="portrait of Omar Ebaid" width={50} height={50} className='rounded-lg object-cover object-bottom' />
                            </div>
                        </div>
                    </Link>
                }
            </div>
            <div className="navbar-center rounded-lg text-base-content bg-base-200 shadow-lg shadow-secondary">
                <ul className="flex space-x-5 p-2">
                    <li className='btn btn-sm font-normal capitalize'><Link href="/about">About</Link></li>
                    {/* <li className='btn btn-sm font-normal capitalize'><Link href="/projects">Projects</Link></li> */}
                    <li className='btn btn-sm font-normal capitalize'><Link href="/services">Services</Link></li>
                </ul>
            </div>
            <div className="lg:navbar-end space-x-5 justify-between w-full">
                <button className="btn btn-primary rounded-md"><Link href="/#contact">Contact Me</Link></button>
                <button className="btn rounded-lg bg-base-200" data-toggle-theme="dark,light" onClick={() => setDarkMode(!darkMode)}>
                    <div className="indicator">
                        {darkMode ?
                            <SunIcon className="w-5 h-5 text-base-content" />
                            :
                            <MoonIcon className="w-5 h-5 text-base-content" />
                        }
                    </div>
                </button>
            </div>
        </div>
    )
}
