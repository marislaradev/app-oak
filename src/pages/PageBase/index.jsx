import { Outlet } from "react-router-dom"
import Container from "../../components/Container"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function PageBase() {
    return(
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default PageBase