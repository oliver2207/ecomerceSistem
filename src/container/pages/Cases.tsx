import { connect } from "react-redux"
import Layouts from "../../hocs/layouts/Layouts"
import NavHeaders from "../../components/navigation/NavHeaders"
import Footer from "../../components/navigation/Footer"
import HeaderC from "../../components/cases/HeaderC"
import CasesList from "../../components/cases/CasesList"

 function Cases() {
  return (
    <Layouts>

    <NavHeaders />
    <div className="pt-[70px]">

      <h1 className="text-3xl font-bold underline">
        <HeaderC/>
        <CasesList/>
      </h1>
    </div>


    <Footer />


  </Layouts>
  )
}


const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {

})(Cases)