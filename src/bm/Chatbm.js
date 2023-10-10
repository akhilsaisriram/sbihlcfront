import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
function Chatbm({ socket, username, room }) {


  const [chathistory,sethistory]=useState([])
  const [chathistoryonlymessage,sethistory11]=useState([])


  const [revie,setmsg1]=useState([])
  useEffect(() =>{
  
   // axios.post('http://localhost:5000/hlcdata',{id:cid}).then(res =>{ setmsg12(res.data);setmsg1(res.data.reviews)}).catch((err) => console.log(err))
   // axios.post('http://localhost:5000/chathistory',{ group_id: room}).then(res =>{ sethistory(res.data)}).catch((err) => console.log(err))
 
     },[])
 console.log(chathistory)


  ///////////////////////////////////
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        authorid:localStorage.getItem('hlcid'),
        author: username,
        message_text: currentMessage,
        time:
          new Date(Date.now()).getHours()+
          ":" +
          new Date(Date.now()).getMinutes()+":"+ new Date(Date.now()).getSeconds(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
           //axios.post('http://localhost:5000/postmessage',{group_id:room,message:messageData}).then(res =>alert('send to database')).catch((err) => console.log(err))

      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  const uniqueItems = [...new Set(messageList.map(item => item.time))].map(time => {
    return messageList.find(item => item.time === time);
  });
  return (

    <div className="chat-window">
    
      <div className="chat-header">
        <p>Live Chat with {username}</p>
      </div>
      <div className="chat-body">
      <ScrollToBottom className="message-container">
      
      {chathistory.map(me=><div>
       
            {(me.messages).map(mess=>
              <div 
                className="message"
                id={username === mess.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{mess.message_text}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{mess.time}</p>
                    <p id="author">{mess.author===username? <h>you</h>:<h>{mess.author}</h>}</p>
                  </div>
                </div>
              </div>
              
          )}
             </div>
             )}
          {uniqueItems.map((messageContent) => {
            return (

<div>
           
              <div 
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message_text}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author===username? <h>you</h>:<h>{messageContent.author}</h>}</p>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chatbm;
