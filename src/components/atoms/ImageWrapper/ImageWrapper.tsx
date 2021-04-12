import { Wrapper } from './ImageWrapper.styles';

const ImageWrapper = () => {
  return (
    <Wrapper>
      <picture>
        <source
          media='(min-width: 1440px)'
          srcSet={process.env.PUBLIC_URL + '/images/bg-header-desktop.svg'}
        />
        <img
          src={process.env.PUBLIC_URL + '/images/bg-header-mobile.svg'}
          alt='header'
        />
      </picture>
    </Wrapper>
  );
};

export { ImageWrapper };
