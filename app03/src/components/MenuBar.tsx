
interface MenuBarProps {
    appName:string;
}

/*const MenuBar: React.FC<MenuBarProps> = ({ appName }) => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{appName ?? "React Demo App"}</a>
        </div>
    </nav>
);*/

/*
const MenuBar = ({ appName }:MenuBarProps) => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{appName ?? "React Demo App"}</a>
        </div>
    </nav>
); */

const MenuBar = ({ appName="React Demo App" }:MenuBarProps) => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{appName}</a>
        </div>
    </nav>
);

export default MenuBar;