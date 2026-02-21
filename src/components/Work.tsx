import Image from 'next/image'
import Link from 'next/link'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/solid'

export default function Work() {
    return (
        <div className="stats stats-vertical lg:w-1/3 w-11/12 mx-auto my-10 p-5 rounded-2xl border border-accent shadow-2xl shadow-secondary">
            <div className="flex mr-5 space-x-5 mb-5">
                <BriefcaseIcon className="w-8 h-8 text-accent ml-5" />
                <h2 className="text-3xl font-bold text-accent">Work</h2>
            </div>
            <div className="stat">
                <div className="stat-figure bg-base-300 h-20 items-center flex p-5 rounded-lg">
                    <Image src="/veritas-logo.png" alt="Logo for Veritas" width={100} height={100} />
                </div>
                <div className="stat-value text-2xl">Veritas</div>
                <div className="stat-desc">CTRM Consultant</div>
                <div className="stat-desc">Nov 2023 - Present</div>
            </div>
            <div className="stat">
                <div className="stat-figure bg-base-300 h-20 items-center flex p-5 rounded-lg">
                    <Image src="/unlock-logo.png" alt="Logo for Unlock Health" width={100} height={100} />
                </div>
                <div className="stat-value text-2xl">Unlock Health</div>
                <div className="stat-desc">Software Engineer</div>
                <div className="stat-desc">Feb 2022 - Nov 2023</div>
            </div>
            <div className="stat">
                <div className="stat-figure bg-base-300 h-20 items-center flex p-5 rounded-lg">
                    <Image src="/fuzati-logo.svg" alt="Logo for Fuzati" width={100} height={100} />
                </div>
                <div className="stat-value text-2xl">Fuzati</div>
                <div className="stat-desc">Frontend Developer</div>
                <div className="stat-desc">Feb 2019 - May 2022</div>
            </div>
            <Link href="https://github.com/oebaid97/portfolio/raw/main/public/resume.pdf" target="_blank" className="btn btn-accent max-w-sm flex text-base-100">Download Resume <ArrowDownOnSquareIcon className='fill-base-100 font-bold h-5 w-5 mb-2' /></Link>
        </div>
    )
}
