import { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { dispatch } = useContext(PostContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            const newPost = {
                id: Date.now(),
                title,
                content,
            };
            dispatch({ type: "ADD_POST", payload: newPost });
            setTitle("");
            setContent("");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={styles.input}
            />
            <textarea
                placeholder="Contenu"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={styles.textarea}
            ></textarea>
            <button type="submit" style={styles.button}>
                Ajouter
            </button>
        </form>
    );
};

const styles = {
    form: { display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "0 auto" },
    input: { padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" },
    textarea: { padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" },
    button: { padding: "10px", fontSize: "16px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
};

export default AddPost;
