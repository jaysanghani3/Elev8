import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Contactus = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNo: '',
        message: ''
    });
    const [isLodding, setIsLodding] = useState(false);
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        mobileNo: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Email is not valid';
        }

        if (!formData.mobileNo) {
            newErrors.mobileNo = 'Mobile No is required';
        } else if (!phoneRegex.test(formData.mobileNo)) {
            newErrors.mobileNo = 'Mobile No is not valid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    const handleSubmit = async () => {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        try {
            setIsLodding(true);
            const response = await axios.post('https://sendmail-pearl.vercel.app/send', formData);
            setIsLodding(false);
            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
            setErrors({});
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className='bg-cover flex justify-center items-center flex-col bg-slate-300'>
            <Toaster />
            <div className="md:flex justify-center items-center py-4 md:py-10 mx-3 md:w-full">
                <div className='bg-gray-800 md:h-[550px] rounded-2xl rounded-b-none md:rounded-bl-2xl md:rounded-r-none mx-5 md:mx-0 w-16' ></div>
                {isLodding ?
                    (
                        <div className='flex justify-center items-center md:w-4/12 w-[350px] rounded-2xl bg-white h-[555px] md:h-[610px]'>
                            <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
                        </div>
                    ) : (
                        <div className='md:px-10 px-5 py-8 font-semibold md:py-12 bg-white rounded-2xl md:w-4/12 w-[350px]' >
                            <h1 className='text-2xl md:text-4xl mb-7 md:mb-12 font-bold tracking-wider border-b-2'>Contact</h1>
                            <div className='h-[70px]'>
                                <input type='text' name='fullName' value={formData.fullName} onChange={handleChange} placeholder='Full Name' className={`focus:outline-none w-full border-b-2 rounded-md ps-2 ${errors.fullName ? 'border-red-500' : 'border-gray-300 '}`} />
                                {errors.fullName && <span className='text-red-500 text-xs ms-2'>{errors.fullName}</span>}
                            </div>
                            <div className='h-[70px]'>
                                <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' className={`focus:outline-none w-full border-b-2 rounded-md ps-2 ${errors.fullName ? 'border-red-500' : 'border-gray-300 '}`} />
                                {errors.email && <span className='text-red-500 text-xs ms-2'>{errors.email}</span>}
                            </div>
                            <div className='h-[70px]'>
                                <input type='tel' name='mobileNo' value={formData.mobileNo} onChange={handleChange} placeholder='Mobile No' className={`focus:outline-none w-full border-b-2 rounded-md ps-2 ${errors.fullName ? 'border-red-500' : 'border-gray-300 '}`} />
                                {errors.mobileNo && <span className='text-red-500 text-xs ms-2'>{errors.mobileNo}</span>}
                            </div>
                            <div className='h-[180px]'>
                                <textarea name='message' rows={5} value={formData.message} onChange={handleChange} placeholder='Message' className={`focus:outline-none w-full border-b-2 rounded-md ps-2 ${errors.fullName ? 'border-red-500' : 'border-gray-300 '}`}></textarea>
                                {errors.message && <span className='text-red-500 text-xs ms-2'>{errors.message}</span>}
                            </div>
                            <div className='w-full text-center'>
                                <button type='button' onClick={handleSubmit} className='bg-gray-800 text-white py-2 w-full rounded-md'>
                                    Submit Now
                                </button>
                            </div>
                        </div>
                    )}
                <div className='my-5 p-2 md:p-0 md:py-3 md:pr-3 bg-gray-800 h-[550px] rounded-2xl md:rounded-l-none md:w-5/12'>
                    <iframe
                        className="rounded-xl md:rounded-l-none"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3692.0406624100387!2d70.82756307529188!3d22.27644947970368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE2JzM1LjIiTiA3MMKwNDknNDguNSJF!5e0!3m2!1sen!2sin!4v1716717656752!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contactus
