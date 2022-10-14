import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Nav, Nav1, SignUp, SignIn, AddClient} from "./components";
import {Switch, Route} from "react-router-dom";
import Try from "./components/Try";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Switch>
      <Route path="/" component={Navbar} />
      <Route exact path="/signup" component={Nav} />
      <Route exact path="/signin" component={Nav1} />
      <Route exact path="/client" component={Navbar} />
    </Switch>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Switch>
      <Route exact path="/" component={Hero} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/client" component={Try} />
      <Route exact path="/home" component={Hero} />
    </Switch>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
    {/* <Switch>
      <Route exact path="/signup" component={SignUp} />
    </Switch> */}
  </div>
);

export default App;
