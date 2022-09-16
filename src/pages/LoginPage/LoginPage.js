import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import clayful from "clayful/client-js";
import { AuthContext } from "../../context/AuthContext";

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(true);
    const { isAuthenticated } = useContext(AuthContext);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password && password.length < 8) {
            setIsValid(false);
        }
        var Customer = clayful.Customer;

        var payload = {
            email,
            password,
        };

        Customer.authenticate(payload, function (err, result) {
            if (err) {
                // Error case
                console.log(err.code);
                return;
            }

            var data = result.data;
            localStorage.setItem("customerUid", data.customer);
            localStorage.setItem("accessToken", data.token);
            navigate("/");
            isAuthenticated();
        });
    };

    return (
        <div className="pageWrapper">
            <div className="auth-wrapper">
                <h1>로그인</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleEmailChange}
                        // placeholder="Email"
                        placeholder="test@gmail.com"
                        type="email"
                        name="email"
                        value={email}
                    />
                    <input
                        onChange={handlePasswordChange}
                        // placeholder="암호"
                        placeholder="12345678"
                        type="password"
                        name="password"
                        value={password}
                    />
                    {isValid ? null : <p>비밀번호는 8자리 이상 입력해주세요</p>}

                    <p>이메일 주소를 입력하세요.</p>

                    <button type="submit">로그인</button>
                    <Link
                        to="/register"
                        style={{ color: "gray", textDecoration: "none" }}
                    >
                        {" "}
                        ID가 없으신가요? 지금 생성.
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
