document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sidebar").style.height = `${window.innerHeight}px`;
    var body = document.querySelector("body");
    body.style.height = `${window.innerHeight}px`;
    body.style.width = `${window.innerWidth}px`;
    body.style.backgroundSize = `${window.innerWidth}px ${window.innerHeight}px`;
});

function game_instructions(){
  window.open('https://www.transentis.com/understanding-the-beer-game/en/')
}

glow = () => {
    var element = document.getElementById('create_a_game');
    element.style.animation = 'glow';
    element.style.animationDuration = '0.5s';
    element.style.animationIteration = '1';
    element.style.animationDirection = 'normal';
    element.style.animationPlayState = 'running';
    element.onanimationend = (event) => {
        event.target.style.opacity = '1';
    }
}

dim = () => {
    var element = document.getElementById('create_a_game');
    var element = event.target;
    element.style.animation = 'dim';
    element.style.animationDuration = '0.5s';
    element.style.animationIteration = '1';
    element.style.animationDirection = 'normal';
    element.style.animationPlayState = 'running';
    element.onanimationend = (event) => {
        event.target.style.opacity = '0.5';
        event.target.style.marginLeft = '0%';
    }
}

function openNav() {
  console.log("hello");
  var sidebar = document.getElementById("sidebar");
  sidebar.style.animation = "expand";
  sidebar.style.animationDuration = "0.6s";
  sidebar.style.animationDirection = "normal";
  sidebar.style.animationIterationCount = "1";
  sidebar.style.animationPlayState = "running";
  document.querySelectorAll(".side_shift").forEach((element) => {
    element.style.animation = "shift_left";
    element.style.animationDuration = "0.3s";
    element.style.animationDirection = "normal";
    element.style.animationIterationCount = "1";
    element.style.animationPlayState = "running";
    element.onanimationend = (event) => {
      event.target.style.marginLeft = "25%";
      event.target.style.opacity = "0.5";
    };
  });
  sidebar.onanimationend = (event) => {
    event.target.style.width = "25%";
    event.target.style.backgroundColor = "white";
  };
  document.querySelectorAll(".sidebar_options").forEach((element) => {
    element.style.visibility = "visible";
  });
}

function closeNav() {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.animation = "shrink";
  sidebar.style.animationDuration = "0.2s";
  sidebar.style.animationDirection = "normal";
  sidebar.style.animationIterationCount = "1";
  document.querySelectorAll(".side_shift").forEach((element) => {
    element.style.animation = "shift_back";
    element.style.animationDuration = "0.1s";
    element.style.animationDirection = "normal";
    element.style.animationIterationCount = "1";
    element.style.animationPlayState = "running";
    element.onanimationend = (event) => {
      event.target.style.marginLeft = "0%";
      event.target.style.opacity = "0.9";
    };
  });
  sidebar.style.animationPlayState = "running";
  sidebar.onanimationend = (event) => {
    event.target.style.width = "20px";
    event.target.style.backgroundColor = "black";
  };
  document.querySelectorAll(".sidebar_options").forEach((element) => {
    element.style.visibility = "hidden";
  });
}

respond = () => {
  var element = document.getElementById("accordion");
  element.style.animation = "respond";
  element.style.animationDuration = "1s";
  element.style.animationDirection = "normal";
  element.style.animationIterationCount = "1";
  element.style.animationPlayState = "running";
  element.onanimationend = (event) => {
    event.target.style.opacity = "1";
  };
};

cleanup = (event) => {
  document.querySelectorAll("#accordion .btn-link").forEach((button) => {
    button.classList.add("collapsed");
  });
  document.querySelectorAll("#accordion .collapse").forEach((button) => {
    button.classList.remove("show");
  });
  var element = document.getElementById("accordion");
  element.style.animation = "cleanup";
  element.style.animationDirection = "forward";
  element.style.animationDuration = "0.1s";
  element.style.animationIterationCount = "1";
  element.style.animationPlayState = "running";
  element.onanimationend = (event) => {
    event.target.style.opacity = "0.5";
    event.target.style.marginLeft = "0%";
  };
};
