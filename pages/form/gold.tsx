import Header from "../../components/header"
import Card_G from "../../components/gold_card"


export default function Gold() {
    return (
        <>
            <Header />
            <section>
                <div className="container">
                    <div className="row">
                        <Card_G />
                    </div>
                </div>
            </section>
        </>
    );
}