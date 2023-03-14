// Створення об'єкту Car
const car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 80,
    tankVolume: 50,
    fuelConsumption: 7.5,
    drivers: []
  };
  
  // Метод, що виводить інформацію про автомобіль
  function displayCarInfo() {
    const carInfo = `Виробник: ${car.manufacturer}<br>
                     Модель: ${car.model}<br>
                     Рік: ${car.year}<br>
                     Середня швидкість: ${car.averageSpeed} km/h<br>
                     Бак : ${car.tankVolume} L<br>
                     Розхід палива: ${car.fuelConsumption} L/100km`;
    document.getElementById("car-info").innerHTML = carInfo;
  }
  
  // Виклик методу для виведення інформації про автомобіль
  displayCarInfo();
  
  // Метод, що додає водія до списку
  function addDriver() {
    const driverName = document.getElementById("driver-name").value;
    car.drivers.push(driverName);
    alert(`${driverName}, Тепер ви у списку водіїв. Хай шев!) `);
  }
  
  // Метод, що перевіряє наявність водія в списку
  function checkDriver() {
    const driverName = document.getElementById("driver-name-check").value;
    if (car.drivers.includes(driverName)) {
      alert(`${driverName} Твоє ім'я вже є у списку) `);
    } else {
      alert(`${driverName} Нажаль, тебе немає у списку( `);
    }
  }
  // Метод, що розраховує час та паливо для подолання відстані з середньою швидкістю
function calculate() {
    const distance = document.getElementById("distance").value;
    const averageSpeed = car.averageSpeed;
    const fuelConsumption = car.fuelConsumption;
    const tankVolume = car.tankVolume;
    const time = distance / averageSpeed;
    const hours = Math.floor(time);
    const minutes = Math.round((time - hours) * 60);
    const breaks = Math.floor(hours / 4);
    const totalTime = time + breaks;
    const fuelNeeded = (distance / 100) * fuelConsumption;
    const refuels = Math.ceil(fuelNeeded / tankVolume);
    const result = `Час в дорозі: ${hours} год. ${minutes} хв.<br>
                    Зроблено перерв: ${breaks}<br>
                    Час, враховуючи зупинки: ${totalTime} год.<br>
                    Необхідна кількість палива: ${fuelNeeded.toFixed(2)} L<br>
                    Заправки: ${refuels}`;
    document.getElementById("result1").innerHTML = result;
  }






  // Two

  let time = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  
  // Функция для отображения времени
function displayTime() {
  const hours = document.getElementById("hours").value;
  const minutes = document.getElementById("minutes").value;
  const seconds = document.getElementById("seconds").value;
  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById("output").innerHTML = time;
}

// Обработчик событий на кнопку "Display Time"
const displayBtn = document.getElementById("display-btn");
displayBtn.addEventListener("click", displayTime);
  
  function normalizeTime() {
    if (time.seconds >= 60) {
      time.minutes += Math.floor(time.seconds / 60);
      time.seconds %= 60;
    }
  
    if (time.minutes >= 60) {
      time.hours += Math.floor(time.minutes / 60);
      time.minutes %= 60;
    }
  
    if (time.hours >= 24) {
      time.hours %= 24;
    }
  }
  
  function addSeconds() {
  let secondsToAdd = parseInt(document.getElementById("seconds-to-add").value);
  time.seconds += secondsToAdd;
  normalizeTime();
  displayTime();
  document.getElementById("seconds").value = time.seconds;
}

function addMinutes() {
  let minutesToAdd = parseInt(document.getElementById("minutes-to-add").value);
  time.minutes += minutesToAdd;
  normalizeTime();
  displayTime();
  document.getElementById("minutes").value = time.minutes;
}

function addHours() {
  let hoursToAdd = parseInt(document.getElementById("hours-to-add").value);
  time.hours += hoursToAdd;
  normalizeTime();
  displayTime();
  document.getElementById("hours").value = time.hours;
}
  
  function setHours(hours) {
    if (hours >= 0 && hours <= 23) {
      time.hours = hours;
      normalizeTime();
    } else {
      console.log("Invalid hours value!");
    }
  }
  
  function setMinutes(minutes) {
    if (minutes >= 0 && minutes <= 59) {
      time.minutes = minutes;
      normalizeTime();
    } else {
      console.log("Invalid minutes value!");
    }
  }
  
  function setSeconds(seconds) {
    if (seconds >= 0 && seconds <= 59) {
      time.seconds = seconds;
      normalizeTime();
    } else {
      console.log("Invalid seconds value!");
    }
  }
  
  document.getElementById("display-btn").addEventListener("click", displayTime);
  document.getElementById("add-seconds-btn").addEventListener("click", addSeconds);
  document.getElementById("add-minutes-btn").addEventListener("click", addMinutes);
  document.getElementById("add-hours-btn").addEventListener("click", addHours);
  












  function addMinutes() {
    let minutesToAdd = parseInt(document.getElementById("minutes-to-add").value);
    if (time.minutes + minutesToAdd <= 59) {
      time.minutes += minutesToAdd;
    } else {
      console.log("Invalid minutes value!");
    }
    normalizeTime();
    displayTime();
  }
  
  function addHours() {
    let hoursToAdd = parseInt(document.getElementById("hours-to-add").value);
    if (time.hours + hoursToAdd <= 23) {
      time.hours += hoursToAdd;
    } else {
      console.log("Invalid hours value!");
    }
    normalizeTime();
    displayTime();
  }