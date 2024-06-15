import { Hubspoter, Aboutus2, Aboutus3 } from '../../assets'
import Certificate from './Certificate'
const Aboutus = () => {
    return (
        <>
            <div className='bg-[#F6F9FC] flex flex-col md:flex-row py-10 px-5 md:px-24 justify-between items-center '>
                <div className='flex flex-col'>
                    <h1 className='text-[#26256B] text-4xl font-semibold mb-6'>About US</h1>
                    <p>HubSpot’s company and culture are a lot like our product. <br/>They’re crafted, not cobbled, for a delightful experience.</p>
                </div>
                <img src={Hubspoter} alt='about1img' className='w-[550px] mt-5 md:mt-0 rounded-md' />
            </div>
            <div className='bg-white flex justify-center py-10  md:px-24 px-5 flex-col'>
                <div className='flex justify-between flex-col md:flex-row items-center'>
                    <img src={Aboutus2} alt='about1img' className='w-[500px] rounded-md order-2 md:order-1 my-6' />
                    <div className='flex flex-col order-1 md:order-2 md:ms-10'>
                        <h1 className='text-[#26256B] text-4xl font-semibold'>Our Mission</h1>
                        <p className='text-[#26256B] text-xl md:text-2xl'> Helping Millions of Organizations Grow Better</p>
                        <p>We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!</p>
                    </div>
                </div>
                <div className='flex justify-between flex-col md:flex-row items-center'>
                    <div className='flex flex-col my-10'>
                        <h1 className='text-[#26256B] text-4xl font-semibold'>Our Story</h1>
                        <p>We are a family-run business based in Rajkot, Gujarat (India). Part of a group that has been working in the Engineering industry for the last 60 years. We pride ourselves in taking up challenging engineering projects that involve critical and precision manufacturing techniques yet delivering world-class quality to our customers.<br /><br />
                            Along the way, HubSpot expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today. Expertly led by CEO Yamini Rangan, HubSpot uses its customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better.</p>
                    </div>
                    <img src={Aboutus3} alt='about1img' className='w-[500px] rounded-md' />
                </div>
            </div>
            <Certificate/>
        </>
    )
}

export default Aboutus
