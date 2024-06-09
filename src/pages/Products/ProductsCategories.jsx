import { Link } from 'react-router-dom'
import { P12, P4 } from '../../assets'

const ProductsCategories = () => {

    const categories = [
        { id: 'vtl', name: 'VTL SERIES', image: P4 },
        { id: 'scl', name: 'SCL SERIES', image: P12 },
    ];
    return (
        <div className="lg:px-10 lg:py-3 px-5 py-2">
            <h1 className='text-4xl font-bold text-[#01204E]'>Products</h1>
            <div className='flex justify-center my-10 '>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:w-3/4">
                    {
                        categories.map((category) => (
                            <Link to={`/products/${category.id}`} key={category.id} className='flex flex-col items-center border shadow-lg rounded-xl p-4 hover:bg-slate-100 justify-between'>
                                <img src={category.image} alt="products" className='rounded-lg object-cover' />
                                <h1 className="text-center font-bold text-[#01204E] text-2xl pt-4 ">{category.name}</h1>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsCategories
