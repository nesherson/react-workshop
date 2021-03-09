import './App.css';
import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function App() {
  /*useEffect(() => {
    Promise.all([get('/menu'), get('/news-feed'), get('/friends')]).then(
      ([menuResponse, newsFeedResponse, friendsResponse]) => {
        setMenu(menuResponse.data);
        setNewsFeed(newsFeedResponse.data);
        setFriends(friendsResponse.data);
      }
    );
  }, []);
*/
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    get('/menu').then((menuResponse) => {
      setMenu(menuResponse.data);
    });
  }, []);

  const [newsFeed, setNewsFeed] = useState(null);
  useEffect(() => {
    get('/news-feed').then((newsFeedResponse) => {
      setNewsFeed(newsFeedResponse.data);
    });
  }, []);

  const [friends, setFriends] = useState(null);
  useEffect(() => {
    get('/friends').then((friendsResponse) => {
      setFriends(friendsResponse.data);
    });
  }, []);

  return (
    <div className='App'>
      <h1>My Network</h1>
      {!menu ? (
        <p>Loading..</p>
      ) : (
        <nav>
          {menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className='content'>
        {!newsFeed ? (
          <p>Loading..</p>
        ) : (
          <section>
            {newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt='' />
              </article>
            ))}
          </section>
        )}
        {!friends ? (
          <p>Loading..</p>
        ) : (
          <aside>
            <ul>
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? 'online' : 'offline'}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
