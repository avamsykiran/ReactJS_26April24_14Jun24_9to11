const MenuBar = ({ appName }) => (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{appName ?? "React Demo App"}</a>
        </div>
    </nav>
);

export default MenuBar;