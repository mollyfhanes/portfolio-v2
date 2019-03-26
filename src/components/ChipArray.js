import React from 'react'
import Chip from '@material-ui/core/Chip'
import PropTypes from 'prop-types'

const ChipArray = (props) => {
  const { chipData } = props
  return (
    <div className="chip-array">
      {chipData.map((skill, i) => (
        <Chip className="chip" key={i} label={skill} variant="outlined" color="secondary" />
      ))}
    </div>
  )
}

export default ChipArray

ChipArray.propTypes = {
  chipData: PropTypes.arrayOf(PropTypes.String).isRequired,
}
