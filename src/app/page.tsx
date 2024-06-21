'use client'

import { useState } from 'react'

export default function Home() {
  const [num, setNum] = useState(1)
  return (
    <div
      onClick={(num) => {
        setNum((num) => num + 1)
      }}
    >
      {num}
    </div>
  )
}
