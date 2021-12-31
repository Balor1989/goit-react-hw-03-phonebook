import s from './Filter.module.css'
import propTypes from 'prop-types'

const Filter = ({value, onFilterChange}) => (
    <div>
        <h2 className={s.filterTitle}>Find contacts by name</h2>
        <input className={s.filterInput}
            type="text"
            value={value}
            onChange={onFilterChange}
        />
    </div>
)

export default Filter

Filter.propTypes = {
    value: propTypes.string,
    onFilterChange: propTypes.func
}