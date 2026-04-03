function Admin() {
    return(
        <div>
            <h1 className='text-center mt-0 w-100' style={{fontSize: "8rem"}}>Store Administration</h1>
            <p className="fs-2 text-secondary d-flex justify-content-center">If you are interested in selling products with us, please allow us see a sample!</p>
            <section>
                <h2 className='text-uppercase text-center'>Add Product</h2>

                <div className='d-flex justify-content-center  card text-lg-center text-uppercase p-3 w-90 fs-5 bg-info-subtle'>
                    <div className='card-body'>
                        <label className="form-label">Title</label>
                        <input type='text' className="form-control" />
                    </div>
                    
                    <div className='card-body'>
                        <label className="form-label p-2">Category</label>
                        <input type='text' className="form-control"/>
                    </div>

                    <div>
                        <label className="form-label p-2">Image</label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div>
                        <label className="form-label p-2">Price</label>
                        <input type="number" className="form-control"/>
                    </div>

                    <div>
                        <button className="btn btn-success p-2 m-2">Introduce Product</button>
                    </div>
                </div>
            </section>
        </div>
            
    )
}

export default Admin