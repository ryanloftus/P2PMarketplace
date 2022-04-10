import React, { useState, useEffect, useCallback } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import Ad from './ad';

function AdList({ filters, isEditable, openEditor }) {
    const [ads, setAds] = useState([]);
    const [numAds, setNumAds] = useState(0);
    const [page, setPage] = useState(0);
    const [alertText, setAlertText] = useState(null);

    const fetchAds = useCallback(async () => {
        try {
            const url = new URL('http://localhost:5000/api/v1/ads/');
            url.search = new URLSearchParams({ ...filters, page: page, adsPerPage: 20 }).toString();
            const res = await fetch(url, { 
                method: 'GET', 
                mode: 'cors', 
                headers: { 'Content-Type': 'application/json' }
            });
            const body = await res.json();
            setAds(body.ads);
            setNumAds(body.numResults);
        } catch (err) {
            setAds([]);
            setNumAds(0);
        }
    }, [filters, page]);
    
    useEffect(() => fetchAds(), [page, filters]);

    const deleteAd = useCallback((id) => {
        try {
            const res = await fetch('http://localhost:5000/api/v1/ads/', { 
                method: 'DELETE', 
                mode: 'cors', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id })
            });
            const body = await res.json();
            if (body?.successful) {
                const newAds = ads.filter(val => val._id !== id);
                setAds(newAds);
                setAlertText(null);
            } else {
                setAlertText('Delete failed. Please try again later.');
            }
        } catch (err) {
            setAlertText('Delete failed. Please try again later.')
        }
    });

    const lastPage = Math.floor(numAds / 20);
    const onFirstPage = page === 0;
    const onLastPage = page === lastPage;

    let pageContent;
    if (ads && numAds > 0) {
        pageContent = (
            <Container fluid>
                <Alert>{alertText}</Alert>
                {ads.map((ad, i) => <Ad info={ad} key={i} isEditable={isEditable} openEditor={openEditor} deleteAd={deleteAd} />)}
                <Pagination style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Pagination.First disabled={onFirstPage} onClick={() => setPage(0)} />
                    <Pagination.Prev disabled={onFirstPage} onClick={() => setPage(page - 1)} />
                    <Pagination.Item active>{page + 1}</Pagination.Item>
                    <Pagination.Next disabled={onLastPage} onClick={() => setPage(page + 1)} />
                    <Pagination.Last disabled={onLastPage} onClick={() => setPage(lastPage)} />
                </Pagination>
                <p style={{display: 'flex',  justifyContent:'center'}}>Showing {ads.length} of {numAds} results</p>
            </Container>
        );
    } else {
        pageContent = <p>No Results 😕</p>;
    }

    return pageContent;
}

export default AdList;