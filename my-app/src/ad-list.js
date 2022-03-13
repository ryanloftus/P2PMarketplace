import React, { useState, useEffect, useCallback } from 'react';
import Ad from './ad';

function AdList({ filters }) {
    const [ads, setAds] = useState([]);
    const [numAds, setNumAds] = useState(0);
    const [page, setPage] = useState(0);

    const fetchAds = useCallback(async () => {
        const data = { filters: filters, page: page, adsPerPage: 20 };
        try {
            const res = await fetch('http://localhost:5000/api/v1/ads/', { 
                method: 'GET',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                params: JSON.stringify(data),
            });
            const body = await res.json();
            setAds(body.ads);
            setNumAds(body.numResults);
        } catch (err) {
            console.error(`Failed to retrieve ads. ${err}`);
        }
    }, [filters, page]);
    
    useEffect(() => fetchAds(), [fetchAds]);

    // TODO: add a control for pagination
    return (
        <div className="AdList">
            {ads ? ads.map((ad, i) => <Ad info={ad} key={i} />) : <p>No Results 😕</p>}
            <p>{ads ? `${numAds} result${numAds > 1 ? 's' : ''}` : ''}</p>
        </div>
    );
}

export default AdList;