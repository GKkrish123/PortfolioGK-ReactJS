import React from 'react'

const HeaderButton = () => {

    const scrollTo = () => {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <div className="mx-auto" style={{ zIndex: 1 }}>
                <span onClick={scrollTo}><button className="see">Checkout Portfolio<i className="fas fa-eye"></i></button></span>
            </div>
        </>
    )
}

export default HeaderButton
