import type { NextPage } from 'next';

const upload: NextPage = () => {
    return (
        <div className="px-4 py-16">
            <div>
                <label className="w-full flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md text-gray-600 hover:text-orange-500 hover:transition-colors hover:border-orange-300 cursor-pointer">
                    <svg
                        className="h-12 w-12"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <input type="file" className="hidden" />
                </label>
            </div>
            <div className="my-5">
                <label htmlFor="price" className="mb-1 block text-sm font-medium text-gray-700">Price</label>
                <div className="rounded-md shadow-sm relative flex items-center">
                    <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
                        <span className="text-gray-500 text-sm font-semibold">$</span>
                    </div>
                    <input id="price" className="w-full px-3 py-2 pl-7 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500" type="text" placeholder="0.00" />
                    <div className="absolute right-0 pr-3 flex items-center justify-center pointer-events-none">
                        <span className="text-gray-500 text-xs font-semibold">USD</span>
                    </div>
                </div>
            </div>
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Description</label>
                <textarea className="mt-1 shadow-sm w-full resize-none border-gray-300 focus:ring-orange-500 focus:border-orange-500 focus:outline-none rounded-md" rows={4} />
            </div>
            <button className="w-full px-4 py-2 mt-5 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">상품 업로드</button>
        </div>
    )
}

export default upload;