
function Showcase() {
  return (
  <div>
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className=""></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="1" className=""></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="2" className="active"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item">
          <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Por que fazer treinamentos ou cursos online?</h1>
              <p>
                Já pensou em criar uma renda extra?
                O curso vai te mostrar a como criar seus próprios produtos e te ajudará a ter uma renda extra.
                Trabalhando para você mesmo, o céu se torna o limite!
              </p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Veja os cursos</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

          <div className="container">
            <div className="carousel-caption">
              <h1>Invista em você mesmo</h1>
              <p>
                Criar seus produtos, agora é fácil e não há dificuldade!
              </p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Tentar Aprender</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

          <div className="container">
            <div className="carousel-caption text-end">
              <h1>Compre o material do curso e ganhe-o de graça!</h1>
              <p>
                Ao comprar o material da aula que você quer fazer, você recebe o curso de graça!
                Mas se você quiser, não precisa comprar os produtos, basta comprar a aula!
              </p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Como receber o curso de graça?</a></p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>

    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4">
          <i class='fas fa-video' style={{fontSize: '4em'}}></i>
          <h2 className="fw-bold">Faça o Curso Desejado!</h2>
          <p>
            Compre o material do curso e o ganhe de graça!
          </p>
          <p><a className="btn btn-secondary" href="#cursos" role="button">Veja os cursos »</a></p>
        </div>
        <div className="col-lg-4">
          <i class='fas fa-american-sign-language-interpreting' style={{fontSize: '4.4em'}} ></i>
          <h2 className="fw-bold">Crie seu Artesanato!</h2>
          <p>
            Após fazer o curso você deve praticar! Faça os produtos da aula com o material da nossa <a href="/store" className="link">loja</a>
          </p>
          <p><a href="/store" className="btn btn-secondary" role="button">Veja a loja »</a></p>
        </div>
        <div className="col-lg-4">
          <i class='fas fa-donate' style={{fontSize: '4em'}}></i>
          <h2 className="fw-bold">Venda e faça dinheiro!</h2>
          <p>
          <small>Agora você deve criar seus produtos baseados no que te ensinamos! Mas relaxa... O curso é pra sempre estará aqui para você rever!</small>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Showcase;
