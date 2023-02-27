export const bookings = [
    {
      name: " niranjan",
      eventStartTime: "11:15",
      eventEndTime: "13:45",
    },
    {
      name: "akshay",
      eventStartTime: "15:15",
      eventEndTime: "16:15",
    },
    {
      name: "piyush",
      eventStartTime: "09:15",
      eventEndTime: "10:00",
    },
    {
      name: "ujjaval",
      eventStartTime: "10:15",
      eventEndTime: "10:30",
    },
  ];
  
  export const convertTimeToDecimal = (time) => {
    return time.replace(":", ".");
  };