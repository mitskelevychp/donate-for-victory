import LogIn from "../../../components/logIn/LogIn";
import DocumentTitle from "../../DocumentTitle";

function CustomerLogIn() {
  return (
    <>
      <DocumentTitle title="Вхід до кабінету" />
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! for portfolio !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <div
        style={{
          border: "solid 1px black",
          padding: "20px",
          margin: "40px 40px 0px",
        }}
      >
        <p>
          <b>Доступ для клієнта:</b>
        </p>
        <p>login: justpetro</p>
        <p>password: ghT124dr</p>
        <p
          style={{
            paddingTop: "10px",
          }}
        >
          Щоб авторизуватися <b>як адміністратор</b>, будь ласка, перейдіть на
          сторінку:
        </p>
        <a
          href="https://donate-for-victory.web.app/admin"
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
        headline="Увійти"
        toRegistration="/registration"
        toLogIn="/account"
      />
    </>
  );
}

export default CustomerLogIn;
