const Account = ({ auth })=> {
  return (
    <div>
      Account Info. You are { auth.email }
      <p>Account page will display here once logged in</p>
    </div>
  );
};

export default Account;