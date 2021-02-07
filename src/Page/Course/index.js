import './Style/style.css'
import Album from './Components/CourseAlbum'
import Comments from './Components/Comments'
import Showcase from './Components/Showcase'

function CourseHome() {
  return (
    <main>
      <Showcase />
      <Album />
      <Comments />
    </main>
  );
}

export default CourseHome;
