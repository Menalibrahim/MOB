import Wrapper from "../../assets/wrappers/contact_us";

function ContactUs() {
    return(
        <Wrapper>
           <section id="contactus" className="mt-5 p-5">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <h2 className="text-center"><strong>Contact us</strong></h2>
        <hr className="w-50" />
        <p className="text-center text-secondary mx-auto w-75">
          Send us your message using the form below
        </p>
        <div className="p-5 mt-5" style={{ background: "#EAEAEA" }}>
          <form>
            <div className="form-row">
              <div className="col-sm-12 col-lg-6">
                <div className="form-group">
                  <label>First name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="first_name"
                    placeholder="Your first name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="last_name"
                    placeholder="Your last name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required=""
                  />
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div className="form-group">
                  <label>Phone number</label>
                  <input
                    className="form-control"
                    type="tel"
                    name="phone_number"
                    placeholder="Your phone number"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
                <button className="btn btn-primary btn-block text-dark border rounded border-light"
                  type="submit"
                  style={{ background: "#2cb1bc" }}>
                  <strong>Send</strong>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
       </Wrapper>
    )
}

export default ContactUs;
