import React from 'react'
import BackgroundHeader from '../../components/BackgroundHeader/BackgroundHeader'
import ContactLanding from '../../components/ContactLanding/ContactLanding'
import ContactForm from '../../components/ContactFrom/ContactForm'
import Map from '../../components/Map/Map'

const Contact = () => {
  return (
    <>
      <BackgroundHeader title='Contact US' desc='Keep in Touch With us' />
      <ContactLanding />
      <ContactForm />
      <Map />
    </>
  )
}

export default Contact