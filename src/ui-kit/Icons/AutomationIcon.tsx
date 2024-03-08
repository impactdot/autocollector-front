type Props = {
  bgColor?: string
  fillColor?: string
  size?: number
}

export const AutomationIcon = ({ bgColor, fillColor, size = 24 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.3337 16.5833C22.2221 16.1301 22.2221 14.8699 21.3337 14.4167L20.0101 13.7368C18.8316 13.1294 17.8706 12.1684 17.2633 10.9899L16.5833 9.66632C16.1301 8.77789 14.8699 8.77789 14.4167 9.66632L13.7368 10.9899C13.1294 12.1684 12.1684 13.1294 10.9899 13.7368L9.66632 14.4167C8.77789 14.8699 8.77789 16.1301 9.66632 16.5833L10.9899 17.2633C12.1684 17.8706 13.1294 18.8316 13.7368 20.0101L14.4167 21.3337C14.8699 22.2221 16.1301 22.2221 16.5833 21.3337L17.2633 20.0101C17.8706 18.8316 18.8316 17.8706 20.0101 17.2633L21.3337 16.5833Z"
        fill={fillColor || '#9896ae'}
      />
      <path
        d="M9.64121 7.08333C10.1196 6.83926 10.1196 6.16074 9.64121 5.91667L8.92852 5.55056C8.29393 5.2235 7.7765 4.70607 7.44944 4.07148L7.08333 3.35879C6.83926 2.8804 6.16074 2.8804 5.91667 3.35879L5.55056 4.07148C5.2235 4.70607 4.70607 5.2235 4.07148 5.55056L3.35879 5.91667C2.8804 6.16074 2.8804 6.83926 3.35879 7.08333L4.07148 7.44944C4.70607 7.7765 5.2235 8.29393 5.55056 8.92852L5.91667 9.64121C6.16074 10.1196 6.83926 10.1196 7.08333 9.64121L7.44944 8.92852C7.7765 8.29393 8.29393 7.7765 8.92852 7.44944L9.64121 7.08333Z"
        fill={fillColor || '#9896ae'}
      />
    </svg>
  )
}