import AddPost from "./components/AddPost";
import PostList from "./components/PostList";

const App = () => {
    return (
        <div>
            <h1 style={styles.header}>Liste des Posts</h1>
            <AddPost />
            <PostList />
        </div>
    );
};

const styles = {
    header: { textAlign: "center", color: "#333", margin: "20px 0" },
};

export default App;
