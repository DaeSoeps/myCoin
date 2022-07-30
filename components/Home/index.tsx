import React from 'react'

type GreetingsProps = {
  name: string
  mark: string
}

const Home: React.FC<GreetingsProps> = ({ name, mark = '!' }) => (
  <div>
    Hello, {name} {mark}
  </div>
)

export default Home
