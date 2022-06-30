import { React } from 'react';
import Nav from 'components/Nav';
import Sidebar from 'components/Sidebar';
import AddBlog from 'components/AddBlogForm';
function User() {
  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <Nav />
        <div className="inner-content">
          <section>
            <div className="container-fluid">
              <div className="row m-0">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header card-header-primary d-flex flex-wrap align-items-center position-relative py-4">
                      <div className="content-card-left">
                        <h4 className="card-title text-white mb-0">Add Blog</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="header-content">
                        <AddBlog />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default User;
