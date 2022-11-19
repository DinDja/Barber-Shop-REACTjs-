import Header from "../../components/header"
import Card from "../../components/card_black"


export default function Black() {
    return (
        <>
            <Header />
            <section>
                <div className="container">
                    <div className="row">
                        <Card />
                    </div>
                </div>
            </section>
        </>
    );
}