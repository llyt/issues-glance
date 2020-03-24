import React from 'react'
import styles from './IssuesTable.module.css'
import PropTypes from 'prop-types'
import Select from 'react-select'
import Button from '../UI/Button/Button'

const IssuesTable = ({data, currentPage, perPage, issuesTotalCount, paginationHandler, perPageHandler}) => {
  const paginationCountOf = `${currentPage * perPage - perPage + 1}-${currentPage * perPage} of ${issuesTotalCount}`

  const selectHandler = ({ value }) => {
    perPageHandler(value)
  }

  const onClickPagination = (event) => {
    const nextPageDispatch = {
      'prev': currentPage - 1,
      'next': currentPage + 1
    }
    paginationHandler(nextPageDispatch[event.target.name])
  }

  if (data.length === 0) {
    return <div>Data is empty</div>
  }

  const tableHeads = ['Status', 'Title', 'Number', 'Author', 'Open Date']

  const paginationOptions = [
    { value: '10', label: '10' },
    { value: '25', label: '25' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
  ]

  const makeTableCell = (prop) => prop ? prop : <span>No data</span>

  return (
    <div className={styles.IssuesTable}>
      <table>
        <thead>
        <tr>
          {tableHeads.map((head, index) => (
            <th key={head + index}>{head}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        {data.map(({state, title, number, author, openDate}) => (
          <tr key={number}>
            <td>{makeTableCell(state)}</td>
            <td>{makeTableCell(title)}</td>
            <td>{makeTableCell(number)}</td>
            <td>{makeTableCell(author)}</td>
            <td>{makeTableCell(openDate)}</td>
          </tr>
        ))}
        </tbody>
      </table>
      { (issuesTotalCount / perPage) > 1
        &&
        <div className={styles.Pagination}>
          <div className={styles.PaginationPerPage}>
            <span>Rows per page:</span>
            <Select
            className={styles.Selector}
            options={paginationOptions}
            defaultValue={paginationOptions[0]}
            onChange={selectHandler}
            />
          </div>
          <div className={styles.PaginationCountOf}>{paginationCountOf}</div>
          <div className={styles.PaginationNav}>
            <Button
            type='button'
            name='prev'
            disabled={currentPage === 1}
            onClick={onClickPagination}
            >
            &#8592;
            </Button>
            <Button
            type='button'
            name='next'
            onClick={onClickPagination}
            >
            &#8594;
            </Button>
          </div>
        </div> }
    </div>
  )
}


export default IssuesTable

IssuesTable.propTypes = {
  data: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  issuesTotalCount: PropTypes.number.isRequired,
  paginationHandler: PropTypes.func.isRequired,
  perPageHandler: PropTypes.func.isRequired
}