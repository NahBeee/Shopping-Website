const express= require("express");
const app= express();

const fruit=[
    {
        id: 1,
        name: "Apple",
        type: "Korea",
        price: "10",
        description: "This is an Apple from Korea",
        imageUrl:
          "https://i.postimg.cc/h406Wbg0/apple.jpg",
      },
      {
        id: 2,
        name: "Orange",
        type: "VietNam",
        price: "15",
        description: "This is a orange from Vietnam",
        imageUrl:
          "https://i.postimg.cc/MK27DggP/orange.jpg",
      },
      {
        id: 3,
        name: "Blueberry",
        type: "Australia",
        price: "25",
        description:
          "This is a Blueberry from Australia",
        imageUrl:
          "https://i.postimg.cc/VksbZwgR/blueberry.png",
      },
      {
        id: 4,
        name: "Banana",
        type: "Thailand",
        price: "17",
        description:
          "A banana from Thailand",
        imageUrl:
          "https://i.postimg.cc/HnCrw1jb/banana.jpg",
      },
      {
        id: 5,
        name: "Dragonfruit",
        type: "VietNam",
        price: "20",
        description: "A Dragonfruit from Vietnam",
        imageUrl:
          "https://i.postimg.cc/3wsNhQXz/dragonfruit.jpg",
      },
      {
        id: 6,
        name: "Logan",
        type: "China",
        price: "27",
        description: "Logan from China",
        imageUrl:
          "https://i.postimg.cc/FFDvgQfm/logn.jpg",
      },
      {
        id: 7,
        name: "Papaya",
        type: "Thailand",
        price: "25",
        description: "Papaya from Thailand",
        imageUrl:
          "https://i.postimg.cc/cC5Vq0Yn/Papaya.jpg",
      },
      {
        id: 8,
        name: "Kiwi",
        type: "Australia",
        price: "47",
        description: "Kiwi from Australia",
        imageUrl:
          "https://i.postimg.cc/FRT6cNTB/kiwi.jpg",
      },
      {
        id: 9,
        name: "Cherry",
        type: "Australia",
        price: "34",
        description: "Cherry from Australia",
        imageUrl:
          "https://i.postimg.cc/Ss1ZRVs0/cherry.jpg",
      },
      {
        id: 10,
        name: "Watermelon",
        type: "Australia",
        price: "24",
        description: "Watermelon from Australia",
        imageUrl:
          "https://i.postimg.cc/sDhnfYC8/watermelon.jpg",
      }
];    
app.get("/v1/fruit", (req,res)=>{
    res.status(200).json(fruit);
})

app.listen("3000", ()=>{
    console.log("Server is starting...");
})