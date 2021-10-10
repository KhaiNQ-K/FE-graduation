import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  const { limit, bodyData } = props;
  const intitDataShow =
    limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData;
  const [dataShow, setDataShow] = useState(intitDataShow);
  let pages = 1;

  let range = [];
  if (limit !== undefined) {
    let page = Math.floor(bodyData.length / Number(limit));
    page = bodyData.length % Number(limit) === 0 ? page : page + 1;
    range = [...Array(page).keys()];
  }

  const [currentPage, setCurrentPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(limit) * page;
    const end = start + Number(limit);
    setDataShow(bodyData.slice(start, end));
    setCurrentPage(page);
  };

  return <div></div>;
}

Table.propTypes = {};

export default Table;
