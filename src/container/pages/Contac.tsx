import { connect } from "react-redux"
import Layouts from "../../hocs/layouts/Layouts"
import NavHeaders from "../../components/navigation/NavHeaders"
import Footer from "../../components/navigation/Footer"

 
function Contac() {
  return (
    <Layouts>

    <NavHeaders />
    <div className="pt-[70px]">

        <h1 className="text-3xl font-bold underline">
          Contact
        </h1>
    </div>


    <Footer />


</Layouts>

  )
}

const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {

})(Contac)