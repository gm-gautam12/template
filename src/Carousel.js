import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll:1
    };

    return (
        <>
        <div className="flex justify-center my-8">
            <h1 className="font-bold text-5xl m-2 p-2 text-white sm:text-2xl md:text-4xl">From Our Students...</h1>
        </div>
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                {data.map((d) => (
                    <div className="bg-white h-[470px] text-black rounded-xl shadow-lg">
                        <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                            <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 p-2">
                            <p className="text-xl font-semibold">{d.name}</p>
                            <p>{d.review}</p>
                        </div>        
                    </div>
                ))}
                </Slider>
            </div>
          
        </div>
        <div className="flex justify-center m-12 p-4">
        <button className="bg-indigo-500 text-white text-lg px-6 py-2 rounded-xl">Enroll Now</button>
        </div>
        </>
    )
}


const data = [
    {
        name: "Adam Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9Yfk5l9vJOi2tHDW7ROt2cbDWXJONs-MWw&usqp=CAU",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        name: "Sara Smith",
        img: "https://ak.picdn.net/offset/photos/5dcefd4c469b183482a26e2e/medium/offset_878775.jpg",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        name: "Jessica",
        img: "https://www.shutterstock.com/image-photo/portrait-confident-young-business-woman-260nw-1593222007.jpg",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        name: "Jones",
        img: "https://cdn-clibi.nitrocdn.com/OmAxDmvnEDrIbyCCcgEheUGaGtzJEYJA/assets/images/optimized/rev-e75d6e9/wpstackable.com/wp-content/uploads/2022/03/leilani-angel-K84vnnzxmTQ-unsplash-scaled.jpg",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        name: "Sam",
        img: "https://media.istockphoto.com/id/1230749818/photo/portrait-of-smiling-male-owner-of-fashion-store-standing-in-front-of-clothing-display.jpg?s=612x612&w=0&k=20&c=xoWhF-hrQcbMEPDYncHiHF8HJX2YgmYt7T-KLCPZIpY=",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
]

export default App;
