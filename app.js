import axios from "axios";

const latitude = 22.60027;
const longitude = 88.449982;
const api_id = `https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=3ZBGUKUN2Nlnp5tbt6bQU9y5UJNN3LXO`;

const res = await axios.get(api_id);

console.log(res.data.timelines.daily[0].values.temperatureAvg);
