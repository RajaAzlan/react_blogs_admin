import { React } from 'react';
import Nav from 'components/Nav';
import Sidebar from 'components/Sidebar';
import { PlusSquareFill, EyeFill, Trash2Fill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Dashboard() {
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
                        <h4 className="card-title text-white mb-0">Blogs</h4>
                      </div>
                      <div className="content-card-right ms-auto">
                        <Link to="/add-blog">
                          <button className="btn btn-add d-flex flex-wrap align-items-center justify-content-center rounded-circle">
                            <PlusSquareFill className="text-white" />
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="header-content">
                        <div className="table-responsive mb-0">
                          <table
                            id="my-table"
                            className="custom-table shop-table"
                          >
                            <thead>
                              <tr>
                                <th className="text-capitalize">Id</th>
                                <th className="text-capitalize">Name</th>
                                <th className="text-capitalize">Type</th>
                                <th className="text-capitalize">Mobile</th>
                                <th className="text-capitalize">Address</th>
                                <th className="text-capitalize text-center">
                                  actions
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <a href="/">123</a>
                                </td>
                                <td>Mudassar Saddiqui</td>
                                <td>Distribution</td>
                                <td>0318-2113002</td>
                                <td>Multan</td>
                                <td className="action text-center">
                                  <button className="btn p-0 edit d-inline-block me-2">
                                    <EyeFill />
                                  </button>
                                  <button className="btn p-0 d-inline-block">
                                    <Trash2Fill />
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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
export default Dashboard;
