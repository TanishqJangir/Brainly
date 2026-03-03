


const Hero = () => {
    return (
        <div className="w-full h-[calc(100vh-68px)] flex flex-col justify-center items-center gap-4 text-center dark:bg-[#131024] bg-white dark:text-white text-black px-4">
            <h1 className="text-4xl md:text-6xl font-bold">Unlock Your Learning Potential with Brainly</h1>
            <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400">Join millions of students and experts in a collaborative learning community.</p>
            <button className="bg-[#4c2dee] hover:bg-[#3a20c8] text-white font-semibold py-3 px-6 rounded-lg transition mt-4">Get Started</button>
        </div>
    )
}


export default Hero;