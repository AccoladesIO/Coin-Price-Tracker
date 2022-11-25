import React from 'react'

const Stats = () => {
  return (
    <main className='stats-page'>
        <div className='search-field'>
            <span className='search-heading'>
                Looking For Something ?
            </span>
            <div className="input-wrapper">
                <form>
                    <input type="text" name="coin" id="coin" />
                    <input type="submit" value="Search" className='submit'/>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Stats