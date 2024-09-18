import React from 'react';
import { Input } from 'antd';
import { ThreeCircles } from "react-loader-spinner"
import { SmileOutlined, FilePdfOutlined } from "@ant-design/icons";
import { useState, useEffect } from 'react';
import { getChatData, postMessage } from '../Endpoints/personalAi';

const Personal = () => {

  const [inputData, setInputData] = useState([]);
  const [toggleChatScreen, setToggleChatScreen] = useState(false)
  const [chatData, setChatData] = useState([]);
  const [loading, setLoading] = useState(false)

  // const chatResponseData = [
  //   {
  //     heading: "Response 1",
  //     para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, voluptatum!",
  //     Link: ""
  //   },
  //   {
  //     "id": 2,
  //     heading: "Response 2",
  //     para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, voluptatum!",
  //     Link: ""
  //   },
  //   {
  //     "id": 3,
  //     heading: "Response 3",
  //     para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, voluptatum!",
  //     Link: ""
  //   },

  // ]

  const handleChange = (e) => {
    const { value } = e.target
    setInputData(value)
  }


  const handleSubmit = () => {
    setToggleChatScreen(true)
    setLoading(true)
    setChatData((prev) => [...prev, { inputData, chatResponseData: null }]);

    postMessage(inputData).then((response) => {
      console.log(response)
      const chatResponseData =  [response.data]
      console.log(chatResponseData)

      setChatData((prev) => {
        // Find the last added object (inputData only)
        const updatedChatData = [...prev];
        const lastIndex = updatedChatData.length - 1;

        // Update the last object with chatResponseData
        updatedChatData[lastIndex] = {
          ...updatedChatData[lastIndex],
          chatResponseData
        };
        return updatedChatData;
      });

      setLoading(false);
      setInputData(null);
    }
    ).catch(
      (err) => console.log(err)

    )



    // // After 2 seconds, update the same object with chatResponseData
    // setTimeout(() => {
    //   setChatData((prev) => {
    //     // Find the last added object (inputData only)
    //     const updatedChatData = [...prev];
    //     const lastIndex = updatedChatData.length - 1;

    //     // Update the last object with chatResponseData
    //     updatedChatData[lastIndex] = {
    //       ...updatedChatData[lastIndex],
    //       chatResponseData
    //     };

    //     return updatedChatData;
    //   });

    //   setLoading(false);
    //   setInputData(null);
    // }, 2000);
  }






  return (
    <>
      <div className="h-full">
        <div className="h-[8%] px-3 font-bold text-2xl">Personal AI</div>
        <div className="mx-3 border-2 h-[90%]">
          <div className="flex gap-3 items-center bg-gradient-to-r from-[#006768] to-[#00CCCE] p-3 h-[15%]">
            <img src="https://eimkeia.stripocdn.email/content/guids/CABINET_da6ee826f68eb108c924726d5460f5082d1a9899e8e50c985dc4e82f63bec700/images/group_1.png" alt="" />
            <div className=" text-white">
              <h4>Chatbot</h4>
              <h6 className='flex items-center gap-1'>Available
                <span className='h-2 w-2 bg-green-500 rounded-full'></span>
              </h6>
            </div>
          </div>
          <div className="h-[75%] flex justify-center flex-col items-center text-center ">
            {
              toggleChatScreen ?
                <>

                  <div className='overflow-y-scroll max-h-[400px] w-full scroll-mb-0' >
                    {
                      chatData.map((item) => {
                        return (
                          < >
                            <div className="bg-gree-500 w-full flex justify-end p-3">
                              <div className="bg-slate-200 p-2 rounded-md flex justify-between items-end gap-3 max-w-[50%] text-start break-words  ">
                                <span className='max-w-48'>
                                  {item.inputData}
                                </span>
                                <span className='text-[0.6rem] '>01.25pm</span>

                              </div>
                            </div>
                            {
                              item.chatResponseData ?
                                <div className="w-full flex justify-start items-start p-3 gap-3">
                                  <img src="https://eimkeia.stripocdn.email/content/guids/CABINET_da6ee826f68eb108c924726d5460f5082d1a9899e8e50c985dc4e82f63bec700/images/group_1.png" width={30} height={30} alt="" />
                                  <div className="bg-[#E3FFFF] w-2/4 text-start p-2 rounded-md flex flex-col gap-3">
                                    {
                                      item.chatResponseData?.map(item =>
                                        <>
                                          {/* <h6 className='font-bold'>{item.id}.{item.}</h6> */}
                                          <p className='font-semibold'>{item.summary}</p>
                                          <div className=" flex gap-2">
                                            {/* <a href={item.Link}>
                                              <FilePdfOutlined style={{ color: "red", fontSize: "1rem" }} />
                                            </a> */}
                                            <span className='font-semibold flex gap-2'><FilePdfOutlined style={{ color: "red", fontSize: "1rem" }} />{item.most_relevant_pdf}</span>
                                          </div>
                                        </>

                                      )
                                    }
                                  </div>


                                </div>
                                : <div className="p-3">
                                  <ThreeCircles
                                    visible={true}
                                    height="30"
                                    width="30"
                                    color="#006a6b"
                                    ariaLabel="three-circles-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                  />
                                </div>
                            }


                          </>
                        )
                      })
                    }
                  </div>


                </>


                :
                <>

                  <img src="https://eimkeia.stripocdn.email/content/guids/CABINET_da6ee826f68eb108c924726d5460f5082d1a9899e8e50c985dc4e82f63bec700/images/group_3_1.png" alt="" />
                  <div className="">
                    <h6>How can i help you?</h6>
                    <p>Ask Questions</p>
                    <div className="flex gap-3">
                      <p className='p-1 bg-gray-200 rounded-lg'>Ask anything?</p>
                      <p className='p-1 bg-gray-200 rounded-lg'>Information about Himalaya</p>
                      <p className='p-1 bg-gray-200 rounded-lg'>What is pdf ?</p>

                    </div>
                  </div>
                </>
            }
          </div>
          <div className=" h-[10%] bg-[#ececec] flex justify-between items-center gap-4 px-3">
            <SmileOutlined style={{ fontSize: "1.5rem" }} />
            <Input className='bg-transparent border-2 border-[#BCBCBC]' placeholder='Type here' onChange={handleChange} value={inputData} />
            <button className='bg-[#007475] px-3 py-2 text-white font-bold rounded ' onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Personal;