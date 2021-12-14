export default function ({ $axios, redirect }) {
    $axios.onError(error => {
        console.error("Catch error from Axios plugin", error.message);
        // Log error to server with Sentry, Bugsnag, ...

        if (error.response.status === 401) {
            redirect('/login')
        }
    })
}