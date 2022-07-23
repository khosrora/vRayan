import moment from 'jalali-moment'

  

const Moment = ({ date }) => {
    return <span>{moment(date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</span>
}

export default Moment