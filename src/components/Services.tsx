export default function Services() {
    return (
        <div className="bg-base-100 my-20 lg:px-20 w-full flex flex-col justify-between">
            <div className="flex flex-col space-y-3 mb-10 lg:p-0 p-5">
                <h1 className="text-5xl font-bold leading-normal text-base-content max-w-2xl">Here are some of the things I can do for you!</h1>
                <p className="text-lg text-base-content max-w-4xl">I love taking on new challenges, so if you have an idea for something different let me know! I&apos;m always looking for new ways to learn and grow.</p>
            </div>
            <div className="flex lg:flex-row flex-col lg:space-x-16 space-y-20 my-5 lg:p-0 p-5">
                <div className="card w-full lg:w-1/3 shadow-2xl shadow-secondary">
                    <div className="card-body">
                        <h2 className="card-title text-secondary">
                            Development
                        </h2>
                        <p>
                            I can build you anything from scratch, or help you with an existing software. I have experience with Frontend Development, Python, and plenty of other languages and technologies.
                        </p>
                    </div>
                </div>
                <div className="card w-full lg:w-1/3 shadow-2xl shadow-secondary">
                    <div className="card-body">
                        <h2 className="card-title text-secondary">
                            Consulting
                        </h2>
                        <p>
                            I can provide some guidance and help steer things, whether it&apos;s a website, app, SEO, or something else. I&apos;ve been working with technology for over 10 years, and I&apos;m always learning new things.
                        </p>
                    </div>
                </div>
                <div className="card w-full lg:w-1/3 shadow-2xl shadow-secondary">
                    <div className="card-body">
                        <h2 className="card-title text-secondary">
                            Non-Profits
                        </h2>
                        <p>
                            I&apos;m always looking for ways to give back to the community. If you&apos;re a non-profit organization, I&apos;d love to help you out for free.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
