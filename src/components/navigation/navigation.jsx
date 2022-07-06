import React from 'react';
import styles from './navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav className={styles.container}>
        <ul className={styles.navi}>
            <li>
                <Link to="/" aria-label="home">
                    <i id={styles.home} className="fas fa-home"></i>
                </Link>
            </li>
            <li>
                <Link to="/profile" aria-label="profile">
                    <i id={styles.profile} className="fas fa-cog"></i>
                </Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;