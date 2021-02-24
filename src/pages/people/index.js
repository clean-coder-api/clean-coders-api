import actor from "../../assets/img/1.jpg";
const People = (props) => {
  return (
    <>
      {props.peoples.map((people) => {
        if (people.id == props.match.params.id)
          return (
            <div key={people.id} className="people">
              <h1>{people.name}</h1>

              <div className="boxesContainer">
                <div className="box">
                  <div className='imageBox'>
                    <img src={actor} />
                  </div>
                  <div className='textBox'>
                    <p>
                      gender:<span>{people.gender}</span>
                    </p>
                    <p>
                      birth year:<span>{people.birth_year}</span>
                    </p>
                    <p>
                      height:<span>{people.height}</span>
                    </p>
                    <p>
                      mass:<span>{people.mass}</span>
                    </p>
                  </div>
                </div>
                <div className="box rightBox">
                  <p>
                    hair color:<span>{people.hair_color}</span>
                  </p>
                  <p>
                    skin color:<span>{people.skin_color}</span>
                  </p>
                  <p>
                    eye color:<span>{people.eye_color}</span>
                  </p>
                </div>
              </div>
            </div>
          );
      })}
    </>
  );
};

export default People;
