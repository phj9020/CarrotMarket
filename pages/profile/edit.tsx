import type { NextPage } from 'next';
import Layout from '../components/layout';
// 프로필 업데이트
const EditProfile: NextPage = () => {
    return (
        <Layout title="프로필 편집" canGoBack>
            <div className="px-4 py-10 space-y-4">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="rounded-full h-28 w-28 bg-slate-600" />
                    <label htmlFor="picture" className="px-2 py-1 text-xs font-bold text-gray-700 border border-gray-400 rounded-md cursor-pointer focus:ring-offset-2 focus:ring-orange-500">
                        프로필 사진 변경
                        <input id="picture" type="file" className="hidden" accept="image/*" />
                    </label>
                </div>
                <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium, text-gray-700">
                        이메일 주소
                    </label>
                    <input id="email" type="email" className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
                </div>
                <div className="space-y-1">
                    <label htmlFor="phone" className="text-sm font-medium, text-gray-700">
                        휴대폰 번호
                    </label>
                    <div className="flex rounded-md shadow-sm">
                        <span className="flex items-center justify-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 select-none rounded-l-md bg-gray-50">+82</span>
                        <input id="phone" type="tel" required className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md rounded-l-none shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                    </div>
                </div>
                <button className="w-full px-4 py-2 mt-5 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-sm w hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
                    프로필 저장
                </button>
            </div>
        </Layout>

    );
}


export default EditProfile;