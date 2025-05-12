import React, { useState, useEffect } from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    })

    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        document.body.className = theme
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleThemeToggle = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }

    const handleSearch = (e) => {
        e.preventDefault()
        // Add your own search logic or navigation here
        console.log("Searching for:", searchTerm)
    }

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/">
                    <img
                        className="header__icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                        alt="IMDB Logo"
                    />
                </Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}>
                    <span>Popular</span>
                </Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
                    <span>Top Rated</span>
                </Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
                    <span>Upcoming</span>
                </Link>
            </div>

            <div className="headerRight">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="searchInput"
                        placeholder="Search movies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>
                <button onClick={handleThemeToggle} className="themeToggle">
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
            </div>
        </div>
    )
}

export default Header