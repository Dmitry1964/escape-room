import { Link } from 'react-router-dom';
import styles from './button.module.scss';
import cn from 'classnames';
import { AppRoutes } from '../routes/routes';


type TButtonProps = {
  children: React.ReactNode;
  className?: string;
  page?: AppRoutes;
  onClick?: (evt: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Button = ({ children, className, page, onClick }: TButtonProps) => {
  const buttonClassName = cn(styles.button, styles[`${className}`]);

  return (
    <Link onClick={onClick} className={buttonClassName} to={page || '/'}>{children}</Link>
  );
};

export default Button;
