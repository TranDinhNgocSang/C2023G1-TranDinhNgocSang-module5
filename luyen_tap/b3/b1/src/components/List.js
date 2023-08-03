import { useEffect, useState } from "react";
import {
  getListMusic,
  editMusic,
  getMusicById,
  searchMusicByName,
  deleteMusic,
} from "../service/nhacService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function List() {
  const [music, setMusic] = useState([]);
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [detail, setDetail] = useState({});
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [pageSearch, setPageSearch] = useState(0);
  const [size, setSize] = useState(3);

  const showList = async () => {
    const data = await getListMusic(page, size);
    setMusic(data);
  };

  const handleChangeStatus = async (id, name) => {
    Swal.fire({
      title: `Bạn có muốn công khai bài hát "${name}"?`,
      text: "tác vụ không thể hoàn tác",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085D6",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const music = await getMusicById(id);
        const upMusic = {
          ...music,
          trangThai: "Công Khai",
        };
        await editMusic(upMusic);
        setFlag(!flag);
        Swal.fire("successfully deleted", "", "success");
      }
    });
  };

  const handleClickDetail = async (id) => {
    const data = await getMusicById(id);
    setDetail(data);
    setFlag(!flag);
  };

  const handleSearch = async () => {
    if (search === "") {
      await showList();
      setPageSearch(0)
    } else {
      const data = await searchMusicByName(search,pageSearch,size);
      setMusic(data.content);
    }
  };

  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 0));
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPageSearch = () => {
    if(pageSearch>=1)
    setPageSearch((pageSearch)=>pageSearch - 1);
    handleSearch();
  };

  const handleNextPageSearch = async() => {
  setPageSearch((pageSearch)=>pageSearch + 1);
    handleSearch();
  };

  const handleDelete = async (id, name) => {
    Swal.fire({
      title: `Bạn có muốn xóa bài hát "${name}"?`,
      text: "tác vụ không thể hoàn tác",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085D6",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteMusic(id);
        setFlag(!flag);
        Swal.fire("successfully deleted", "", "success");
      }
    });
  };

  useEffect(() => {
    showList();
  }, [flag, page, size]);

  return (
    <>
      <h2 style={{ color: "white" }}>{detail.tenBai}</h2>
      <h3 style={{ color: "white" }}>{detail.caSi}</h3>
      <h2>{pageSearch}</h2>
      <div className="body">
        <div className="container">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-5">
                    <h2>
                      Quản lý <b>bài hát</b>
                    </h2>
                  </div>
                  <div className="col-sm-3">
                    <div className="search-box">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search…"
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <button
                    className="col-sm-1"
                    style={{ marginTop: "10px", marginLeft: "-20px" }}
                    onClick={handleSearch}
                  >
                    tìm kiếm
                  </button>
                  <div className="col-sm-3">
                    <button
                      className="btn"
                      style={{ background: "#ffffff" }}
                      onClick={() => {
                        navigate("/add");
                      }}
                    >
                      <i style={{ color: "black" }} className="material-icons">
                        
                      </i>
                      <span style={{ color: "black" }}>Đăng ký bài hát</span>
                    </button>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead style={{ textAlign: "center" }}>
                  <tr>
                    <th style={{ width: "50px" }}>STT</th>
                    <th>Tên Bài hát</th>
                    <th>Ca sĩ</th>
                    <th>thời Gian phát</th>
                    <th>Số lượng yêu thích</th>
                    <th style={{ width: "120px" }}>Trạng Trái</th>
                    <th style={{ width: "200px" }}>Chức năng</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                  {music.map((m, index) => {
                    return (
                      <tr key={m.id}>
                        <td>{page * size + index + 1}</td>
                        <td onClick={() => handleClickDetail(m.id)}>
                          {m.tenBai}
                        </td>
                        <td>{m.caSi}</td>
                        <td>{m.thoiGian}</td>
                        <td>{m.luotThich}</td>
                        <td>{m.trangThai}</td>
                        <td>
                          <button
                            onClick={() => handleChangeStatus(m.id, m.tenBai)}
                          >
                            Đổi trạng thái
                          </button>
                          <button onClick={() => handleDelete(m.id, m.tenBai)}>
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="clearfix">
                <div className="hint-text">
                  Showing <b>5</b> out of <b>25</b> entries
                </div>
                <ul className="pagination">
                  {(page !== 0 && search==="") && (
                    <li className="page-item disabled" onClick={handlePrevPage}>
                      <a href="/#">Previous</a>
                    </li>
                  )}
                  {(search!=="" && pageSearch!==0) && (
                     <li className="page-item">
                     <a
                       href="/#"
                       className="page-link"
                       onClick={handlePrevPageSearch}
                       disabled={music.length < size}
                     >
                       PreviousSearch
                     </a>
                   </li>
                  )}
                  {search===""&&(<li>{page + 1}</li>)}
                  {search!==""&&(<li>search{pageSearch + 1}</li>)}
                  {(music.length !==0 && search ==="") && (
                     <li className="page-item">
                     <a
                       href="/#"
                       className="page-link"
                       onClick={handleNextPage}
                       disabled={music.length < size}
                     >
                       Next
                     </a>
                   </li>
                  )}
                  {(search!=="" && music.length !==0) && (
                     <li className="page-item">
                     <a
                       href="/#"
                       className="page-link"
                       onClick={handleNextPageSearch}
                       disabled={music.length < size}
                     >
                       NextSearch
                     </a>
                   </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default List;
