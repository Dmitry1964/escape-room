import { useState } from 'react';
import styles from './authorization-page.module.scss';

import Container from 'src/shared/container/container';
import { AuthStatus, TUserFetchData } from 'src/shared/types/app-types';
import { setUserAuthorization } from 'src/app/actions/api-actions';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from 'src/shared/routes/routes';


const AuthorizationPage = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<TUserFetchData>({ email: '', password: '' });
  const authStatus = useAppSelector((state) => state.userAuthStatus.authStatus);

  const handleEmailField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const handlePasswordField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, password: e.target.value });
  };

  const handleSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(setUserAuthorization(userData));
  };

  return (
    <main>
      {authStatus === AuthStatus.Auth && <Navigate to={AppRoutes.Catalog} />}
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
            <form
              onSubmit={(evt) => handleSubmitForm(evt)}
              className={styles.pagelogin__form}
            >
              <div className={styles.pagelogin__email}>
                <label htmlFor='email'>E-mail</label>
                <input
                  value={userData.email}
                  onChange={handleEmailField}
                  type="email"
                  name='email'
                  id='email'
                  placeholder='Адрес электронной почты'
                />

              </div>
              <div className={styles.pagelogin__password}>
                <label htmlFor='password'>Пароль</label>
                <input
                  value={userData.password}
                  onChange={handlePasswordField}
                  type="password"
                  name='password'
                  id='password'
                  placeholder='Пароль'
                />
              </div>
              <button className={styles.pagelogin__button} type='submit'>Войти</button>
            </form>
            <div className={styles.pagelogin__agreement}>
              <input type="checkbox" name='agreement' id='agreement' readOnly checked />
              <label htmlFor='agreement'>Я согласен с правилами обработки персональных<br />данных и пользовательским соглашением</label>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default AuthorizationPage;
