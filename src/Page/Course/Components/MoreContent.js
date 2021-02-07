
function Title(props) {
    return (
        <div className="p-3 border-bottom">
            <h5 className="m-0">conteudo de {props.courseName}</h5>
        </div>
    )
}
function ContentItem(props) {
    return (
        <div className="col-12 p-3 pointer">
            asdasdasdsa
        </div>
    )
}

function MoreContent(props) {
    return (
        <section className="container-fluid bg-light text-dark p-0 m-0 border">
            <Title courseName={props.courseName} />
            <div className="row">
                <ContentItem />
                <ContentItem />
                <ContentItem />
                <ContentItem />
                <ContentItem />
                <ContentItem />
                <ContentItem />
                <ContentItem />
                <ContentItem />
                <ContentItem />
                <ContentItem />
                <ContentItem />
            </div>
        </section>
      )
}

export default MoreContent;
