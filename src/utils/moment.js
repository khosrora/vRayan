import moment from 'jalali-moment'



const Moment = ({ date }) => {
    return <span>{moment(date, 'jYYYjMMjDD').format("jYYYY/jMM/jDD").toString()}</span>
}

export default Moment