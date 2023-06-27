import Image from 'next/image'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/solid'

export default function Work() {
    return (
        <div className="stats stats-vertical w-1/3 m-10 p-5 rounded-2xl border border-accent shadow-2xl shadow-secondary">
            <div className="flex mr-5 space-x-5 mb-5">
                <BriefcaseIcon className="w-8 h-8 text-accent ml-5" />
                <h2 className="text-3xl font-bold text-accent">Work</h2>
            </div>

            <div className="stat">
                <div className="stat-figure bg-base-300 h-20 items-center flex p-5 rounded-lg">
                    <Image src="/unlock-logo.png" alt="Logo for Unlock Health" width={100} height={100} />
                </div>
                <div className="stat-value text-2xl">Unlock Health</div>
                <div className="stat-desc">Frontend Developer</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
                <div className="stat-figure bg-base-300 h-20 items-center flex p-5 rounded-lg">
                    <Image src="/fuzati-logo.svg" alt="Logo for Fuzati" width={100} height={100} />
                </div>
                <div className="stat-value text-2xl">Fuzati</div>
                <div className="stat-desc">Junior Developer</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
                <div className="stat-figure bg-base-300 h-20 items-center flex pt-5 px-5 rounded-lg">
                    <Image src="/bellagreen-logo.svg" alt="Logo for Bellagreen" width={100} height={100} />
                </div>
                <div className="stat-value text-2xl">Bellagreen</div>
                <div className="stat-desc">Assistant Manager</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <button className="btn btn-accent max-w-sm flex text-base-100">Download Resume <ArrowDownOnSquareIcon className='fill-base-100 font-bold h-5 w-5 mb-2' /></button>
        </div>
    )
}