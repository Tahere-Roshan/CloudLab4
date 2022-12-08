import React from 'react'





const loadScript = (src) =>
new Promise((resolve, reject) => {
  if (document.querySelector(`script[src="${src}"`)) return resolve()
  const script = document.createElement('script')
  script.src = src
  script.onload = () => resolve()
  script.onerror = (err) => reject(err)
  document.body.appendChild(script)
})

const MyMapComponent = ({center, zoom, marker}) => {
  const ref = React.useRef(null);
  const src=  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDWSKmcK3Zd9EtETI2Cdc5JfHFRzH5AfCI&callback=initMap"></script>
  
  loadScript(src)
    .then(() => {
      /*global google*/
      // console.log("Load script google: ", google)
    })
    .catch(console.error)
    React.useEffect(() => {
      const map = new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
        new google.maps.Marker({
          position: {  
             lat: -15.770,
             lng: -44.233
          },
          map,
          icon: "https://yourlovedIcon.png",            })
    });

  return <div ref={ref} id="map" style={{height: '100vh', width: '50vh'}}/>;
}



export default function Map(){

    const center = { 
        lat: -15.770,
        lng: -44.233 };
      const zoom = 10
       
      return (
              <MyMapComponent 
              center={center}
              zoom={zoom}
              marker={center}
              />
    )

 
}