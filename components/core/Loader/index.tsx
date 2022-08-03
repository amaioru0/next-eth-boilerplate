import { FC } from 'react'
import LoaderWrapper from './index.style';
import { colors } from "utils/constants";

const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <svg enableBackground="new 0 0 0 0">
        <circle fill={colors.primary} stroke="none" cx="6" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill={colors.primary} stroke="none" cx="26" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill={colors.primary} stroke="none" cx="46" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
      </svg>
    </LoaderWrapper>
  );
};

export default Loader;