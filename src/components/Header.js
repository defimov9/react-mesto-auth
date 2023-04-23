import { Link, Route, Routes } from 'react-router-dom';

function Header({ email }) {
  return (
    <header className='header'>
      <div className='header__logo' />
      <Routes>
        <Route
          path='/sign-in'
          element={
            <Link className='header__link' to='/sign-in'>
              Войти
            </Link>
          }
        />
        <Route
          path='/sign-up'
          element={
            <Link className='header__link' to='/sign-up'>
              Регистрация
            </Link>
          }
        />
        <Route
          path='/'
          element={
            <div className='header__info-wrapper'>
              <p className='header__link_email'>{email}</p>
              <button className='header__exit' type='button'>
                Выйти
              </button>
            </div>
          }
        />
      </Routes>
    </header>
  );
}
export default Header;
