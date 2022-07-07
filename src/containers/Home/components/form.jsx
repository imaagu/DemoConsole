import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class LeagueForm extends Component {
  state = {
    data: this.props.data,
  };
  render() {
    const { data } = this.state;
    const { gameOption, onSubmit } = this.props;

    return (
      <Formik
        initialValues={{
          external_id: data.external_id,
          is_playable: data.is_playable,
          league_name: data.league_name,
          description: data.description,
          game: data.game,
        }}
        validationSchema={Yup.object().shape({
          external_id: Yup.number()
            .min(1, 'External Id must be non-negative and non-zero')
            .max(999999999999999, 'Please enter less than 16 digit')
            .required('External Id is required'),
          league_name: Yup.string()
            .min(1, 'Please enter more than 1 character')
            .max(100, 'Please enter less than 100 character')
            .required('League name is required'),
          game: Yup.number()
            .min(1, 'Game is required')
            .required('Game is required'),
        })}
        /* validate={(fields) => {
       
      }} */
        onSubmit={(fields) => {
          fields.game = +fields.game;

          onSubmit(fields);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="external_id">
                    External Id <span style={{ color: 'red' }}>*</span>{' '}
                  </label>
                  <div className="form-group mb-3">
                    <Field
                      name="external_id"
                      type="number"
                      placeholder="External Id"
                      className={
                        'form-control' +
                        (errors.external_id && touched.external_id
                          ? ' is-invalid error-text-color'
                          : '')
                      }
                    />
                    <ErrorMessage
                      name="external_id"
                      component="div"
                      className="invalid-feedback "
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  {' '}
                  <label htmlFor="league_name">
                    League Name <span style={{ color: 'red' }}>*</span>{' '}
                  </label>
                  <div className="form-group mb-3">
                    <Field
                      name="league_name"
                      type="text"
                      placeholder="League Name"
                      className={
                        'form-control' +
                        (errors.league_name && touched.league_name
                          ? ' is-invalid error-text-color'
                          : '')
                      }
                    />
                    <ErrorMessage
                      name="league_name"
                      component="div"
                      className="invalid-feedback "
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="game">
                    Game <span style={{ color: 'red' }}>*</span>{' '}
                  </label>
                  <div className="form-group mb-3">
                    <Field
                      as="select"
                      name="game"
                      className={
                        'form-control' +
                        (errors.game && touched.game
                          ? ' is-invalid error-text-color'
                          : '')
                      }
                    >
                      <option value={0}>Select Game</option>
                      {gameOption !== undefined &&
                        gameOption.map((item) => (
                          <option key={item.id} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                    </Field>
                    <ErrorMessage
                      name="game"
                      component="div"
                      className="invalid-feedback "
                    />
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  {' '}
                  <label htmlFor="description">Description</label>
                  <div className="form-group mb-3">
                    <Field
                      as="textarea"
                      name="description"
                      type="text"
                      placeholder="League Description"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="form-check">
                  {' '}
                  <div className="form-group mb-3">
                    <Field
                      name="is_playable"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label" htmlFor="is_playable">
                      Playable
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-lg"
                  style={{ backgroundColor: '#5c0a5c', color: 'white' }}
                >
                  Add
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default LeagueForm;
