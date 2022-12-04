type IconBasketProps = {
  size?: number;
  color?: string | undefined;

  className?: string;
};

export default function IconBasket({
  size = 20,
  color = "#333333",
  className = "",
}: IconBasketProps) {
  return (
    <div className={className}>
      <svg
        width="12"
        height="16"
        viewBox="0 0 12 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0C7.1038 0 8 0.8962 8 2H11C11.5523 2 12 2.44772 12 3C12 3.55228 11.5523 4 11 4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H4C4 0.8962 4.8962 0 6 0Z"
          fill={color}
        />
        <path
          d="M3.07284 5.97676C3.00823 5.42826 2.51121 5.036 1.96272 5.10062C1.41423 5.16523 1.02197 5.66225 1.08658 6.21074L2.03174 14.234C2.15038 15.2411 3.00395 16 4.01801 16H7.98504C8.9991 16 9.85267 15.2411 9.97131 14.234L10.9165 6.21074C10.9811 5.66225 10.5888 5.16523 10.0403 5.10062C9.49184 5.036 8.99482 5.42826 8.93021 5.97676L7.98504 14H4.01801L3.07284 5.97676Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
