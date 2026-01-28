import { Doughnut, Bar } from 'react-chartjs-2'
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

function LaundryOverviewChart({
  pending,
  confirmed,
  picked,
  processing,
  delivered,
  completed,
  totalAmount,
  staffSalary,
  income
}) {

  /* ---------- ORDER FLOW (DOUGHNUT) ---------- */
  const orderData = {
    labels: [
      'Pending',
      'Confirmed',
      'Picked',
      'Processing',
      'Delivered',
      'Completed'
    ],
    datasets: [
      {
        data: [
          pending,
          confirmed,
          picked,
          processing,
          delivered,
          completed
        ],
        backgroundColor: [
          '#3B82F6', // blue
          '#6366F1', // indigo
          '#FACC15', // yellow
          '#FB923C', // orange
          '#22C55E', // green
          '#10B981'  // emerald
        ],
        hoverOffset: 8,
        borderWidth: 1
      }
    ]
  }

  const orderOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: { font: { size: 11 }, boxWidth: 12 }
      }
    }
  }

  /* ---------- FINANCIAL BAR ---------- */
  const financeData = {
    labels: ['Total Amount', 'Staff Salary', 'Income'],
    datasets: [
      {
        data: [totalAmount, staffSalary, income],
        backgroundColor: ['#22C55E', '#EF4444', '#6366F1'],
        borderRadius: 10,
        barThickness: 40
      }
    ]
  }

  const financeOptions = {
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

      {/* ORDER STATUS */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">
          Laundry Order Flow
        </h3>
        <div className="h-[240px]">
          <Doughnut data={orderData} options={orderOptions} />
        </div>
      </div>

      {/* FINANCIAL */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">
          Financial Overview
        </h3>
        <div className="h-[240px]">
          <Bar data={financeData} options={financeOptions} />
        </div>
      </div>

    </div>
  )
}

export default LaundryOverviewChart
