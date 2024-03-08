type Props = {
  color?: string
  size?: number
}

export const WETHIcon = ({ color, size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '20'}
      height={size || '20'}
      viewBox="0 0 32 32"
      fill="none"
    >
      <g clipPath="url(#clip0_51_254)">
        <path
          d="M27.8154 9.66172L23.6615 5.50788C21.2923 2.52326 17.6307 0.61557 13.5384 0.61557C6.39997 0.61557 0.615356 6.40019 0.615356 13.5386C0.615356 17.631 2.52305 21.2925 5.50766 23.6617L9.66151 27.8156C10.1915 28.3494 10.8218 28.7731 11.5163 29.0622C12.2107 29.3513 12.9555 29.5001 13.7077 29.5001C14.4599 29.5001 15.2046 29.3513 15.8991 29.0622C16.5935 28.7731 17.2239 28.3494 17.7538 27.8156L27.8154 17.754C30.0615 15.5386 30.0615 11.9079 27.8154 9.66172Z"
          fill="#ED1E79"
        />
        <path
          d="M13.7231 30.1233C12.0308 30.1233 10.4308 29.4771 9.23077 28.2771L5.07692 24.1233C1.84615 21.5386 0 17.6617 0 13.5386C0 6.06172 6.06154 0.000183105 13.5385 0.000183105C17.6615 0.000183105 21.5385 1.84634 24.1231 5.07711L28.2462 9.23095C29.4462 10.431 30.0923 12.031 30.0923 13.7233C30.0923 15.4156 29.4462 17.0156 28.2462 18.2156L18.1846 28.2463C16.9846 29.4463 15.4154 30.1233 13.7231 30.1233ZM13.5385 1.23095C6.73846 1.23095 1.23077 6.73864 1.23077 13.5386C1.23077 17.2925 2.92308 20.831 5.87692 23.1694L5.93846 23.231L10.0923 27.3848C11.0462 28.3386 12.3385 28.8925 13.6923 28.8925C15.0462 28.8925 16.3385 28.3694 17.2923 27.3848L27.3846 17.3233C28.3385 16.3694 28.8923 15.0771 28.8923 13.7233C28.8923 12.3694 28.3692 11.0771 27.3846 10.1233L23.1692 5.87711C20.8308 2.92326 17.2923 1.23095 13.5385 1.23095Z"
          fill="black"
        />
        <path
          d="M0.372559 16.1663L1.24271 15.2962L8.85779 22.9109L7.98764 23.7811L0.372559 16.1663ZM0.372559 11.5509L1.24271 10.6808L8.85779 18.2956L7.98764 19.1657L0.372559 11.5509Z"
          fill="black"
        />
        <path
          d="M18.4615 31.3848C25.5987 31.3848 31.3846 25.5989 31.3846 18.4617C31.3846 11.3245 25.5987 5.53864 18.4615 5.53864C11.3243 5.53864 5.53845 11.3245 5.53845 18.4617C5.53845 25.5989 11.3243 31.3848 18.4615 31.3848Z"
          fill="white"
        />
        <path
          d="M18.4616 32.0002C10.9846 32.0002 4.9231 25.9386 4.9231 18.4617C4.9231 10.9848 10.9846 4.92325 18.4616 4.92325C25.9385 4.92325 32 10.9848 32 18.4617C32 25.9386 25.9385 32.0002 18.4616 32.0002ZM18.4616 6.15402C11.6616 6.15402 6.15386 11.6617 6.15386 18.4617C6.15386 25.2617 11.6616 30.7694 18.4616 30.7694C25.2616 30.7694 30.7693 25.2617 30.7693 18.4617C30.7693 11.6617 25.2616 6.15402 18.4616 6.15402Z"
          fill="black"
        />
        <path
          d="M18.4615 28.3079C23.8994 28.3079 28.3077 23.8996 28.3077 18.4617C28.3077 13.0238 23.8994 8.61557 18.4615 8.61557C13.0236 8.61557 8.61536 13.0238 8.61536 18.4617C8.61536 23.8996 13.0236 28.3079 18.4615 28.3079Z"
          fill="white"
        />
        <path
          d="M18.4615 28.9233C12.7077 28.9233 8 24.2156 8 18.4617C8 12.7079 12.7077 8.00018 18.4615 8.00018C24.2154 8.00018 28.9231 12.7079 28.9231 18.4617C28.9231 24.2156 24.2154 28.9233 18.4615 28.9233ZM18.4615 9.23095C13.3846 9.23095 9.23077 13.3848 9.23077 18.4617C9.23077 23.5386 13.3846 27.6925 18.4615 27.6925C23.5385 27.6925 27.6923 23.5386 27.6923 18.4617C27.6923 13.3848 23.5385 9.23095 18.4615 9.23095ZM16.1846 21.5386H13.3846V16.031H16.0923V17.0463H14.4308V18.2771H15.9692V19.2925H14.4308V20.554H16.1846V21.5386ZM20.2462 17.0463H18.9231V21.5386H17.8462V17.0463H16.5231V16.031H20.2462V17.0463ZM24.9231 21.5386H23.8769V19.2925H21.9385V21.5386H20.8923V16.031H21.9385V18.2156H23.8769V16.031H24.9231V21.5386Z"
          fill="black"
        />
      </g>
    </svg>
  )
}