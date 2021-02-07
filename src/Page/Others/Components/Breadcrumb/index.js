import { Link } from "react-router-dom";

function Breadcrumb(props) {
    return (
      <nav aria-label="breadcrumb h6">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/">Point do Chinelo</Link></li>
          <li class="breadcrumb-item active" aria-current="page">{props.path}</li>
        </ol>
      </nav>
    )
 }

  export default Breadcrumb;
