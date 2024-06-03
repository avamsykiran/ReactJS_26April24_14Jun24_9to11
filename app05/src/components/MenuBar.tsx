
interface MenuBarProps {
    appName:string;
}

const MenuBar = ({ appName="React Demo App" }:MenuBarProps) => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{appName}</a>
        </div>
    </nav>
);

export default MenuBar;