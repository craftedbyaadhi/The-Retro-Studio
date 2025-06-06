import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-white">
            <div className="flex items-center justify-center w-[700px] min-h-screen">
                <div className="flex flex-col items-start justify-center w-full h-auto text-wrap gap-5 sm:gap-7 p-8 sm:p-25">
                    <h2 className="font-montreal text-black text-[16px] sm:text-[18px]">
                        {`The Rétro Studio`}
                    </h2>
                    <h2 className="font-montreal text-black text-[16px] sm:text-[18px]">
                        A house of artistry, engineering, and timeless
                        expression — Retro® crafts elegant digital experiences
                        where form and function move as one.
                    </h2>
                    <h2 className="font-montreal text-black text-[16px] sm:text-[18px]">
                        We weave brand identity, living narratives, immersive
                        interfaces, purposeful motion, and intelligent systems
                        all crafted with intention and soul. Each detail is
                        designed to resonate deeply, creating digital
                        experiences that don’t just function, but echo, endure,
                        and leave a lasting imprint.
                    </h2>
                    <div>
                        <h2 className="font-montreal text-black text-[16px] sm:text-[18px] gap-1">
                            {`This realm is still unfolding — pixel by pixel, spell by spell. Each line hums with quiet intention, alive with unseen magic. Beneath the surface, something stirs — ancient, deliberate. And whether by fate or design, the key will find its way to you`}{' '}
                            <Link
                                href="/"
                                className="bg-gradient-to-b from-[#FFD700] to-[#fc8712] bg-clip-text text-transparent underline"
                                aria-label="Discover the key"
                            >
                                soon.
                            </Link>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
