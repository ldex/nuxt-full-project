<template>
    <div>
        <h2>Admin</h2>

        <p style="margin-bottom: 80px">
            This is the admin secured page.
        </p>
    </div>
</template>

<script>
    export default {
        middleware: 'authentication'
    }
</script>

<style lang="css" scoped>

</style>