window.CAMPUS_DEFAULTS = {
  rooms: [
    {id:"A-101",building:"Корпус A",floor:1,type:"Компьютерный класс",temperature:24.3,co2:780,energy:3.6,occupancy:18},
    {id:"A-102",building:"Корпус A",floor:1,type:"Лекционная",temperature:23.1,co2:690,energy:2.8,occupancy:32},
    {id:"A-103",building:"Корпус A",floor:1,type:"Лаборатория",temperature:25.4,co2:920,energy:4.2,occupancy:14},
    {id:"A-201",building:"Корпус A",floor:2,type:"Лекционная",temperature:26.1,co2:980,energy:3.9,occupancy:27},
    {id:"A-205",building:"Корпус A",floor:2,type:"Компьютерный класс",temperature:29.4,co2:1580,energy:5.8,occupancy:22},
    {id:"B-101",building:"Корпус B",floor:1,type:"Администрация",temperature:22.4,co2:640,energy:2.4,occupancy:8},
    {id:"B-104",building:"Корпус B",floor:1,type:"Библиотека",temperature:23.8,co2:810,energy:3.1,occupancy:35},
    {id:"B-202",building:"Корпус B",floor:2,type:"Лаборатория",temperature:24.8,co2:870,energy:4.4,occupancy:16},
    {id:"B-205",building:"Корпус B",floor:2,type:"Серверная",temperature:32.5,co2:720,energy:7.1,occupancy:0},
    {id:"C-101",building:"Корпус C",floor:1,type:"Лекционная",temperature:21.9,co2:590,energy:2.1,occupancy:24},
    {id:"C-103",building:"Корпус C",floor:1,type:"Переговорная",temperature:22.7,co2:740,energy:1.9,occupancy:6},
    {id:"C-201",building:"Корпус C",floor:2,type:"Спортивный зал",temperature:25.1,co2:890,energy:6.2,occupancy:41}
  ],
  devices: [
    {id:"TEMP-A101-01",room:"A-101",type:"Температура",value:"24.3 °C",status:"online",updated:"10:54"},
    {id:"CO2-A101-02",room:"A-101",type:"CO₂",value:"780 ppm",status:"online",updated:"10:54"},
    {id:"LIGHT-A102-01",room:"A-102",type:"Освещение",value:"68 %",status:"online",updated:"10:53"},
    {id:"ENERGY-A103-01",room:"A-103",type:"Энергия",value:"4.2 кВт·ч",status:"online",updated:"10:54"},
    {id:"TEMP-A201-01",room:"A-201",type:"Температура",value:"26.1 °C",status:"online",updated:"10:52"},
    {id:"CO2-A205-01",room:"A-205",type:"CO₂",value:"1580 ppm",status:"online",updated:"10:54"},
    {id:"TEMP-A205-02",room:"A-205",type:"Температура",value:"29.4 °C",status:"online",updated:"10:53"},
    {id:"ACCESS-A205-01",room:"A-205",type:"Доступ",value:"Активен",status:"online",updated:"10:51"},
    {id:"TEMP-B101-01",room:"B-101",type:"Температура",value:"22.4 °C",status:"online",updated:"10:54"},
    {id:"CO2-B104-01",room:"B-104",type:"CO₂",value:"810 ppm",status:"online",updated:"10:53"},
    {id:"LIGHT-B104-01",room:"B-104",type:"Освещение",value:"74 %",status:"online",updated:"10:54"},
    {id:"TEMP-B202-01",room:"B-202",type:"Температура",value:"24.8 °C",status:"online",updated:"10:52"},
    {id:"ENERGY-B202-01",room:"B-202",type:"Энергия",value:"4.4 кВт·ч",status:"online",updated:"10:54"},
    {id:"TEMP-B205-01",room:"B-205",type:"Температура",value:"32.5 °C",status:"online",updated:"10:54"},
    {id:"ENERGY-B205-01",room:"B-205",type:"Энергия",value:"7.1 кВт·ч",status:"online",updated:"10:54"},
    {id:"CO2-C101-01",room:"C-101",type:"CO₂",value:"590 ppm",status:"offline",updated:"09:18"},
    {id:"TEMP-C103-01",room:"C-103",type:"Температура",value:"22.7 °C",status:"online",updated:"10:53"},
    {id:"LIGHT-C103-01",room:"C-103",type:"Освещение",value:"51 %",status:"offline",updated:"09:05"},
    {id:"ENERGY-C201-01",room:"C-201",type:"Энергия",value:"6.2 кВт·ч",status:"online",updated:"10:54"},
    {id:"CO2-C201-01",room:"C-201",type:"CO₂",value:"890 ppm",status:"online",updated:"10:52"}
  ],
  incidents: [
    {id:1,title:"Высокий уровень CO₂",room:"A-205",priority:"critical",assignee:"Инженер вентиляции",status:"open",comment:"Проверить вентиляцию и повторить измерение."},
    {id:2,title:"Перегрев серверной",room:"B-205",priority:"high",assignee:"Системный инженер",status:"progress",comment:"Проверяется кондиционирование."},
    {id:3,title:"Датчик CO₂ не отвечает",room:"C-101",priority:"medium",assignee:"Техник",status:"open",comment:"Проверить питание устройства."}
  ]
};