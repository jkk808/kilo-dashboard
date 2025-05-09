import { Link, routes } from "@redwoodjs/router"
import HealthScore from "../HealthScore/HealthScore"

const Patch = ({ patch, scores }) => {
  return (
    <Link to={routes.patch({ location: patch.name })}>
      <button className='border border-gray-200 drop-shadow-sm w-full h-64 text-left p-2 hover:bg-gray-50 rounded-lg transition-colors'>
        <h1 className="text-xl font-medium text-gray-500 mb-2 ml-6">
          {patch.name}
        </h1>
        <div className="grid grid-cols-2 gap-4 p-6">
          <div>
            <h2>
              Soil Health
            </h2>
            <HealthScore score={scores.soil}></HealthScore>
          </div>

          <div>
            <h2>
              Water Health
            </h2>
            <HealthScore score={scores.water}></HealthScore>
          </div>
        </div>
      </button>
    </Link>
  )
}

export default Patch
