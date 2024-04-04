"use client";

import Logo from "@/components/elements/Logo/Logo";
import { openMenu } from "@/context/modals";
import useLang from "@/hooks/useLang";
import { addOverflowHiddenToBody } from "@/lib/utils/common";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  const { lang, translations } = useLang();

  const handleOpenMenu = () => {
    addOverflowHiddenToBody();
    openMenu();
  };

  return (
    <header className="header">
      <div className="container header__container">
        <button className="btn-reset header__burger" onClick={handleOpenMenu}>
          {translations[lang].header.menu_btn}
        </button>

        <Menu />

        <div className="header__logo">
          <Logo />
        </div>

        <ul className="header__links list-reset">
          <li className="header__links__item">
            <button className="btn-reset header__links__item__btn header__links__item__btn--search" />
          </li>

          <li className="header__links__item">
            <Link
              href="/favorites"
              className="header__links__item__btn header__links__item__btn--favorites"
            >
              {/* {!!currentFavoritesByAuth.length && (
                <span className="not-empty" />
              )} */}
            </Link>
          </li>

          <li className="header__links__item">
            <Link
              className="header__links__item__btn header__links__item__btn--compare"
              href="/comparison"
            >
              {/* {!!currentComparisonByAuth.length && (
                <span className="not-empty" />
              )} */}
            </Link>
          </li>

          <li className="header__links__item">
            <Link
              className="header__links__item__btn header__links__item__btn--cart"
              href="/cart"
            >
              {/* {!!currentComparisonByAuth.length && (
                <span className="not-empty" />
              )} */}
            </Link>
          </li>

          <li className="header__links__item header__links__item--profile">
            {/* {isAuth ? (
              <HeaderProfile />
            ) : loginCheckSpinner ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <button
                className="btn-reset header__links__item__btn header__links__item__btn--profile"
                onClick={handleOpenAuthPopup}
              />
            )} */}
            <button className="btn-reset header__links__item__btn header__links__item__btn--profile" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

// https://www.figma.com/file/iT1xfXq3NqBNVEF0dSPfW6/%D0%92%D0%B5%D0%B1-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-PRO-(Copy)?type=design&node-id=1474-96145&mode=design&t=mb6vVl48uxzlgaDb-0
// https://rostelecom-shop.vercel.app/
// https://github.com/skillBlogWebDev/rostelecom-shop
// https://nextjs.org/docs/pages/api-reference/create-next-app
// https://www.youtube.com/watch?v=XTY7YNUaAtY
