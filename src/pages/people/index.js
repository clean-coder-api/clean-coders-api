import actor from "../../assets/img/1.jpg";
const People = (props) => {
  return (
    <>
      {props.peoples.map((people) => {
        if (people.id == props.match.params.id)
          return (
            <div key={people.id} className="people">
              <h1>{people.name}</h1>

              <div className='boxes'>
                <div className="leftBox">
                  <div>
                    <img src={actor} />
                  </div>
                  <div>
                    <p>gender:{people.gender}</p>
                    <p>birth year:{people.birth_year}</p>
                    <p>height:{people.height}</p>
                    <p>mass:{people.mass}</p>
                  </div>
                </div>
                <div className="rightBox">
                  <p>hair color:{people.hair_color}</p>
                  <p>skin color:{people.skin_color}</p>
                  <p>eye color:{people.eye_color}</p>
                </div>
              </div>

            </div>
          );
      })}
    </>
  );
};

export default People;
