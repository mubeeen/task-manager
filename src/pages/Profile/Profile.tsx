import { useState } from "react";
import ModalComponent from "../../components/Modal/Modal";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <button onClick={handleShow}>Open Modal</button>
      <ModalComponent show={show} handleClose={handleClose} />
    </>
  );
};

export default Profile;
