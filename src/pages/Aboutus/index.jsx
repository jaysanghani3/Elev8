import { Hubspoter, Aboutus2, Aboutus3 } from '../../assets'

const Aboutus = () => {
    return (
        <div>
            <div className='bg-[#F6F9FC] flex  flex-col sm:flex-row py-10 sm:py-28 px-24 sm:gap-0  justify-between items-center '>
                <div className='flex flex-col gap-5'>
                    <span className='text-[#26256B] text-[40px]'>About US</span>
                    <p>HubSpot’s company and culture are a lot like our product. They’re <br /> crafted, not cobbled, for a delightful experience.</p>
                </div>
                <img src={Hubspoter} alt='about1img' className='h-[260px] w-[460px]' />
            </div>
            <div className='bg-white flex gap-24 justify-center p-14 flex-col'>
                <div className='flex justify-between h-68 flex-col sm:flex-row sm:px-8 items-center gap-10 '>
                    <img src={Aboutus2} alt='about1img' className='h-[350px] w-[500px]' />
                    <div className='flex flex-col gap-5'>
                        <span className='text-[#26256B] text-[40px]'>Our Mission: Helping Millions of Organizations Grow Better</span>
                        <p>We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!</p>
                    </div>
                </div>
                <div className=' flex justify-between h-68 flex-col sm:flex-row  sm:px-8    items-center gap-10 '>

                    <div className='flex flex-col gap-5'>
                        <span className='text-[#26256B] text-[40px]'>Our Story</span>
                        <p>We are a family-run business based in Rajkot, Gujarat (India). Part of a group that has been working in the Engineering industry for the last 60 years. We pride ourselves in taking up challenging engineering projects that involve critical and precision manufacturing techniques yet delivering world-class quality to our customers.<br /><br />
                            Along the way, HubSpot expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today. Expertly led by CEO Yamini Rangan, HubSpot uses its customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better.</p>
                    </div>

                    <img src={Aboutus3} alt='about1img' className='h-[350px] w-[500px]' />
                </div>
            </div>
        </div>
    )
}

export default Aboutus
