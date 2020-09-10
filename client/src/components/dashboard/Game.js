import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteGame } from '../../actions/profile';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

//TODO: use material Table

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const Game = ({ games, deleteGame }) => {
  const classes = useStyles();

  const gameTable =
    games.length > 0 ? (
      games.map((game) => (
        <tr key={game._id}>
          <td>{game.title}</td>
          <td className="hide-sm">{game.status}</td>
          <td className="hide-sm" width="150" height="150">
            <img src={game.imageUrl} alt={game.title} />
          </td>
          <td className="hide-sm">{game.notes}</td>
          <td>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<EditIcon />}
              onClick={() => console.log('Edit Game Clicked')}
            >
              Edit
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => deleteGame(game._id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      ))
    ) : (
      <>No games to list</>
    );

  return (
    <Fragment>
      <h2 className="my-2">Game List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th className="hide-sm">Status</th>
            <th className="hide-sm">Image</th>
            <th className="hide-sm">Notes</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>{gameTable}</tbody>
      </table>
    </Fragment>
  );
};

Game.propTypes = {
  games: PropTypes.array.isRequired,
  deleteGame: PropTypes.func.isRequired
};

export default connect(null, { deleteGame: deleteGame })(Game);
