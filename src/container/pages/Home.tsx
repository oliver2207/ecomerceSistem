import BlogList from "../../components/home/BlogList"
import Client from "../../components/home/Client"
import Cta from "../../components/home/Cta"
import Facturas from "../../components/home/Facturas"
import Header from "../../components/home/Header"
import Incetivos from "../../components/home/Incetivos"
import UseCases from "../../components/home/UseCases"
import Footer from "../../components/navigation/Footer"
import NavHeaders from "../../components/navigation/NavHeaders"
 import Layouts from "../../hocs/layouts/Layouts"



function Home() {
    return (
        <Layouts>

            <NavHeaders />
            <div className="pt-[70px]">

                <Header/>
                <Incetivos/>
                <UseCases/>
                <Facturas/>
                <Cta/>
                <Client/>
                <BlogList/>

            </div>


            <Footer />


        </Layouts>


    )
}

export default Home