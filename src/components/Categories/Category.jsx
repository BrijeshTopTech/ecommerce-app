import './Category.css'
import { products } from "../../data.js";

export default function Category(props) {
    const groupedData = products.reduce((acc, item) => {
        const category = item.category.slug;
        if (acc[category]) {
          acc[category].push(item.category.slug);
        } else {
          acc[category] = [item.category.slug];
        }
        return acc;
    }, {});
    
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="products-section-heading mb-6 text-3xl text-black-900 text-center">
          <hr/>
          {props.title}
          <hr/>
        </h2>

        <div className="flex justify-center items-center gap-20 text-center">
          {Object.keys(groupedData).map((category) => (
            <div key={category} className='border-1 border-solid rounded-sm hover:bg-gray-200 cursor-pointer relative'>
              <a href={`/products/${category}`}>  
                <img src={category === 'mens' ? '/images/men.jpg' : '/images/women.jpg'} />
                <h2 className='absolute uppercase bottom-0 left-0 right-0 text-lg font-semibold text-white bg-gray-900/50 hover:bg-white/60 hover:text-gray-900'>{category}</h2>
                
                <ul>
                    {/*groupedData[category].map((item, index) => (
                        <a key={index} href='' className="group">
                            <img
                            alt={item.name}
                            src={item.image}
                            className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                            />
                            <h3 className="mt-4 text-lg font-semibold text-gray-700">{item.name}</h3>
                            
                        </a>
                    ))*/}
                </ul>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
