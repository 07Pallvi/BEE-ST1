import Image from './photo.png';
import Image2 from './photo2.png';
import TextImage from './text.png';

const Page1 =() => {

    return(
        <div className="page1">
            <div className="img1">
                <img src= {Image} alt="photo" height="400" id='firstphoto'/>
            </div>
            <div className="text">
                <img src={TextImage} alt='photo' height='230' id='textphoto' />
                <img src={Image2} alt='photo' id='lastphoto'/>
            </div>
        </div>
    );
}

export default Page1;