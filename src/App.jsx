import "./App.css";
import Customer from "./components/Customer";
import CustomerDetails from "./components/CustomerDetails";
import CustomerHeading from "./components/CustomerHeading";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from "./store/store";
import CustomerTableHeading from "./components/CustomerTableHeading";
import PersonDetails from "./components/PersonDetails";

function App() {
  return (
    <>
      <PostListProvider>
        <div className="Container">
          <Sidebar></Sidebar>
          <div className="Headercontainer">
            <Header></Header>
            <PersonDetails></PersonDetails>
            <CustomerHeading></CustomerHeading>
            <div className="customerdetails">
              <CustomerTableHeading></CustomerTableHeading>
              <CustomerDetails></CustomerDetails>
            </div>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
