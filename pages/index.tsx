import React from 'react'
import DefaultLayout from 'layouts/Default'
import Home from 'components/Home'

const HomePage = () => {
  return (
    <DefaultLayout>
      <Home name="~~님" mark="*" />
    </DefaultLayout>
  )
}

export default HomePage
