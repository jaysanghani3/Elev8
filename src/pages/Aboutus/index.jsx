import { A1, C0, C4, sdg8, sdg9, corevalues } from '../../assets'
import Certificate from './Certificate'
const Aboutus = () => (
    <>
        <div className=' flex flex-col md:flex-row py-10 px-5 sm:px-14 md:px-10 justify-between items-center md:items-center  '>
            <div className='flex flex-col'>
                <h1 className='text-[#26256B] text-4xl font-semibold mb-6 tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4'>About Us</h1>
                <p>Elev8 brand comes alive by its brilliant team of Design Engineers, Mechanics, Quality Control Personnel, Service Engineers, Sales Executives and many more! We pride ourselves on manufacturing premium quality Mobile Elevated Work Platforms (MEWPs) in INDIA. Our group has a rich history and extensive experience in the manufacturing industry. We are a family owned business and have been working in the manufacturing industry for the last 60 years.</p>
            </div>
            <img src={A1} alt='about1img' className='w-full sm:w-[450px] md:w-[350px] lg:w-[500px] mt-5  md:mt-0 md:ms-6 rounded-md' />
        </div>
        <div className='flex justify-between flex-col md:flex-row items-center bg-[#F6F9FC] py-10 sm:px-14  md:px-10 px-5'>
            <img src={C0} alt='about1img' className='w-full sm:w-[450px] md:w-[350px] lg:w-[500px] rounded-md order-2 md:order-1 my-6' />
            <div className='flex flex-col order-1 md:order-2 md:ms-10'>
                <h1 className='text-[#26256B] text-4xl font-semibold mb-6 tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4'>Our Mission</h1>
                <p>We believe not in just growing bigger, but more importantly in growing better. And growing better means aligning the success of your own business with the success of your customers. Working with this philosophy we strive to provide leading solutions to our customers that will help them grow their business <i> quickly, efficiently and most importantly safely. </i></p>
            </div>
        </div>
        <div className='flex justify-between flex-col md:flex-row items-center py-10 sm:px-14  md:px-10 px-5'>
            <div className='flex flex-col my-10 md:me-7'>
                <h1 className='text-[#26256B] text-4xl font-semibold mb-6 tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4'>Our Story</h1>
                <p>We are a family-run business based in Rajkot, Gujarat (India); Part of a group that has been working in the Engineering industry for the last 60 years. We pride ourselves in taking up challenging engineering projects that involve critical and precision manufacturing techniques yet delivering world-class quality to our customers.</p>
                <p className='mt-6'>Given the long and rich history of our group in the engineering industry we have gathered a vast and deep knowledge of most of the manufacturing techniques on the planet. Over the years we have developed 250+ vendors with various technical capabilities. Given our exposure to the industry we have also attracted many qualified personnel to be a part of our core technical team.
                </p>
            </div>
            <img src={C4} alt='about1img' className='w-full sm:w-[450px] md:w-[350px] lg:w-[500px] rounded-md' />
        </div>
        <Certificate />
        <h1 className='text-3xl md:text-4xl text-center mt-6 font-semibold text-[#26256B] tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4'>Core Values & Philosophy</h1>
        <div className='flex justify-center items-center flex-col lg:flex-row px-4 md:px-10 py-10'>
            <img src={corevalues} alt='innovation' className='w-[450px]' />
            <div className='flex flex-col justify-center '>
                <ul className='list-disc ml-5'>
                    <li className='lg:my-4 py-2'>STRIVING TOWARD <b className='text-lg pe-1'>PERFECTING</b> AND <b className='text-lg pe-1'>INNOVATING</b> OUR PRODUCTS AND SERVICES</li>
                    <li className='lg:my-4 py-2'> ARE WORKING WITH <b className='text-lg pe-1'>HONESTY, TRUST, TRANSPARENCY</b> AND <b className='text-lg pe-1'>ETHICS</b></li>
                    <li className='lg:my-4 py-2'>HAVE <b className='text-lg pe-1'>CUSTOMER SATISFACTION</b> AND CUSTOMER SERVICE AS OUT TOP MOST PRIORITY</li>
                    <li className='lg:my-4 py-2'> ARE IN A CONSTANT PURSUIT OF <b className='text-lg pe-1'>GROWTH</b> WITHOUT COMPROMISING ON QUALITY, VALUES AND ETHICS</li>
                    <li className='lg:my-4 py-2'>VALUE OUR <b className='text-lg pe-1'>TEAM SPIRIT</b> AND ARE WORKING TOWARDS MAKING THE WORK ENVIORNMENT <b className='text-lg pe-1'>RISK-FREE</b></li>
                </ul>
            </div>
        </div>
        <h1 className='text-center text-[#26256B] text-3xl md:text-4xl bg-[#F6F9FC]  font-semibold pt-7 tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4'>SDG Goals Follow By Us</h1>
        <div className='flex flex-col py-10 md:px-10 lg:px-10 px-8 bg-[#F6F9FC] '>
            <h1 className='text-left md:text-center md:px-6 text-lg md:text-2xl text-[#686788] text-nowrap'>SDG 8: Decent Work and Economic Growth</h1>
            <div className='flex lg:flex-row flex-col-reverse  justify-center items-center md:pt-8 '>
                <div className='leading-9 text-justify mt-5'>
                <img src={sdg8} alt='SDG8' className='w-11/12 sm:w-3/12 rounded-md sm:float-end sm:ms-5 lg:ms-10 ' />
                    Our innovative industrial lifts are pivotal in driving economic growth and promoting decent work across various industries. By enhancing productivity and operational efficiency, we empower businesses to achieve greater profitability while ensuring the highest safety standards, creating secure and reliable work environments. Our solutions support job creation and skill development, fostering opportunities for workers to advance their careers. Committed to sustainable industrial practices, we prioritize eco-friendly materials and energy-efficient processes, ensuring that our economic contributions are environmentally responsible. Through our versatile and cutting-edge lifting solutions, we help build a resilient economy that benefits businesses and workers alike.
                </div>
            </div>
        </div>
        <h1 className='text-center text-[#26256B] text-4xl bg-[#F6F9FC] font-semibold pt-5  '>Industry, Innovation, and Infrastructure</h1>
        <div className='flex flex-col py-10 md:px-10 lg:px-10 px-8 bg-[#F6F9FC]'>
            <h1 className='text-left md:text-center md:px-6 text-lg md:text-2xl text-[#686788] text-nowrap md:pb-6'>SDG 9: Decent Work and Economic Growth</h1>
            <div className='leading-9 mt-5 text-justify'>
                <img src={sdg9} alt='SDG9' className='w-11/12 sm:w-3/12 rounded-md sm:float-start sm:me-5 lg:me-10 ' />
                Our industrial lifts are at the forefront of SDG 9: Industry, Innovation, and Infrastructure, driving progress through cutting-edge technology and robust solutions. By enhancing industrial capabilities and streamlining operations, we support the development of resilient infrastructure essential for sustainable growth. Our commitment to innovation ensures that our products are not only efficient and reliable but also environmentally sustainable, minimizing the ecological footprint of industrial activities. Through our advanced lifting solutions, we empower industries to innovate, improve productivity, and build infrastructure that meets the demands of the future, fostering inclusive and sustainable industrialization for all.
            </div>
        </div>
    </>
)

export default Aboutus
