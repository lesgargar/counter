

function Card({digit}) {

  return (
        <div className='bg-secondary rounded col-2 m-2 p-2 d-flex justify-content-center' >
          <h1>
            {digit}
          </h1>
        </div>
  );
}

export default Card;