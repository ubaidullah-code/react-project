
import React, { useState } from 'react'

import NavBar from './components/NavBar';
import Left from './components/Left';
import Right from './components/Right';
import Post from './components/Post';


function App() {
  const [data ,setdata] = useState([
      {profilePic:"https://upload.wikimedia.org/wikipedia/commons/4/44/Sony_Pictures_logo_%282%29.svg" , UserName: "Sony Picture" , postTime: "12-dec-2024" ,ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFnI_b6r89aTSQk5WZMW42d79e_wPMNdyQ20vMTiSTLXZWrC0pV0NDEur0O4F8GT7KF_u"},
      {profilePic:"https://cdn-icons-png.freepik.com/256/15047/15047435.png?ga=GA1.1.1921053424.1724733699&semt=ais_hybrid" , UserName: "UbaidUllah" , postTime: "12-dec-2024" ,ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFnI_b6r89aTSQk5WZMW42d79e_wPMNdyQ20vMTiSTLXZWrC0pV0NDEur0O4F8GT7KF_u"},
      {profilePic:"https://cdn-icons-png.freepik.com/256/15047/15047435.png?ga=GA1.1.1921053424.1724733699&semt=ais_hybrid" , UserName: "UbaidUllah" , postTime: "12-dec-2024" ,ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFnI_b6r89aTSQk5WZMW42d79e_wPMNdyQ20vMTiSTLXZWrC0pV0NDEur0O4F8GT7KF_u"},
      {profilePic:"https://cdn-icons-png.freepik.com/256/15047/15047435.png?ga=GA1.1.1921053424.1724733699&semt=ais_hybrid" , UserName: "UbaidUllah" , postTime: "12-dec-2024" ,ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFnI_b6r89aTSQk5WZMW42d79e_wPMNdyQ20vMTiSTLXZWrC0pV0NDEur0O4F8GT7KF_u"},
  ])
  return (
    <>
    <NavBar/>
    <div style={{display: "flex" , justifyContent:"space-between" , position: "relative"}}>

        <Left />   
        <div>
          {
            data?.map((ele , i) => {
              return(
                <Post key={i} data={ele} />
              )
            })
          }
    <Right/>
        </div>
    </div>
    </>
  )
}

export default App;
