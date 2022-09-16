import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import clayful from "clayful/client-js";

function RegisterPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        if (event.target.value.length < 8) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var Customer = clayful.Customer;

        var payload = {
            email,
            password,
        };
        console.log("payload", payload);

        Customer.createMe(payload, function (err, result) {
            if (err) {
                // Error case
                console.log(err.code);
            }

            navigate("/login");
        });
    };

    return (
        <div className="pageWrapper">
            <div className="auth-wrapper">
                <h1>회원가입</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleEmailChange}
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                    />
                    <input
                        onChange={handlePasswordChange}
                        placeholder="암호"
                        type="password"
                        name="password"
                        value={password}
                    />
                    {isValid ? null : <p>비밀번호는 8자리 이상 입력해주세요</p>}

                    <button type="submit">회원가입</button>
                    <Link
                        to="/login"
                        style={{ color: "gray", textDecoration: "none" }}
                    >
                        이미 ID가 있다면? 지금 로그인.
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
