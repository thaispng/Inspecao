import Image from 'next/image';
import Logo from '../../../../public/logo.png';

function ImageMain() {
    return (
        <Image className="laranja-primary"src={Logo} width={75} height={75} alt="Logo" />
    );
}

export default ImageMain;