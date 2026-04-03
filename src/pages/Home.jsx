import "./Home.css"

function Home() {
    return(
        <div class="primary-content">
            <h1 className='fs-1'>Hometown Farmer's Market</h1>
            
            <p className="fs-4 text-black d-flex justify-content-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil velit repellendus maxime natus explicabo, unde, hic veritatis reiciendis quis ipsa corporis incidunt cum facere quaerat aliquid eius accusamus aliquam rerum non cumque nemo? Exercitationem nisi nam officia, minus fugit dicta molestiae vel tempora ipsam commodi laborum veritatis quisquam culpa veniam id adipisci incidunt soluta error.</p>
        <img src={"/public/images/sign.png"} alt="sign"></img>
        </div>
    )
}

export default Home;