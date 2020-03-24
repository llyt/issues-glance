import React from 'react'
import styles from './IssuesTable.module.css'
import PropTypes from 'prop-types'
import Select from 'react-select'
import Button from '../UI/Button/Button'
import Loader from '../UI/Loader/Loader'

const IssuesTable = React.memo((
  {
    isLoading,
    data,
    currentPage,
    perPage,
    issuesTotalCount,
    paginationHandler,
    perPageHandler
  }) => {
  // TODO Fix when issues on page less than total
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

  const tableHeads = ['Status', 'Title', 'Number', 'Author', 'Open Date']

  const paginationOptions = [
    { value: '10', label: '10' },
    { value: '25', label: '25' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
  ]

  const makeTableCell = (prop) => prop ? prop : <span>No data</span>

  const makeAuthorTableCell = ({ html_url, avatar_url, login }) => (
    <a
      href={html_url}
      title={`Open GitHub profile in new tab`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <img src={avatar_url} alt={login} />
      <span>{login}</span>
    </a>
  )

  const makeTimeTableCell = (date) => {
    const timeStampDate = new Date(Date.parse(date))
    return timeStampDate.toLocaleDateString()
  }

  if (isLoading) {
    return <Loader />
  }

  if (data.length === 0) {
    return null
  }

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
        {data.map(({state, title, number, author, openDate}, index) => (
          <tr key={number}>
            <td>{makeTableCell(state)}</td>
            <td>{makeTableCell(title)}</td>
            <td>{makeTableCell(number)}</td>
            <td>{makeAuthorTableCell(author)}</td>
            <td>{makeTimeTableCell(openDate)}</td>
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
            defaultValue={paginationOptions.filter(({value}) => Number(value) === perPage)}
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
})


export default IssuesTable

IssuesTable.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  issuesTotalCount: PropTypes.number.isRequired,
  paginationHandler: PropTypes.func.isRequired,
  perPageHandler: PropTypes.func.isRequired
}