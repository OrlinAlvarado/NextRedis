
export default function CarForm(){
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const form = new FormData(event.target);
        
        const formData = Object.fromEntries(form.entries());
        
        console.log(formData);
        
        const res = await fetch('/api/cars', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
        
        const result = await res.json();
        
        console.log(result);
        
    }
    
    return (
        <form onSubmit={ handleSubmit } className="p-3">
            <div className="mb-3">
                <label htmlFor="make" className="form-label">Make</label>
                <input type="text" className="form-control" id="make" name="make" placeholder="Make" />
            </div>
            <div className="mb-3">
                <label htmlFor="model" className="form-label">Model</label>
                <input type="text" className="form-control" id="model" name="model" placeholder="Model" />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input type="text" className="form-control" id="image" name="image" placeholder="Image" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">description</label>
                <textarea type="text" rows="3" className="form-control" id="description" name="description" placeholder="Description"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Create Car</button>
        </form>
    )
}