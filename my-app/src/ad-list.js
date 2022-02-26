import Ad from './ad';

function AdList(props) {
    // TODO: send filter criteria from props to backend to get a list of ads back

    return (
        <div className="AdList">
            <Ad title="My First Ad" description="Ad description goes here 😄"></Ad>
        </div>
    );
}

export default AdList;