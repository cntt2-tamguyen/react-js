import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect : false,
      fNgay:"thu7"
      }
  }
  
  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      isRedirect :true
    });
  }

  isChange = (event) => {
    const ten = event.target.name;
    const giatri = event.target.value;
    this.setState({
      [ten]:giatri
    })
  }

  isFileChange = (event) => {
    const tenanh = event.target.files[0].name
    this.setState({
      fAnh:tenanh
    })
  }

  getGiaTri = () => {
    var noiDung ="";
    noiDung += "Ten nhan duoc la: " + this.state.fName;
    noiDung += " / Email nhan duoc la: " + this.state.fEmail;
    noiDung += " / Phone nhan duoc la: " + this.state.fPhone;
    noiDung += " / Message nhan duoc la: " + this.state.fMess;
    noiDung += " / Ngay nhan duoc la: " + this.state.fNgay;
    noiDung += " / Ten anh nhan duoc la: " + this.state.fAnh;
    return noiDung;
  }

    render() {
      if (this.state.isRedirect){
        console.log(this.getGiaTri());
         return <Redirect to="/" />;
      }
      return (
          <div>
          <header className="masthead tintuc">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-12 my-auto">
                  <div className="header-content mx-auto">
                    <h1 className="mb-5">Trang liên hệ</h1>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* begin tin tuc */}
          <section className="page-section" id="contact">
            <div className="container">
              {/* Contact Section Heading */}
              <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Liên hệ với chúng tôi </h2>
              {/* Icon Divider */}
              <div className="divider-custom">
                <div className="divider-custom-line" />
                <div className="divider-custom-icon">
                  <i className="fas fa-star" />
                </div>
                <div className="divider-custom-line" />
              </div>
              {/* Contact Section Form */}
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                  <form name="sentMessage" id="contactForm" noValidate="novalidate">
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Name</label>
                        <input name="fName" onChange={(event)=>this.isChange(event)} className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Email Address</label>
                        <input name="fEmail" onChange={(event)=>this.isChange(event)} className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Phone Number</label>
                        <input name="fPhone" onChange={(event)=>this.isChange(event)} className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Message</label>
                        <textarea name="fMess" onChange={(event)=>this.isChange(event)} className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Chon ngay</label>                 
                         <select value={this.state.fNgay} className="form-control" name="fNgay" onChange={(event)=>this.isChange(event)}>
                           <option value="thu3">Ngày thứ 3</option>
                           <option value="thu5"> Ngày thứ 5</option>
                           <option value="thu7">Ngày thứ 7</option>
                           <option value="chunhat">Ngày chủ nhật</option>
                         </select>
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Chon file</label>
                        <input type="file" className="form-control-file" name="fAnh" onChange={(event)=>this.isFileChange(event)}/>
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <br />
                    <div id="success" />
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton" onClick={(evevt)=>this.submitForm(evevt)}>Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* end tin tuc  */}
        </div>
        

        );
    }
}

export default Contact;