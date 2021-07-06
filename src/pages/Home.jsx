import * as React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { withRouter } from 'react-router';
import Header from '../components/Header';
import Intro from '../components/Intro';
import ProductDesign from '../components/ProductDesign';
import DesignProcess from '../components/DesignProcess';
import UserExperience from '../components/UserExperience';
import VisualDesign from '../components/VisualDesign';
import ProductDesignImage from '../images/product-design.png';
import { getPage } from '../redux/ducks/page';
import Form from '../components/Form';

class App extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    this.props.getPage();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { data, loading } = this.props;
    if (!data && loading) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <Header
          title="Product Design"
          description="Our multifaceted apps are custom built and developed to support multiple platforms, including both Android and iOS, making apps accessible for all"
          image={ProductDesignImage}
          displayAbout
        />
        <Intro />
        <DesignProcess />
        <ProductDesign />
        <UserExperience />
        <VisualDesign />
        <Form />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.page.data,
  loading: state.page.loading,
});

const mapDispatchToProps = {
  getPage,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
