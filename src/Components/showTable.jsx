import React from "react";

import { CCard, CCardBody } from "@coreui/react";

//Loader
import Loader from "./loader.jsx";

//paggination
import PageButton from "./paggination.jsx";

import "../css/table.css";

const ShowTable = ({
  data,
  loader,
  data_availabe,
  order,
  onPageChange,
  page,
  table_header,
  onSave,
  gameTypeOption,
  statusTypeOption,
  onOrder_Change,
  handlePlayableOptionChange,
  handleId,
}) => {
  const handleChoose = (val) => {
    // let { order, onOrder_Change } = props;

    if (order === val) {
      onOrder_Change("-" + val);
    } else {
      onOrder_Change(val);
    }
  };

  const handleSelectIndex = (index) => {
    handlePlayableOptionChange(index);
  };

  return (
    <div className="row">
      <div className="col-12 text-center">
        {loader === true ? (
          <Loader />
        ) : (
          <React.Fragment>
            {data_availabe === true ? (
              <React.Fragment>
                {data.count > 0 ? (
                  <div className="table-wrapper">
                    <table className="fl-table">
                      <thead>
                        <tr>
                          {table_header.map((item) => (
                            <th
                              onClick={
                                item.haveOrder === true
                                  ? () => handleChoose(item.value)
                                  : () => {}
                              }
                              key={item.value}
                              className={
                                item.haveOrder === true ? "active_cursor" : ""
                              }
                            >
                              {item.name}
                              &nbsp;
                              {item.haveOrder === true ? (
                                order === "-" + item.value ? (
                                  <i className="fas fa-chevron-down"></i>
                                ) : order === item.value ? (
                                  <i className="fas fa-chevron-up"></i>
                                ) : (
                                  ""
                                )
                              ) : (
                                ""
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {data.results.map((item, index) => (
                          <tr key={item.id}>
                            {table_header.map((subitem, ind) => (
                              <td
                                onClick={
                                  subitem.value === "id"
                                    ? () => handleId(item.id)
                                    : () => {}
                                }
                                className={
                                  subitem.value === "id" ? "active_cursor" : ""
                                }
                                key={subitem.value}
                              >
                                {subitem.value === "is_playable" ? (
                                  <input
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    onChange={() => handleSelectIndex(index)}
                                    checked={item.is_playable}
                                  />
                                ) : subitem.value === "" ? (
                                  <button
                                    type="button"
                                    onClick={onSave}
                                    className="btn btn-sm"
                                    style={{
                                      backgroundColor: "#5c0a5c",
                                      color: "white",
                                    }}
                                  >
                                    save
                                  </button>
                                ) : subitem.value === "game" ? (
                                  gameTypeOption.length > 1 ? (
                                    gameTypeOption[item[subitem.value]].name
                                  ) : (
                                    ""
                                  )
                                ) : // item[subitem.value]
                                subitem.value === "status" ? (
                                  statusTypeOption.length > 1 ? (
                                    statusTypeOption[item[subitem.value]].name
                                  ) : (
                                    ""
                                  )
                                ) : //item[subitem.value]
                                subitem.value === "match_details" ? (
                                  item[subitem.value] &&
                                  item[subitem.value].match_name
                                ) : (
                                  // ""
                                  item[subitem.value]
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <br />
                    <PageButton
                      currentPage={page}
                      onPageChange={(val) => onPageChange(val)}
                      next={data.next}
                      previous={data.previous}
                    />
                  </div>
                ) : (
                  <div>
                    <h1>
                      <small> No Data Found</small>
                    </h1>
                  </div>
                )}
              </React.Fragment>
            ) : (
              <div>
                <h1>
                  <small> No Data Found</small>
                </h1>
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ShowTable;
/*class ShowTable extends Component {
  handleChoose = (val) => {
    let { order } = this.props;

    if (order === val) {
      this.props.onOrder_Change("-" + val);
    } else {
      this.props.onOrder_Change(val);
    }
  };

  handleSelectIndex = (index) => {
    this.props.handlePlayableOptionChange(index);
  };

  render() {
    const {
      data,
      loader,
      data_availabe,
      order,
      onPageChange,
      page,
      table_header,

      onSave,
      gameTypeOption,
      statusTypeOption,
    } = this.props;

    return (
      <CCard>
        <CCardBody>
          <div className="row">
            <div className="col-12 text-center">
              {loader === true ? (
                <Loader />
              ) : (
                <React.Fragment>
                  {data_availabe === true ? (
                    <React.Fragment>
                      {data.count > 0 ? (
                        <div className="table-wrapper">
                          <table className="fl-table">
                            <thead>
                              <tr>
                                {table_header.map((item) => (
                                  <th
                                    onClick={
                                      item.haveOrder === true
                                        ? () => this.handleChoose(item.value)
                                        : () => {}
                                    }
                                    key={item.value}
                                    className={
                                      item.haveOrder === true
                                        ? "active_cursor"
                                        : ""
                                    }
                                  >
                                    {item.name}
                                    &nbsp;
                                    {item.haveOrder === true ? (
                                      order === "-" + item.value ? (
                                        <i className="fas fa-chevron-down"></i>
                                      ) : order === item.value ? (
                                        <i className="fas fa-chevron-up"></i>
                                      ) : (
                                        ""
                                      )
                                    ) : (
                                      ""
                                    )}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {data.results.map((item, index) => (
                                <tr key={item.id}>
                                  {table_header.map((subitem) => (
                                    <td
                                      onClick={
                                        subitem.value === "id"
                                          ? () => this.props.handleId(item.id)
                                          : () => {}
                                      }
                                      className={
                                        subitem.value === "id"
                                          ? "active_cursor"
                                          : ""
                                      }
                                      key={subitem.value}
                                    >
                                      {subitem.value === "is_playable" ? (
                                        <input
                                          style={{ cursor: "pointer" }}
                                          type="checkbox"
                                          onChange={() =>
                                            this.handleSelectIndex(index)
                                          }
                                          checked={item.is_playable}
                                        />
                                      ) : subitem.value === "" ? (
                                        <button
                                          type="button"
                                          onClick={onSave}
                                          className="btn btn-sm"
                                          style={{
                                            backgroundColor: "#5c0a5c",
                                            color: "white",
                                          }}
                                        >
                                          save
                                        </button>
                                      ) : subitem.value === "game" ? (
                                        gameTypeOption.length > 1 ? (
                                          gameTypeOption[item[subitem.value]]
                                            .name
                                        ) : (
                                          ""
                                        )
                                      ) : // item[subitem.value]
                                      subitem.value === "status" ? (
                                        statusTypeOption.length > 1 ? (
                                          statusTypeOption[item[subitem.value]]
                                            .name
                                        ) : (
                                          ""
                                        )
                                      ) : //item[subitem.value]
                                      subitem.value === "match_details" ? (
                                        item[subitem.value] &&
                                        item[subitem.value].match_name
                                      ) : (
                                        // ""
                                        item[subitem.value]
                                      )}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <br />
                          <PageButton
                            currentPage={page}
                            onPageChange={(val) => onPageChange(val)}
                            next={data.next}
                            previous={data.previous}
                          />
                        </div>
                      ) : (
                        <div>
                          <h1>
                            <small> No Data Found</small>
                          </h1>
                        </div>
                      )}
                    </React.Fragment>
                  ) : (
                    <div>
                      <h1>
                        <small> No Data Found</small>
                      </h1>
                    </div>
                  )}
                </React.Fragment>
              )}
            </div>
          </div>
        </CCardBody>
      </CCard>
    );
  }
}

// map state to props

export default ShowTable;*/
