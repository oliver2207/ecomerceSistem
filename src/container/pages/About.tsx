import { connect } from 'react-redux'
import Layouts from '../../hocs/layouts/Layouts'
import Footer from '../../components/navigation/Footer'
import NavHeaders from '../../components/navigation/NavHeaders'
import HeaderA from '../../components/About/HeaderA'
import TestStats from '../../components/About/TestStats'
import Images from '../../components/About/Images'
import Clients from '../../components/About/Clients'
import Client2 from '../../components/About/Client2'
import Fature from '../../components/About/Fature'
import Teams from '../../components/About/Teams'

function About() {
  return (
    <Layouts>

      <NavHeaders />
      <div className="pt-[70px]">


        <HeaderA />
        <TestStats />
        <Images />
        <Clients />
        <Client2 />
        <Fature />
        <Teams />
        <div className="bg-white">
          <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block text-indigo-600">Start your free trial today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Get started
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />


    </Layouts>

  )
}

const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {

})(About)