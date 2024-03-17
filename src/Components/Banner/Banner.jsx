import './Banner.css'
const Banner = () => {
    return (
        <div style={{backgroundImage: "url('https://i.postimg.cc/2S98bRJQ/ikhsan-baihaqi-4-QXE7-YQy7eo-unsplash.jpg')"}} className="banner-container text-white p-10 h-[400px] lg:h-[650px] flex items-center justify-center">
            <div className='space-y-3'>
            <h1 className="text-[21px] lg:text-5xl md:text-4xl font-bold text-center">Discover an exceptional cooking <br />
                class tailored for you!
            </h1>
            <p className='text-center text-sm md:text-[15px] lg:text-lg text-gray-100'>Indulge in an exclusive culinary adventure with our personalized cooking class, <br /> meticulously crafted to cater to your unique tastes and preferences. Join us today!</p>
            <div className='flex flex-col md:flex-row justify-center gap-5'>
                <button className='hover:bg-green-500 bg-[#0BE58A] text-black p-3 rounded-full border-2 border-[#0BE58A]'>Explore Now</button>
                <button className='hover:border-[#0BE58A] border-2 p-3 rounded-full'>Our Feedback</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;