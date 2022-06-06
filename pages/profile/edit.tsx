import type { NextPage } from 'next';
import HeadInfo from '../components/head';
import Input from '../components/input';
import Layout from '../components/layout';
import Button from './../components/button';

const EditProfile: NextPage = () => {
    return (
        <Layout title="프로필 편집" canGoBack>
            <HeadInfo title="프로필 편집 | 캐럿마켓" keywordContent="Next.js, tailwind, Phj9020" descriptionContent="캐럿마켓 프로필 편집" />
            <div className="px-4 py-10 space-y-4">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="rounded-full h-28 w-28 bg-slate-600" />
                    <label htmlFor="picture" className="px-2 py-1 text-xs font-bold text-gray-700 border border-gray-400 rounded-md cursor-pointer focus:ring-offset-2 focus:ring-orange-500">
                        프로필 사진 변경
                        <input id="picture" type="file" className="hidden" accept="image/*" />
                    </label>
                </div>
                <form className="flex flex-col mt-8 space-y-4">
                    <Input type="email" label="이메일" name="email" kind="text" required />
                    <Input type="tel" label="휴대전화" name="phone" kind="phone" required /> 
                    <Button text="프로필 저장" />
                </form>
            </div>
        </Layout>

    );
}


export default EditProfile;