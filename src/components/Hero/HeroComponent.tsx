"use client"

import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HeroComponent = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-2xl sm:text-3xl md:text-5xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-orange-700">Hello, I'm</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Arash",
                                1000,
                                "Software Engineer",
                                1000
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#dfdfdf] text-sm md:text-2xl mb-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit nemo repellat. Consequatur laboriosam facilis, doloribus adipisci numquam quis fuga eligendi harum, ipsum architecto expedita! Minus tenetur accusamus nemo voluptatum!
                    </p>
                    <button className="px-6 py-3 rounded-full w-full sm:w-fit bg-gradient-to-br from-red-900 via-red-700 to-orange-700 text-white hover:bg-slate-200 mr-4">Email Me</button>
                    <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-red-900 via-red-700 to-orange-700 text-white hover:bg-slate-800 mt-4">
                        <span className="block bg-[#171717] rounded-full hover:bg-slate-900 px-5 py-2">
                            Get My CV
                        </span>
                    </button>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="relative rounded-full bg-[#212121] w-[250px] h-[250px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]">
                        <Image
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            src="/images/hero.png"
                            alt="hero"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroComponent
