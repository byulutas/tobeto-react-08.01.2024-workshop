import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useSelector } from "react-redux";
import CartBadge from "../../pages/Cart/CartBadge";

type Props = {};

const Navbar = (props: Props) => {
  const authContext: any = useContext(AuthContext);

  const cartState = useSelector((state: any) => state.cart);

  return (
    <nav
      className="navbar bg-dark navbar-expand-lg bg-body-tertiary mb-4"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Market
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/add-product"}>
                Ürün Ekle
              </Link>
            </li>
            {!authContext.isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Giriş Yap
                </Link>
              </li>
            )}
          </ul>
          {(
            <div className="d-flex align-items-center">
              <CartBadge />
            </div>
          )}
          <div className="d-flex align-items-center">
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">
                Çıkış
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
