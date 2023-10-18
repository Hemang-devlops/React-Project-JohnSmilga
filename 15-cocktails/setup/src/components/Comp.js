import React, { useState, useEffect } from 'react';

const PhotoTable = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        // Fetch data from the URL when the component mounts
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((data) => setPhotos(data))
            .catch((error) => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <h1>Photo Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {photos.map((photo) => (
                        <tr key={photo.id}>
                            <td>{photo.id}</td>
                            <td>{photo.title}</td>
                            <td>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PhotoTable;
