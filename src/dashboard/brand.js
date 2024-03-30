// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import MyModal from "./modal"
import DataTable from "./datatable"

export function Pagination() {
    return (
        // <h1>Test</h1>

        <div className="flex justify-center mt-2">
            <nav className="flex space-x-2" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2.5 py-1 text-xs border bg-colorBlue border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    <span>
                        <svg width="5" height="10" viewBox="0 0 8 15" className="fill-current stroke-current">
                            <path d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z" strokeWidth="0.3"></path>
                        </svg>
                    </span>
                </a>

                <a href="#" className="relative inline-flex items-center px-2.5 py-1 text-xs font-sma text-gray-700 bg-white border border-fuchsia-100 hover:bg-blue-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    1
                </a>
                <a href="#" className="relative inline-flex items-center px-2.5 py-1 text-xs font-sma text-gray-700 bg-white border border-fuchsia-100 hover:bg-blue-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    2
                </a>
                <a href="#" className="relative inline-flex items-center px-2.5 py-1 text-xs font-sma text-gray-700 bg-white border border-fuchsia-100 hover:bg-blue-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    3
                </a>
                <a href="#" className="relative inline-flex items-center px-2.5 py-1 text-xs font-sma text-gray-700 bg-white border border-fuchsia-100 hover:bg-blue-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    4
                </a>

                <a href="#" className="relative inline-flex items-center px-2.5 py-1 text-xs border bg-colorBlue border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">

                    <span>
                        <svg width="5" height="10" viewBox="0 0 8 15" className="fill-current stroke-current">
                            <path d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z" strokeWidth="0.3"></path>
                        </svg>
                    </span>
                </a>
            </nav>
        </div>
    )
}


export default function Brand() {
    return (
        <>

            <MyModal />

            <div className="overflow-hidden flex gap-2 mt-5 mr-5">
                <h1 className="text-2xl">Brand</h1>

                <button className="cursor-pointer hover:text-colorBlue" x-data="{ tooltip: 'Delete' }">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        x-tooltip="tooltip"
                        viewBox="0 0 50 50"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                    </svg>
                </button>
            </div>

            <DataTable />

            <Pagination />

        </>
    )
}
