import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";
import { expect, it } from "@jest/globals";


it("should add course when passed CREATE_COURSE_SUCCESS", () => {
  const initialState = [
    {
      title: "A"
    },
    {
      title: "B"
    }
  ];

  const newCourse={
    title: "C"
  };

  const action = actions.createCourseSuccess(newCourse);

  // act
  const newState = courseReducer(initialState, action);

  // assert
  expect(newState.length).toBe(3);
  expect(newState[0].title).toBe("A");
  expect(newState[1].title).toBe("B");
  expect(newState[2].title).toBe("C");
});


it("should update course when passed UPdATE_COURSE_SUCCESS", () => {
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" }
  ];

  const course = { id: 2, title: "D" };
  const action = actions.updateCourseSuccess(course);

  // act
  const newState = courseReducer(initialState, action);
  const updatedCourse = newState.find(a => a.id === course.id);
  const untouchedCourse = newState.find(a => a.id === 1);

  // assert
  expect(updatedCourse.title).toBe(course.title);
  expect(untouchedCourse.title).toBe("A");
  expect(newState.length).toBe(3);
});