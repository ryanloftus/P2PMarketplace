import Ad from './ad';

function AdList(props) {
    // TODO: send filter criteria from props to backend to get a list of ads back
    const adInfo = {
        title: "My First Ad",
        description: "Ad description goes here 😃",
    }

    return (
        <div className="AdList">
            <Ad info={adInfo}></Ad>
        </div>
    );
}

export default AdList;