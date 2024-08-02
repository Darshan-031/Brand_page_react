const Hero = () =>{
    return (
        <main className="hero containor">
            <div className="heroContent">
               <h1>YOUR FEET DESERVETHE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO
                 HELP YOU WITH OUR SHOES.YOUR FEET DESERVE
                  THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="heroBtn">
                <button>Shop Now</button>
                <button className="sbtn">Category</button>
            </div>
            <div className="shoping">
                <p>Also availabble on</p>
                <div className="brandIcon">
                    <img src="/images/amazon.png" alt="" />
                    <img src="/images/flipkart.png" alt="" />
                </div>
            </div>
            </div>
            <div className="HeroImg" >
                <img src="/images/shoe_image.png" alt="" />
            </div>
        </main>
    );
};

export default Hero;

