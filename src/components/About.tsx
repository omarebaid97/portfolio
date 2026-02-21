import Link from 'next/link'
import Image from 'next/image'

export default function About() {
    return (
        <div className="bg-base-100 my-20 lg:px-20 w-full flex lg:flex-row flex-col-reverse lg:space-x-10 justify-between">
            <div className="flex flex-col space-y-3 max-w-lg lg:p-0 p-5">
                <h1 className="text-5xl font-bold leading-normal text-base-content">I'm Omar Ebaid. I live in Houston, where I work with technology in a ton of different ways.</h1>
                <p className="text-lg text-base-content">Welcome to my website! I'm a professional in the energy industry with a passion for efficiency and a penchant for not reinventing the wheel. My approach to most things can be summed up in one word: minimalism. I believe in finding elegant, streamlined solutions to complex problems, avoiding unnecessary clutter and complexity whenever possible. With a keen eye for the big picture and a deep understanding of user experience, I strive to automate just about anything.</p>
                <p className="text-lg text-base-content">One of my core values is efficiency. I am constantly seeking ways to optimize my workflow and automate repetitive tasks. By harnessing the power of automation, I can focus my time and energy on the identifying new pain points, allowing me to deliver high-quality results in a shorter timeframe. I firmly believe that by leveraging the right tools and technologies, we can achieve more in less time, without compromising on quality.</p>
                <p className="text-lg text-base-content">I pride myself on being outspoken, opinionated, and honest. I'm not afraid to share my ideas and challenge the status quo. I believe in fostering open and transparent communication, both with clients and colleagues, to ensure that everyone involved in a project is on the same page. I value constructive feedback and thrive in collaborative environments where ideas are exchanged freely, ultimately leading to the best possible outcome.</p>
                <p className="text-lg text-base-content"> When you work with me, you can expect a dedicated professional who is committed to delivering exceptional results. I have a proven track record of successfully bringing ideas to life and crafting seamless user experiences. Whether you're a small business owner, a startup founder, or a larger organization, I'm excited to collaborate with you on your next project. Let's create something remarkable together, powered by efficiency, simplicity, and automation.</p>
            </div>
            <div className="flex flex-col lg:p-0 p-5">
                <Image src="/portfolio-action-shot5.jpg" alt="Selfie in the Grand Canyon" width={400} height={750} className='rounded-lg object-cover object-bottom mb-5' />
                <div className="mockup-code space-y-5 shadow-2xl shadow-secondary mb-10">
                    <pre data-prefix=">"><code>My Favorites:</code></pre>
                    <pre data-prefix="$"><code>Sport: <Link href='https://www.fifa.com/en' target='_blank' className='btn btn-primary btn-sm'>Soccer</Link></code></pre>
                    <pre data-prefix="$"><code>Team: <Link href='https://www.realmadrid.com/en-US' target='_blank' className='btn btn-primary btn-sm'>Real Madrid</Link></code></pre>
                    <pre data-prefix="$"><code>Player: <Link href='https://en.wikipedia.org/wiki/Mohamed_Salah' target='_blank' className='btn btn-primary btn-sm'>Mohammad Salah</Link></code></pre>
                    <pre data-prefix="$"><code>Movie: <Link href='https://en.wikipedia.org/wiki/Gladiator_(2000_film)' target='_blank' className='btn btn-primary btn-sm'>Gladiator</Link></code></pre>
                    <pre data-prefix="$"><code>Song: <Link href='https://www.youtube.com/watch%3Fv%3DctqUKKvKQVQ&ved=2ahUKEwiEmtDGxeOSAxXmkWoFHdP-KxUQtwJ6BAgjEBE&usg=AOvVaw1c5_4YhOMQcBFHapPQ31Sq' target='_blank' className='btn btn-primary btn-sm'>Habibty (Hassan Shakosh)</Link></code></pre>
                    <pre data-prefix="$"><code>Video Game: <Link href='https://www.ubisoft.com/en-us/game/assassins-creed' target='_blank' className='btn btn-primary btn-sm'>Assassin's Creed</Link></code></pre>
                </div>
            </div>
        </div>
    )
}
