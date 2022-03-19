import React, { useState, useEffect, useCallback } from 'react';
import Pagination from 'react-bootstrap/Pagination';
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
    
    useEffect(() => fetchAds(), [page, filters]);

    const lastPage = Math.floor(numAds / 20);
    const onFirstPage = page === 0;
    const onLastPage = page === lastPage;

    let pageContent;
    if (ads && numAds > 0) {
        pageContent = (
            <div >
                {ads.map((ad, i) => <Ad info={ad} key={i} />)}
                <Pagination>
                    {<Pagination.First disabled={onFirstPage} onClick={() => setPage(0)} />}
                    {<Pagination.Prev disabled={onFirstPage} onClick={() => setPage(page - 1)} />}
                    <Pagination.Item active>{page + 1}</Pagination.Item>
                    {<Pagination.Next disabled={onLastPage} onClick={() => setPage(page + 1)} />}
                    {<Pagination.Last disabled={onLastPage} onClick={() => setPage(lastPage)} />}
                </Pagination>
                <p>Showing {ads.length} of {numAds} results</p>
            </div>
        );
    } else {
        pageContent = <p>No Results 😕</p>;
    }

    return pageContent;
}

export default AdList;