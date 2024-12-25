import React from 'react'
import PanditBanner from '../components/BookaPandit/PanditBanner'
import PanditInfo from '../components/BookaPandit/PanditInfo'
import UpcomingEvents from '../components/BookaPandit/UpcomingEvents'
import PanditsStats from '../components/BookaPandit/PanditsStats'
import Testimonials from '../components/BookaPandit/Testimonials'

const BookPandit = () => {
  return (
    <div>
      <PanditBanner/>
      <PanditInfo/>
      <UpcomingEvents/>
      <PanditsStats/>
      <Testimonials/>
    </div>
  )
}

export default BookPandit