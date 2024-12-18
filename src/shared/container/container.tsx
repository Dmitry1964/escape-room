import styles from './container.module.scss';

type TContainerProps = {
  children: React.ReactNode;
}

const Container = ({ children }: TContainerProps): JSX.Element => (
  <div className={styles.container}>{children}</div>
);

export default Container;
