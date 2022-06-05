import type { NextPage } from 'next';
import Layout from '../components/layout';

const Chats: NextPage = () => {
    return (
        <Layout title="채팅" hasTabBar>
            <div className="pb-10 divide-y-[1px]">
                {[1,1,1,1,1].map((_,i) => (
                    <div key={i} className="flex items-center px-4 py-3 space-x-3 cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-slate-300" />
                    <div>
                        <p className="text-gray-700 ">박한진</p>
                        <p className="text-sm text-gray-500">내일 스벅에 2시에 만나요</p>
                    </div>
                </div>
                ))}
            </div>
        </Layout>
    )
}

export default Chats;