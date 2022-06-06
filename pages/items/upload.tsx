import type { NextPage } from 'next';
import Button from '../components/button';
import HeadInfo from '../components/head';
import Input from '../components/input';
import Layout from '../components/layout';

const Upload: NextPage = () => {
    return (
        <Layout title="내 물건 팔기" canGoBack>
            <HeadInfo title="업로드 | 캐럿마켓" keywordContent="Next.js, tailwind, Phj9020" descriptionContent="캐럿마켓 내 물건 등록" />
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
            <Input type="text" label="상품 이름" name="productName" kind="text" required/>
            <Input type="number" label="가격" name="productPrice" kind="price" required placeholder="1000" />
            <div>
                <label htmlFor="productDescription"  className="block mb-1 text-sm font-medium text-gray-700">상품 설명</label>
                <textarea id="productDescription" className="w-full mt-1 border-gray-300 rounded-md shadow-sm resize-none focus:ring-orange-500 focus:border-orange-500 focus:outline-none" rows={4} placeholder="상품에 대한 상세한 설명을 달아주세요" />
            </div>
            <Button text="완료" />
        </div>
        </Layout>
        
    )
}

export default Upload;