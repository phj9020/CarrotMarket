import type { NextPage } from 'next';
import Button from '../components/button';
import HeadInfo from '../components/head';
import Layout from '../components/layout';

const Write : NextPage = () => {
    return (
        // react hook form
        <Layout title="동네생활 글쓰기" canGoBack>
            <HeadInfo title="동네생활 글쓰기 | 캐럿마켓" keywordContent="Next.js, tailwind, Phj9020" descriptionContent="캐럿마켓 글쓰기" />
            <div className="px-4 pb-10">
                <textarea className="w-full mt-1 border-gray-300 rounded-md shadow-sm resize-none focus:ring-orange-500 focus:border-orange-500 focus:outline-none" rows={4} placeholder="동네 이웃에게 궁금한 질문을 물어보세요" />
                <Button text="질문 등록하기" />
            </div>
        </Layout>
    )
}

export default Write;