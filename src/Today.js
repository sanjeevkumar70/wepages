import moment from "moment";
import React from "react";
import "./App.css";

const Today = () => {
  const bookings = [
    {
      name: " sanjeev",
      startTime: "11:15",
      endTime: "13:45",
    },
    {
      name: "akshay",
      startTime: "15:15",
      endTime: "16:15",
    },
    {
      name: "piyush",
      startTime: "09:15",
      endTime: "10:00",
    },
    {
      name: "ujjaval",
      startTime: "10:15",
      endTime: "10:30",
    },
  ];

  let startSlotTime = "8:45";
  const bookingSlots = [];
  const bookingSlotsIndex = [];

  [...Array(41)].map((e) =>{
    startSlotTime = moment(startSlotTime,"HH:mm").add(15,"m").format("HH:mm");
    return(
        bookingSlots.push(startSlotTime)
    );
  })

  bookings.forEach((item)=>
    bookingSlots.forEach((element,index)=>{
            if(element >= item.startTime && element < item.endTime){
                bookingSlotsIndex.push({
                 name: item.name,
                 slotIndex: index   
                })
            }
      }
    )
  )
  console.log(bookingSlotsIndex,"slot time")

  return (
    // <div>
    //     <div className="grid-container">
    //        {
    //         [...Array(10)].map((e,i)=>{
    //             return(
    //                 <>
    //                 <div className="grid-item">{9+i}:00</div>
    //                      <div className="grid-item">
    //                         {
    //                             [...Array(4)].map((slot)=>{
    //                                 return(
    //                                     <div>1</div>
    //                                 )
    //                             })
    //                         }
    //                     </div>
    //                 </>
    //             )
    //         })
    //        }
    //     </div>
    // </div>
    <div>
      <div className="grid-container">
        <div className="grid-item-left">
          {[...Array(10)].map((e, i) => {
            return <div>{9 + i}:00</div>;
          })}
        </div>
        <div className="grid-item-right">
          {bookingSlots.map((slot,index) => {
            let name;
            let show = false;
            let count=0;
            bookingSlotsIndex.forEach((item)=>{
               
               if(item.slotIndex === index){
                    name = item.name;
                
                    count++;
                    if(count == 1){
                        show = true;
                    }
               }
            })
            return(
             <div style={{height:"20px"}}>
               { show && <div>{name}</div>}
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Today;
