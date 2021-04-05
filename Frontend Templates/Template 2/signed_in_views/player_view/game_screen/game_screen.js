var poll = setInterval(countdown, 1000);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sidebar").style.height = `${window.innerHeight}px`;
    var body = document.querySelector("body");
    body.style.height = `${window.innerHeight}px`;
    body.style.width = `${window.innerWidth}px`;
    body.style.backgroundSize = `${window.innerWidth}px ${window.innerHeight}px`;
});

function countdown(){
  var counter = document.getElementById('countdown');
  var time_remaining = parseInt(counter.innerHTML);
  counter.innerHTML = time_remaining--;
  if(time_remaining === 0){
    // fetch(url to check if the game is ready);
    // check the response of the text to see if all players are ready
    // extract the response of the players for the url to the new game
    // if so then run the code below
    // const currentround = document.getElementById('weeks_elapsed').innerHTML;
    // var newthirdquadrant = `
    // <h2>Game Status</h2>
    // <h4 style = 'color:green;font-weight:bolder;'>All players have completed Week ${currentround}</h4>
    // <a href = 'https://www.google.com/'>
    // <button>
    //   Click here to continue
    // </button>
    // </a>
    // `;
    // //redirect link set to google for now
    // document.getElementById('third_quadrant').innerHTML = newthirdquadrant;
    // clearInterval(poll);
    //else run the code from here
    counter.innerHTML = '15';
  }else{
    counter.innerHTML = time_remaining;
  }
}

function game_instructions(){
  window.open('https://www.transentis.com/understanding-the-beer-game/en/');
}

function plot_all(){
  const weeks = parseInt(document.getElementById('weeks_elapsed').innerHTML) - 1;
  var demands = [];
  var orders = [];
  var inventory = [];
  for(var i = 1; i <= weeks; i++){
    var demand = document.querySelector(`#w${i} > .demand`).innerHTML;
    demands.push(parseInt(demand));
  }
  for(var i = 1; i <= weeks; i++){
    var order = document.querySelector(`#w${i} > .order`).innerHTML;
    orders.push(parseInt(order));
  }
  var inventory = [];
  for(var i = 1; i <= weeks; i++){
    var value = document.querySelector(`#w${i} > .inventory`).innerHTML;
    inventory.push(parseInt(value));
  }
  var x = [];
  for(var i = 1; i <= weeks; i++) {
    x.push(i);
  }
  var demand_plot = {
    x: x,
    y: demands,
    type:'scatter',
    name:'demand'
  }
  var order_plot = {
    x:x,
    y:orders,
    type:'scatter',
    name:'order'
  }
  var inventory_plot = {
    x:x, 
    y:inventory, 
    type:'scatter',
    name:'inventory'
  }
  var set = [demand_plot, order_plot, inventory_plot]
  var layout = {
    title: 'Plots for demand, order and inventory',
    xaxis:{title:'weeks'}
  }
  var plotspace = document.createElement('div');
  plotspace.id = 'plotspace';
  document.getElementById('content').appendChild(plotspace);
  back_button = document.createElement('button');
  button.id = 'back_button'
  back_button.className = 'btn btn-primary';
  back_button.innerHTML = 'Back';
  back_button.onclick = unplot;
  plotspace.appendChild(back_button);
  plotspace.style.height = `${window.innerHeight * 0.85}px`;
  plotspace.style.width = `${window.innerWidth * 0.90}px`
  Plotly.newPlot('plotspace', set, layout);
  hide_and_show();
}

function plot(title, xlabel, ylabel, data){
  var x = [];
  for(var i = 1; i <= data.length; i++) {
    x.push(i);
  } 
  var trace = {x:x, y:data, type:'scatter'};
  var set = [trace]
  var layout = {title:title, xaxis:{title:xlabel}, yaxis:{title:ylabel}}
  var plotspace = document.createElement('div');
  plotspace.id = 'plotspace';
  document.getElementById('content').appendChild(plotspace);
  back_button = document.createElement('button');
  back_button.id = 'back_button';
  back_button.className = 'btn btn-primary';
  back_button.innerHTML = 'Back';
  back_button.onclick = unplot;
  plotspace.appendChild(back_button);
  plotspace.style.height = `${window.innerHeight * 0.85}px`;
  plotspace.style.width = `${window.innerWidth * 0.90}px`
  Plotly.newPlot('plotspace', set, layout);
  hide_and_show();
}

function unplot(){
  document.getElementById('plotspace').remove();
  document.querySelectorAll('.quadrant').forEach((element) => {
    element.style.visibility = 'visible';
  });
  document.getElementById('trash_can').style.visibility = 'hidden';
}

function hide_and_show(){
  document.querySelectorAll('.quadrant').forEach((element) => {
    element.style.visibility = 'hidden';
  });
  document.querySelector('#plotspace').style.visibility = 'visible';
}

function demand_plot(){
  const weeks = parseInt(document.getElementById('weeks_elapsed').innerHTML) - 1;
  var demands = [];
  for(var i = 1; i <= weeks; i++){
    var demand = document.querySelector(`#w${i} > .demand`).innerHTML;
    demands.push(parseInt(demand));
  }
  plot('Demand Plot', 'Weeks', 'Demand', demands);
}

function order_plot(){
  const weeks = parseInt(document.getElementById('weeks_elapsed').innerHTML) - 1;
  var orders = [];
  for(var i = 1; i <= weeks; i++){
    var order = document.querySelector(`#w${i} > .order`).innerHTML;
    orders.push(parseInt(order));
  }
  plot('Order Plot', 'Weeks', 'Order', orders);
  hide_and_show();
}

function inventory_plot(){
  const weeks = parseInt(document.getElementById('weeks_elapsed').innerHTML) - 1;
  var inventory = [];
  for(var i = 1; i <= weeks; i++){
    var value = document.querySelector(`#w${i} > .inventory`).innerHTML;
    inventory.push(parseInt(value));
  }
  plot('Inventory Plot', 'Weeks', 'Inventory', inventory);
  hide_and_show();
}

function openNav() {
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
    event.target.style.backgroundColor = "black";
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
      event.target.style.opacity = "1";
    };
  });
  sidebar.style.animationPlayState = "running";
  sidebar.onanimationend = (event) => {
    event.target.style.width = "20px";
    event.target.style.backgroundColor = "grey";
  };
  document.querySelectorAll(".sidebar_options").forEach((element) => {
    element.style.visibility = "hidden";
  });
}
