import React, { useState } from 'react';

function getQueryParams(url) {
  const queryParams = {};
  const urlParams = new URLSearchParams(url.search);

  for (const [param, value] of urlParams) {
    queryParams[param] = value;
  }

  return queryParams;
}

function App() {
  const [urlString, setUrlString] = useState('');
  const [queryParams, setQueryParams] = useState({});

  const handleUrlChange = (event) => {
    setUrlString(event.target.value);
  };

  const handleUrlSubmit = (event) => {
    event.preventDefault();
    const url = new URL(urlString);
    const newQueryParams = getQueryParams(url);
    setQueryParams(newQueryParams);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleUrlSubmit}>
        <label htmlFor="urlInput">
          URL:
          <input type="text" id="urlInput" value={urlString} onChange={handleUrlChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div className="query-params-container">
        <h1>Query Parameters:</h1>
        <ul className="query-params-list">
          {Object.entries(queryParams).map(([param, value]) => (
            <li key={param}>
              <span className="param-key">{param}:</span> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
