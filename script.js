function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",

    {
      pauseCount: 5,
      travailCount: 25,
      horlogeCount: 25 * 60,
      currentCount: 'Travail',
      isPlaying: false,
      loop: undefined });_defineProperty(this, "convertirEnTemps",


    count => {
      const minutes = Math.floor(count / 60);
      let seconds = count % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      return `${minutes < 10 ? '0' + minutes : minutes}:${seconds}`;
    });_defineProperty(this, "gererLecturePause",

    () => {
      if (this.state.isPlaying) {
        clearInterval(this.loop);
        this.setState({
          isPlaying: false });

      } else {
        this.setState({
          isPlaying: true });

        this.loop = setInterval(() => {
          const clock = this.state.horlogeCount;
          if (this.state.horlogeCount === 0) {
            this.setState({
              horlogeCount: this.state.currentCount == 'Travail' ? this.state.pauseCount * 60 : this.state.travailCount * 60,
              currentCount: this.state.currentCount == 'Travail' ? 'Pause' : 'Travail',
              isPlaying: true });

            this.lectureAudio("play");
          } else {
            this.setState({
              horlogeCount: clock - 1 });

          }

        }, 1000);
      }

    });_defineProperty(this, "gererReset",

    () => {
      this.lectureAudio('pause');
      clearInterval(this.loop);
      this.setState({
        pauseCount: 5,
        travailCount: 25,
        horlogeCount: 25 * 60,
        currentCount: 'Travail',
        isPlaying: false,
        loop: undefined });

    });_defineProperty(this, "gererPlusPause",

    () => {
      const pause = this.state.pauseCount;
      if (this.state.pauseCount < 60) {
        this.setState({
          pauseCount: pause + 1 });

      }
    });_defineProperty(this, "gererMoinsPause",

    () => {
      const pause = this.state.pauseCount;
      if (this.state.pauseCount > 1) {
        this.setState({
          pauseCount: pause - 1 });

      }
    });_defineProperty(this, "lectureAudio",

    jouer => {
      let audioBeep = document.getElementById('beep');
      if (jouer === "play") {
        audioBeep.play();
      } else {
        audioBeep.pause();
        audioBeep.load();
      }
    });_defineProperty(this, "gererPlusTravail",

    () => {
      const travail = this.state.travailCount;
      if (this.state.travailCount < 60) {
        this.setState({
          travailCount: travail + 1,
          horlogeCount: (travail + 1) * 60,
          currentCount: 'Travail' });

      }
    });_defineProperty(this, "gererMoinsTravail",

    () => {
      const travail = this.state.travailCount;
      if (this.state.travailCount > 1) {
        this.setState({
          travailCount: travail - 1,
          horlogeCount: (travail - 1) * 60,
          currentCount: 'Travail' });

      }
    });}


  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "pomodoro-clock", className: "container text-center" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { id: "break-label", className: "col-6" }, /*#__PURE__*/
      React.createElement("h5", null, "Temps de Pause"), /*#__PURE__*/
      React.createElement("button", { id: "break-decrement", onClick: this.gererMoinsPause, className: "btn btn-outline-light btn-sm" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-minus" })), /*#__PURE__*/
      React.createElement("span", { id: "break-length" }, this.state.pauseCount), /*#__PURE__*/
      React.createElement("button", { id: "break-increment", onClick: this.gererPlusPause, className: "btn btn-outline-light btn-sm" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-plus" }))), /*#__PURE__*/

      React.createElement("div", { id: "session-label", className: "col-6" }, /*#__PURE__*/
      React.createElement("h5", null, "Temps de Travail"), /*#__PURE__*/
      React.createElement("button", { id: "session-decrement", onClick: this.gererMoinsTravail, className: "btn btn-outline-light btn-sm" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-minus" })), /*#__PURE__*/
      React.createElement("span", { id: "session-length" }, this.state.travailCount), /*#__PURE__*/
      React.createElement("button", { id: "session-increment", onClick: this.gererPlusTravail, className: "btn btn-outline-light btn-sm" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-plus" })))), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col" }, /*#__PURE__*/
      React.createElement("h3", { id: "timer-label" }, this.state.currentCount), /*#__PURE__*/
      React.createElement("h1", { id: "time-left" }, this.convertirEnTemps(this.state.horlogeCount)), /*#__PURE__*/
      React.createElement("button", { id: "start_stop", onClick: this.gererLecturePause, className: "btn btn-outline-light" }, this.state.isPlaying ? /*#__PURE__*/React.createElement("i", { class: "fa-sharp fa-solid fa-pause" }) : /*#__PURE__*/React.createElement("i", { class: "fa-sharp fa-solid fa-play" })), /*#__PURE__*/
      React.createElement("button", { id: "reset", onClick: this.gererReset, className: "btn btn-outline-light" }, "reset")))));







  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('appli'));