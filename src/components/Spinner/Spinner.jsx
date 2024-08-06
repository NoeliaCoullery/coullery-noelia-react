import Spinner from 'react-bootstrap/Spinner';

function GrowExample() {
    return (
    <>
        <Spinner animation="grow" alt= "loading..." style={{width:"100px", height:"100px", margin: "auto", display: "block"}} />
        <p>Loading...</p>
    </>
  )}
 
  export default GrowExample;
