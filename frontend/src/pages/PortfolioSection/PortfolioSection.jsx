import React from 'react'

const PortfolioSection = () => {
  return (
    <div className='flex flex-col items-center px-50 py-30 z-10'>
				<h1 className='sticky top-50 text-5xl mb-10 text-stone-800'>{portfolioContent.title}</h1>
				<div className='flex flex-col w-1/2 items-center text-left text-stone-800'>
					<p className='text-xl mb-10'>{portfolioContent.description}</p>
					<Link
						to={portfolioContent.route}
						className='bg-stone-100 text-stone-800 py-2 px-3 rounded-md hover:bg-stone-810000 hover:text-stone-50 outline hover:outline-0 duration-200'>
						{portfolioContent.linkText}
					</Link>
				</div>
			</div>
  )
}

export default PortfolioSection
