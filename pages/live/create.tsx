import type { NextPage } from 'next';
import Button from '../components/button';
import Input from '../components/input';
import Layout from '../components/layout';
import HeadInfo from './../components/head';
import Textarea from './../components/textarea';

const Create: NextPage = () => {
    return (
        <Layout title="라이브 만들기" canGoBack>
            <HeadInfo title="라이브 만들기 | 캐럿마켓" keywordContent="Next.js, tailwind, Phj9020" descriptionContent="캐럿마켓 내 라이브 만들기" />
            <div className="px-4 pb-16 space-y-5">
                <Input type="text" label="라이브 제목" name="streamTitle" kind="text" required placeholder="상품 이름을 입력하세요" />
                <Input type="number" label="가격" name="productPrice" kind="price" required placeholder="1000" />
                <Textarea label="상품 설명" name="productDescription"  placeholder="상품에 대한 상세한 설명을 달아주세요" />
                <Button text="라이브 시작하기"/>
            </div>
        </Layout>
    );
}


export default Create;