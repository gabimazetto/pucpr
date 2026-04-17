import { Parallax } from 'react-parallax';
import imageOne from "../images/page1.png"

const ImageOne = () => (
    <Parallax className="image"  bgImage={imageOne} strength={600}>
            <div className="content">
                <div className="container-page1">
                    <h3 className="image-text">MUDA AQUI</h3>
                <span>MUDA AQUI </span>
                </div>
        </div>
    </Parallax>
);

export default ImageOne