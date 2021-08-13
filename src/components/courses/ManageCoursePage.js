import React from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes  from 'prop-types';

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;

    if (courses.length === 0) {
      loadCourses().catch(error => {
        console.log(error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        console.log(error);
      });
    }
  }
 
  render() {
    return (
      <>
        <h2>Manage Courses</h2>
      </>
    )
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    // debugger;
    return {
        courses: state.courses,
        authors: state.authors
    };
}

const mapDispatchToProps = {
    loadCourses,
    loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);