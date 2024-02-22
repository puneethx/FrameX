import React from 'react'
import "./Placement.scss"
import Place from "../../assets/placements.png"
import male from "../../assets/male.svg"

const Placement = () => {
    return (
        <div className='placement'>
            <img src={Place} className='placeimg' alt="placement" />
            <div className="cards">
                <div className="card">
                    <div className="cardtop">
                        <div className="cardleft">
                            <img src={male} alt="" />
                        </div>
                        <div className="cardright">
                            <p className='name'>Pankaj Sharma</p>
                            <p className='grey'>Corporate Sales Executive,</p>
                            <p className="grey">L&T Technologies</p>
                        </div>
                    </div>
                    <div className="cardmain">
                        "I am incredibly grateful to FrameX for being the catalyst in my career journey. Landing a job as a Corporate Sales Executive at L&T Technologies has been a game-changer for me, and it wouldn't have been possible without the seamless platform provided by FrameX. The opportunities they curated perfectly aligned with my career aspirations ........
                    </div>
                    <div className="seemore">
                        see more
                    </div>
                </div>
                <div className="card">
                    <div className="cardtop">
                        <div className="cardleft">
                            <img src={male} alt="" />
                        </div>
                        <div className="cardright">
                            <p className='name'>Rahul Tripati</p>
                            <p className='grey'>Business Development Associate,</p>
                            <p className="grey">Motilal Oswal and sons</p>
                        </div>
                    </div>
                    <div className="cardmain">
                    "I am incredibly grateful for FrameX, the platform that paved the way for my career breakthrough. Rahul Tripathi, as a Business Development Associate at Motilal Oswal and Sons, exemplifies the success story facilitated by FrameX. The portal not only connected me with exceptional opportunities but also provided the resources and support ..........
                    </div>
                    <div className="seemore">
                        see more
                    </div>
                </div>
                <div className="card">
                    <div className="cardtop">
                        <div className="cardleft">
                            <img src={male} alt="" />
                        </div>
                        <div className="cardright">
                            <p className='name'>Manogna Reddy</p>
                            <p className='grey'>Junior Civil Engineer,</p>
                            <p className="grey">Tamashaki Ltd.</p>
                        </div>
                    </div>
                    <div className="cardmain">
                    "FrameX has been instrumental in shaping my career path, connecting me with opportunities that align perfectly with my aspirations. Landing a role as a Junior Civil Engineer at Tamashaki Ltd. was made possible through FrameX's intuitive platform and extensive network. The platform's efficiency and user-friendly design ......
                    </div>
                    <div className="seemore">
                        see more
                    </div>
                </div>
                <div className="card">
                    <div className="cardtop">
                        <div className="cardleft">
                            <img src={male} alt="" />
                        </div>
                        <div className="cardright">
                            <p className='name'>Samuel Jackson</p>
                            <p className='grey'>Client Acquisition Manager,</p>
                            <p className="grey">Blasting Jams pvt Ltd.</p>
                        </div>
                    </div>
                    <div className="cardmain">
                        ""FrameX played a pivotal role in facilitating my connection with Pearson Hardman, where I now thrive as a Graphic Designer. Thanks to Vaibhav Arora's outstanding creativity and skills, I've seamlessly integrated into the team. His commitment to producing visually compelling designs has made a substantial impact on the success of our projects. FrameX  ......."
                    </div>
                    <div className="seemore">
                        see more
                    </div>
                </div>
                <div className="card">
                    <div className="cardtop">
                        <div className="cardleft">
                            <img src={male} alt="" />
                        </div>
                        <div className="cardright">
                            <p className='name'>Vaibhav Arora</p>
                            <p className='grey'>Graphic Designer,</p>
                            <p className="grey">Pearson Hardman</p>
                        </div>
                    </div>
                    <div className="cardmain">
                    "FrameX played a pivotal role in facilitating my connection with Pearson Hardman, where I now thrive as a Graphic Designer. Thanks to Vaibhav Arora's outstanding creativity and skills, I've seamlessly integrated into the team. His commitment to producing visually compelling designs has made a substantial impact on the success of our projects. FrameX  ......."
                    </div>
                    <div className="seemore">
                        see more
                    </div>
                </div>
                <div className="card">
                    <div className="cardtop">
                        <div className="cardleft">
                            <img src={male} alt="" />
                        </div>
                        <div className="cardright">
                            <p className='name'>Pinky Sharma</p>
                            <p className='grey'>Corporate Sales Executive,</p>
                            <p className="grey">L&T Technologies</p>
                        </div>
                    </div>
                    <div className="cardmain">
                    "I am thrilled to share my success story, thanks to FrameX! The platform connected me with incredible opportunities, and I landed an amazing role as a Corporate Sales Executive at L&T Technologies. FrameX not only streamlined the job search process but also ensured the perfect match for my skills and aspirations. Grateful for this......
                    </div>
                    <div className="seemore">
                        see more
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement