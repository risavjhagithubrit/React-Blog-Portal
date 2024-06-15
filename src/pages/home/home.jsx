import header from "../../components/header/Header";
import posts from"../../components/posts/Posts";
import sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function home() {
  return (
      <>
        <header/>
    <div className="home">
      <posts/>
      <sidebar/>
        homepage
        </div>
        </>
  )
}
