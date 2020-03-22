import React from 'react'
import styles from './IssuesTable.module.css'
import PropTypes from 'prop-types'
import Select from 'react-select'

const IssuesTable = ({data}) => {
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
        {data.map(({status, title, number, author, openDate}) => (
          <tr key={number}>
            <td>{makeTableCell(status)}</td>
            <td>{makeTableCell(title)}</td>
            <td>{makeTableCell(number)}</td>
            <td>{makeTableCell(author)}</td>
            <td>{makeTableCell(openDate)}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className={styles.Pagination}>
        <div className={styles.PaginationPerPage}>
          <span>Rows per page:</span>
          <Select
            className={styles.Selector}
            options={paginationOptions}
            defaultValue={paginationOptions[0]}
          />
        </div>
        <div className={styles.PaginationCountOf}>1-10 of 18091</div>
        <div className={styles.PaginationNav}>
          <button type='button'>&#8592;</button>
          <button type='button'>&#8594;</button>
        </div>
      </div>
    </div>
  )
}

export default IssuesTable

IssuesTable.propTypes = {
  data: PropTypes.array.isRequired,
}