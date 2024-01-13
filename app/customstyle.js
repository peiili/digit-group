'use client'
import { useEffect } from 'react'
var useComputeSize = function () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
      if(window.customStyle){
        window.customStyle.remove()
      }
      var viewWidth = window.innerWidth;
      var viewHeight = window.innerHeight;

      document.documentElement.style.fontSize = viewWidth / 41.4 + 'px'
      window.rem = viewWidth / 41.4

      window.customStyle = document.createElement('style')
      window.customStyle.type = 'text/css'
      window.customStyle.innerHTML = `:root{--dynamics-height:${viewHeight/896}}`
      window.dynamicsHeight = viewHeight/896
      document.head.prepend(window.customStyle)
      
    },[])
    return (<></>)
}

export default useComputeSize;