import Footer from "../../components/navigation/Footer"
import NavHeaders from "../../components/navigation/NavHeaders"
import TablaPrice from "../../components/price/TablaPrice"
import Tortuga from "../../components/price/Tortuga"
import Layouts from "../../hocs/layouts/Layouts"


function Price() {
    return (
        <Layouts>
            <NavHeaders />
            <div className=" pt-[70px]   snap-y  snap-mandatory ">
                <div  className=" snap-start">
 <TablaPrice />
                </div>
                <div className=" snap-start">
 <Tortuga />
                </div>
                <div className=" snap-start">
 
                <Create2 />
                </div>
                <div className=" snap-start">
            <Create/>
                </div>
                   
               
               
 
               
              
            </div>
            <Footer />
        </Layouts>
    )
}

export default Price


function Create() {
    return (
        <>

            <div className="  h-screen  bg-orange-400  text-2xl font-bold">
                text
            </div>

        </>
    )

}
function Create2() {
    return (
        <>

            <div className="  h-screen  bg-yellow-400 text-2xl font-bold">
                text2
            </div>

        </>
    )

}