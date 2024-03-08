type Props = {
  color?: string
}

export const LoginIcon = ({ color }: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#F5F5F5" />
      <path
        d="M15.9999 23.4858C20.2563 23.4858 23.7819 19.9676 23.7819 15.7037C23.7819 11.4473 20.2563 7.92159 15.9923 7.92159C11.7359 7.92159 8.21777 11.4473 8.21777 15.7037C8.21777 19.9676 11.7434 23.4858 15.9999 23.4858ZM16.0074 15.9222C15.6609 15.9222 15.4198 15.6735 15.4198 15.3195V12.0273C15.4198 11.6733 15.6609 11.4247 16.0074 11.4247C16.3539 11.4247 16.595 11.6733 16.595 12.0273V15.3195C16.595 15.6735 16.3539 15.9222 16.0074 15.9222ZM16.0074 19.7642C13.785 19.7642 11.9468 17.9185 11.9468 15.7037C11.9468 14.6038 12.4139 13.519 13.22 12.7807C13.8001 12.2081 14.6212 13.0218 14.0336 13.6094C13.4535 14.1593 13.1296 14.8976 13.1296 15.7037C13.1296 17.3083 14.4103 18.589 16.0074 18.589C17.6045 18.589 18.8852 17.3083 18.8852 15.7037C18.8852 14.8976 18.5537 14.1593 17.9812 13.6169C17.3936 13.0293 18.2072 12.2157 18.7948 12.7807C19.6009 13.5265 20.0679 14.6113 20.0679 15.7037C20.0679 17.9185 18.2298 19.7642 16.0074 19.7642Z"
        fill={color || '#060723'}
      />
    </svg>
  )
}