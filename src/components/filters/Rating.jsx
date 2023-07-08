import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({rating, onClick, style}) => {
  return (
    <div className='flex flex-row'>
      {
        [...Array(5)].map((_, index) => (
          <span key={index} onClick={() => onClick(index)} className={`${style}`}>
            { rating > index ? (
              <AiFillStar fontSize="20px" />
            ) : (
              <AiOutlineStar fontSize="20px" />
            ) }
          </span>
        ))
      }
    </div>
  )
}

export default Rating