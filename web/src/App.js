import React, { useEffect } from 'react';
import './assets/styles/global.css';

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
      },
      (error) => {
        console.log(error);
      },
      {
        timeout: 3000,
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/4103305?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Allan Ramos</strong>
                <span>Javascript, React</span>
              </div>
            </header>
            <p>Biografia muito loca!</p>
            <a href="github.com/">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/4103305?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Allan Ramos</strong>
                <span>Javascript, React</span>
              </div>
            </header>
            <p>Biografia muito loca!</p>
            <a href="github.com/">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/4103305?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Allan Ramos</strong>
                <span>Javascript, React</span>
              </div>
            </header>
            <p>Biografia muito loca!</p>
            <a href="github.com/">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/4103305?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Allan Ramos</strong>
                <span>Javascript, React</span>
              </div>
            </header>
            <p>Biografia muito loca!</p>
            <a href="github.com/">Acessar perfil no Github</a>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;
