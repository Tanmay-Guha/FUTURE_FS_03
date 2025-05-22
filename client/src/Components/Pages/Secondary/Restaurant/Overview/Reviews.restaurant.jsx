import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

// Icons
import { IoStarHalf, IoStarOutline, IoStarSharp } from "react-icons/io5"
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
import { MdOutlineComment } from "react-icons/md"
import { TiArrowForwardOutline } from "react-icons/ti"



const ReviewsRestaurant = () => {
    const [isActive, setIsActive] = useState("");

    const like = () => setIsActive((prev)=>!prev)

    return (
        <>
            

            <div className="md:py-4 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <div className="w-11 h-11 rounded-full">
                            <img src="https://b.zmtcdn.com/images/user_avatars/pizza_2x.png" className="w-full h-full rounded-full" />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-600">Laxman</h1>
                            <p className="md:text-base text-sm text-gray-500">1 reviews &#8226; 0 Followers</p>
                        </div>
                    </div>
                    <div className="border border-zomatoRed-400 md:py-4 md:px-6 rounded-lg md:text-md text-sm text-zomatoRed-400 py-2 px-4" >
                        <button >Follow</button>

                    </div>
                </div>

                <div className="flex gap-2 items-center py-2">
                    <span className="font-semibold text-sm bg-buttonGreen-100 text-white flex items-baseline px-1 rounded">4 <IoStarSharp className="w-3 h-3" /></span>
                    <p className=" md:text-sm text-xs text-gray-700">DELIVERY</p>
                    <p className="md:text-base text-sm text-gray-500">4 days ago</p>
                </div>
                <div>
                    <p className=" md:text-lg text-md text-gray-500">awesome and delivered by on-time.</p>
                </div>
                <div>
                    <p className="md:text-base text-sm text-gray-400">0 Votes for helpful, 0 Comments</p>
                </div>

                <div className="flex gap-8 py-1 justify-between md:justify-start">
                    <div className="text-gray-400 flex gap-1 items-center hover:bg-gray-100 md:px-1 rounded md:py-2" >
                        <div onClick={like}>
                            
                            {
                                isActive ==1 ? <AiFillLike className="w-5 h-5 text-zomatoRed-300" /> :<AiOutlineLike className="w-5 h-5 " />
                            }
                        </div>
                        <span className="text-sm md:text-base ">Helpful</span>
                    </div>
                    <div className="text-gray-400 flex gap-1 items-center hover:bg-gray-100 md:px-1 rounded md:py-2">
                        <MdOutlineComment className="w-5 h-5" />
                        <span className="text-sm md:text-base">Comment</span>
                    </div>
                    <div className="text-gray-400 flex gap-1 items-center hover:bg-gray-100 md:px-1 rounded md:py-2">
                        <TiArrowForwardOutline className="w-5 h-5" />
                        <span className="text-sm md:text-base">Share</span>
                    </div>
                </div>
                <hr />
            </div>

        </>
    )
}

export default ReviewsRestaurant;