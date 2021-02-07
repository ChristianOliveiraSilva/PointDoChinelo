

function VideoBar(props) {
    return (
        <div className="row">
            <div className="col-12 col-lg-6">
                <h3>{props.info.name}</h3>
            </div>
            <div className="col-4 col-lg-3">
                <span onClick="">Curtir</span> 
                <span title="0 pessoas gostaram dessa video aula">0 curtidas</span>
            </div>
            <div className="col-8 col-lg-3 text-end">
                <small>Autor: {props.info.author} - {props.info.date}</small>
            </div>
        </div>
      )
}

export default VideoBar;
