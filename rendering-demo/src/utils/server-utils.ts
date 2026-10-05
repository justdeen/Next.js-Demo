import "server-only";

export const serverSideFunction = () => {
    console.log("serverSideFunction called");
    return "server result";
} 