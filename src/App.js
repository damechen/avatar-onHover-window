import React, { Component } from "react";
// import { render } from "react-dom";
import sprite from "./sprite.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showUserCard: false,
      isHoverOnCard: false,
      loadingImageClass: "",
      loadingContentClass: "hidden"
    };
  }
  showCard() {
    this.setState({
      showUserCard: true,
      loadingContentClass: "hidden",
      loadingImageClass: ""
    });
    setTimeout(() => {
      this.setState({
        loadingImageClass: "hidden",
        loadingContentClass: ""
      });
    }, 1000);
    console.log("Mouse over");
  }

  hideCard() {
    setTimeout(() => {
      if (!this.state.isHoverOnCard) {
        this.setState({
          showUserCard: false
        });
        console.log("Mouse Leave");
      }
    }, 1000);
  }

  MouseEnterOnContentDiv() {
    this.setState({
      showUserCard: true,
      isHoverOnCard: true
    });
  }

  MouseLeaveOnContentDiv() {
    setTimeout(() => {
      this.setState({
        showUserCard: false,
        isHoverOnCard: false
      });
    }, 1000);
  }

  render() {
    return (
      <div className="user-link">
        <a href="/" className="user-link--link">
          <span className="user-link--span">
            <img
              onMouseEnter={() => this.showCard()}
              onMouseLeave={() => this.hideCard()}
              className="user-link__avatar"
              src="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/LvDrrzE4N7U9wagPTfQcAe9Jwg53"
              alt="User"
            ></img>
          </span>
        </a>
        {this.state.showUserCard ? (
          <div
            onMouseEnter={() => this.MouseEnterOnContentDiv()}
            onMouseLeave={() => this.MouseLeaveOnContentDiv()}
            className="user-card"
          >
            <svg className={this.state.loadingImageClass + " spinner"}>
              <circle cx="20" cy="20" r="18"></circle>
            </svg>
            <div className={this.state.loadingContentClass + " card-content "}>
              <a href="/" className="user-card__header">
                <div className="user-card__avatar">
                  <img
                    src="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/LvDrrzE4N7U9wagPTfQcAe9Jwg53"
                    className="user-avatar__img"
                    alt=""
                  ></img>
                </div>
                <div className="user-card__names">
                  <div className="user-card__full-name">Cristian</div>
                  <div className="user-card__username">@XCS</div>
                </div>
              </a>
              <a href="/" className="user-card__bio">
                <p>
                  Passionate Full Stack and Game Developer who loves solving
                  hard problems. I am currently testing my entrepreneurial
                  qualities with several projects, one of them being
                  userTrack.net, a self-hosted analytics platform. I am on IH to
                  learn more about marketing and also share my vast technical
                  knowledge. Sometimes I stream code at: twitch.tv/XCSme
                </p>
              </a>
              <div className="user-card__items">
                <a href="/" className="user-card__item">
                  <label>Founder</label>
                  <div className="user-card__item--para">
                    <div className="product-avatar">
                      <img
                        src="https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/usertrack-analytics/LvDrrzE4N7U9wagPTfQcAe9Jwg53?avatarupdatetimestamp=undefined"
                        className="product-avatar__img"
                        alt=""
                      ></img>
                    </div>
                    <p>userTrack - analytics ($1K/mo)</p>
                  </div>
                </a>
                <div className="user-card__item-row">
                  <div className="user-card__item">
                    <label>Followers</label>
                    <p>236</p>
                  </div>
                  <div className="user-card__item">
                    <label>Points</label>
                    <p>552</p>
                  </div>
                </div>
                <div className="user-card__item">
                  <label>Location</label>
                  <div className="user-card__item--para">
                    <p>Amsterdam, The Netherlands</p>
                  </div>
                </div>
                <div className="user-card__item">
                  <label>Joined</label>
                  <div className="user-card__item--para">
                    <p>December 13th, 2019</p>
                  </div>
                </div>
              </div>
              <footer className="user-card__footer">
                <button className="user-card__follow-button follow-button follow-button--not-following">
                  <div className="follow-button__content">
                    <svg viewBox="0 0 24 24" className="follow-button__icon">
                      <use href={sprite + "#follow"}></use>
                    </svg>
                    <label className="follow-button__label">Follow</label>
                  </div>
                </button>
                <a
                  className="user-card__contact-button"
                  href="/"
                  target="_blank"
                >
                  <svg viewBox="0 0 24 24" className="user-card__contact-icon">
                    <use href={sprite + "#twitter"}></use>
                  </svg>
                </a>
                <a
                  className="user-card__contact-button"
                  href="/"
                  target="_blank"
                >
                  <svg viewBox="0 0 24 24" className="user-card__contact-icon">
                    <use href={sprite + "#email"}></use>
                  </svg>
                </a>
              </footer>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
