type IconSentProps = {
  size?: number;
  color?: string | undefined;

  className?: string;
};

export default function IconSent({
  size = 20,
  color = "#333333",
  className = "",
}: IconSentProps) {
  return (
    <div className={className}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.38268 0.0761192C7.75636 0.2309 8 0.595536 8 0.999999V3.5H9C11.7614 3.5 14 5.73858 14 8.5V13C14 13.5523 13.5523 14 13 14C12.4477 14 12 13.5523 12 13C12 11.6193 10.8807 10.5 9.5 10.5H8V13C8 13.4045 7.75636 13.7691 7.38268 13.9239C7.00901 14.0787 6.57889 13.9931 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292892C6.57889 0.00689393 7.00901 -0.0786618 7.38268 0.0761192ZM12 9.25777V8.5C12 6.84314 10.6569 5.5 9 5.5H7C6.44772 5.5 6 5.05228 6 4.5V3.41421L2.41421 7L6 10.5858V9.5C6 8.94771 6.44772 8.5 7 8.5H9.5C10.4251 8.5 11.285 8.77913 12 9.25777Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
