type Props = {
  bgColor?: string
  size?: number
}

export const EOAWalletIcon = ({ bgColor, size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '40'}
      height={size || '40'}
      viewBox="0 0 40 40"
      fill="none"
    >
      <rect width="40" height="40" rx="20" fill={bgColor || '#4F41EF'} />
      <path
        d="M14.8109 27H25.1891C27.0402 27 28 26.1002 28 24.3889V14.6111C28 12.8918 27.0402 12 25.1891 12H14.8109C12.9598 12 12 12.8918 12 14.6111V24.3889C12 26.1082 12.9598 27 14.8109 27ZM14.8709 15.1414C14.8709 14.6031 15.2137 14.2817 15.7965 14.2817H17.8618C18.4446 14.2817 18.7874 14.6031 18.7874 15.1414V17.0937C18.7874 17.624 18.4446 17.9534 17.8618 17.9534H15.7965C15.2137 17.9534 14.8709 17.624 14.8709 17.0937V15.1414ZM15.368 21.6572C15.0423 21.6572 14.8024 21.4242 14.8024 21.1269C14.8024 20.8457 15.0423 20.6208 15.368 20.6208H23.8522C24.1693 20.6208 24.4092 20.8457 24.4092 21.1269C24.4092 21.4242 24.1693 21.6572 23.8522 21.6572H15.368ZM15.368 24.4049C15.0423 24.4049 14.8024 24.188 14.8024 23.8988C14.8024 23.6015 15.0423 23.3685 15.368 23.3685H21.684C22.0011 23.3685 22.241 23.6015 22.241 23.8988C22.241 24.188 22.0011 24.4049 21.684 24.4049H15.368Z"
        fill="white"
      />
    </svg>
  )
}
