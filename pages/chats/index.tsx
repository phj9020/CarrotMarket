import type { NextPage } from 'next';
import Link from 'next/link';
import HeadInfo from '../components/head';
import Layout from '../components/layout';

const Chats: NextPage = () => {
    return (
        <Layout title="채팅" hasTabBar>
            <HeadInfo title="채팅 | 캐럿마켓" keywordContent="Next.js, tailwind, Phj9020" descriptionContent="캐럿마켓 채팅" />
            <div className="pb-10 divide-y-[1px]">
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((_,i) => (
                    <Link href={`/chats/${i}`} key={i}>
                        <a className="flex items-center px-4 py-3 space-x-3 cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-slate-300" />
                            <div>
                                <p className="text-gray-700 ">박한진</p>
                                <p className="text-sm text-gray-500">내일 스벅에 2시에 만나요</p>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </Layout>
    )
}

export default Chats;