export interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  logo?: string;
  upperText?: string;
  lowerText?: string;
}

function ButtonLink({ href, children, className, target }: ButtonLinkProps) {
  return (
    <a
      target={target}
      href={href}
      children={children}
      className={className}
    ></a>
  );
}

export default ButtonLink;
