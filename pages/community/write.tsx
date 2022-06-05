import type { NextPage } from 'next';
import Layout from '../components/layout';

const Write : NextPage = () => {
    return (
        // react hook form
        <Layout title="동네생활 글쓰기" canGoBack>
            <div className="px-4 pb-10">
                <textarea className="w-full mt-1 border-gray-300 rounded-md shadow-sm resize-none focus:ring-orange-500 focus:border-orange-500 focus:outline-none" rows={4} placeholder="동네 이웃에게 궁금한 질문을 물어보세요" />
                <button className="w-full px-4 py-2 mt-2 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">질문 등록하기</button>
            </div>
        </Layout>
    )
}

export default Write;