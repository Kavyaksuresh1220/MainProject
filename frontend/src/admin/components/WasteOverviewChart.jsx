import { Pie, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
)

function WasteOverviewChart({
  pending,
  confirmed,
  picked,
  totalAmount,
  staffSalary,
  income
}) {

  /* ---------- PIE (ORDER STATUS) ---------- */
  const pieData = {
    labels: ['Pending', 'Confirmed', 'Picked'],
    datasets: [
      {
        data: [pending, confirmed, picked],
        backgroundColor: [
          'rgba(59,130,246,0.85)',
          'rgba(99,102,241,0.85)',
          'rgba(234,179,8,0.85)'
        ],
        borderWidth: 1,
        hoverOffset: 8
      }
    ]
  }

  const pieOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: { boxWidth: 12, font: { size: 12 } }
      }
    }
  }

  /* ---------- BAR (INCOME REPORT) ---------- */
  const incomeData = {
    labels: ['Total Amount', 'Staff Salary', 'Income'],
    datasets: [
      {
        data: [totalAmount, staffSalary, income],
        backgroundColor: [
          'rgba(34,197,94,0.85)',  // green
          'rgba(239,68,68,0.85)',  // red
          'rgba(99,102,241,0.85)'  // indigo
        ],
        borderRadius: 10,
        barThickness: 40
      }
    ]
  }

  const incomeOptions = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => ` ₹ ${ctx.raw}`
        }
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true }
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

      {/* COMPACT PIE */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">
          Order Status
        </h3>
        <div className="h-[220px]">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>

      {/* COMPACT INCOME BAR */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">
          Financial Overview
        </h3>
        <div className="h-[220px]">
          <Bar data={incomeData} options={incomeOptions} />
        </div>
      </div>

    </div>
  )
}

export default WasteOverviewChart
