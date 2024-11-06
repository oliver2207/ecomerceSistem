 import { connect } from "react-redux"
function Layouts({children}:any) {
  return (
    <div>
        
        {children}
    </div>
  )
}

const mapStateToProps = (state:any) =>({

})

export default connect(mapStateToProps,{

}) (Layouts)