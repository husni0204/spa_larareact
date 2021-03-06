import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import Sidebar from '../Sidebar'

const Layout = ({children, user})=> {
    console.log('layout user :', user)
    return(
        <React.Fragment>
            <div className="h-screen">
                <div className="flex h-full antialiased">
                    {/* Sidebar */}
                    <div className="w-1/6 bg-purple-500 h-full">
                        <Sidebar/>
                    </div>
                    {/* Sidebar */}
                    {/* Main */}
                    <div className="w-full h-full overflow-y-auto relative">
                        {/* Headers */}
                        <div className="border-flex rounded-xl text-center flex justify-between absolute right-0 left-0 bg-gray-100 py-3">
                            <p>{user?.name}</p>
                            <InertiaLink className="border flex bg-red-700 text-white text-md font-semibold rounded-xl py-2 px-4 mt-2" href={route('logout')} method="post" as="button" type="button">Logout</InertiaLink>
                        </div>
                        {/* Headers */}
                        <div className="h-full overflow-y-auto pt-20 pb-10 px-10 text-gray-500">
                            {children}
                        </div>
                    </div>
                    {/* Main */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout