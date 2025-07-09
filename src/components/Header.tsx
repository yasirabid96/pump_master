import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import PumpSearch from './search-pump'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b background-blur py-2 bg-white dark:bg-black">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left section: Logo Text + Nav */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tight">
            PumpMaster
          </Link>

          {/* Navigation Links */}
          <nav className="flex gap-6 text-sm font-medium">
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/pumps" className="hover:underline">
              Pumps
            </Link>
            <Link to="/reports" className="hover:underline">
              Reports
            </Link>
            <Link to="/alerts" className="hover:underline">
              Alerts
            </Link>
          </nav>
        </div>

        {/* Right section: Search + Icons */}
        <div className="flex items-center gap-4">
          {/* Search and Icons */}
          <PumpSearch />
          <Bell className="w-8 h-8 p-2 m-2 rounded-sm border border-gray-300 bg-gray-100 text-gray-500cursor-pointer" />
          <Avatar className="h-10 w-10 *:rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
      </div>
    </header>
  )
}
