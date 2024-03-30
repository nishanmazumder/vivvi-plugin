
export default function DataTable() {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-5 mr-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">ID</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Price</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Duration</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Description</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-colorBlue">
                                1
                            </span>
                        </td>
                        <td className="px-6 py-4">Name</td>
                        <td className="px-6 py-4">Price</td>
                        <td className="px-6 py-4">Duration</td>
                        <td className="px-6 py-4">Description</td>

                        <td className="px-6 py-4">
                            <div className="flex justify-end gap-4">
                                <button className="cursor-pointer hover:text-colorBlue" x-data="{ tooltip: 'View' }">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="h-8 w-8"
                                        x-tooltip="tooltip"
                                    >
                                        <g clipPath="url(#clip0_15_200)">
                                            <rect width="24" height="24" fill="white" />
                                            <circle cx="12" cy="13" r="2" stroke="#000000" strokeLinejoin="round" />
                                            <path
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 7.5C7.69517 7.5 4.47617 11.0833 3.39473 12.4653C3.14595 12.7832 3.14595 13.2168 3.39473 13.5347C4.47617 14.9167 7.69517 18.5 12 18.5C16.3048 18.5 19.5238 14.9167 20.6053 13.5347C20.8541 13.2168 20.8541 12.7832 20.6053 12.4653C19.5238 11.0833 16.3048 7.5 12 7.5Z"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15_200">
                                                <rect stroke="currentColor" width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button className="cursor-pointer hover:text-colorBlue" x-data="{ tooltip: 'Delete' }">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                        x-tooltip="tooltip"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                                <button className="cursor-pointer hover:text-colorBlue" x-data="{ tooltip: 'Edit' }">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                        x-tooltip="tooltip"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>


            {/* pagination */}




        </div>
    )
}
