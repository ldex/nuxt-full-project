export default function ({ store, redirect }) {
    const isAuthenticated = store.getters['authentication/loggedIn'];
    if (!isAuthenticated) {
        return redirect('/login')
    }
}