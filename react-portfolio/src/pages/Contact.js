// import React from "react";

// const Contact = () => {
//     return (
//         <main className="container">
//             <section className="row">
//                     <h1 className="display-4">CONTACT ME</h1>
//                     <form>
//                         <div className="form-group col-md-8">
//                             <label for="inputFirstName">First Name</label>
//                             <input className="form-control" type="text" id="inputFirstName" placeholder="First Name" />
//                         </div>
//                         <div className="form-group col-md-8">
//                             <label for="inputLastName">Last Name</label>
//                             <input className="form-control" type="text" id="inputLastName" placeholder="Last Name" />
//                         </div>
//                         <div className="form-group">
//                             <label for="inputEmailAddress">Email Address</label>
//                             <input className="form-control" type="text" id="inputEmailAddress" placeholder="Email Address" />
//                         </div>
//                         <div className="form-group">
//                             <label for="exampleFormControlTextarea1">Message</label>
//                             <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your message to Suzanne here." rows="3"></textarea>
//                         </div>
//                         <button type="submit" className="btn btn-dark" id="submitBtn">Submit</button>
//                     </form>
//             </section>
//         </main>

//     )
// }

// export default Contact;

  
import React from "react";
import Form from "../components/Form"


const Contact = () => {
  return(
    <div>
      <Form />
    </div>
  );
}

export default Contact;

