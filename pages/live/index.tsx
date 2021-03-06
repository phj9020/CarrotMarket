import type { NextPage } from 'next';
import Link from "next/link";
import Layout from '../components/layout';
import FloatingButton from './../components/floating-button';
import HeadInfo from './../components/head';

const Stream: NextPage = () => {
    return (
        <Layout title="라이브" hasTabBar>
            <HeadInfo title="라이브 | 캐럿마켓" keywordContent="Next.js, tailwind, Phj9020" descriptionContent="캐럿마켓 라이브" />
            <div className="pb-10 space-y-4 divide-y-[1px]">
                {[1, 2, 3, 4, 5].map((_, i) => (
                    <Link href={`/live/${i}`}  key={i}>
                        <a className="block px-4 pt-4">
                            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
                            <h3 className="mt-2 text-lg text-gray-800">Stream Stream Name</h3>
                        </a>
                    </Link>
                ))}
                <FloatingButton href="/live/create">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </FloatingButton>
            </div>
        </Layout>
    );
}


export default Stream;