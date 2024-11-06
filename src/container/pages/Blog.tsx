import { connect } from "react-redux"
import Layouts from "../../hocs/layouts/Layouts"
import NavHeaders from "../../components/navigation/NavHeaders"
import Footer from "../../components/navigation/Footer"
import { useEffect } from "react"
import { get_categories } from "../../redux/actions/categories/categories"
import { get_blog_list, get_blog_list_page } from "../../redux/actions/blog/blog"
import CategoriesHeaders from "../../components/blog/CategoriesHeaders"
import BlogList from "../../components/home/BlogList"
import blog from "../../redux/reducers/blog"


function Blog({ get_categories,
  categories,
  get_blog_list,
  get_blog_list_page,
  posts,
  count,
  next,
  previous, }: any) {
  useEffect(() => {
    window.scrollTo(0, 0)
    get_categories()
    get_blog_list()

   
  }, [])

  console.log(posts)
  return (
    <Layouts>

      <NavHeaders />
      <div className="pt-[70px]">
        <CategoriesHeaders categories={categories && categories} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className="mx-auto max-w-6xl my-10">
           {/* <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_page} count={count&&count}/> */}
           {posts&&posts.map((post,index) => {
              return(
             <li key={index}>
               <p>{post.description}</p>
               <img  key={index} className=" w-28 h-28" src={post.thumbnail} alt="" />
             </li>
              )
  })}
           </div>
        </div>

      </div>


      <Footer />


    </Layouts>
  )
}

const mapStateToProps = (state: any) => ({
  categories: state.categories.categories,
  posts: state.blog.blog_list,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
})

export default connect(mapStateToProps, {
  get_categories,
  get_blog_list,
  get_blog_list_page,
 })(Blog)