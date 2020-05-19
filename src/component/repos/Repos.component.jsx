import React from 'react';
import RepoItem from '../repos/RepoItem.component';

export const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};
export default Repos;
