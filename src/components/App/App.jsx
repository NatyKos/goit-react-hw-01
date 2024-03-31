import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import userData from "../../userData.json";
import friends from "../../friends.json"

export default function App() {
  return (
    <>
      <Profile 
        profile = {userData}
      />
      <FriendList friends={friends} />
    </>
  );
};









