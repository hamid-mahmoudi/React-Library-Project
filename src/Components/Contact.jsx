import contactUs from "../assets/contactUs.png"

    const Contact =()=>{
    return (
        <>
        <h5 className="mt-4">Better Call Saul</h5>
        <div className="mt-5 d-none d-md-block">
            <img src={contactUs } style={{boxShadow:"0px 0px 10px #ade8f4" , borderRadius:"10px"}} alt="ceeUs" />
        </div>
        </>
    )
}
export default Contact