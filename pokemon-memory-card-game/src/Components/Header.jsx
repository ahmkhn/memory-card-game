import '../styles/header.css';
function Header(){
    return(
        <div className="header-div">
            <h1>Welcome to the memory game!</h1>
            <h2>Below you, you have a grid of nine pokemon.</h2> 
            <h2>Upon clicking they will be randomized, the goal is to not click one pokemon more than once!</h2>
        </div>
    );
}
export default Header;