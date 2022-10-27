import { Bar } from 'react-chartjs-2'
import 'chart.js/auto';
import { collection, getDocs, doc, getDoc, where, orderBy, limit, query } from "firebase/firestore";
import { db,auth } from "../utils/firebase.js";
import React,{useState,useEffect} from 'react';


// const [incomes, setIncomes] = useState({
//   labels: incomes.map((income) => income.name),
//   datasets: [{
//       label: "Age",
//       data: incomes.map((income) => income.price),
//   }]
// });

export default function BarChart({chartData}) {
  
  return (
    <div>
        <Bar data={chartData}/>
    </div>
  )
}
