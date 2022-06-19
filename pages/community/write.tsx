import type { NextPage } from 'next';
import Button from '../components/button';
import HeadInfo from '../components/head';
import Layout from '../components/layout';
import Textarea from '../components/textarea';

const Write : NextPage = () => {
    return (
        // react hook form
        <Layout title="동네생활 글쓰기" canGoBack>
            <HeadInfo title="동네생활 글쓰기 | 캐럿마켓" keywordContent="Next.js, tailwind, Phj9020" descriptionContent="캐럿마켓 글쓰기" />
            <div className="px-4 pb-10 space-y-5">
                <Textarea placeholder="동네 이웃에게 궁금한 질문을 물어보세요"/>
                <Button text="질문 등록하기" />
            </div>
        </Layout>
    )
}

export default Write;