import { A1, C3, C4, sdg8, sdg9, arrow, corevalues } from '../../assets'
import Certificate from './Certificate'
const Aboutus = () => {
    const coreValue = ["STRIVING TOWARD PERFECTING AND INNOVATING OUR PRODUCTS AND SERVICES", " ARE WORKING WITH HONESTY, TRUST, TRANSPARENCY AND ETHICS", "HAVE CUSTOMER SATISFACTION AND CUSTOMER SERVICE AS OUT TOP MOST PRIORITY", " ARE IN A CONSTANT PURSUIT OF GROWTH WITHOUT COMPROMISING ON QUALITY, VALUES AND ETHICS", "VALUE OUR TEAM SPIRIT AND ARE WORKING TOWARDS MAKING THE WORK ENVIORNMENT RISK-FREE"]

    const sdgGoals = [{ h1: "SDG8: Decent Work and Economic Growth", content: `Our innovative industrial lifts are pivotal in driving economic growth and promoting decent work across various industries. By enhancing productivity and operational efficiency, we empower businesses to achieve greater profitability while ensuring the highest safety standards, creating secure and reliable work environments. Our solutions support job creation and skill development, fostering opportunities for workers to advance their careers. Committed to sustainable industrial practices, we prioritize eco-friendly materials and energy-efficient processes, ensuring that our economic contributions are environmentally responsible. Through our versatile and cutting-edge lifting solutions, we help build a resilient economy that benefits businesses and workers alike.`, img: sdg8 }, { h1: "Industry, Innovation, and Infrastructure", content: `Our industrial lifts are at the forefront of SDG 9: Industry, Innovation, and Infrastructure, driving progress through cutting-edge technology and robust solutions. By enhancing industrial capabilities and streamlining operations, we support the development of resilient infrastructure essential for sustainable growth. Our commitment to innovation ensures that our products are not only efficient and reliable but also environmentally sustainable, minimizing the ecological footprint of industrial activities. Through our advanced lifting solutions, we empower industries to innovate, improve productivity, and build infrastructure that meets the demands of the future, fostering inclusive and sustainable industrialization for all.`, img: sdg9 }]

    return (
        <>
            <div className='bg-[#F6F9FC] flex flex-col md:flex-row py-10 px-5 sm:px-14 md:px-10 justify-between items-center md:items-center  '>
                <div className='flex flex-col'>
                    <h1 className='text-[#26256B] text-4xl font-semibold mb-6'>About Us</h1>
                    <p>“ Elev8 brand comes alive by its brilliant team of Design Engineers, Mechanics, Quality Control Personnel, Service Engineers, Sales Executives and many more! We pride ourselves on manufacturing premium quality Mobile Elevated Work Platforms (MEWPs) in INDIA. Our group has a rich history and extensive experience in the manufacturing industry. We are a family owned business and have been working in the manufacturing industry for the last 60 years. ”</p>
                </div>
                <img src={A1} alt='about1img' className='w-[550px] sm:w-[450px] md:w-[350px] lg:w-[500px] mt-5  md:mt-0 md:ms-6 rounded-md' />
            </div>
            <div className='bg-white flex justify-center  py-10 sm:px-14  md:px-10 px-5 flex-col'>
                <div className='flex justify-between flex-col md:flex-row items-center'>
                    <img src={C3} alt='about1img' className='w-[550px] sm:w-[450px] md:w-[350px] lg:w-[500px] rounded-md order-2 md:order-1 my-6 md:mt-16' />
                    <div className='flex flex-col order-1 md:order-2 md:ms-10'>
                        <h1 className='text-[#26256B] text-4xl font-semibold mb-6'>Our Mission</h1>
                        <p> “ We believe not in just growing bigger, but more importantly in growing better. And growing better means aligning the success of your own business with the success of your customers. Working with this philosophy we strive to provide leading solutions to our customers that will help them grow their business <i> quickly, efficiently and most importantly safely. </i>”</p>
                    </div>
                </div>
                <div className='flex justify-between flex-col md:flex-row items-center '>
                    <div className='flex flex-col my-10 md:me-7'>
                        <h1 className='text-[#26256B] text-4xl font-semibold mb-6'>Our Story</h1>
                        <p>“ We are a family-run business based in Rajkot, Gujarat (India); Part of a group that has been working in the Engineering industry for the last 60 years. We pride ourselves in taking up challenging engineering projects that involve critical and precision manufacturing techniques yet delivering world-class quality to our customers.</p>

                        <p className='mt-6'>Given the long and rich history of our group in the engineering industry we have gathered a vast and deep knowledge of most of the manufacturing techniques on the planet. Over the years we have developed 250+ vendors with various technical capabilities. Given our exposure to the industry we have also attracted many qualified personnel to be a part of our core technical team. ”
                        </p>
                    </div>
                    <img src={C4} alt='about1img' className='w-[550px] sm:w-[450px] md:w-[350px] lg:w-[500px] rounded-md' />
                </div>
            </div>
            <Certificate />

            <h1 className='text-4xl text-center mt-6 font-semibold text-[#26256B]'>Core Values & Philosophy</h1>
            <div className='flex justify-center items-center flex-col x:flex-row xl:flex-row  px-4 md:px-16 py-10'>
                <img src={corevalues} alt='innovation' className='w-[500px]  md:mr-10' />
                <div className='flex flex-col justify-center '>
                    {coreValue.map((ele, idx) => {
                        return <p key={idx} className='text-lg flex py-6 md:ms-16 sm:text-center md:text-left items-start gap-4'><img src={arrow} alt='rightarrow' className='w-5 h-5 text-nowrap mt-1' />{ele}</p>
                    })}
                </div>
            </div>
            <h1 className='text-center text-[#26256B] text-4xl bg-[#F6F9FC]  font-semibold pt-7'>Sdg Goals Follow By Us</h1>
            {sdgGoals.map((ele, idx) => (
                <div className='flex flex-col py-10  md:px-10 lg:px-16 px-8 bg-[#F6F9FC] pb-8'>


                    <h1 className='sm:text-left text-center md:text-center sm:px-6 text-xl sm:text-2xl text-[#686788] text-nowrap'>{ele.h1}</h1>
                    <div className='flex md:flex-col-reverse lg:flex-row sm:flex-col-reverse  justify-center items-center py-8 '>
                        <p className='text-wrap leading-9 ms-8 sm:ms-0 '>{ele.content}</p>
                        <img src={ele.img} alt='sdg8' className='w-[550px] sm:w-[380px] md:w-[480px]  my-4  md:mt-0 md:ms-5 rounded-md' />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Aboutus
