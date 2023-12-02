const VideoBG = () => {
    return <video
        src={require("../../public/promo.mp4")}
        autoPlay
        muted
        loop
        className="fixed top-0 z-[-1] w-full h-full object-cover brightness-[.4]"
    />;
}

export default VideoBG;