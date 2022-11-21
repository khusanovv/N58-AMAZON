import c from './Sidebar.module.css';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {

  const sidebaropen = useRef();
  const [sidebarLimit, setSidebarLimit] = useState(4);
  const [selectedSidebarItem, setSelectedSidebarItem] = useState(null);
  const sidebarData = [
    {
      sidebarmaintitle: "Amazon music",
      subitems: [
        "Amazon music unlimited",
        "Podcasts"
      ]
    },
    {
      sidebarmaintitle: "Amazon music 1",
      subitems: [
        "Amazon music unlimited",
        "Podcasts"
      ]
    },
    {
      sidebarmaintitle: "Amazon music 2",
      subitems: [
        "Amazon music unlimited",
        "Podcasts"
      ]
    },
    {
      sidebarmaintitle: "Amazon music 3",
      subitems: [
        "Amazon music unlimited 3",
        "Podcasts 3"
      ]
    },
    {
      sidebarmaintitle: "Amazon music 4",
      subitems: [
        "Amazon music unlimited 4",
        "Podcasts 4"
      ]
    },
    {
      sidebarmaintitle: "Amazon music 4",
      subitems: [
        "Amazon music unlimited 4",
        "Podcasts 4"
      ]
    },
    {
      sidebarmaintitle: "Amazon music 4",
      subitems: [
        "Amazon music unlimited 4",
        "Podcasts 4"
      ]
    },
    {
      sidebarmaintitle: "Amazon music 4",
      subitems: [
        "Amazon music unlimited 4",
        "Podcasts 4"
      ]
    },
    {
      sidebarmaintitle: "Amazon music 4",
      subitems: [
        "Amazon music unlimited 4",
        "Podcasts 4"
      ]
    },
    {
      sidebarmaintitle: "Amazon music 4",
      subitems: [
        "Amazon music unlimited 4",
        "Podcasts 4"
      ]
    }
  ]

  useEffect(() => {
    if(selectedSidebarItem){
      sidebaropen.current.scrollLeft = sidebaropen.current.offsetWidth
    }
    else{
      sidebaropen.current.scrollLeft = 0
    }
  }, [selectedSidebarItem])

  return (
    <div ref={sidebaropen} className={isSidebarOpen === true ? `${c.sidebar} ${c.active}` : `${c.sidebar}`}>
        <FiX className={c.close} onClick={() => {setIsSidebarOpen(false)}}/>
        <div className={c.sidebarWrapper} >
          {
            sidebarData.slice(0, sidebarLimit).map(sidebarEl =>
              <div key={uuidv4()} className={c.sidebarItem} onClick={() => {setSelectedSidebarItem(sidebarEl)}}>
                <p>{sidebarEl.sidebarmaintitle}</p>
                <p>{JSON.stringify(sidebarEl)}</p>
              </div>  
            )
          }
          <div className={c.sidebarItem} onClick={() => {sidebarLimit <= 4 ? setSidebarLimit(sidebarData.length) : setSidebarLimit(4)}}>
             <p>{sidebarLimit === 4 ? "See more" : "See less" }</p>
          </div>
        </div>
        <div  className={c.sidebarOpen}>
          <h1>enfjk</h1>
          <h1>enfjk</h1>
          <FiArrowLeft onClick={() => {setSelectedSidebarItem(null)}}/>
          <div>
            <h2>{selectedSidebarItem?.sidebarmaintitle}</h2>
            {
              selectedSidebarItem?.subitems.map(i =>
                <p key={uuidv4()}>{i}</p>  
              )
            }
          </div>
        </div>
    </div>
  )
}

export default Sidebar