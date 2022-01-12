const GetStarted = () => {
  return (
    <div>
      <div>
        <section
          className="splash w-screen h-screen flex justify-center items-center text-center bg-center bg-cover lg:bg-cover bg-no-repeat"
          style={{'backgroundImage': 'url(/images/Splash-bg.png)'}}
        >
          <div className="splash-container flex flex-col justify-center items-center text-center space-y-5 md:space-y-7 xl:space-y-10">
            <img className="w-24 xl:w-32" src="/svg/logo.svg" alt="" />

            <p className="hostel text-4xl xl:text-5xl font-bold font-mono text-white text-center">
              Hostels
            </p>

            <nuxt-link
              to="/register"
              className="text-sm text-[#03A86B] hover:text-white font-medium py-2.5 md:py-3 xl:py-4 px-7 md:px-10 xl:px-14 bg-white hover:bg-[#03A86B] transition duration-700 rounded-full"
            >
              Get started
            </nuxt-link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default GetStarted
