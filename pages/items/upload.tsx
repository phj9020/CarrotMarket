import type { NextPage } from 'next';

const Upload: NextPage = () => {
    return (
        <div className="px-4 py-16 space-y-5">
            <div>
                <label  className="flex items-center justify-center w-full h-48 text-gray-600 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:text-orange-500 hover:transition-colors hover:border-orange-300">
                    <svg
                        className="w-12 h-12"
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
                    <input type="file" accept="image/*" className="hidden" />
                </label>
            </div>
            <div>
                <label htmlFor="productName" className="block mb-1 text-sm font-medium text-gray-700">상품 이름</label>
                <div className="flex items-center rounded-md shadow-sm ">
                    <input id="productName" className="w-full px-2 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500" type="text" placeholder="상품 이름을 입력하세요" />
                </div>
            </div>
            <div>
                <label htmlFor="productPrice" className="block mb-1 text-sm font-medium text-gray-700">가격</label>
                <div className="relative flex items-center rounded-md shadow-sm">
                    <div className="absolute left-0 flex items-center justify-center pl-3 pointer-events-none">
                        <span className="text-sm font-semibold text-gray-500">₩</span>
                    </div>
                    <input id="productPrice" className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none pl-7 focus:outline-none focus:ring-orange-500 focus:border-orange-500" type="text" placeholder="1000" />
                    <div className="absolute right-0 flex items-center justify-center pr-3 pointer-events-none">
                        <span className="text-xs font-semibold text-gray-500">원</span>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="productDescription"  className="block mb-1 text-sm font-medium text-gray-700">상품 설명</label>
                <textarea id="productDescription" className="w-full mt-1 border-gray-300 rounded-md shadow-sm resize-none focus:ring-orange-500 focus:border-orange-500 focus:outline-none" rows={4} placeholder="상품에 대한 상세한 설명을 달아주세요" />
            </div>
            <button className="w-full px-4 py-2 mt-5 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">상품 등록하기</button>
        </div>
    )
}

export default Upload;