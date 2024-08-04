import styles from "./button.module.scss";
import cn from 'classnames';


type TButtonProps = {
    children: React.ReactNode;
    className?: string;
}

const Button = ({children, className} : TButtonProps) => {
const buttonClassName = cn(styles.button, styles[`${className}`])

    return (
        <button className={buttonClassName}>{children}</button>
    )
}

export default Button