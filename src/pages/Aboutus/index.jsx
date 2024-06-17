import { A1, C3, C4 } from '../../assets'
import Certificate from './Certificate'
const Aboutus = () => {
    return (
        <>
            <div className='bg-[#F6F9FC] flex flex-col md:flex-row py-10 px-5 md:px-24 justify-between items-center '>
                <div className='flex flex-col'>
                    <h1 className='text-[#26256B] text-4xl font-semibold mb-6'>About Us</h1>
                    <p>“ Elev8 brand comes alive by its brilliant team of Design Engineers, Mechanics, Quality Control Personnel, Service Engineers, Sales Executives and many more! We pride ourselves on manufacturing premium quality Mobile Elevated Work Platforms (MEWPs) in INDIA. Our group has a rich history and extensive experience in the manufacturing industry. We are a family owned business and have been working in the manufacturing industry for the last 60 years. ”</p>
                </div>
                <img src={A1} alt='about1img' className='w-[550px] mt-5 md:mt-0 md:ms-6 rounded-md' />
            </div>
            <div className='bg-white flex justify-center py-10  md:px-24 px-5 flex-col'>
                <div className='flex justify-between flex-col md:flex-row items-center'>
                    <img src={C3} alt='about1img' className='w-[500px] rounded-md order-2 md:order-1 my-6' />
                    <div className='flex flex-col order-1 md:order-2 md:ms-10'>
                        <h1 className='text-[#26256B] text-4xl font-semibold mb-6'>Our Mission</h1>
                        <p> “ We believe not in just growing bigger, but more importantly in growing better. And growing better means aligning the success of your own business with the success of your customers. Working with this philosophy we strive to provide leading solutions to our customers that will help them grow their business <i> quickly, efficiently and most importantly safely. </i>”</p>
                    </div>
                </div>
                <div className='flex justify-between flex-col md:flex-row items-center'>
                    <div className='flex flex-col my-10 md:me-7'>
                        <h1 className='text-[#26256B] text-4xl font-semibold mb-6'>Our Story</h1>
                        <p>“ We are a family-run business based in Rajkot, Gujarat (India); Part of a group that has been working in the Engineering industry for the last 60 years. We pride ourselves in taking up challenging engineering projects that involve critical and precision manufacturing techniques yet delivering world-class quality to our customers.</p>

                        <p className='mt-6'>Given the long and rich history of our group in the engineering industry we have gathered a vast and deep knowledge of most of the manufacturing techniques on the planet. Over the years we have developed 250+ vendors with various technical capabilities. Given our exposure to the industry we have also attracted many qualified personnel to be a part of our core technical team. ”
                        </p>
                    </div>
                    <img src={C4} alt='about1img' className='w-[500px] rounded-md' />
                </div>
            </div>
            <Certificate />
        </>
    )
}

export default Aboutus
