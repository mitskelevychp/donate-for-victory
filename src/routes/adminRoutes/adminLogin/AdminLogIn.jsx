import LogIn from "../../../components/logIn/LogIn";
import DocumentTitle from "../../DocumentTitle";

function AdminLogIn() {
  return (
    <>
      <DocumentTitle title="Увійдіть в систему" />
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! for portfolio !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <div
        style={{
          border: "solid 1px black",
          padding: "20px",
          margin: "40px 40px 0px",
        }}
      >
        <p>
          <b>Доступ для адміністратора:</b>
        </p>
        <p>login: admin0</p>
        <p>password: ghT124dr</p>
        <p
          style={{
            paddingTop: "10px",
          }}
        >
          Щоб авторизуватися <b>як користувач</b>, будь ласка, перейдіть на
          сторінку:
        </p>
        <a
          href="https://donate-for-victory.web.app/log-in"
          style={{
            display: "block",
            color: "#7c8d66",
            marginTop: "10px",
            fontWeight: "700",
            ":hover": {
              color: "blue",
            },
          }}
        >
          https://donate-for-victory.web.app/admin/
        </a>
      </div>
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! for portfolio !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <LogIn
        headline="Увійдіть в систему"
        toRegistration="/adm-registration"
        toLogIn="/adm-page"
      />
    </>
  );
}

export default AdminLogIn;
