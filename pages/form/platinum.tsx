import Header from "../../components/header"
import Card_P from "../../components/platinum_card"


export default function Platinum() {
    return (
        <>
            <Header />
            <section>
                <div className="container">
                    <div className="row">
                        <Card_P />
                    </div>
                </div>
            </section>
        </>
    );
}