import React from 'react'
import { PhotoCard } from '../PhotoCard'

import photoCards from '../../../api/db.json'

const ListOfPhotoCard = () => {
  console.log(photoCards);
  return (
    <ul>
      {photoCards.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  )
}

export { ListOfPhotoCard }
