import { connect } from "react-redux"
import Layouts from "../../hocs/layouts/Layouts"
import NavHeaders from "../../components/navigation/NavHeaders"
import Footer from "../../components/navigation/Footer"
import HeaderCr from "../../components/careers/HeaderCr"
import Testinonial from "../../components/careers/Testinonial"
import LogCloud from "../../components/careers/LogCloud"
import Feactures from "../../components/careers/Feactures"
import PositionList from "../../components/careers/PositionList"


function Careers() {
  return (
    <Layouts>

      <NavHeaders />
      <div className="pt-[70px]">

        <HeaderCr/>
        <Testinonial/>
        <LogCloud/>
        <Feactures/>
        <PositionList/>
      </div>


      <Footer />


    </Layouts>

  )
}

const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {

})(Careers)