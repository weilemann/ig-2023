import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://avatars.githubusercontent.com/u/55397252?s=400&u=8cdfc8b57652f96e374fdbc3b9017354dea44824&v=4"
                alt="Yuri Weilemann"
            />

            <div className={styles.profile}>
                <strong>Yuri Weilemann</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}