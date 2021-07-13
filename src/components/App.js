import React, { useEffect, useState } from "react"

const App = () => {
  const [dogImage, setDogImage] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(r => r.json())
      .then(data => {
        setDogImage(data.message)
        setIsLoaded(true)
    })
  }, [])

  if (!isLoaded) return <h3>Loading ...</h3>

  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  )
}

export default App