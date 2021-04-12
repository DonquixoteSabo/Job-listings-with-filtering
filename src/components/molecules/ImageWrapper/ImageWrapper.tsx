import { Wrapper } from './ImageWrapper.styles';
//images
import mobileBgImage from 'assets/images/bg-header-mobile.svg';
import desktopBgImage from 'assets/images/bg-header-desktop.svg';

const ImageWrapper = () => {
  return (
    <Wrapper>
      <picture>
        <source media='(min-width: 1440px)' srcSet={desktopBgImage} />
        <img src={mobileBgImage} alt='header' />
      </picture>
    </Wrapper>
  );
};

export default ImageWrapper;
