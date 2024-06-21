import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  asChild?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={(className="button-31", className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
