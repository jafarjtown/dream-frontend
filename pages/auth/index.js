export default function index() {
    const login = async () => {
        let username = await document.querySelector('[name="username"]').value
        let password = await document.querySelector('[name="password"]').value
        let req = await fetch('http://localhost:8000/api/auth/login/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        let res = await req.json()
        if (res.key) {
            localStorage.setItem('token', res.key)
            
        }
    }
    return (
        <div>
            <input type={'text'} name="username"/>
            <input type={'password'} name="password" />
            <button onClick={login}>login</button>
        </div>
    )
}
