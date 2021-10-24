import React from 'react'
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import { styles } from "../styles";
import { Inertia } from "@inertiajs/inertia";
const PasswordConfirm = () => {
    const [password, setPassword] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            password : password
        }

        Inertia.post('/user/confirm-password', payload, {
            onStart : () => {
                setIsLoading(true)
            },
            onSuccess : () => {
                setIsLoading(false)
            },
            onError : () => {
                setIsLoading(false)
            }
        })        

    }
    return (
        <div>
            <Helmet>
                <title>Password Confirm</title>
            </Helmet>
            <h1 className="text-xl text-center font-bold mb-3">
                Password Confirmation
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    className={styles.classNameInput}
                    type="password"
                />
                <button
                    disabled={password === null || password.length < 8}
                    className={styles.classNameButton(
                        `${
                            password === null || password.length < 8
                                ? "bg-purple-400"
                                : "bg-purple-700"
                        }`
                    )}
                >
                    {isLoading ? 'Mengecek Password ...' : 'Confirm'}
                </button>
            </form>
        </div>
    );
}
PasswordConfirm.layout = page => <Layout user={page.props.user} children={page} />
export default PasswordConfirm