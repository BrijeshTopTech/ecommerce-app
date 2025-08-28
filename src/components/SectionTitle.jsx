import React from 'react'

const SectionTitle = (props) => {
  return (
    <>
        <h2 className="products-section-heading mb-6 text-3xl text-black-900 text-center">
            <hr/>
                {props.title}
            <hr/>
        </h2>
    </>
  )
}

export default SectionTitle