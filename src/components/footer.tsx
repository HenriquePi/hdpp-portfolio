import React from "react";


import "./style/_footer.scss";

export const Footer = () => {
    return (
        <div className="component-footer">
            <footer className="footer">
                <div className="content has-text-right">
                    <ul>
                        <li>Name</li>
                        <li>Email</li>
                        <li>Title</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}