import React, { useEffect } from 'react'

const PageTitle = ({title}) => {
    useEffect(() =>{
        document.title = title ;
    
        return () => {
          document.title = 'Juicy Mama';
        };
      },[title]);
  return (
    <></>
  )
}

export default PageTitle
