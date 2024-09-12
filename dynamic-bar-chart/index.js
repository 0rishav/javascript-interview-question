import { data } from "./data.js";

const chart = document.querySelector(".chart");
const amount = document.querySelector(".amount");

function displayBarChart(data) {
    let totalAmount = data.reduce((sum, ele) => {
        const barChart = document.createElement("div");
        Object.assign(barChart.style, {
            height: `${ele.amount * 2}px`,
            width: `50px`,
            marginBottom: `5rem`,
            borderRadius: `5px`,
            backgroundColor: `#EC755D`
        });
        chart.append(barChart);
        return sum + ele.amount;
    }, 0);

    amount.innerText = totalAmount;
}

displayBarChart(data);
