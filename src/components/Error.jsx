import React from 'react'

const Error = () => {

  return (
    <main className="hero-main flex--c">
        <h2 className='heading-main'><span className="color">404 Error</span></h2>
        <article className='text-box'>
            <p className="main-paragraph center">
                The page you're looking for might have been removed to a new <span className="color">URL</span> or does not exist any Longer. Check the url and try again.
            </p>
        </article>
    </main>
  )
}

export default Error