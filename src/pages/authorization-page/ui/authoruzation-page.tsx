import styles from './authorization-page.module.scss';

import Container from 'src/shared/container/container';


const AuthorizationPage = (): JSX.Element => (
  <main>
    <Container>
      <section className={styles.pagelogin}>
        <div className={styles.pagelogin__image}>
          <picture>
            <source type='image/webp' srcSet='content/login-bg.webp' />
            <img src='content/login-bg.jpg' width={1366} alt='картинка квеста' />
          </picture>

        </div>
        <div className={styles.pagelogin__info}>
          <h2>Вход</h2>
          <form className={styles.pagelogin__form}>
            <div className={styles.pagelogin__email}>
              <label htmlFor='email'>E-mail</label>
              <input type="email" name='email' id='email' placeholder='Адрес электронной почты' />

            </div>
            <div className={styles.pagelogin__password}>
              <label htmlFor='password'>Пароль</label>
              <input type="password" name='password' id='password' placeholder='Пароль' />
            </div>
            <button className={styles.pagelogin__button} type='submit'>Войти</button>
          </form>
          <div className={styles.pagelogin__agreement}>
            <input type="checkbox" name='agreement' id='agreement' checked />
            <label htmlFor='agreement'>Я согласен с правилами обработки персональных<br/>данных и пользовательским соглашением</label>
          </div>
        </div>

      </section>
    </Container>
  </main>
);


export default AuthorizationPage;
