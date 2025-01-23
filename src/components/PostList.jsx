import { useContext } from "react";
import { PostContext } from "../context/PostContext";

const PostList = () => {
    const { state } = useContext(PostContext);

    return (
        <div style={styles.container}>
            {state.posts.length === 0 ? (
                <p style={styles.empty}>Aucun post ajouté.</p>
            ) : (
                state.posts.map((post) => (
                    <div key={post.id} style={styles.post}>
                        <h3 style={styles.title}>{post.title}</h3>
                        <p style={styles.content}>{post.content}</p>
                    </div>
                ))
            )}
        </div>
    );
};

const styles = {
    container: { maxWidth: "600px", margin: "20px auto", padding: "10px", backgroundColor: "#f9f9f9" },
    empty: { textAlign: "center", fontSize: "18px", color: "#555" },
    post: { marginBottom: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px", backgroundColor: "#fff" },
    title: { fontSize: "20px", marginBottom: "5px" },
    content: { fontSize: "16px", color: "#666" },
};

export default PostList;