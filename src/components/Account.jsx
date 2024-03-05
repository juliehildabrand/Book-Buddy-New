const Account = ({ auth })=> {
  return (
    <div>
      Account Info. You are { auth.email }
    </div>
  );
};

export default Account;