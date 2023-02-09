import React from 'react'
import Searchbar from './Searchbar';
import MenuBar from './MenuBar';
export default function Home(props) {
  return (
    <div>
        <Searchbar title="Compareverything" toggleMode={props.toggleMode} mode={props.mode}/>
        <MenuBar mode ={props.mode} toggleMode={props.toggleMode}/>
    </div>
  )
}
