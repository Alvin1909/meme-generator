function Body(){
    return(
        <div className="body">
            <div className="body-label">
                <label>Top text</label>
                <label>Bottom text</label>
            </div>
            <input type="text" className="body-input" placeholder="Enter top text of image"/>
            <input type="text" className="body-input" placeholder="Enter bottom text of image"/>
            <button className="body-button">Get new meme image 🖼️</button>

        </div>
    );
}

export default Body;