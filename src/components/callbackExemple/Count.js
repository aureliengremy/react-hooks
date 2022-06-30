import React, { Fragment } from 'react'

const Count = ({text, count, bgColor}) => {

  const progress = { width: `${count}%`};
//   console.log(progress.width)
//   console.log(count)

// console.log(`Pourcentage ${text}`)

  return (
    <Fragment>
        <p className="h1">{count} %</p>
        <div className="progress">
            <div className={`progress-bar progress-bar-striped bg-${bgColor}`} 
                 role="progressbar" 
                 style={{width: progress.width}}>
            </div>
        </div>
    </Fragment>
  )
}

export default React.memo(Count)