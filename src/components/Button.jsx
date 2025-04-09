import { cva } from "class-variance-authority";

const buttonStyles = cva(
  " h-11 w-auto px-6 flex items-center justify-center text-md font-medium border rounded-full cursor-pointer whitespace-nowrap ",
  {
    variants: {
      variant: {
        primary: " text-neutral-950 border-lime-400 bg-lime-400 ",
        secondary: " text-white border-white bg-transparent ",
      },
      size:{
        sm: " h-9 "
      }
    },
  }
);

const Button = ({ variant = "primary" | "secondary", size, children, ...props }) => {
  return (
    <button className={buttonStyles({ variant, size })} {...props}>
      {children}
    </button>
  );
};

export default Button;
