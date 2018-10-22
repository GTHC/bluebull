import React, { Component } from 'react';
import deburr from 'lodash/deburr';

// autosuggest
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

  // root: {
  //   height: 250,
  //   flexGrow: 1,
  //   textAlign: 'center',
  // },
  // container: {
  //   position: 'relative',
  // },
  // suggestionsContainerOpen: {
  //   position: 'absolute',
  //   zIndex: 1,
  //   marginTop: theme.spacing.unit,
  //   left: 0,
  //   right: 0,
  // },
  // divider: {
  //   height: theme.spacing.unit * 2,
  // },
});

/*
Component is based of examples from:
https://github.com/moroshko/react-autosuggest
https://material-ui.com/demos/autocomplete/#autocomplete
 */
class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      single: '',
      suggestions: [],
      foundTeam: false,
    };

    // Autosuggest functions
    this.renderInputComponent = this.renderInputComponent.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);

    this.getSuggestions = this.getSuggestions.bind(this);

    this.handleSuggestionsFetchRequested = this.handleSuggestionsFetchRequested.bind(this);
    this.handleSuggestionsClearRequested = this.handleSuggestionsClearRequested.bind(this);

    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);

    // non-Autosuggest functions
    this.handleChange = this.handleChange.bind(this);
    this.handleGetTeam = this.handleGetTeam.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  renderInputComponent = (inputProps) => {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;

    return (
      <TextField
        fullWidth
        disabled={this.state.foundTeam}
        InputProps={{
          inputRef: node => {
            ref(node);
            inputRef(node);
          },

          classes: {
            input: classes.input,
          },
          endAdornment: (
            <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClear}
                >
                  <Clear />
                </IconButton>
              </InputAdornment>
          ),
        }}
        {...other}
      />
    );
  };

  renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion.name, query);
    const parts = parse(suggestion.name, matches);

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map((part, index) => {
            return part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
              </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            );
          })}
        </div>
      </MenuItem>
    );
  };

  getSuggestions = value => {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    const suggestions = this.props.teams.data;

    return inputLength === 0
      ? []
      : suggestions.filter(suggestion => {
          const keep =
            count < 3 && suggestion.name.slice(0, inputLength).toLowerCase() === inputValue;

          if (keep) {
            count += 1;
          }

          return keep;
        });
  };

  getSuggestionValue = suggestion => (suggestion.name);

  onSuggestionSelected = (event, { suggestion }) => {
    this.handleGetTeam(suggestion.captain);
    this.setState({ foundTeam: true });
    const { data } = this.props.team;
    this.props.updateData();
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue,
    });
  };

  handleGetTeam = captain => {
    this.props.getTeam(captain);
  };

  handleClear = () => {
    this.setState({
      foundTeam: false,
    });
    this.props.resetData();
  };

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent: this.renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion: this.renderSuggestion,
      onSuggestionSelected: this.onSuggestionSelected,
    };

    return (
      <div className={classes.root}>
        <Autosuggest
          highlightFirstSuggestion
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: 'Search for a team',
            value: this.state.single,
            onChange: this.handleChange('single'),
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
        <div className={classes.divider} />
      </div>
    );
  }
}

export default withStyles(styles)(AutoComplete);
