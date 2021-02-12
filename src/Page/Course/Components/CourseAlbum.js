import { Link } from "react-router-dom";
import photo1 from "../../../Assets/courses/curso 1.jpg";
import photo2 from "../../../Assets/courses/curso 2.jpg";
import photo3 from "../../../Assets/courses/curso 3.jpg";


function AlbumItem(props) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={props.photo} className="" />
        <div className="card-body">
          <h5 className="card-text fw-bold">Curso {props.name}</h5>
          <p className="card-text">{props.desc}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={'/course/'+props.id}>
                <button type="button" className="btn btn-sm btn-outline-secondary">Ver Curso</button>
              </Link>
              <Link to="payment">
                <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
              </Link>
            </div>
            <small className="text-muted">{props.date+(new Date().getFullYear())}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

function Album(props) {
  return (
    <div id="cursos" className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Cursos Disponíveis</h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <AlbumItem id="1" name="Chinelo Bordado" photo={photo1} desc="esse curso ensina muitas coisas" date="15/01/"/>
          <AlbumItem id="2" name="laços" photo={photo2} desc="esse curso ensina muitas coisas" date="01/01/"/>
          <AlbumItem id="3" name="Artesanato" photo={photo3} desc="esse curso ensina muitas coisas" date="22/01/"/>
        </div>
      </div>
    </div>
  )
}

export default Album;
