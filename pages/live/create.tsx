import type { NextPage } from 'next';
import Button from '../components/button';
import Layout from '../components/layout';

const Create: NextPage = () => {
    return (
        <Layout title="라이브 만들기" canGoBack>
            <div className="px-4 py-16 space-y-5">
                <div>
                    <label htmlFor="streamTitle" className="block mb-1 text-sm font-medium text-gray-700">라이브 제목</label>
                    <div className="flex items-center rounded-md shadow-sm ">
                        <input id="streamTitle" className="w-full px-2 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500" type="text" placeholder="상품 이름을 입력하세요" />
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
                    <label htmlFor="productDescription" className="block mb-1 text-sm font-medium text-gray-700">상품 설명</label>
                    <textarea id="productDescription" className="w-full mt-1 border-gray-300 rounded-md shadow-sm resize-none focus:ring-orange-500 focus:border-orange-500 focus:outline-none" rows={4} placeholder="상품에 대한 상세한 설명을 달아주세요" />
                </div>
                <Button text="라이브 시작하기"/>
            </div>
        </Layout>
    );
}


export default Create;