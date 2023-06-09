
import React from "react";


function FooterForm() {
    const [email, setEmail] = React.useState('');
  
    const requestDemo = () => {
      console.log("Email: ", email)
    }
  
    return (
  
      <div className='min-h-[300px] flex flex-col justify-center items-center gap-y-4 p-5'>
        <div className="mx-auto text-center md:pt-12 md:max-w-xl">
          <h2>Become a partner in growth with KOPOLO LTD</h2>
          <p className=' md:my-6'>Seeing is believing. Reach out to us if you are interested to see our products in action. No obligations.</p>
        </div>
  
        <div className="md:pb-12">
          <form>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter you email address'
              className='min-w-[250px] md:min-w-[300px]  h-[50px] p-3 rounded-tl-lg rounded-bl-lg text-textPrimary outline-none bg-[#0D3648]'
              name="email" />
            <button
              onClick={requestDemo}
              className='md:w-[118px] min-w-[96px] h-[50px] p-3 rounded-tr-lg rounded-br-lg bg-[#EE3D4E] text-white' >
              Send
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default FooterForm
  
  