import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/ui/Header";
import HomePage from "../../components/HomePage";
import Footer from "../../components/ui/Footer";
import SignInSide from "../../components/ui/SignInSide";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <div style={{ height: "2000px" }}>
                  <HomePage />
                </div>
              )}
            ></Route>
            <Route
              exact
              path="/content"
              component={() => <div>Konten</div>}
            ></Route>
            <Route
              exact
              path="/aboutus"
              component={() => <div>Tentang Kami</div>}
            ></Route>
            <Route
              exact
              path="/help"
              component={() => <div>Bantuan</div>}
            ></Route>
            <Route
              exact
              path="/article"
              component={() => <div>Artikel</div>}
            ></Route>
            <Route
              exact
              path="/story"
              component={() => <div>Stori</div>}
            ></Route>
            <Route
              exact
              path="/festival"
              component={() => <div>Festival</div>}
            ></Route>
            <Route
              exact
              path="/lokakarya"
              component={() => <div>Lokakarya</div>}
            ></Route>
            <Route
              exact
              path="/video"
              component={() => <div>Video</div>}
            ></Route>
            <Route
              exact
              path="/login"
              component={() => (
                <div>
                  <SignInSide />
                </div>
              )}
            ></Route>
            <Route
              exact
              path="/signup"
              component={() => <div>Sign up</div>}
            ></Route>
          </Switch>
          {/* Landing page
          <Link to="/admin"> to admin</Link> */}
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
