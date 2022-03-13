import React, { useState, useEffect } from 'react';
import Ad from './ad';

function AdList({ filters }) {
    const [ads, setAds] = useState([]);
    const [numAds, setNumAds] = useState(0);
    const [page, setPage] = useState(0);
    
    useEffect(() => {
        const data = { filters: filters, page: page, adsPerPage: 20 };
        fetch('http://localhost:5000/api/v1/ads/', { 
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data),
        }).then((res) => {
            setAds(res.ads);
            setNumAds(res.numResults);
        }).catch((err) => {
            console.error(`Failed to retrieve ads. ${err}`);
        });

    }, [filters, page]);

    const adComponents = ads ? ads.map(ad => <Ad info={ad}></Ad>) : [];

    // TODO: add a control for pagination
    return (
        <div className="AdList">
            {adComponents}
        </div>
    );
}

export default AdList;