import Header from '../../components/header'
import Monthly from '../../components/monthly_payment _card/monthly'

export default function Home_1() {
  return (
    <>
      <Header />
      <section className='home_sec'>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className='title'>SEJA BEM VINDO, ESTILOSO!</h1>
              <p className='mt-4 comunity_paragraph'>Junte-se a comunidade dos homens mais estilosos da cidade!</p>
            </div>
          </div>
        </div>
      </section>
      <Monthly />
    </>
  );
}