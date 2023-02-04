import React from 'react'
import Searchbar from './Searchbar';
export default function Home(props) {
  return (
    <div>
        <Searchbar title="Compareverything" toggleMode={props.toggleMode} mode={props.mode}/>
    </div>
  )
}
