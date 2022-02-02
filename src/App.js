
import './App.css';

function App() {

  const data=[{ "title":"Free",
                "price":"0",
                "per":"month",
                "availablrFacilities":["Single User","5GB Storage" ,"Unlimited Public Projects", "Community Access"],
                "unavailablrFacilities":["Unlimited Private Projects" , "Dedicated Phone Support" , "Free Subdomain" ,"Monthly Status Reports"],
              },
              { "title":"plus",
                "price":"9",
                "per":"month",
                "availablrFacilities":[<b>5 Users</b>,"50GB Storage" ,"Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain"],
                "unavailablrFacilities":["Monthly Status Reports"],
              },
              { "title":"pro",
                "price":"49",
                "per":"month",
                "availablrFacilities":[<b>Unlimited Users</b>,"150GB Storage" ,"Unlimited Public Projects", "Community Access","Unlimited Private Projects", "Dedicated Phone Support","Unlimited Free Subdomains"
                ,"Monthly Status Reports"],
                "unavailablrFacilities":[],
              }]; 

  return (
    <div className="App">
     
    <div className='cards-container'>
      {data.map(({title,price,per,availablrFacilities,unavailablrFacilities})=><Card  title={title} 
                                        price={price} 
                                        per={per} 
                                        availablrFacilities={availablrFacilities}
                                        unavailablrFacilities={unavailablrFacilities}
                                        />)}
    </div>
    

    </div>
  );
}


function Card({title, price ,per, availablrFacilities,unavailablrFacilities})
{
  console.log(title,price)
  return(

    <div className='card'>
      <div className='card-header'>
          <div className='card-title'>{title}</div>
          <div className='card-price'><h1>${price}</h1><p>/{per}</p></div>
      </div>
      <hr/>
      <div className='card-body'>
          <ul>
            { availablrFacilities.map((data,ind)=>  <li className='availble'  key={"li"+ind}>{data}</li> )}
            { unavailablrFacilities.map((data,ind)=><li className='not-availble'  key={"uli"+ind}>{data}</li> )}
          </ul>
      <div className='btn-container'>
          <button className='btn'>BUTTON</button>
      </div>      
      </div>
    </div>

  );
}

export default App;
