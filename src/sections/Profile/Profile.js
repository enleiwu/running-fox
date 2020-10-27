import './Profile.css';
// import strings from '../../resources/text';
import images from '../../resources/images';
import strings from '../../resources/text';

const personData = {
  backgroundImg: images.background,
  personImg: images.person,
  name: strings.person,
  location: strings.location,
  level: strings.pro,
  followers: 980,
  projects: 142,
  rank: 129,
};

const Profile = () => (
  <div className="profile sections">
    <img className="background-img" src={personData.backgroundImg} alt="background" />
    <div className="avatar">
      <img src={personData.personImg} alt="person" />
    </div>
    <h3 className="name">{personData.name}</h3>
    <p className="sub-strings location">{personData.location}</p>
    <div className="level">{personData.level}</div>
    <div className="social-data">
      <div>
        <p className="sub-strings">{strings.followers}</p>
        <h2 className="social-stats">{personData.followers}</h2>
      </div>
      <div>
        <p className="sub-strings">{strings.projects}</p>
        <h2>{personData.projects}</h2>
      </div>
      <div>
        <p className="sub-strings">{strings.rank}</p>
        <h2>{personData.rank}</h2>
      </div>
    </div>
  </div>
);

export default Profile;
