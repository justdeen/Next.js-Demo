export default async function FirstBlog() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("intentional delay")
        }, 2000)
    })
    return <>
        <h1>First Blog</h1>
    </>
}