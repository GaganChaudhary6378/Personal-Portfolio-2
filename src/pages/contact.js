export default function about() {
  return (
    <div className="container my-14 px-6 ">
      <section className="mb-32 text-gray-800 text-center">
        <div className="px-6 py-12 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14">
                  <h2 className="text-3xl font-bold mb-12 font-revalia text-[#245D27]">Contact Me</h2>
                  <form>
                    <div className="form-group mb-6 font-revalia">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#245D27] focus:outline-none"
                        id="exampleInput7"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group mb-6 font-revalia">
                      <input
                        type="email"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#245D27] focus:outline-none"
                        id="exampleInput8"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="form-group mb-6 font-revalia">
                      <textarea
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#245D27] focus:outline-none"
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-2.5 bg-[#B0F2B2] font-revalia font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-[#245D27] hover:text-white hover:shadow-lg focus:bg-[#245D27] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#245D27] active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <div className="map-container shadow-lg rounded-sm ml-14">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1246.777895021813!2d77.50903162176061!3d27.20617084838325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a313f59c0519%3A0xbc0d3a7e5dd64a66!2sKothi%20Rose%20villa%20marriage%20home!5e0!3m2!1sen!2sin!4v1682960061944!5m2!1sen!2sin"
                    width="600"
                    height="550"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
