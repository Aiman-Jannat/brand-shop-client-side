import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div>
            <marquee className="flex gap-3"  direction="top-bottom">
                <div className="flex gap-6 px-10 p-5 ">
                <div>
                <img className="h-32 flex" src="https://graphicsfamily.com/wp-content/uploads/edd/2020/05/Orange-Juice-Advertising-Poster-Design.jpg" alt="" />
                </div>
            <div>
            <img className="h-32 flex" src="https://adsofbd.com/wp-content/uploads/2018/10/Pran-Water.jpg" alt="" />
            </div>
            <div>
            <img className="h-32 flex" src="https://www.pranfoods.net/sites/default/files/8433-brand-common-product-banner-1920x900p-min_0.jpg" alt="" />
            </div>
            </div>
            </marquee>
        </div>
    );
};

export default Slider;