import React from 'react'
import moment from 'moment'

import styles from './storyHeader.css'

const propTypes = { title: React.PropTypes.string }

function parseDate(date) {
  const FORMAT = 'YYYYMMDD'
  let title = ''

  if (date) {
    if (date === moment().format(FORMAT)) {
      title = '今日热闻'
    } else {
      moment().locale('zh-cn')
      title = moment(date, FORMAT).format('MM月DD日 dddd')
    }
  }

  return title
}

function StoryHeader(props) {
  const title = parseDate(props.title)

  return <header className={styles.title}>{title}</header>
}

StoryHeader.propTypes = propTypes

export default StoryHeader

