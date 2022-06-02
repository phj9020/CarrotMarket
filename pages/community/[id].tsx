import type { NextPage } from 'next';

const CommunityPostDetail: NextPage = () => {
    return (
        <div>
            {/* Tag component */}
            <span className="inline-flex items-center ml-4 my-2.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">동네질문</span>
            {/* Profile component */}
            <div className="flex px-4 py-3 mb-3 space-x-3 border-b cursor-pointer ites-center">
                <div className="w-10 h-10 rounded-full bg-slate-300" />
                <div>
                    <p className="text-sm font-medium text-gray-700">phj9020</p>
                    <p className="text-xs font-medium text-gray-500">View profile &rarr;</p>
                </div>
            </div>
            <div >
                <div className="px-4 mt-2 text-gray-700">
                    <span className="font-medium text-orange-500">질문. </span>강아지 동물 병원 유명한곳 알려주세요~
                </div>
                <div className="w-full flex mt-3 space-x-3 px-4 text-gray-700 py-2.5 border-b-[1px] border-gray-300">
                    <span className="flex items-center space-x-2 text-sm">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>궁금해요 1</span>
                    </span>
                    <span className="flex items-center space-x-2 text-sm">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            ></path>
                        </svg>
                        <span>답변 1</span>
                    </span>
                </div>
            </div>
            {/* REPLY component */}
            <div className="px-4 my-5 space-y-5">
                <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-slate-500" />
                    <div>
                        <span className="block text-sm font-medium text-gray-700">유저1</span>
                        <span className="block text-xs text-gray-500">2 시간 전</span>
                        <p className="mt-2 text-gray-700">목동 파리공원 앞에 병원이 좋아요</p>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <textarea className="w-full mt-1 border-gray-300 rounded-md shadow-sm resize-none focus:ring-orange-500 focus:border-orange-500 focus:outline-none" rows={4} placeholder="이웃을 위한 답변을 달아주세요" />
                <button className="w-full px-4 py-2 mt-2 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">답변 등록하기</button>
            </div>
        </div>
    )
}

export default CommunityPostDetail;