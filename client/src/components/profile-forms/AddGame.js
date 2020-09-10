import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addGame } from '../../actions/profile';

const AddGame = ({ addGame, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    status: 'backlog',
    imageUrl: '',
    notes: '',
    finishedDate: ''
  });

  const { title, status, imageUrl, notes, finishedDate } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add a Game</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add any game you are playing, have
        played, or want to play.
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addGame(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* game title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <h4>Game Status</h4>
          <select
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            value={status}
            required
          >
            <option value="playing">Playing</option>
            <option value="backlog">Backlog</option>
            <option value="played">Played</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="image Url"
            name="imageUrl"
            value={imageUrl}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <textarea
            name="notes"
            cols="30"
            rows="5"
            placeholder="Game Notes"
            value={notes}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <h4>Finished Date</h4>
          <input
            type="date"
            name="finishedDate"
            value={finishedDate}
            onChange={onChange}
          />
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddGame.propTypes = {
  addGame: PropTypes.func.isRequired
};

export default connect(null, { addGame: addGame })(AddGame);
