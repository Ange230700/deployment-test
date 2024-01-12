import { useNavigate, Link, useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function UserProfil() {
  const { user } = useUser();
  console.warn(user.avatar);
  const { updateUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    updateUser(null);
    navigate("/");
  };
  return (
    <div
      className="ProfileDisplaySection"
      style={
        location.pathname.includes("/profil")
          ? {
              marginBottom: "9.375vw",
            }
          : {}
      }
    >
      <div className="Profilepicturecontainer">
        <img
          className="Avatar1"
          src={
            user.avatar
              ? user.avatar
              : "https://avatars.githubusercontent.com/u/97165289"
          }
          alt="Avatar1"
        />
        <h2 className="User">{user.name}</h2>
      </div>
      {/* <div className="Editbuttoncontainer">
        <div className="Editbutton">
          <div className="ModifierProfil">Modifier profil</div>
        </div>
      </div> */}
      <div className="Useroptionscontainer">
        <div className="Useroption">
          <div className="RegarderPlusTard">
            <Link to="/favorites">Favoris</Link>
          </div>
        </div>
        <div className="Useroption">
          <div className="RegarderPlusTard">
            <Link to="/watchlist">À regarder plus tard</Link>
          </div>
        </div>
        <div className="Useroption">
          <div className="RegarderPlusTard">
            <Link to="/profileEditor">Informations du compte</Link>
          </div>
        </div>
        <div className="Useroption">
          <button
            className="RegarderPlusTardButton"
            type="button"
            onClick={handleLogOut}
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfil;
