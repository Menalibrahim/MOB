import Wrapper from "../../assets/wrappers/DescriptionPage"

function DescriptionPage() {
  return (
    <Wrapper>
    <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6">
           <h1 class="heading">Amazing Phone.<br/><span>Amazing Deals.</span></h1>
           <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>

       <div class="col-lg-6">
       <img  style={{"height":"300px", "width":"300px"}}
        className="img"
        src={require("../../assets/images/mob.jpg")}
        alt="mobile phone"
        />
       </div>

     </div>
     </div>
     </Wrapper>
    
  )
}

export default DescriptionPage
