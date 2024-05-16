import Image from 'next/image';
import Logo from '../../../../public/logo.png';

function ImageMain({width, height}) {
    return (
        <Image className="laranja-primary"src={Logo} width={width} height={height} alt="Logo" />
    );
}

export default ImageMain;