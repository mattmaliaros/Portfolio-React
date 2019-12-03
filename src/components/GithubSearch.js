import React, { useState } from 'react';
import axios from 'axios';
const GithubSearch = () => {
  const [state, dispatch] = useState('');
  let githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  let githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

  const getUserRepos = e => {
    e.preventDefault();
    axios
      .get(
        `https://api.github.com/users/mattmaliaros/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      )
      .then(response => dispatch({ state: response.data[0].node_id }));
    //GO TO BROWSER CONSOLE
    // console.log(res.id);
    // dispatch(res);
  };

  return (
    <>
      <div>{state}</div>
      <button onClick={getUserRepos}>Search Repos</button>;
    </>
  );
};
export default GithubSearch;
