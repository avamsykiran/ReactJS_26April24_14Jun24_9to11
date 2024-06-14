"use client"

import Link from "next/link";

const MenuBar = ({ appName }: { appName: string }) => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" href="/">{appName}</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                        <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/contacts">Contacts</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default MenuBar;