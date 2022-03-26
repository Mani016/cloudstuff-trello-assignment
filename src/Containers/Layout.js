import React from 'react'
import Content from './Content'
import Header from './Header';
import SubHeader from './SubHeader';

const TheLayout = () => {

  return (
    <div >
      <div>
        <Header/>
        <SubHeader/>
        <div>
          <Content/>
        </div>
      </div>
    </div>
  )
}

export default TheLayout
