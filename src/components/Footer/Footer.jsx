import React from 'react'

const Footer = () => {
  const sections = [
    {
      title: 'About',
      items: ['Contact Us','About Us', 'Careers', 'Stories', 'Corporate Info'],
    },
    {
      title: 'Group Companies',
      items: ['Amazon','Flipkart','Myntra','Meesho'],
    },
    {
      title: 'Help',
      items: ['Payments','Shipping','Cancellation & Returns','FAQ'],
    },
    {
      title: 'Consumer Policy',
      items: ['Cancellation & Returns','Terms of use','Privacy','Security','Sitemap'],
    },
  ]
  return (
    <div className='w-full bg-slate-900 text-gray-300 px-7 py-7 mt-24'>
        <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-2">
            {
              sections.map((section, index) => (
                <div key={index}>
                  <h2 className='font-bold uppercase'>{section.title}</h2>
                  <ul>
                    {
                      section.items.map((item,itemIndex) => (
                        <li key={itemIndex} className='text-gray-500 py-1 cursor-pointer hover:text-gray-400'>{item}</li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
            
            {/* <div className='grid grid-cols-1 md:grid-cols-2 col-span-2'> */}
              {/* <div>
                <h2>Mail Us:</h2>

              </div> */}
              <div>
                <h2 className='font-bold uppercase'>Registered Office</h2>
                  <p className='text-gray-500'>
                    Telus International 
                    Sector-135, Noida, Uttar Pradesh, India
                  </p>
                  <p className='text-gray-500'>
                    Phone: (011) - 2xxxxxxxxx
                  </p>
              </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Footer