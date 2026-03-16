import axios from "axios"

export const fetchUser = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/api/v1/auth/me", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("[fetchUser] error:", error);
    }
}